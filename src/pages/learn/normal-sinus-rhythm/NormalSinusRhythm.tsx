import EKGCanvas from "../../../components/EKGCanvas";
import type { RhythmType } from "../../../components/EKGCanvas";

import "./NormalSinusRhythm.css";

const rhythm = "sinus" as RhythmType;
const tags = [
  'Educational',
  'Telemetry',
  'Clinical Reasoning',
  'Beginner'
];
const recognitionFeatures = [
  'Rate usually 60–100 BPM in adults',
  'One upright P wave before each QRS in lead II',
  'Regular atrial and ventricular rhythm',
  'PR interval stays consistent',
  'QRS is usually narrow unless a conduction delay exists',
  'Patient presentation should still be assessed, not just the strip'
];
const clinicalPriorities = [
  'Normal coordinated SA node firing',
  'Impulse travels through atria, AV node, His-Purkinje system',
  'P wave reflects atrial depolarization',
  'QRS reflects ventricular depolarization',
  'T wave reflects ventricular repolarization'
];
const cautions = [
  'Do not call a rhythm “normal” if the patient is unstable',
  'A normal-looking rhythm can still occur with hypoxia, shock, or respiratory failure',
  'Always compare monitor findings with vitals and symptoms'
];
const clinicalPearls = [
  'Normal sinus rhythm is your baseline pattern for comparison',
  'A regular rhythm does not automatically mean the patient is healthy',
  'The monitor supports assessment; it does not replace patient assessment'
];
const flowSteps = [
  'Normal coordinated SA node firing',
  'Impulse travels through atria, AV node, His-Purkinje system',
  'P wave reflects atrial depolarization',
  'QRS reflects ventricular depolarization',
  'T wave reflects ventricular repolarization'
];

function NormalSinusRhythm() {
  return (
    <section className="page normal-sinus-rhythm-page">
      <div className="normal-sinus-rhythm-hero">
        <div className="normal-sinus-rhythm-copy glass-card">
          <span className="badge">Beginner Learning Module</span>
          <h1>Normal Sinus Rhythm</h1>
          <p>Learn what normal cardiac conduction looks like before identifying dangerous rhythms.</p>
          <div className="normal-sinus-rhythm-tags">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="normal-sinus-rhythm-monitor glass-card">
          <div className="normal-sinus-rhythm-monitor-header">
            <div>
              <span>Live Training Monitor</span>
              <h2>Normal Sinus Rhythm</h2>
            </div>
            <strong className="normal-sinus-rhythm-status">ACTIVE</strong>
          </div>

          <EKGCanvas rhythm={rhythm} heartRate={82} height={230} />

          <div className="normal-sinus-rhythm-vitals">
            <div className="normal-sinus-rhythm-vital"><span>HR</span><strong>82</strong></div>
            <div className="normal-sinus-rhythm-vital"><span>SpO₂</span><strong>98%</strong></div>
            <div className="normal-sinus-rhythm-vital"><span>BP</span><strong>118/76</strong></div>
            <div className="normal-sinus-rhythm-vital"><span>RR</span><strong>16</strong></div>
          </div>
        </div>
      </div>

      <div className="normal-sinus-rhythm-section">
        <div className="normal-sinus-rhythm-heading">
          <h2>Recognition Features</h2>
          <div className="normal-sinus-rhythm-line" />
        </div>

        <div className="normal-sinus-rhythm-grid">
          {recognitionFeatures.map((feature) => (
            <article className="normal-sinus-rhythm-card glass-card" key={feature}>
              <div className="normal-sinus-rhythm-icon">✦</div>
              <p>{feature}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="normal-sinus-rhythm-split">
        <div className="normal-sinus-rhythm-panel glass-card">
          <h2>Clinical Priorities</h2>
          <div className="normal-sinus-rhythm-list">
            {clinicalPriorities.map((item) => (
              <div className="normal-sinus-rhythm-item" key={item}>
                <span>●</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="normal-sinus-rhythm-panel normal-sinus-rhythm-warning glass-card">
          <h2>Safety Cautions</h2>
          <div className="normal-sinus-rhythm-list">
            {cautions.map((item) => (
              <div className="normal-sinus-rhythm-item" key={item}>
                <span>!</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="normal-sinus-rhythm-section">
        <div className="normal-sinus-rhythm-heading">
          <h2>Action Pathway</h2>
          <div className="normal-sinus-rhythm-line" />
        </div>

        <div className="normal-sinus-rhythm-flow">
          {flowSteps.map((step, index) => (
            <div className="normal-sinus-rhythm-step" key={step}>
              <strong>{index + 1}</strong>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="normal-sinus-rhythm-section">
        <div className="normal-sinus-rhythm-heading">
          <h2>Clinical Pearls</h2>
          <div className="normal-sinus-rhythm-line" />
        </div>

        <div className="normal-sinus-rhythm-grid">
          {clinicalPearls.map((pearl) => (
            <article className="normal-sinus-rhythm-card glass-card" key={pearl}>
              <div className="normal-sinus-rhythm-icon">◆</div>
              <p>{pearl}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="normal-sinus-rhythm-quiz glass-card">
        <span className="badge">Quick Knowledge Check</span>
        <h2>Which feature best supports normal sinus rhythm?</h2>
        <div className="normal-sinus-rhythm-answers">
          <button className="correct">A P wave before every QRS with a regular rate</button>
          <button>No pulse with organized electrical activity</button>
          <button>Chaotic baseline with no organized QRS</button>
          <button>Wide rapid ventricular complexes</button>
        </div>
        <div className="normal-sinus-rhythm-explanation">
          <p>
            <strong>Best answer:</strong> A P wave before every QRS with a regular rate. This module is for
            education and simulation practice only. Always follow local protocol,
            instructor guidance, and licensed clinical direction in real care.
          </p>
        </div>
      </div>
    </section>
  );
}

export default NormalSinusRhythm;
