import EKGCanvas from "../../../components/EKGCanvas";
import type { RhythmType } from "../../../components/EKGCanvas";

import "./Tachycardia.css";

const rhythm = "svt" as RhythmType;
const tags = [
  'Educational',
  'Telemetry',
  'Clinical Reasoning',
  'Intermediate'
];
const recognitionFeatures = [
  'Adult tachycardia is usually HR greater than 100 BPM',
  'Very rapid narrow-complex rhythms may represent SVT',
  'Unstable signs include hypotension, shock, altered mental status, ischemic chest discomfort, or acute heart failure',
  'Stable regular narrow-complex tachycardia may respond to vagal maneuvers or adenosine per protocol',
  'Unstable tachycardia with a pulse generally prioritizes synchronized cardioversion',
  'Sinus tachycardia often reflects an underlying problem such as fever, pain, hypoxia, dehydration, or shock'
];
const clinicalPriorities = [
  'Assess stability first',
  'Check pulse, BP, mental status, oxygenation, and chest discomfort',
  'Support airway/breathing/circulation',
  'Identify narrow vs wide and regular vs irregular',
  'Treat unstable tachycardia urgently',
  'Look for underlying causes if sinus tachycardia is suspected'
];
const cautions = [
  'Do not give adenosine just because the rate is fast',
  'Do not cardiovert a stable compensatory sinus tachycardia without evaluating cause',
  'Irregular wide-complex tachycardia needs expert-level caution'
];
const clinicalPearls = [
  'Tachycardia is a sign, not always the primary problem',
  'Instability changes the answer from medication consideration to electrical therapy',
  'The correct intervention depends on rhythm pattern plus patient condition'
];
const flowSteps = [
  'Assess stability first',
  'Check pulse, BP, mental status, oxygenation, and chest discomfort',
  'Support airway/breathing/circulation',
  'Identify narrow vs wide and regular vs irregular',
  'Treat unstable tachycardia urgently',
  'Look for underlying causes if sinus tachycardia is suspected'
];

function Tachycardia() {
  return (
    <section className="page tachycardia-page">
      <div className="tachycardia-hero">
        <div className="tachycardia-copy glass-card">
          <span className="badge">Intermediate Learning Module</span>
          <h1>Tachycardia Recognition</h1>
          <p>Separate compensatory tachycardia from dangerous tachyarrhythmias needing urgent care.</p>
          <div className="tachycardia-tags">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="tachycardia-monitor glass-card">
          <div className="tachycardia-monitor-header">
            <div>
              <span>Live Training Monitor</span>
              <h2>Tachycardia Recognition</h2>
            </div>
            <strong className="tachycardia-status">ACTIVE</strong>
          </div>

          <EKGCanvas rhythm={rhythm} heartRate={188} height={230} />

          <div className="tachycardia-vitals">
            <div className="tachycardia-vital"><span>HR</span><strong>188</strong></div>
            <div className="tachycardia-vital"><span>SpO₂</span><strong>92%</strong></div>
            <div className="tachycardia-vital"><span>BP</span><strong>90/56</strong></div>
            <div className="tachycardia-vital"><span>RR</span><strong>28</strong></div>
          </div>
        </div>
      </div>

      <div className="tachycardia-section">
        <div className="tachycardia-heading">
          <h2>Recognition Features</h2>
          <div className="tachycardia-line" />
        </div>

        <div className="tachycardia-grid">
          {recognitionFeatures.map((feature) => (
            <article className="tachycardia-card glass-card" key={feature}>
              <div className="tachycardia-icon">✦</div>
              <p>{feature}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="tachycardia-split">
        <div className="tachycardia-panel glass-card">
          <h2>Clinical Priorities</h2>
          <div className="tachycardia-list">
            {clinicalPriorities.map((item) => (
              <div className="tachycardia-item" key={item}>
                <span>●</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="tachycardia-panel tachycardia-warning glass-card">
          <h2>Safety Cautions</h2>
          <div className="tachycardia-list">
            {cautions.map((item) => (
              <div className="tachycardia-item" key={item}>
                <span>!</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="tachycardia-section">
        <div className="tachycardia-heading">
          <h2>Action Pathway</h2>
          <div className="tachycardia-line" />
        </div>

        <div className="tachycardia-flow">
          {flowSteps.map((step, index) => (
            <div className="tachycardia-step" key={step}>
              <strong>{index + 1}</strong>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="tachycardia-section">
        <div className="tachycardia-heading">
          <h2>Clinical Pearls</h2>
          <div className="tachycardia-line" />
        </div>

        <div className="tachycardia-grid">
          {clinicalPearls.map((pearl) => (
            <article className="tachycardia-card glass-card" key={pearl}>
              <div className="tachycardia-icon">◆</div>
              <p>{pearl}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="tachycardia-quiz glass-card">
        <span className="badge">Quick Knowledge Check</span>
        <h2>What is the priority in unstable tachycardia with a pulse?</h2>
        <div className="tachycardia-answers">
          <button className="correct">Synchronized cardioversion</button>
          <button>Routine discharge</button>
          <button>Ignore oxygen status</button>
          <button>Only monitor for several hours</button>
        </div>
        <div className="tachycardia-explanation">
          <p>
            <strong>Best answer:</strong> Synchronized cardioversion. This module is for
            education and simulation practice only. Always follow local protocol,
            instructor guidance, and licensed clinical direction in real care.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Tachycardia;
