import EKGCanvas from "../../../components/EKGCanvas";
import type { RhythmType } from "../../../components/EKGCanvas";

import "./Capnography.css";

const rhythm = "sinus" as RhythmType;
const tags = [
  'Educational',
  'Telemetry',
  'Clinical Reasoning',
  'Advanced'
];
const recognitionFeatures = [
  'Normal ETCO₂ is commonly around 35–45 mmHg in many adult contexts',
  'Waveform capnography helps confirm advanced airway placement',
  'Low or falling ETCO₂ during CPR can suggest poor perfusion or poor compression quality',
  'A sudden rise in ETCO₂ during CPR may suggest ROSC',
  'Hypoventilation can increase ETCO₂',
  'Hyperventilation can lower ETCO₂'
];
const clinicalPriorities = [
  'Confirm waveform after advanced airway placement',
  'Trend ETCO₂ rather than relying on one number',
  'Use ETCO₂ to assess ventilation changes',
  'During CPR, reassess compression quality if ETCO₂ is low or falling',
  'Evaluate sudden waveform loss for dislodgement or equipment issue',
  'Correlate ETCO₂ with patient status'
];
const cautions = [
  'Do not use colorimetric change alone when waveform is available',
  'Do not ignore sudden loss of waveform',
  'Do not hyperventilate cardiac arrest patients'
];
const clinicalPearls = [
  'Capnography shows ventilation and perfusion trends',
  'A waveform is more informative than a single number',
  'ETCO₂ is especially useful during intubation and resuscitation'
];
const flowSteps = [
  'Confirm waveform after advanced airway placement',
  'Trend ETCO₂ rather than relying on one number',
  'Use ETCO₂ to assess ventilation changes',
  'During CPR, reassess compression quality if ETCO₂ is low or falling',
  'Evaluate sudden waveform loss for dislodgement or equipment issue',
  'Correlate ETCO₂ with patient status'
];

function Capnography() {
  return (
    <section className="page capnography-page">
      <div className="capnography-hero">
        <div className="capnography-copy glass-card">
          <span className="badge">Advanced Learning Module</span>
          <h1>Capnography & ETCO₂</h1>
          <p>Interpret ETCO₂ trends as a window into ventilation, perfusion, airway placement, and CPR quality.</p>
          <div className="capnography-tags">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="capnography-monitor glass-card">
          <div className="capnography-monitor-header">
            <div>
              <span>Live Training Monitor</span>
              <h2>Capnography & ETCO₂</h2>
            </div>
            <strong className="capnography-status">ACTIVE</strong>
          </div>

          <EKGCanvas rhythm={rhythm} heartRate={88} height={230} />

          <div className="capnography-vitals">
            <div className="capnography-vital"><span>HR</span><strong>88</strong></div>
            <div className="capnography-vital"><span>SpO₂</span><strong>96%</strong></div>
            <div className="capnography-vital"><span>BP</span><strong>120/78</strong></div>
            <div className="capnography-vital"><span>RR</span><strong>16</strong></div>
          </div>
        </div>
      </div>

      <div className="capnography-section">
        <div className="capnography-heading">
          <h2>Recognition Features</h2>
          <div className="capnography-line" />
        </div>

        <div className="capnography-grid">
          {recognitionFeatures.map((feature) => (
            <article className="capnography-card glass-card" key={feature}>
              <div className="capnography-icon">✦</div>
              <p>{feature}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="capnography-split">
        <div className="capnography-panel glass-card">
          <h2>Clinical Priorities</h2>
          <div className="capnography-list">
            {clinicalPriorities.map((item) => (
              <div className="capnography-item" key={item}>
                <span>●</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="capnography-panel capnography-warning glass-card">
          <h2>Safety Cautions</h2>
          <div className="capnography-list">
            {cautions.map((item) => (
              <div className="capnography-item" key={item}>
                <span>!</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="capnography-section">
        <div className="capnography-heading">
          <h2>Action Pathway</h2>
          <div className="capnography-line" />
        </div>

        <div className="capnography-flow">
          {flowSteps.map((step, index) => (
            <div className="capnography-step" key={step}>
              <strong>{index + 1}</strong>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="capnography-section">
        <div className="capnography-heading">
          <h2>Clinical Pearls</h2>
          <div className="capnography-line" />
        </div>

        <div className="capnography-grid">
          {clinicalPearls.map((pearl) => (
            <article className="capnography-card glass-card" key={pearl}>
              <div className="capnography-icon">◆</div>
              <p>{pearl}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="capnography-quiz glass-card">
        <span className="badge">Quick Knowledge Check</span>
        <h2>What can a sudden ETCO₂ rise during CPR suggest?</h2>
        <div className="capnography-answers">
          <button className="correct">Return of spontaneous circulation</button>
          <button>Confirmed asystole</button>
          <button>Worsening hyperventilation only</button>
          <button>Nasal cannula displacement</button>
        </div>
        <div className="capnography-explanation">
          <p>
            <strong>Best answer:</strong> Return of spontaneous circulation. This module is for
            education and simulation practice only. Always follow local protocol,
            instructor guidance, and licensed clinical direction in real care.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Capnography;
