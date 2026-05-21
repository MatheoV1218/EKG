import { Link } from "react-router-dom";

import "./Learn.css";

const learnSections = [
  {
    title: "Cardiac Rhythms",
    description:
      "Build rhythm recognition skills from normal sinus rhythm to lethal ventricular rhythms.",
    topics: [
      {
        title: "Normal Sinus Rhythm",
        description:
          "Understand normal cardiac conduction, PQRST structure, rhythm regularity, and normal telemetry patterns.",
        level: "Beginner",
        route: "/learn/normal-sinus-rhythm",
      },
      {
        title: "Bradycardia Recognition",
        description:
          "Differentiate stable and symptomatic bradycardia with perfusion checks, atropine, and pacing concepts.",
        level: "Intermediate",
        route: "/learn/bradycardia",
      },
      {
        title: "Tachycardia Recognition",
        description:
          "Recognize SVT, sinus tachycardia, unstable tachycardia, and when synchronized cardioversion is needed.",
        level: "Intermediate",
        route: "/learn/tachycardia",
      },
      {
        title: "Atrial Fibrillation & Flutter",
        description:
          "Study irregular rhythms, RVR, flutter waves, rate control concepts, and telemetry interpretation.",
        level: "Intermediate",
        route: "/learn/afib-flutter",
      },
      {
        title: "Ventricular Rhythms",
        description:
          "Learn VTach, VFib, torsades, pulseless rhythms, and shockable rhythm management principles.",
        level: "Advanced",
        route: "/learn/ventricular-rhythms",
      },
    ],
  },
  {
    title: "Respiratory Therapy",
    description:
      "Train oxygen therapy, airway recognition, respiratory distress signs, ventilation, and ETCO₂ interpretation.",
    topics: [
      {
        title: "Oxygen Delivery Devices",
        description:
          "Compare nasal cannula, simple masks, Venturi masks, non-rebreathers, and BVM ventilation.",
        level: "Beginner",
        route: "/learn/oxygen-devices",
      },
      {
        title: "Airway Management",
        description:
          "Study OPA/NPA usage, suctioning, airway obstruction, aspiration risk, and intubation basics.",
        level: "Intermediate",
        route: "/learn/airway-management",
      },
      {
        title: "Respiratory Distress",
        description:
          "Recognize accessory muscle use, cyanosis, tripod positioning, fatigue, and respiratory failure signs.",
        level: "Intermediate",
        route: "/learn/respiratory-distress",
      },
      {
        title: "Mechanical Ventilation",
        description:
          "Understand ventilator basics including tidal volume, PEEP, FiO₂, alarms, and troubleshooting.",
        level: "Advanced",
        route: "/learn/mechanical-ventilation",
      },
      {
        title: "Capnography & ETCO₂",
        description:
          "Interpret ETCO₂ waveforms, airway confirmation, ventilation trends, and ROSC clues.",
        level: "Advanced",
        route: "/learn/capnography",
      },
    ],
  },
  {
    title: "Emergency & Critical Care",
    description:
      "Practice rapid recognition of deterioration, shock, arrest rhythms, emergency medications, and assessment priorities.",
    topics: [
      {
        title: "Cardiac Arrest Algorithms",
        description:
          "Review ACLS fundamentals including CPR, epinephrine, defibrillation, and shockable vs non-shockable rhythms.",
        level: "Advanced",
        route: "/learn/cardiac-arrest",
      },
      {
        title: "Shock Recognition",
        description:
          "Identify septic, cardiogenic, obstructive, and hypovolemic shock using perfusion and vital sign clues.",
        level: "Advanced",
        route: "/learn/shock-recognition",
      },
      {
        title: "Medication Basics",
        description:
          "Study albuterol, atropine, adenosine, epinephrine, medication safety, side effects, and contraindications.",
        level: "Intermediate",
        route: "/learn/medication-basics",
      },
      {
        title: "Vital Sign Interpretation",
        description:
          "Understand dangerous vitals, pulse pressure, oxygen saturation, respiratory rate, and deterioration patterns.",
        level: "Beginner",
        route: "/learn/vital-signs",
      },
      {
        title: "Rapid Patient Assessment",
        description:
          "Practice ABC prioritization, airway/breathing/circulation assessment, mental status, and emergency recognition.",
        level: "Intermediate",
        route: "/learn/rapid-assessment",
      },
    ],
  },
];

function Learn() {
  const totalTopics = learnSections.reduce(
    (total, section) => total + section.topics.length,
    0
  );

  return (
    <section className="page learn-page">
      <div className="learn-hero">
        <div className="learn-hero-content">
          <span className="badge">Study Mode</span>

          <h1 className="section-title">
            Master telemetry, respiratory care, and emergency response.
          </h1>

          <p className="section-subtitle">
            Explore immersive learning modules built for rhythm recognition,
            oxygen therapy, airway management, emergency care, medications, and
            clinical decision-making.
          </p>
        </div>

        <div className="learn-hero-grid">
          <div className="hero-stat glass-card">
            <span>Training Topics</span>
            <strong>{totalTopics}</strong>
          </div>

          <div className="hero-stat glass-card">
            <span>Learning Tracks</span>
            <strong>{learnSections.length}</strong>
          </div>

          <div className="hero-stat glass-card">
            <span>Focus</span>
            <strong>RT + ACLS</strong>
          </div>
        </div>
      </div>

      {learnSections.map((section) => (
        <div className="learn-section" key={section.title}>
          <div className="learn-section-header">
            <div>
              <h2>{section.title}</h2>
              <p>{section.description}</p>
            </div>

            <div className="section-line" />
          </div>

          <div className="learn-grid">
            {section.topics.map((topic) => (
              <article className="learn-card glass-card" key={topic.title}>
                <div className="learn-card-top">
                  <div className="learn-icon">✦</div>

                  <span className={`difficulty ${topic.level.toLowerCase()}`}>
                    {topic.level}
                  </span>
                </div>

                <h3>{topic.title}</h3>

                <p>{topic.description}</p>

                <Link to={topic.route} className="learn-link">
                  Preview Topic
                </Link>
              </article>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Learn;