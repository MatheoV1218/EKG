import "./PlethMonitor.css";

interface PlethMonitorProps {
  spo2: number;
  pulseRate: number;
}

function PlethMonitor({ spo2, pulseRate }: PlethMonitorProps) {
  const bars = Array.from({ length: 28 });

  return (
    <div className="pleth-monitor">
      <div className="mini-monitor-header">
        <span>PLETH</span>
        <strong>{spo2}% • {pulseRate} BPM</strong>
      </div>
      <div className="mini-wave pleth-wave">
        {bars.map((_, i) => (
          <i key={i} style={{ "--i": i } as React.CSSProperties} />
        ))}
      </div>
    </div>
  );
}

export default PlethMonitor;
