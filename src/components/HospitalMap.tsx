import "./HospitalMap.css";

function HospitalMap() {
  const areas = [
    { name: "ER", status: "3 active cases", level: "critical" },
    { name: "ICU", status: "2 unstable patients", level: "critical" },
    { name: "Telemetry", status: "5 rhythms detected", level: "warning" },
    { name: "Respiratory", status: "4 oxygen calls", level: "warning" },
    { name: "Stepdown", status: "stable monitoring", level: "stable" },
  ];

  return (
    <section className="hospital-map-section">
      <div className="home-section-heading">
        <span className="badge">Hospital Map</span>
        <h2>Train across different clinical environments.</h2>
      </div>

      <div className="hospital-map glass-card">
        {areas.map((area) => (
          <div className={`hospital-zone ${area.level}`} key={area.name}>
            <h3>{area.name}</h3>
            <p>{area.status}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HospitalMap;