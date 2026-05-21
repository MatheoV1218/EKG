import EKGCanvas from "../../../components/EKGCanvas";
import type { RhythmType } from "../../../components/EKGCanvas";

import "./OxygenDevices.css";

const rhythm = "sinus-tach" as RhythmType;
const tags = [
  'Educational',
  'Telemetry',
  'Clinical Reasoning',
  'Beginner'
];
const recognitionFeatures = [
  'Nasal cannula supports mild oxygen needs in patients breathing adequately',
  'Simple masks and Venturi masks provide moderate oxygen support depending on setup',
  'Non-rebreather masks provide high-concentration oxygen for severe hypoxemia when ventilation is adequate',
  'BVM ventilation supports patients who are not ventilating adequately',
  'Oxygen should be titrated to target saturation ranges based on condition and protocol',
  'Patients at risk for hypercapnic respiratory failure may need controlled oxygen targets'
];
const clinicalPriorities = [
  'Assess SpO₂, respiratory rate, effort, and mental status',
  'Use nasal cannula for mild hypoxemia when stable',
  'Use NRB for severe hypoxemia with adequate breathing',
  'Use BVM for inadequate ventilation or apnea',
  'Reassess response after device selection',
  'Escalate if oxygenation or ventilation fails'
];
const cautions = [
  'Do not use passive oxygen when ventilation is failing',
  'Do not ignore worsening mental status',
  'Avoid excessive oxygen in CO₂ retainers unless emergency hypoxia requires immediate support'
];
const clinicalPearls = [
  'Oxygenation and ventilation are related but not identical',
  'A patient can have oxygen applied and still need ventilation support',
  'Device choice should match severity'
];
const flowSteps = [
  'Assess SpO₂, respiratory rate, effort, and mental status',
  'Use nasal cannula for mild hypoxemia when stable',
  'Use NRB for severe hypoxemia with adequate breathing',
  'Use BVM for inadequate ventilation or apnea',
  'Reassess response after device selection',
  'Escalate if oxygenation or ventilation fails'
];

function OxygenDevices() {
  return (
    <section className="page oxygen-devices-page">
      <div className="oxygen-devices-hero">
        <div className="oxygen-devices-copy glass-card">
          <span className="badge">Beginner Learning Module</span>
          <h1>Oxygen Delivery Devices</h1>
          <p>Choose oxygen devices based on oxygen need, ventilation status, and patient work of breathing.</p>
          <div className="oxygen-devices-tags">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="oxygen-devices-monitor glass-card">
          <div className="oxygen-devices-monitor-header">
            <div>
              <span>Live Training Monitor</span>
              <h2>Oxygen Delivery Devices</h2>
            </div>
            <strong className="oxygen-devices-status">ACTIVE</strong>
          </div>

          <EKGCanvas rhythm={rhythm} heartRate={112} height={230} />

          <div className="oxygen-devices-vitals">
            <div className="oxygen-devices-vital"><span>HR</span><strong>112</strong></div>
            <div className="oxygen-devices-vital"><span>SpO₂</span><strong>88%</strong></div>
            <div className="oxygen-devices-vital"><span>BP</span><strong>122/78</strong></div>
            <div className="oxygen-devices-vital"><span>RR</span><strong>30</strong></div>
          </div>
        </div>
      </div>

      <div className="oxygen-devices-section">
        <div className="oxygen-devices-heading">
          <h2>Recognition Features</h2>
          <div className="oxygen-devices-line" />
        </div>

        <div className="oxygen-devices-grid">
          {recognitionFeatures.map((feature) => (
            <article className="oxygen-devices-card glass-card" key={feature}>
              <div className="oxygen-devices-icon">✦</div>
              <p>{feature}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="oxygen-devices-split">
        <div className="oxygen-devices-panel glass-card">
          <h2>Clinical Priorities</h2>
          <div className="oxygen-devices-list">
            {clinicalPriorities.map((item) => (
              <div className="oxygen-devices-item" key={item}>
                <span>●</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="oxygen-devices-panel oxygen-devices-warning glass-card">
          <h2>Safety Cautions</h2>
          <div className="oxygen-devices-list">
            {cautions.map((item) => (
              <div className="oxygen-devices-item" key={item}>
                <span>!</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="oxygen-devices-section">
        <div className="oxygen-devices-heading">
          <h2>Action Pathway</h2>
          <div className="oxygen-devices-line" />
        </div>

        <div className="oxygen-devices-flow">
          {flowSteps.map((step, index) => (
            <div className="oxygen-devices-step" key={step}>
              <strong>{index + 1}</strong>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="oxygen-devices-section">
        <div className="oxygen-devices-heading">
          <h2>Clinical Pearls</h2>
          <div className="oxygen-devices-line" />
        </div>

        <div className="oxygen-devices-grid">
          {clinicalPearls.map((pearl) => (
            <article className="oxygen-devices-card glass-card" key={pearl}>
              <div className="oxygen-devices-icon">◆</div>
              <p>{pearl}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="oxygen-devices-quiz glass-card">
        <span className="badge">Quick Knowledge Check</span>
        <h2>Which device is best for severe hypoxemia with adequate breathing?</h2>
        <div className="oxygen-devices-answers">
          <button className="correct">Non-rebreather mask</button>
          <button>Room air only</button>
          <button>Nasal cannula at 1 L/min only</button>
          <button>Oral airway alone</button>
        </div>
        <div className="oxygen-devices-explanation">
          <p>
            <strong>Best answer:</strong> Non-rebreather mask. This module is for
            education and simulation practice only. Always follow local protocol,
            instructor guidance, and licensed clinical direction in real care.
          </p>
        </div>
      </div>
    </section>
  );
}

export default OxygenDevices;
