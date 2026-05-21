import type { SimulationState } from "../../types/simulation";
import "./PatientStatusPanel.css";

interface PatientStatusPanelProps {
  state: SimulationState;
}

function PatientStatusPanel({ state }: PatientStatusPanelProps) {
  return (
    <section className="patient-status-sim glass-card">
      <div className="patient-status-head">
        <span>{state.patient.room}</span>
        <h2>{state.patient.name}</h2>
        <p>Age {state.patient.age} • {state.patient.gender}</p>
      </div>

      <div className="status-grid-mini">
        <div><span>Chief Complaint</span><strong>{state.patient.chiefComplaint}</strong></div>
        <div><span>Mental Status</span><strong>{state.mentalStatus}</strong></div>
        <div><span>Airway</span><strong>{state.airwayPatent ? "Patent" : "Compromised"}</strong></div>
        <div><span>Pulse</span><strong>{state.pulsePresent ? "Present" : "Absent"}</strong></div>
      </div>

      <div className="symptom-cloud">
        {state.patient.symptoms.map((symptom) => (
          <span key={symptom}>{symptom}</span>
        ))}
      </div>
    </section>
  );
}

export default PatientStatusPanel;
