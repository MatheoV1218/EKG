import EKGCanvas from "../../../components/EKGCanvas";
import type { RhythmType } from "../../../components/EKGCanvas";

import "./Bradycardia.css";

const rhythm = "brady" as RhythmType;
const tags = [
  'Educational',
  'Telemetry',
  'Clinical Reasoning',
  'Intermediate'
];
const recognitionFeatures = [
  'Heart rate less than 60 BPM',
  'Can be normal in conditioned athletes',
  'Danger depends on perfusion, mentation, BP, and symptoms',
  'Symptoms can include dizziness, syncope, hypotension, chest discomfort, or confusion',
  'Hypoxia, MI, beta blockers, calcium channel blockers, and electrolyte problems can contribute',
  'Unstable symptomatic patients may need atropine, pacing, or vasoactive infusions per protocol'
];
const clinicalPriorities = [
  'Assess airway and breathing first',
  'Provide oxygen/ventilatory support when hypoxic or poorly ventilating',
  'Attach monitor and obtain BP/pulse checks',
  'Consider atropine for symptomatic bradycardia',
  'Prepare transcutaneous pacing if severe or atropine ineffective',
  'Treat reversible causes such as hypoxia, ischemia, or medication toxicity'
];
const cautions = [
  'Do not treat the number alone if the patient is stable',
  'Do not delay pacing in severe unstable bradycardia',
  'Do not ignore hypoxia as a reversible cause'
];
const clinicalPearls = [
  'Perfusion determines urgency more than HR alone',
  'A 20-year-old athlete at 48 BPM may be fine; an 80-year-old confused and hypotensive at 48 BPM is not',
  'Bradycardia plus low BP or altered mental status should trigger rapid escalation'
];
const flowSteps = [
  'Assess airway and breathing first',
  'Provide oxygen/ventilatory support when hypoxic or poorly ventilating',
  'Attach monitor and obtain BP/pulse checks',
  'Consider atropine for symptomatic bradycardia',
  'Prepare transcutaneous pacing if severe or atropine ineffective',
  'Treat reversible causes such as hypoxia, ischemia, or medication toxicity'
];

function Bradycardia() {
  return (
    <section className="page bradycardia-page">
      <div className="bradycardia-hero">
        <div className="bradycardia-copy glass-card">
          <span className="badge">Intermediate Learning Module</span>
          <h1>Bradycardia Recognition</h1>
          <p>Recognize when a slow rhythm is harmless, symptomatic, or immediately dangerous.</p>
          <div className="bradycardia-tags">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="bradycardia-monitor glass-card">
          <div className="bradycardia-monitor-header">
            <div>
              <span>Live Training Monitor</span>
              <h2>Bradycardia Recognition</h2>
            </div>
            <strong className="bradycardia-status">ACTIVE</strong>
          </div>

          <EKGCanvas rhythm={rhythm} heartRate={38} height={230} />

          <div className="bradycardia-vitals">
            <div className="bradycardia-vital"><span>HR</span><strong>38</strong></div>
            <div className="bradycardia-vital"><span>SpO₂</span><strong>94%</strong></div>
            <div className="bradycardia-vital"><span>BP</span><strong>84/48</strong></div>
            <div className="bradycardia-vital"><span>RR</span><strong>10</strong></div>
          </div>
        </div>
      </div>

      <div className="bradycardia-section">
        <div className="bradycardia-heading">
          <h2>Recognition Features</h2>
          <div className="bradycardia-line" />
        </div>

        <div className="bradycardia-grid">
          {recognitionFeatures.map((feature) => (
            <article className="bradycardia-card glass-card" key={feature}>
              <div className="bradycardia-icon">✦</div>
              <p>{feature}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="bradycardia-split">
        <div className="bradycardia-panel glass-card">
          <h2>Clinical Priorities</h2>
          <div className="bradycardia-list">
            {clinicalPriorities.map((item) => (
              <div className="bradycardia-item" key={item}>
                <span>●</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bradycardia-panel bradycardia-warning glass-card">
          <h2>Safety Cautions</h2>
          <div className="bradycardia-list">
            {cautions.map((item) => (
              <div className="bradycardia-item" key={item}>
                <span>!</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bradycardia-section">
        <div className="bradycardia-heading">
          <h2>Action Pathway</h2>
          <div className="bradycardia-line" />
        </div>

        <div className="bradycardia-flow">
          {flowSteps.map((step, index) => (
            <div className="bradycardia-step" key={step}>
              <strong>{index + 1}</strong>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bradycardia-section">
        <div className="bradycardia-heading">
          <h2>Clinical Pearls</h2>
          <div className="bradycardia-line" />
        </div>

        <div className="bradycardia-grid">
          {clinicalPearls.map((pearl) => (
            <article className="bradycardia-card glass-card" key={pearl}>
              <div className="bradycardia-icon">◆</div>
              <p>{pearl}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="bradycardia-quiz glass-card">
        <span className="badge">Quick Knowledge Check</span>
        <h2>Which finding most strongly suggests unstable bradycardia?</h2>
        <div className="bradycardia-answers">
          <button className="correct">Hypotension with altered mental status</button>
          <button>HR 56 in a resting athlete</button>
          <button>Regular narrow QRS rhythm</button>
          <button>Normal BP and no symptoms</button>
        </div>
        <div className="bradycardia-explanation">
          <p>
            <strong>Best answer:</strong> Hypotension with altered mental status. This module is for
            education and simulation practice only. Always follow local protocol,
            instructor guidance, and licensed clinical direction in real care.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Bradycardia;
