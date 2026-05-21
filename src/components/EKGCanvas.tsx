import { useEffect, useRef } from "react";
import "./EKGCanvas.css";

export type RhythmType =
  | "sinus"
  | "sinus-tach"
  | "brady"
  | "afib"
  | "vtach"
  | "vfib"
  | "asystole"
  | "svt";

interface EKGCanvasProps {
  rhythm: RhythmType;
  heartRate?: number;
  height?: number;
  compact?: boolean;
}

function EKGCanvas({
  rhythm,
  heartRate = 90,
  height = 220,
  compact = false,
}: EKGCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const pointsRef = useRef<number[]>([]);
  const phaseRef = useRef(0);

  const afibNextBeatRef = useRef(0.5);
  const afibTimerRef = useRef(0);

  function getColor() {
    if (rhythm === "vtach" || rhythm === "vfib") {
      return "#ef4444";
    }

    if (rhythm === "afib") {
      return "#f59e0b";
    }

    if (rhythm === "brady") {
      return "#22c55e";
    }

    if (rhythm === "asystole") {
      return "#94a3b8";
    }

    return "#22d3ee";
  }

  function normalBeat(t: number, rate: number) {
    const period = 60 / rate;
    const x = (t % period) / period;

    let y = 0;

    y += 0.08 * Math.exp(-Math.pow((x - 0.16) / 0.035, 2));
    y += -0.16 * Math.exp(-Math.pow((x - 0.34) / 0.012, 2));
    y += 1.0 * Math.exp(-Math.pow((x - 0.36) / 0.012, 2));
    y += -0.35 * Math.exp(-Math.pow((x - 0.39) / 0.015, 2));
    y += 0.22 * Math.exp(-Math.pow((x - 0.62) / 0.07, 2));

    return y;
  }

  function vtachBeat(t: number, rate: number) {
    const period = 60 / rate;
    const x = (t % period) / period;

    let y = 0;

    y += 0.95 * Math.exp(-Math.pow((x - 0.28) / 0.06, 2));
    y += -0.85 * Math.exp(-Math.pow((x - 0.55) / 0.08, 2));
    y += 0.28 * Math.sin(x * Math.PI * 2);

    return y;
  }

  function vfibBeat(t: number) {
    return (
      0.55 * Math.sin(t * 24) +
      0.35 * Math.sin(t * 47) +
      0.22 * Math.sin(t * 91)
    );
  }

  function asystoleBeat(t: number) {
    return 0.025 * Math.sin(t * 20) + 0.015 * Math.sin(t * 53);
  }

  function afibBeat(t: number) {
    afibTimerRef.current += 1 / 60;

    let y =
      0.08 * Math.sin(t * 30) +
      0.05 * Math.sin(t * 55) +
      0.03 * Math.sin(t * 90);

    if (afibTimerRef.current > afibNextBeatRef.current) {
      afibTimerRef.current = 0;

      afibNextBeatRef.current = 0.38 + Math.random() * 0.55;

      phaseRef.current = 0;
    }

    phaseRef.current += 1 / 60;

    const x = phaseRef.current / 0.45;

    if (x < 1) {
      y += 0.9 * Math.exp(-Math.pow((x - 0.28) / 0.03, 2));

      y += -0.28 * Math.exp(-Math.pow((x - 0.34) / 0.035, 2));
    }

    return y;
  }

  function getSample(t: number) {
    if (rhythm === "asystole") {
      return asystoleBeat(t);
    }

    if (rhythm === "vfib") {
      return vfibBeat(t);
    }

    if (rhythm === "vtach") {
      return vtachBeat(t, heartRate);
    }

    if (rhythm === "afib") {
      return afibBeat(t);
    }

    if (rhythm === "svt") {
      return normalBeat(t, heartRate);
    }

    if (rhythm === "sinus-tach") {
      return normalBeat(t, heartRate);
    }

    if (rhythm === "brady") {
      return normalBeat(t, heartRate);
    }

    return normalBeat(t, heartRate);
  }

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const cvs = canvas;

    const context = canvas.getContext("2d");

    if (!context) return;

    const ctx = context;

    let animationFrame = 0;

    function resizeCanvas() {
      const rect = cvs.getBoundingClientRect();

      const dpr = window.devicePixelRatio || 1;

      cvs.width = rect.width * dpr;
      cvs.height = rect.height * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const maxPoints = Math.floor(rect.width);

      pointsRef.current = new Array(maxPoints).fill(0);
    }

    function drawGrid(width: number, heightPx: number) {
      ctx.strokeStyle = "rgba(37, 99, 235, 0.12)";
      ctx.lineWidth = 1;

      const gridSize = compact ? 16 : 24;

      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, heightPx);
        ctx.stroke();
      }

      for (let y = 0; y < heightPx; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    }

    function drawWave(width: number, heightPx: number) {
      const color = getColor();

      const mid = heightPx / 2;

      const amplitude =
        rhythm === "asystole"
          ? heightPx * 0.12
          : rhythm === "vfib"
            ? heightPx * 0.28
            : rhythm === "vtach"
              ? heightPx * 0.34
              : heightPx * 0.31;

      ctx.lineWidth = compact ? 2.4 : 3.4;

      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      ctx.shadowBlur = compact ? 10 : 18;
      ctx.shadowColor = color;

      ctx.strokeStyle = color;

      ctx.beginPath();

      pointsRef.current.forEach((point, index) => {
        const x = index;

        const y = mid - point * amplitude;

        if (index === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });

      ctx.stroke();

      ctx.shadowBlur = 0;
    }

    function render(time: number) {
      const rect = cvs.getBoundingClientRect();

      const width = rect.width;
      const heightPx = rect.height;

      ctx.clearRect(0, 0, width, heightPx);

      const bg = ctx.createLinearGradient(0, 0, 0, heightPx);

      bg.addColorStop(0, "rgba(2, 6, 23, 0.94)");
      bg.addColorStop(1, "rgba(2, 6, 23, 0.78)");

      ctx.fillStyle = bg;

      ctx.fillRect(0, 0, width, heightPx);

      drawGrid(width, heightPx);

      let samplesPerFrame = compact ? 1 : 2;

      if (rhythm === "vtach") {
        samplesPerFrame = compact ? 1.6 : 2.6;
      }

      if (rhythm === "svt") {
        samplesPerFrame = compact ? 1.5 : 2.4;
      }

      if (rhythm === "brady") {
        samplesPerFrame = compact ? 0.55 : 1.2;
      }

      if (rhythm === "asystole") {
        samplesPerFrame = compact ? 0.35 : 0.8;
      }

      for (let i = 0; i < Math.ceil(samplesPerFrame); i++) {
        const t = time / 1000 + i * 0.01;

        pointsRef.current.push(getSample(t));

        pointsRef.current.shift();
      }

      drawWave(width, heightPx);

      const scan = ctx.createLinearGradient(width - 90, 0, width, 0);

      scan.addColorStop(0, "rgba(34, 211, 238, 0)");
      scan.addColorStop(0.5, "rgba(34, 211, 238, 0.12)");
      scan.addColorStop(1, "rgba(34, 211, 238, 0)");

      ctx.fillStyle = scan;

      ctx.fillRect(width - 110, 0, 110, heightPx);

      animationFrame = requestAnimationFrame(render);
    }

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    animationFrame = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resizeCanvas);

      cancelAnimationFrame(animationFrame);
    };
  }, [rhythm, heartRate, compact]);

  return (
    <div
      className={`ekg-canvas-shell ${compact ? "compact" : ""}`}
      style={{ height }}
    >
      <canvas ref={canvasRef} className="ekg-canvas" />
    </div>
  );
}

export default EKGCanvas;
