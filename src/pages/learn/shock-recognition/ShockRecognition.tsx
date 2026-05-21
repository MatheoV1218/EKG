import EKGCanvas from "../../../components/EKGCanvas";
import type { RhythmType } from "../../../components/EKGCanvas";

import "./ShockRecognition.css";

const rhythm = "sinus-tach" as RhythmType;
const tags = [
  'Educational',
  'Telemetry',
  'Clinical Reasoning',
  'Advanced'
];
const recognitionFeatures = [
  'Shock means inadequate tissue perfusion',
  'Hypotension can be late; poor perfusion signs may appear earlier',
  'Septic shock often involves infection signs and vasodilation',
  'Cardiogenic shock involves pump failure and may include pulmonary edema',
  'Hypovolemic shock involves volume loss such as bleeding or dehydration',
  'Obstructive shock includes causes like tension pneumothorax or pulmonary embolism'
];
const clinicalPriorities = [
  'Assess mental status, skin, pulses, capillary refill, BP, HR, and urine output when available',
  'Support oxygenation and ventilation',
  'Identify likely shock category',
  'Escalate rapidly for hypotension and altered mentation',
  'Treat reversible causes within scope',
  'Prepare for fluids, vasopressors, or procedural intervention depending on cause'
];
const cautions = [
  'Do not wait for BP to crash before recognizing poor perfusion',
  'Do not give every shock patient the same treatment without considering cause',
  'Do not ignore respiratory causes of obstructive shock'
];
const clinicalPearls = [
  'Shock is a perfusion problem, not just a BP number',
  'Cool clammy skin often suggests vasoconstriction, while warm flushed skin can occur early in sepsis',
  'Tachycardia is often compensatory'
];
const flowSteps = [
  'Assess mental status, skin, pulses, capillary refill, BP, HR, and urine output when available',
  'Support oxygenation and ventilation',
  'Identify likely shock category',
  'Escalate rapidly for hypotension and altered mentation',
  'Treat reversible causes within scope',
  'Prepare for fluids, vasopressors, or procedural intervention depending on cause'
];

function ShockRecognition() {
  return (
    <section className="page shock-recognition-page">
      <div className="shock-recognition-hero">
        <div className="shock-recognition-copy glass-card">
          <span className="badge">Advanced Learning Module</span>
          <h1>Shock Recognition</h1>
          <p>Identify shock states by perfusion clues, vitals, likely cause, and clinical context.</p>
          <div className="shock-recognition-tags">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="shock-recognition-monitor glass-card">
          <div className="shock-recognition-monitor-header">
            <div>
              <span>Live Training Monitor</span>
              <h2>Shock Recognition</h2>
            </div>
            <strong className="shock-recognition-status">ACTIVE</strong>
          </div>

          <EKGCanvas rhythm={rhythm} heartRate={132} height={230} />

          <div className="shock-recognition-vitals">
            <div className="shock-recognition-vital"><span>HR</span><strong>132</strong></div>
            <div className="shock-recognition-vital"><span>SpO₂</span><strong>91%</strong></div>
            <div className="shock-recognition-vital"><span>BP</span><strong>78/44</strong></div>
            <div className="shock-recognition-vital"><span>RR</span><strong>30</strong></div>
          </div>
        </div>
      </div>

      <div className="shock-recognition-section">
        <div className="shock-recognition-heading">
          <h2>Recognition Features</h2>
          <div className="shock-recognition-line" />
        </div>

        <div className="shock-recognition-grid">
          {recognitionFeatures.map((feature) => (
            <article className="shock-recognition-card glass-card" key={feature}>
              <div className="shock-recognition-icon">✦</div>
              <p>{feature}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="shock-recognition-split">
        <div className="shock-recognition-panel glass-card">
          <h2>Clinical Priorities</h2>
          <div className="shock-recognition-list">
            {clinicalPriorities.map((item) => (
              <div className="shock-recognition-item" key={item}>
                <span>●</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="shock-recognition-panel shock-recognition-warning glass-card">
          <h2>Safety Cautions</h2>
          <div className="shock-recognition-list">
            {cautions.map((item) => (
              <div className="shock-recognition-item" key={item}>
                <span>!</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="shock-recognition-section">
        <div className="shock-recognition-heading">
          <h2>Action Pathway</h2>
          <div className="shock-recognition-line" />
        </div>

        <div className="shock-recognition-flow">
          {flowSteps.map((step, index) => (
            <div className="shock-recognition-step" key={step}>
              <strong>{index + 1}</strong>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="shock-recognition-section">
        <div className="shock-recognition-heading">
          <h2>Clinical Pearls</h2>
          <div className="shock-recognition-line" />
        </div>

        <div className="shock-recognition-grid">
          {clinicalPearls.map((pearl) => (
            <article className="shock-recognition-card glass-card" key={pearl}>
              <div className="shock-recognition-icon">◆</div>
              <p>{pearl}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="shock-recognition-quiz glass-card">
        <span className="badge">Quick Knowledge Check</span>
        <h2>Which finding best supports shock?</h2>
        <div className="shock-recognition-answers">
          <button className="correct">Altered mentation with weak pulses and hypotension</button>
          <button>Normal BP with no symptoms</button>
          <button>Resting HR 72 and warm skin</button>
          <button>SpO₂ 99% with no distress</button>
        </div>
        <div className="shock-recognition-explanation">
          <p>
            <strong>Best answer:</strong> Altered mentation with weak pulses and hypotension. This module is for
            education and simulation practice only. Always follow local protocol,
            instructor guidance, and licensed clinical direction in real care.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ShockRecognition;
