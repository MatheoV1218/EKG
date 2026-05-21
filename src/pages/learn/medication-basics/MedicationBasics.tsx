import EKGCanvas from "../../../components/EKGCanvas";
import type { RhythmType } from "../../../components/EKGCanvas";

import "./MedicationBasics.css";

const rhythm = "sinus-tach" as RhythmType;
const tags = [
  'Educational',
  'Telemetry',
  'Clinical Reasoning',
  'Intermediate'
];
const recognitionFeatures = [
  'Albuterol treats bronchospasm but can cause tremor and tachycardia',
  'Atropine is used for symptomatic bradycardia according to protocol',
  'Adenosine may be used for stable regular narrow-complex tachycardia',
  'Epinephrine is used in cardiac arrest and severe allergic emergencies per protocol',
  'Ipratropium can be used for bronchospasm but requires allergy/safety awareness',
  'Medication choice depends on rhythm, symptoms, vitals, and contraindications'
];
const clinicalPriorities = [
  'Identify the primary problem before choosing a medication',
  'Check rhythm and stability',
  'Consider allergies and contraindications',
  'Reassess vitals and symptoms after administration',
  'Know expected side effects',
  'Escalate if medication fails or patient worsens'
];
const cautions = [
  'Do not give atropine for tachycardia',
  'Do not give adenosine to unstable patients when cardioversion is indicated',
  'Do not ignore tachycardia after bronchodilator therapy'
];
const clinicalPearls = [
  'Medication questions are usually about indication and timing',
  'A technically useful drug can be wrong if it is not the priority',
  'Reassessment is part of medication safety'
];
const flowSteps = [
  'Identify the primary problem before choosing a medication',
  'Check rhythm and stability',
  'Consider allergies and contraindications',
  'Reassess vitals and symptoms after administration',
  'Know expected side effects',
  'Escalate if medication fails or patient worsens'
];

function MedicationBasics() {
  return (
    <section className="page medication-basics-page">
      <div className="medication-basics-hero">
        <div className="medication-basics-copy glass-card">
          <span className="badge">Intermediate Learning Module</span>
          <h1>Medication Basics</h1>
          <p>Review common emergency respiratory/cardiac medications and how to think about safety.</p>
          <div className="medication-basics-tags">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="medication-basics-monitor glass-card">
          <div className="medication-basics-monitor-header">
            <div>
              <span>Live Training Monitor</span>
              <h2>Medication Basics</h2>
            </div>
            <strong className="medication-basics-status">ACTIVE</strong>
          </div>

          <EKGCanvas rhythm={rhythm} heartRate={118} height={230} />

          <div className="medication-basics-vitals">
            <div className="medication-basics-vital"><span>HR</span><strong>118</strong></div>
            <div className="medication-basics-vital"><span>SpO₂</span><strong>93%</strong></div>
            <div className="medication-basics-vital"><span>BP</span><strong>132/84</strong></div>
            <div className="medication-basics-vital"><span>RR</span><strong>24</strong></div>
          </div>
        </div>
      </div>

      <div className="medication-basics-section">
        <div className="medication-basics-heading">
          <h2>Recognition Features</h2>
          <div className="medication-basics-line" />
        </div>

        <div className="medication-basics-grid">
          {recognitionFeatures.map((feature) => (
            <article className="medication-basics-card glass-card" key={feature}>
              <div className="medication-basics-icon">✦</div>
              <p>{feature}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="medication-basics-split">
        <div className="medication-basics-panel glass-card">
          <h2>Clinical Priorities</h2>
          <div className="medication-basics-list">
            {clinicalPriorities.map((item) => (
              <div className="medication-basics-item" key={item}>
                <span>●</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="medication-basics-panel medication-basics-warning glass-card">
          <h2>Safety Cautions</h2>
          <div className="medication-basics-list">
            {cautions.map((item) => (
              <div className="medication-basics-item" key={item}>
                <span>!</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="medication-basics-section">
        <div className="medication-basics-heading">
          <h2>Action Pathway</h2>
          <div className="medication-basics-line" />
        </div>

        <div className="medication-basics-flow">
          {flowSteps.map((step, index) => (
            <div className="medication-basics-step" key={step}>
              <strong>{index + 1}</strong>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="medication-basics-section">
        <div className="medication-basics-heading">
          <h2>Clinical Pearls</h2>
          <div className="medication-basics-line" />
        </div>

        <div className="medication-basics-grid">
          {clinicalPearls.map((pearl) => (
            <article className="medication-basics-card glass-card" key={pearl}>
              <div className="medication-basics-icon">◆</div>
              <p>{pearl}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="medication-basics-quiz glass-card">
        <span className="badge">Quick Knowledge Check</span>
        <h2>Which medication best fits symptomatic bradycardia?</h2>
        <div className="medication-basics-answers">
          <button className="correct">Atropine</button>
          <button>Albuterol</button>
          <button>Adenosine for VFib</button>
          <button>Oxygen as a medication substitute</button>
        </div>
        <div className="medication-basics-explanation">
          <p>
            <strong>Best answer:</strong> Atropine. This module is for
            education and simulation practice only. Always follow local protocol,
            instructor guidance, and licensed clinical direction in real care.
          </p>
        </div>
      </div>
    </section>
  );
}

export default MedicationBasics;
