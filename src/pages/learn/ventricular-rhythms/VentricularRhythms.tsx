import EKGCanvas from "../../../components/EKGCanvas";
import type { RhythmType } from "../../../components/EKGCanvas";

import "./VentricularRhythms.css";

const rhythm = "vtach" as RhythmType;
const tags = [
  'Educational',
  'Telemetry',
  'Clinical Reasoning',
  'Advanced'
];
const recognitionFeatures = [
  'Ventricular tachycardia is usually wide-complex and fast',
  'Pulseless VT and VF are shockable cardiac arrest rhythms',
  'VF has chaotic electrical activity with no effective cardiac output',
  'Torsades is polymorphic VT associated with a twisting appearance and prolonged QT risk',
  'A pulse check is critical when VT is seen',
  'Unstable VT with a pulse requires urgent synchronized cardioversion, while pulseless VT requires defibrillation and CPR'
];
const clinicalPriorities = [
  'Check responsiveness and pulse immediately',
  'Start CPR if pulseless',
  'Defibrillate shockable pulseless rhythms',
  'Use synchronized cardioversion for unstable VT with a pulse',
  'Correct reversible causes such as hypoxia or electrolytes',
  'Prepare for advanced cardiac life support'
];
const cautions = [
  'Do not delay CPR for prolonged rhythm interpretation',
  'Do not confuse pulsed VT and pulseless VT pathways',
  'Do not use synchronized cardioversion for VF'
];
const clinicalPearls = [
  'Pulse status changes the algorithm',
  'VF and pulseless VT are shockable arrest rhythms',
  'Wide and fast should always make you think critically about perfusion'
];
const flowSteps = [
  'Check responsiveness and pulse immediately',
  'Start CPR if pulseless',
  'Defibrillate shockable pulseless rhythms',
  'Use synchronized cardioversion for unstable VT with a pulse',
  'Correct reversible causes such as hypoxia or electrolytes',
  'Prepare for advanced cardiac life support'
];

function VentricularRhythms() {
  return (
    <section className="page ventricular-rhythms-page">
      <div className="ventricular-rhythms-hero">
        <div className="ventricular-rhythms-copy glass-card">
          <span className="badge">Advanced Learning Module</span>
          <h1>Ventricular Rhythms</h1>
          <p>Recognize ventricular rhythms that can quickly become fatal without rapid intervention.</p>
          <div className="ventricular-rhythms-tags">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="ventricular-rhythms-monitor glass-card">
          <div className="ventricular-rhythms-monitor-header">
            <div>
              <span>Live Training Monitor</span>
              <h2>Ventricular Rhythms</h2>
            </div>
            <strong className="ventricular-rhythms-status">ACTIVE</strong>
          </div>

          <EKGCanvas rhythm={rhythm} heartRate={194} height={230} />

          <div className="ventricular-rhythms-vitals">
            <div className="ventricular-rhythms-vital"><span>HR</span><strong>194</strong></div>
            <div className="ventricular-rhythms-vital"><span>SpO₂</span><strong>84%</strong></div>
            <div className="ventricular-rhythms-vital"><span>BP</span><strong>76/42</strong></div>
            <div className="ventricular-rhythms-vital"><span>RR</span><strong>30</strong></div>
          </div>
        </div>
      </div>

      <div className="ventricular-rhythms-section">
        <div className="ventricular-rhythms-heading">
          <h2>Recognition Features</h2>
          <div className="ventricular-rhythms-line" />
        </div>

        <div className="ventricular-rhythms-grid">
          {recognitionFeatures.map((feature) => (
            <article className="ventricular-rhythms-card glass-card" key={feature}>
              <div className="ventricular-rhythms-icon">✦</div>
              <p>{feature}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="ventricular-rhythms-split">
        <div className="ventricular-rhythms-panel glass-card">
          <h2>Clinical Priorities</h2>
          <div className="ventricular-rhythms-list">
            {clinicalPriorities.map((item) => (
              <div className="ventricular-rhythms-item" key={item}>
                <span>●</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="ventricular-rhythms-panel ventricular-rhythms-warning glass-card">
          <h2>Safety Cautions</h2>
          <div className="ventricular-rhythms-list">
            {cautions.map((item) => (
              <div className="ventricular-rhythms-item" key={item}>
                <span>!</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="ventricular-rhythms-section">
        <div className="ventricular-rhythms-heading">
          <h2>Action Pathway</h2>
          <div className="ventricular-rhythms-line" />
        </div>

        <div className="ventricular-rhythms-flow">
          {flowSteps.map((step, index) => (
            <div className="ventricular-rhythms-step" key={step}>
              <strong>{index + 1}</strong>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="ventricular-rhythms-section">
        <div className="ventricular-rhythms-heading">
          <h2>Clinical Pearls</h2>
          <div className="ventricular-rhythms-line" />
        </div>

        <div className="ventricular-rhythms-grid">
          {clinicalPearls.map((pearl) => (
            <article className="ventricular-rhythms-card glass-card" key={pearl}>
              <div className="ventricular-rhythms-icon">◆</div>
              <p>{pearl}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="ventricular-rhythms-quiz glass-card">
        <span className="badge">Quick Knowledge Check</span>
        <h2>Which rhythm is shockable during cardiac arrest?</h2>
        <div className="ventricular-rhythms-answers">
          <button className="correct">Ventricular fibrillation</button>
          <button>Asystole</button>
          <button>Normal sinus rhythm</button>
          <button>Stable sinus bradycardia</button>
        </div>
        <div className="ventricular-rhythms-explanation">
          <p>
            <strong>Best answer:</strong> Ventricular fibrillation. This module is for
            education and simulation practice only. Always follow local protocol,
            instructor guidance, and licensed clinical direction in real care.
          </p>
        </div>
      </div>
    </section>
  );
}

export default VentricularRhythms;
