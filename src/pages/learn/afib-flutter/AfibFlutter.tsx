import EKGCanvas from "../../../components/EKGCanvas";
import type { RhythmType } from "../../../components/EKGCanvas";

import "./AfibFlutter.css";

const rhythm = "afib" as RhythmType;
const tags = [
  'Educational',
  'Telemetry',
  'Clinical Reasoning',
  'Intermediate'
];
const recognitionFeatures = [
  'Atrial fibrillation is often irregularly irregular',
  'P waves are not clearly organized in AFib',
  'Rapid ventricular response can cause palpitations, dyspnea, chest discomfort, or hypotension',
  'Atrial flutter often has sawtooth flutter waves',
  'Flutter may conduct in patterns such as 2:1, producing rates near 150 BPM',
  'Both rhythms can increase stroke risk and need provider-directed management'
];
const clinicalPriorities = [
  'Assess stability and perfusion',
  'Identify irregular vs regular atrial activity',
  'Control oxygenation and symptoms',
  'Recognize RVR when ventricular rate is rapid',
  'Escalate unstable patients quickly',
  'Understand anticoagulation is a provider-managed long-term issue'
];
const cautions = [
  'Do not assume every irregular rhythm is benign',
  'Do not focus only on rate while ignoring hypotension or chest pain',
  'Do not confuse flutter with SVT without looking for atrial activity'
];
const clinicalPearls = [
  'AFib is commonly described as irregularly irregular',
  'Flutter often looks organized but fast',
  'Rate control, rhythm control, and anticoagulation decisions depend on patient-specific factors'
];
const flowSteps = [
  'Assess stability and perfusion',
  'Identify irregular vs regular atrial activity',
  'Control oxygenation and symptoms',
  'Recognize RVR when ventricular rate is rapid',
  'Escalate unstable patients quickly',
  'Understand anticoagulation is a provider-managed long-term issue'
];

function AfibFlutter() {
  return (
    <section className="page afib-flutter-page">
      <div className="afib-flutter-hero">
        <div className="afib-flutter-copy glass-card">
          <span className="badge">Intermediate Learning Module</span>
          <h1>Atrial Fibrillation & Flutter</h1>
          <p>Compare irregular atrial fibrillation with organized atrial flutter patterns.</p>
          <div className="afib-flutter-tags">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="afib-flutter-monitor glass-card">
          <div className="afib-flutter-monitor-header">
            <div>
              <span>Live Training Monitor</span>
              <h2>Atrial Fibrillation & Flutter</h2>
            </div>
            <strong className="afib-flutter-status">ACTIVE</strong>
          </div>

          <EKGCanvas rhythm={rhythm} heartRate={136} height={230} />

          <div className="afib-flutter-vitals">
            <div className="afib-flutter-vital"><span>HR</span><strong>136</strong></div>
            <div className="afib-flutter-vital"><span>SpO₂</span><strong>95%</strong></div>
            <div className="afib-flutter-vital"><span>BP</span><strong>126/82</strong></div>
            <div className="afib-flutter-vital"><span>RR</span><strong>22</strong></div>
          </div>
        </div>
      </div>

      <div className="afib-flutter-section">
        <div className="afib-flutter-heading">
          <h2>Recognition Features</h2>
          <div className="afib-flutter-line" />
        </div>

        <div className="afib-flutter-grid">
          {recognitionFeatures.map((feature) => (
            <article className="afib-flutter-card glass-card" key={feature}>
              <div className="afib-flutter-icon">✦</div>
              <p>{feature}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="afib-flutter-split">
        <div className="afib-flutter-panel glass-card">
          <h2>Clinical Priorities</h2>
          <div className="afib-flutter-list">
            {clinicalPriorities.map((item) => (
              <div className="afib-flutter-item" key={item}>
                <span>●</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="afib-flutter-panel afib-flutter-warning glass-card">
          <h2>Safety Cautions</h2>
          <div className="afib-flutter-list">
            {cautions.map((item) => (
              <div className="afib-flutter-item" key={item}>
                <span>!</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="afib-flutter-section">
        <div className="afib-flutter-heading">
          <h2>Action Pathway</h2>
          <div className="afib-flutter-line" />
        </div>

        <div className="afib-flutter-flow">
          {flowSteps.map((step, index) => (
            <div className="afib-flutter-step" key={step}>
              <strong>{index + 1}</strong>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="afib-flutter-section">
        <div className="afib-flutter-heading">
          <h2>Clinical Pearls</h2>
          <div className="afib-flutter-line" />
        </div>

        <div className="afib-flutter-grid">
          {clinicalPearls.map((pearl) => (
            <article className="afib-flutter-card glass-card" key={pearl}>
              <div className="afib-flutter-icon">◆</div>
              <p>{pearl}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="afib-flutter-quiz glass-card">
        <span className="badge">Quick Knowledge Check</span>
        <h2>Which monitor description best fits atrial fibrillation?</h2>
        <div className="afib-flutter-answers">
          <button className="correct">Irregularly irregular rhythm with no consistent P waves</button>
          <button>Flatline with no QRS complexes</button>
          <button>Regular P-QRS-T at 72 BPM</button>
          <button>Sawtooth ventricular tachycardia</button>
        </div>
        <div className="afib-flutter-explanation">
          <p>
            <strong>Best answer:</strong> Irregularly irregular rhythm with no consistent P waves. This module is for
            education and simulation practice only. Always follow local protocol,
            instructor guidance, and licensed clinical direction in real care.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AfibFlutter;
