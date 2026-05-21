import EKGCanvas from "./EKGCanvas";
import type { RhythmType } from "./EKGCanvas";
import "./LiveMonitor.css";

const monitorRhythms = [
  {
    rhythm: "sinus-tach" as RhythmType,
    hr: 148,
    spo2: "92%",
    bp: "96/58",
    rr: 28,
  },

  {
    rhythm: "brady" as RhythmType,
    hr: 38,
    spo2: "97%",
    bp: "110/72",
    rr: 12,
  },

  {
    rhythm: "afib" as RhythmType,
    hr: 124,
    spo2: "91%",
    bp: "102/66",
    rr: 24,
  },

  {
    rhythm: "vtach" as RhythmType,
    hr: 188,
    spo2: "84%",
    bp: "78/42",
    rr: 30,
  },

  {
    rhythm: "svt" as RhythmType,
    hr: 202,
    spo2: "94%",
    bp: "108/70",
    rr: 26,
  },

  {
    rhythm: "asystole" as RhythmType,
    hr: 0,
    spo2: "--",
    bp: "--/--",
    rr: 0,
  },
];

function LiveMonitor() {
  const selected =
    monitorRhythms[
      Math.floor(Math.random() * monitorRhythms.length)
    ];

  return (
    <section className="live-monitor glass-card">
      <div className="live-monitor-header">
        <div>
          <span>Live Patient Feed</span>
          <h2>Telemetry Monitor</h2>
        </div>

        <strong className="monitor-status">ACTIVE</strong>
      </div>

      <EKGCanvas
        rhythm={selected.rhythm}
        heartRate={selected.hr}
        height={240}
      />

      <div className="monitor-vitals">
        <div className="vital-card">
          <span>HR</span>
          <strong>{selected.hr}</strong>
        </div>

        <div className="vital-card">
          <span>SpO₂</span>
          <strong>{selected.spo2}</strong>
        </div>

        <div className="vital-card">
          <span>BP</span>
          <strong>{selected.bp}</strong>
        </div>

        <div className="vital-card">
          <span>RR</span>
          <strong>{selected.rr}</strong>
        </div>
      </div>
    </section>
  );
}

export default LiveMonitor;