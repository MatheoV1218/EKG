import EKGCanvas from "../../../components/EKGCanvas";
import type { RhythmType } from "../../../components/EKGCanvas";

import "./CardiacArrest.css";

const rhythm = "vfib" as RhythmType;
const tags = [
  'Educational',
  'Telemetry',
  'Clinical Reasoning',
  'Advanced'
];
const recognitionFeatures = [
  'Cardiac arrest is unresponsive with no normal breathing and no pulse',
  'High-quality CPR is always central',
  'VF and pulseless VT are shockable rhythms',
  'Asystole and PEA are non-shockable rhythms',
  'Epinephrine is used in arrest algorithms according to protocol',
  'Interruptions in compressions should be minimized'
];
const clinicalPriorities = [
  'Confirm unresponsiveness and pulse status',
  'Activate emergency response/code team',
  'Start high-quality CPR',
  'Attach defibrillator/monitor quickly',
  'Defibrillate VF/pulseless VT',
  'Give epinephrine and search reversible causes per algorithm'
];
const cautions = [
  'Do not shock asystole or PEA',
  'Do not delay CPR while waiting for equipment',
  'Avoid excessive ventilation during CPR'
];
const clinicalPearls = [
  'CPR quality matters as much as medication timing',
  'Shockable vs non-shockable drives early decisions',
  'Treat reversible causes while running the algorithm'
];
const flowSteps = [
  'Confirm unresponsiveness and pulse status',
  'Activate emergency response/code team',
  'Start high-quality CPR',
  'Attach defibrillator/monitor quickly',
  'Defibrillate VF/pulseless VT',
  'Give epinephrine and search reversible causes per algorithm'
];

function CardiacArrest() {
  return (
    <section className="page cardiac-arrest-page">
      <div className="cardiac-arrest-hero">
        <div className="cardiac-arrest-copy glass-card">
          <span className="badge">Advanced Learning Module</span>
          <h1>Cardiac Arrest Algorithms</h1>
          <p>Understand the difference between shockable and non-shockable arrest pathways.</p>
          <div className="cardiac-arrest-tags">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="cardiac-arrest-monitor glass-card">
          <div className="cardiac-arrest-monitor-header">
            <div>
              <span>Live Training Monitor</span>
              <h2>Cardiac Arrest Algorithms</h2>
            </div>
            <strong className="cardiac-arrest-status">ACTIVE</strong>
          </div>

          <EKGCanvas rhythm={rhythm} heartRate={0} height={230} />

          <div className="cardiac-arrest-vitals">
            <div className="cardiac-arrest-vital"><span>HR</span><strong>0</strong></div>
            <div className="cardiac-arrest-vital"><span>SpO₂</span><strong>--</strong></div>
            <div className="cardiac-arrest-vital"><span>BP</span><strong>0/0</strong></div>
            <div className="cardiac-arrest-vital"><span>RR</span><strong>0</strong></div>
          </div>
        </div>
      </div>

      <div className="cardiac-arrest-section">
        <div className="cardiac-arrest-heading">
          <h2>Recognition Features</h2>
          <div className="cardiac-arrest-line" />
        </div>

        <div className="cardiac-arrest-grid">
          {recognitionFeatures.map((feature) => (
            <article className="cardiac-arrest-card glass-card" key={feature}>
              <div className="cardiac-arrest-icon">✦</div>
              <p>{feature}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="cardiac-arrest-split">
        <div className="cardiac-arrest-panel glass-card">
          <h2>Clinical Priorities</h2>
          <div className="cardiac-arrest-list">
            {clinicalPriorities.map((item) => (
              <div className="cardiac-arrest-item" key={item}>
                <span>●</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="cardiac-arrest-panel cardiac-arrest-warning glass-card">
          <h2>Safety Cautions</h2>
          <div className="cardiac-arrest-list">
            {cautions.map((item) => (
              <div className="cardiac-arrest-item" key={item}>
                <span>!</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="cardiac-arrest-section">
        <div className="cardiac-arrest-heading">
          <h2>Action Pathway</h2>
          <div className="cardiac-arrest-line" />
        </div>

        <div className="cardiac-arrest-flow">
          {flowSteps.map((step, index) => (
            <div className="cardiac-arrest-step" key={step}>
              <strong>{index + 1}</strong>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="cardiac-arrest-section">
        <div className="cardiac-arrest-heading">
          <h2>Clinical Pearls</h2>
          <div className="cardiac-arrest-line" />
        </div>

        <div className="cardiac-arrest-grid">
          {clinicalPearls.map((pearl) => (
            <article className="cardiac-arrest-card glass-card" key={pearl}>
              <div className="cardiac-arrest-icon">◆</div>
              <p>{pearl}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="cardiac-arrest-quiz glass-card">
        <span className="badge">Quick Knowledge Check</span>
        <h2>Which pair is shockable in cardiac arrest?</h2>
        <div className="cardiac-arrest-answers">
          <button className="correct">VF and pulseless VT</button>
          <button>Asystole and PEA</button>
          <button>Normal sinus rhythm and sinus bradycardia</button>
          <button>PEA and atrial flutter</button>
        </div>
        <div className="cardiac-arrest-explanation">
          <p>
            <strong>Best answer:</strong> VF and pulseless VT. This module is for
            education and simulation practice only. Always follow local protocol,
            instructor guidance, and licensed clinical direction in real care.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CardiacArrest;
