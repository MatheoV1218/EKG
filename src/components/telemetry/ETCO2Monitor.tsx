import "./ETCO2Monitor.css";

interface ETCO2MonitorProps {
  etco2: number;
  respiratoryRate: number;
}

function ETCO2Monitor({ etco2, respiratoryRate }: ETCO2MonitorProps) {
  const bars = Array.from({ length: 28 });

  return (
    <div className="etco2-monitor">
      <div className="mini-monitor-header">
        <span>ETCO₂</span>
        <strong>{etco2} • RR {respiratoryRate}</strong>
      </div>
      <div className="mini-wave etco2-wave">
        {bars.map((_, i) => (
          <i key={i} style={{ "--i": i } as React.CSSProperties} />
        ))}
      </div>
    </div>
  );
}

export default ETCO2Monitor;
