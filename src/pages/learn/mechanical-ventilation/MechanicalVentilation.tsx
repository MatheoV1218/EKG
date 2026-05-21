import EKGCanvas from "../../../components/EKGCanvas";
import type { RhythmType } from "../../../components/EKGCanvas";

import "./MechanicalVentilation.css";

const rhythm = "sinus" as RhythmType;
const tags = [
  'Educational',
  'Telemetry',
  'Clinical Reasoning',
  'Advanced'
];
const recognitionFeatures = [
  'Tidal volume is the amount of air delivered with each breath',
  'FiO₂ is the oxygen concentration delivered',
  'PEEP helps keep alveoli open at end expiration',
  'High pressure alarms can suggest resistance, secretions, biting, bronchospasm, or decreased compliance',
  'Low pressure alarms can suggest disconnection or leak',
  'Ventilator settings must be interpreted with patient assessment and ABGs'
];
const clinicalPriorities = [
  'Assess the patient before the machine',
  'Check airway position, breath sounds, SpO₂, and chest rise',
  'Respond to alarms by identifying cause',
  'Suction when secretions are suspected',
  'Use BVM if ventilator failure or severe instability occurs',
  'Notify appropriate clinical team for ventilator adjustments'
];
const cautions = [
  'Do not silence alarms without assessment',
  'Do not change ventilator settings outside your scope/protocol',
  'Do not assume a normal SpO₂ means ventilation is adequate'
];
const clinicalPearls = [
  'Look at the patient first, not only the ventilator',
  'High pressure means the ventilator is pushing against resistance or stiffness',
  'Low pressure often means gas is escaping or disconnected'
];
const flowSteps = [
  'Assess the patient before the machine',
  'Check airway position, breath sounds, SpO₂, and chest rise',
  'Respond to alarms by identifying cause',
  'Suction when secretions are suspected',
  'Use BVM if ventilator failure or severe instability occurs',
  'Notify appropriate clinical team for ventilator adjustments'
];

function MechanicalVentilation() {
  return (
    <section className="page mechanical-ventilation-page">
      <div className="mechanical-ventilation-hero">
        <div className="mechanical-ventilation-copy glass-card">
          <span className="badge">Advanced Learning Module</span>
          <h1>Mechanical Ventilation</h1>
          <p>Understand basic ventilator settings, alarms, and assessment priorities for mechanically ventilated patients.</p>
          <div className="mechanical-ventilation-tags">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="mechanical-ventilation-monitor glass-card">
          <div className="mechanical-ventilation-monitor-header">
            <div>
              <span>Live Training Monitor</span>
              <h2>Mechanical Ventilation</h2>
            </div>
            <strong className="mechanical-ventilation-status">ACTIVE</strong>
          </div>

          <EKGCanvas rhythm={rhythm} heartRate={96} height={230} />

          <div className="mechanical-ventilation-vitals">
            <div className="mechanical-ventilation-vital"><span>HR</span><strong>96</strong></div>
            <div className="mechanical-ventilation-vital"><span>SpO₂</span><strong>97%</strong></div>
            <div className="mechanical-ventilation-vital"><span>BP</span><strong>118/72</strong></div>
            <div className="mechanical-ventilation-vital"><span>RR</span><strong>18</strong></div>
          </div>
        </div>
      </div>

      <div className="mechanical-ventilation-section">
        <div className="mechanical-ventilation-heading">
          <h2>Recognition Features</h2>
          <div className="mechanical-ventilation-line" />
        </div>

        <div className="mechanical-ventilation-grid">
          {recognitionFeatures.map((feature) => (
            <article className="mechanical-ventilation-card glass-card" key={feature}>
              <div className="mechanical-ventilation-icon">✦</div>
              <p>{feature}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mechanical-ventilation-split">
        <div className="mechanical-ventilation-panel glass-card">
          <h2>Clinical Priorities</h2>
          <div className="mechanical-ventilation-list">
            {clinicalPriorities.map((item) => (
              <div className="mechanical-ventilation-item" key={item}>
                <span>●</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mechanical-ventilation-panel mechanical-ventilation-warning glass-card">
          <h2>Safety Cautions</h2>
          <div className="mechanical-ventilation-list">
            {cautions.map((item) => (
              <div className="mechanical-ventilation-item" key={item}>
                <span>!</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mechanical-ventilation-section">
        <div className="mechanical-ventilation-heading">
          <h2>Action Pathway</h2>
          <div className="mechanical-ventilation-line" />
        </div>

        <div className="mechanical-ventilation-flow">
          {flowSteps.map((step, index) => (
            <div className="mechanical-ventilation-step" key={step}>
              <strong>{index + 1}</strong>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mechanical-ventilation-section">
        <div className="mechanical-ventilation-heading">
          <h2>Clinical Pearls</h2>
          <div className="mechanical-ventilation-line" />
        </div>

        <div className="mechanical-ventilation-grid">
          {clinicalPearls.map((pearl) => (
            <article className="mechanical-ventilation-card glass-card" key={pearl}>
              <div className="mechanical-ventilation-icon">◆</div>
              <p>{pearl}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mechanical-ventilation-quiz glass-card">
        <span className="badge">Quick Knowledge Check</span>
        <h2>A sudden low-pressure alarm most likely suggests what?</h2>
        <div className="mechanical-ventilation-answers">
          <button className="correct">Disconnection or leak</button>
          <button>Improved lung compliance only</button>
          <button>Hyperkalemia</button>
          <button>Normal sinus rhythm</button>
        </div>
        <div className="mechanical-ventilation-explanation">
          <p>
            <strong>Best answer:</strong> Disconnection or leak. This module is for
            education and simulation practice only. Always follow local protocol,
            instructor guidance, and licensed clinical direction in real care.
          </p>
        </div>
      </div>
    </section>
  );
}

export default MechanicalVentilation;
