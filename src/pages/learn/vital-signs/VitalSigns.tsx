import EKGCanvas from "../../../components/EKGCanvas";
import type { RhythmType } from "../../../components/EKGCanvas";

import "./VitalSigns.css";

const rhythm = "sinus-tach" as RhythmType;
const tags = [
  'Educational',
  'Telemetry',
  'Clinical Reasoning',
  'Beginner'
];
const recognitionFeatures = [
  'Heart rate should be interpreted with rhythm and patient condition',
  'SpO₂ below normal can suggest hypoxemia but must be correlated clinically',
  'Respiratory rate is an early warning sign in many deteriorating patients',
  'Systolic BP below 90 can suggest instability in many adult contexts',
  'Narrowing pulse pressure can be concerning in shock states',
  'Trends are more powerful than one isolated reading'
];
const clinicalPriorities = [
  'Check airway and breathing when SpO₂ or RR is abnormal',
  'Assess circulation when BP, pulse quality, or skin signs are abnormal',
  'Compare vitals with symptoms',
  'Look for patterns rather than isolated numbers',
  'Reassess after interventions',
  'Escalate dangerous trends'
];
const cautions = [
  'Do not ignore RR because it is less dramatic than HR',
  'Do not assume a normal SpO₂ means ventilation is normal',
  'Do not treat numbers without assessing the patient'
];
const clinicalPearls = [
  'Respiratory rate is often one of the earliest warning signs',
  'Vitals become more meaningful when grouped together',
  'A stable-looking number can still be dangerous if trending worse'
];
const flowSteps = [
  'Check airway and breathing when SpO₂ or RR is abnormal',
  'Assess circulation when BP, pulse quality, or skin signs are abnormal',
  'Compare vitals with symptoms',
  'Look for patterns rather than isolated numbers',
  'Reassess after interventions',
  'Escalate dangerous trends'
];

function VitalSigns() {
  return (
    <section className="page vital-signs-page">
      <div className="vital-signs-hero">
        <div className="vital-signs-copy glass-card">
          <span className="badge">Beginner Learning Module</span>
          <h1>Vital Sign Interpretation</h1>
          <p>Turn numbers into clinical meaning by connecting vitals with perfusion and respiratory status.</p>
          <div className="vital-signs-tags">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="vital-signs-monitor glass-card">
          <div className="vital-signs-monitor-header">
            <div>
              <span>Live Training Monitor</span>
              <h2>Vital Sign Interpretation</h2>
            </div>
            <strong className="vital-signs-status">ACTIVE</strong>
          </div>

          <EKGCanvas rhythm={rhythm} heartRate={124} height={230} />

          <div className="vital-signs-vitals">
            <div className="vital-signs-vital"><span>HR</span><strong>124</strong></div>
            <div className="vital-signs-vital"><span>SpO₂</span><strong>89%</strong></div>
            <div className="vital-signs-vital"><span>BP</span><strong>88/52</strong></div>
            <div className="vital-signs-vital"><span>RR</span><strong>28</strong></div>
          </div>
        </div>
      </div>

      <div className="vital-signs-section">
        <div className="vital-signs-heading">
          <h2>Recognition Features</h2>
          <div className="vital-signs-line" />
        </div>

        <div className="vital-signs-grid">
          {recognitionFeatures.map((feature) => (
            <article className="vital-signs-card glass-card" key={feature}>
              <div className="vital-signs-icon">✦</div>
              <p>{feature}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="vital-signs-split">
        <div className="vital-signs-panel glass-card">
          <h2>Clinical Priorities</h2>
          <div className="vital-signs-list">
            {clinicalPriorities.map((item) => (
              <div className="vital-signs-item" key={item}>
                <span>●</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="vital-signs-panel vital-signs-warning glass-card">
          <h2>Safety Cautions</h2>
          <div className="vital-signs-list">
            {cautions.map((item) => (
              <div className="vital-signs-item" key={item}>
                <span>!</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="vital-signs-section">
        <div className="vital-signs-heading">
          <h2>Action Pathway</h2>
          <div className="vital-signs-line" />
        </div>

        <div className="vital-signs-flow">
          {flowSteps.map((step, index) => (
            <div className="vital-signs-step" key={step}>
              <strong>{index + 1}</strong>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="vital-signs-section">
        <div className="vital-signs-heading">
          <h2>Clinical Pearls</h2>
          <div className="vital-signs-line" />
        </div>

        <div className="vital-signs-grid">
          {clinicalPearls.map((pearl) => (
            <article className="vital-signs-card glass-card" key={pearl}>
              <div className="vital-signs-icon">◆</div>
              <p>{pearl}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="vital-signs-quiz glass-card">
        <span className="badge">Quick Knowledge Check</span>
        <h2>Which vital sign pattern is most concerning?</h2>
        <div className="vital-signs-answers">
          <button className="correct">SpO₂ 84%, RR 34, altered mentation</button>
          <button>HR 72, BP 118/76, RR 16</button>
          <button>SpO₂ 98% with normal speech</button>
          <button>BP 122/78 with warm skin</button>
        </div>
        <div className="vital-signs-explanation">
          <p>
            <strong>Best answer:</strong> SpO₂ 84%, RR 34, altered mentation. This module is for
            education and simulation practice only. Always follow local protocol,
            instructor guidance, and licensed clinical direction in real care.
          </p>
        </div>
      </div>
    </section>
  );
}

export default VitalSigns;
