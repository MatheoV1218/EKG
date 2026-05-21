import { simulations } from "../data/simulations";
import "./Simulation.css";

function Simulation() {
  const preview = simulations[0];

  return (
    <section className="page simulation-page">
      <div className="sim-header">
        <span className="badge">Patient Simulation</span>
        <h1 className="section-title">
          Treat the patient. Watch the monitor. Learn from the outcome.
        </h1>
        <p className="section-subtitle">
          This is the visual shell for the future simulator. Later, the buttons
          will change vitals, rhythm, symptoms, and final outcomes.
        </p>
      </div>

      <div className="sim-layout">
        <div className="patient-monitor glass-card">
          <div className="monitor-header">
            <div>
              <span>Case 01</span>
              <h2>{preview.title}</h2>
            </div>
            <strong>{preview.status}</strong>
          </div>

          <div className="large-ekg">
            <div className="monitor-line"></div>
          </div>

          <div className="sim-vitals">
            <div>
              <span>HR</span>
              <strong>{preview.heartRate}</strong>
            </div>
            <div>
              <span>SpO₂</span>
              <strong>{preview.spo2}%</strong>
            </div>
            <div>
              <span>BP</span>
              <strong>{preview.bloodPressure}</strong>
            </div>
          </div>
        </div>

        <aside className="treatment-panel glass-card">
          <h2>Actions</h2>

          <button>Apply Oxygen</button>
          <button>Give Medication</button>
          <button>Prepare Defibrillation</button>
          <button>Reassess Patient</button>

          <div className="clinical-note">
            <strong>Clinical Note</strong>
            <p>
              Future feedback will explain why each action helped, failed, or
              made the patient worse.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Simulation;