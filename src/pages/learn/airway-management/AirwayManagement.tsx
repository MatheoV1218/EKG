import EKGCanvas from "../../../components/EKGCanvas";
import type { RhythmType } from "../../../components/EKGCanvas";

import "./AirwayManagement.css";

const rhythm = "brady" as RhythmType;
const tags = [
  'Educational',
  'Telemetry',
  'Clinical Reasoning',
  'Intermediate'
];
const recognitionFeatures = [
  'Gurgling suggests secretions that may require suctioning',
  'Snoring respirations can suggest upper airway obstruction',
  'OPA is used for unconscious patients without a gag reflex',
  'NPA can help maintain a nasal airway route but is avoided with suspected basilar skull/facial trauma',
  'Vomiting, secretions, and reduced consciousness increase aspiration risk',
  'Poor ventilation or inability to protect airway requires rapid escalation'
];
const clinicalPriorities = [
  'Open airway and assess breathing',
  'Suction visible or audible secretions',
  'Choose OPA/NPA only when indicated',
  'Support ventilation with BVM when breathing is inadequate',
  'Prepare advanced airway support if airway protection fails',
  'Continuously reassess oxygenation and ventilation'
];
const cautions = [
  'Do not insert an OPA in an awake patient with an intact gag reflex',
  'Do not use an NPA when serious facial/basilar skull trauma is suspected',
  'Do not ignore gurgling sounds'
];
const clinicalPearls = [
  'Airway comes before rhythm interpretation in many emergencies',
  'Suction is an intervention, not just a cleanup task',
  'Ventilation failure can quickly cause bradycardia and arrest'
];
const flowSteps = [
  'Open airway and assess breathing',
  'Suction visible or audible secretions',
  'Choose OPA/NPA only when indicated',
  'Support ventilation with BVM when breathing is inadequate',
  'Prepare advanced airway support if airway protection fails',
  'Continuously reassess oxygenation and ventilation'
];

function AirwayManagement() {
  return (
    <section className="page airway-management-page">
      <div className="airway-management-hero">
        <div className="airway-management-copy glass-card">
          <span className="badge">Intermediate Learning Module</span>
          <h1>Airway Management</h1>
          <p>Learn airway adjuncts, suctioning priorities, and signs that the airway is not protected.</p>
          <div className="airway-management-tags">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="airway-management-monitor glass-card">
          <div className="airway-management-monitor-header">
            <div>
              <span>Live Training Monitor</span>
              <h2>Airway Management</h2>
            </div>
            <strong className="airway-management-status">ACTIVE</strong>
          </div>

          <EKGCanvas rhythm={rhythm} heartRate={52} height={230} />

          <div className="airway-management-vitals">
            <div className="airway-management-vital"><span>HR</span><strong>52</strong></div>
            <div className="airway-management-vital"><span>SpO₂</span><strong>86%</strong></div>
            <div className="airway-management-vital"><span>BP</span><strong>100/66</strong></div>
            <div className="airway-management-vital"><span>RR</span><strong>8</strong></div>
          </div>
        </div>
      </div>

      <div className="airway-management-section">
        <div className="airway-management-heading">
          <h2>Recognition Features</h2>
          <div className="airway-management-line" />
        </div>

        <div className="airway-management-grid">
          {recognitionFeatures.map((feature) => (
            <article className="airway-management-card glass-card" key={feature}>
              <div className="airway-management-icon">✦</div>
              <p>{feature}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="airway-management-split">
        <div className="airway-management-panel glass-card">
          <h2>Clinical Priorities</h2>
          <div className="airway-management-list">
            {clinicalPriorities.map((item) => (
              <div className="airway-management-item" key={item}>
                <span>●</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="airway-management-panel airway-management-warning glass-card">
          <h2>Safety Cautions</h2>
          <div className="airway-management-list">
            {cautions.map((item) => (
              <div className="airway-management-item" key={item}>
                <span>!</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="airway-management-section">
        <div className="airway-management-heading">
          <h2>Action Pathway</h2>
          <div className="airway-management-line" />
        </div>

        <div className="airway-management-flow">
          {flowSteps.map((step, index) => (
            <div className="airway-management-step" key={step}>
              <strong>{index + 1}</strong>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="airway-management-section">
        <div className="airway-management-heading">
          <h2>Clinical Pearls</h2>
          <div className="airway-management-line" />
        </div>

        <div className="airway-management-grid">
          {clinicalPearls.map((pearl) => (
            <article className="airway-management-card glass-card" key={pearl}>
              <div className="airway-management-icon">◆</div>
              <p>{pearl}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="airway-management-quiz glass-card">
        <span className="badge">Quick Knowledge Check</span>
        <h2>Which finding most directly indicates suctioning?</h2>
        <div className="airway-management-answers">
          <button className="correct">Gurgling airway sounds with secretions</button>
          <button>Regular pulse at 80</button>
          <button>Warm dry skin</button>
          <button>Normal speech</button>
        </div>
        <div className="airway-management-explanation">
          <p>
            <strong>Best answer:</strong> Gurgling airway sounds with secretions. This module is for
            education and simulation practice only. Always follow local protocol,
            instructor guidance, and licensed clinical direction in real care.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AirwayManagement;
