import EKGCanvas from "../../../components/EKGCanvas";
import type { RhythmType } from "../../../components/EKGCanvas";

import "./RapidAssessment.css";

const rhythm = "sinus-tach" as RhythmType;
const tags = [
  'Educational',
  'Telemetry',
  'Clinical Reasoning',
  'Intermediate'
];
const recognitionFeatures = [
  'ABCs stand for airway, breathing, and circulation',
  'Airway obstruction can kill before a rhythm problem is fully analyzed',
  'Breathing assessment includes rate, effort, sounds, SpO₂, and mental status',
  'Circulation assessment includes pulse, BP, skin, bleeding, and perfusion',
  'Mental status changes are a major deterioration clue',
  'Primary assessment should identify immediate life threats'
];
const clinicalPriorities = [
  'Look at the patient before the monitor',
  'Assess airway patency',
  'Assess breathing and oxygenation',
  'Assess circulation and perfusion',
  'Identify the most immediate threat',
  'Call for help/escalate early when unstable'
];
const cautions = [
  'Do not jump to medication before ABCs',
  'Do not let a monitor distract from an obstructed airway',
  'Do not ignore altered mental status'
];
const clinicalPearls = [
  'The first correct action is often assessment plus support',
  'ABCs help prioritize when multiple problems exist',
  'Rapid assessment is what connects quiz reasoning to simulation gameplay'
];
const flowSteps = [
  'Look at the patient before the monitor',
  'Assess airway patency',
  'Assess breathing and oxygenation',
  'Assess circulation and perfusion',
  'Identify the most immediate threat',
  'Call for help/escalate early when unstable'
];

function RapidAssessment() {
  return (
    <section className="page rapid-assessment-page">
      <div className="rapid-assessment-hero">
        <div className="rapid-assessment-copy glass-card">
          <span className="badge">Intermediate Learning Module</span>
          <h1>Rapid Patient Assessment</h1>
          <p>Practice the first-minute logic of deciding what problem must be addressed first.</p>
          <div className="rapid-assessment-tags">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="rapid-assessment-monitor glass-card">
          <div className="rapid-assessment-monitor-header">
            <div>
              <span>Live Training Monitor</span>
              <h2>Rapid Patient Assessment</h2>
            </div>
            <strong className="rapid-assessment-status">ACTIVE</strong>
          </div>

          <EKGCanvas rhythm={rhythm} heartRate={116} height={230} />

          <div className="rapid-assessment-vitals">
            <div className="rapid-assessment-vital"><span>HR</span><strong>116</strong></div>
            <div className="rapid-assessment-vital"><span>SpO₂</span><strong>90%</strong></div>
            <div className="rapid-assessment-vital"><span>BP</span><strong>92/58</strong></div>
            <div className="rapid-assessment-vital"><span>RR</span><strong>26</strong></div>
          </div>
        </div>
      </div>

      <div className="rapid-assessment-section">
        <div className="rapid-assessment-heading">
          <h2>Recognition Features</h2>
          <div className="rapid-assessment-line" />
        </div>

        <div className="rapid-assessment-grid">
          {recognitionFeatures.map((feature) => (
            <article className="rapid-assessment-card glass-card" key={feature}>
              <div className="rapid-assessment-icon">✦</div>
              <p>{feature}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="rapid-assessment-split">
        <div className="rapid-assessment-panel glass-card">
          <h2>Clinical Priorities</h2>
          <div className="rapid-assessment-list">
            {clinicalPriorities.map((item) => (
              <div className="rapid-assessment-item" key={item}>
                <span>●</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rapid-assessment-panel rapid-assessment-warning glass-card">
          <h2>Safety Cautions</h2>
          <div className="rapid-assessment-list">
            {cautions.map((item) => (
              <div className="rapid-assessment-item" key={item}>
                <span>!</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rapid-assessment-section">
        <div className="rapid-assessment-heading">
          <h2>Action Pathway</h2>
          <div className="rapid-assessment-line" />
        </div>

        <div className="rapid-assessment-flow">
          {flowSteps.map((step, index) => (
            <div className="rapid-assessment-step" key={step}>
              <strong>{index + 1}</strong>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rapid-assessment-section">
        <div className="rapid-assessment-heading">
          <h2>Clinical Pearls</h2>
          <div className="rapid-assessment-line" />
        </div>

        <div className="rapid-assessment-grid">
          {clinicalPearls.map((pearl) => (
            <article className="rapid-assessment-card glass-card" key={pearl}>
              <div className="rapid-assessment-icon">◆</div>
              <p>{pearl}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="rapid-assessment-quiz glass-card">
        <span className="badge">Quick Knowledge Check</span>
        <h2>What should be checked first in an unresponsive gurgling patient?</h2>
        <div className="rapid-assessment-answers">
          <button className="correct">Airway patency and need for suction</button>
          <button>Adenosine eligibility</button>
          <button>Discharge readiness</button>
          <button>Long-term anticoagulation</button>
        </div>
        <div className="rapid-assessment-explanation">
          <p>
            <strong>Best answer:</strong> Airway patency and need for suction. This module is for
            education and simulation practice only. Always follow local protocol,
            instructor guidance, and licensed clinical direction in real care.
          </p>
        </div>
      </div>
    </section>
  );
}

export default RapidAssessment;
