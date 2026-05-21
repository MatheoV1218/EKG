import "./TelemetryGrid.css";

interface TelemetryGridProps {
  rhythm: string;

  heartRate: number;

  spo2: number;

  bloodPressure: string;

  respiratoryRate: number;

  etco2: number;

  status: "stable" | "watch" | "critical" | "arrest";

  alarms: string[];
}

function TelemetryGrid({
  rhythm,
  heartRate,
  spo2,
  bloodPressure,
  respiratoryRate,
  etco2,
  status,
  alarms = [],
}: TelemetryGridProps) {
  return (
    <div className={`telemetry-grid ${status}`}>
      <div className="telemetry-card">
        <span>Rhythm</span>
        <strong>{rhythm}</strong>
      </div>

      <div className="telemetry-card">
        <span>HR</span>
        <strong>{heartRate}</strong>
      </div>

      <div className="telemetry-card">
        <span>SpO2</span>
        <strong>{spo2}%</strong>
      </div>

      <div className="telemetry-card">
        <span>BP</span>
        <strong>{bloodPressure}</strong>
      </div>

      <div className="telemetry-card">
        <span>RR</span>
        <strong>{respiratoryRate}</strong>
      </div>

      <div className="telemetry-card">
        <span>ETCO2</span>
        <strong>{etco2}</strong>
      </div>

      {alarms.length > 0 && (
        <div className="telemetry-alarms">
          {alarms.map((alarm) => (
            <div
              key={alarm}
              className="telemetry-alarm"
            >
              {alarm}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TelemetryGrid;