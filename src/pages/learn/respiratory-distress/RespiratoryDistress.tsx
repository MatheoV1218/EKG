import EKGCanvas from "../../../components/EKGCanvas";
import type { RhythmType } from "../../../components/EKGCanvas";

import "./RespiratoryDistress.css";

const rhythm = "sinus-tach" as RhythmType;
const tags = [
  'Educational',
  'Telemetry',
  'Clinical Reasoning',
  'Intermediate'
];
const recognitionFeatures = [
  'Accessory muscle use indicates increased work of breathing',
  'Tripod positioning suggests significant distress',
  'Cyanosis is a late and dangerous sign of hypoxemia',
  'Fatigue, decreasing RR, or altered mental status may signal impending failure',
  'Inability to speak full sentences is concerning',
  'Tachycardia and anxiety may appear early before deterioration'
];
const clinicalPriorities = [
  'Assess airway, breathing, circulation, and mental status',
  'Apply appropriate oxygen support',
  'Position patient to ease breathing when possible',
  'Listen for wheeze, stridor, crackles, or diminished sounds',
  'Escalate to ventilatory support if fatigue or poor ventilation appears',
  'Prepare for rapid deterioration'
];
const cautions = [
  'Do not wait for cyanosis before acting',
  'Do not treat anxiety as the only cause until hypoxia is assessed',
  'Do not assume high respiratory rate means adequate ventilation'
];
const clinicalPearls = [
  'The tired patient can be worse than the loud patient',
  'Altered mental status in respiratory distress is a red flag',
  'Work of breathing trends are as important as a single SpO₂ value'
];
const flowSteps = [
  'Assess airway, breathing, circulation, and mental status',
  'Apply appropriate oxygen support',
  'Position patient to ease breathing when possible',
  'Listen for wheeze, stridor, crackles, or diminished sounds',
  'Escalate to ventilatory support if fatigue or poor ventilation appears',
  'Prepare for rapid deterioration'
];

function RespiratoryDistress() {
  return (
    <section className="page respiratory-distress-page">
      <div className="respiratory-distress-hero">
        <div className="respiratory-distress-copy glass-card">
          <span className="badge">Intermediate Learning Module</span>
          <h1>Respiratory Distress</h1>
          <p>Recognize when increased work of breathing is progressing toward respiratory failure.</p>
          <div className="respiratory-distress-tags">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="respiratory-distress-monitor glass-card">
          <div className="respiratory-distress-monitor-header">
            <div>
              <span>Live Training Monitor</span>
              <h2>Respiratory Distress</h2>
            </div>
            <strong className="respiratory-distress-status">ACTIVE</strong>
          </div>

          <EKGCanvas rhythm={rhythm} heartRate={128} height={230} />

          <div className="respiratory-distress-vitals">
            <div className="respiratory-distress-vital"><span>HR</span><strong>128</strong></div>
            <div className="respiratory-distress-vital"><span>SpO₂</span><strong>86%</strong></div>
            <div className="respiratory-distress-vital"><span>BP</span><strong>146/90</strong></div>
            <div className="respiratory-distress-vital"><span>RR</span><strong>34</strong></div>
          </div>
        </div>
      </div>

      <div className="respiratory-distress-section">
        <div className="respiratory-distress-heading">
          <h2>Recognition Features</h2>
          <div className="respiratory-distress-line" />
        </div>

        <div className="respiratory-distress-grid">
          {recognitionFeatures.map((feature) => (
            <article className="respiratory-distress-card glass-card" key={feature}>
              <div className="respiratory-distress-icon">✦</div>
              <p>{feature}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="respiratory-distress-split">
        <div className="respiratory-distress-panel glass-card">
          <h2>Clinical Priorities</h2>
          <div className="respiratory-distress-list">
            {clinicalPriorities.map((item) => (
              <div className="respiratory-distress-item" key={item}>
                <span>●</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="respiratory-distress-panel respiratory-distress-warning glass-card">
          <h2>Safety Cautions</h2>
          <div className="respiratory-distress-list">
            {cautions.map((item) => (
              <div className="respiratory-distress-item" key={item}>
                <span>!</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="respiratory-distress-section">
        <div className="respiratory-distress-heading">
          <h2>Action Pathway</h2>
          <div className="respiratory-distress-line" />
        </div>

        <div className="respiratory-distress-flow">
          {flowSteps.map((step, index) => (
            <div className="respiratory-distress-step" key={step}>
              <strong>{index + 1}</strong>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="respiratory-distress-section">
        <div className="respiratory-distress-heading">
          <h2>Clinical Pearls</h2>
          <div className="respiratory-distress-line" />
        </div>

        <div className="respiratory-distress-grid">
          {clinicalPearls.map((pearl) => (
            <article className="respiratory-distress-card glass-card" key={pearl}>
              <div className="respiratory-distress-icon">◆</div>
              <p>{pearl}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="respiratory-distress-quiz glass-card">
        <span className="badge">Quick Knowledge Check</span>
        <h2>Which sign suggests impending respiratory failure?</h2>
        <div className="respiratory-distress-answers">
          <button className="correct">Fatigue with decreasing mental status</button>
          <button>Speaking full sentences comfortably</button>
          <button>SpO₂ 98% on room air</button>
          <button>Normal respiratory effort</button>
        </div>
        <div className="respiratory-distress-explanation">
          <p>
            <strong>Best answer:</strong> Fatigue with decreasing mental status. This module is for
            education and simulation practice only. Always follow local protocol,
            instructor guidance, and licensed clinical direction in real care.
          </p>
        </div>
      </div>
    </section>
  );
}

export default RespiratoryDistress;
