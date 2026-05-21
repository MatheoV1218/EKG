import EKGCanvas from "./EKGCanvas";
import type { RhythmType } from "./EKGCanvas";
import { rhythmPreviews } from "../data/homepage/rhythmPreviews";
import "./RhythmCarousel.css";

function RhythmCarousel() {
  function getRhythmType(rhythm: string): RhythmType {
    switch (rhythm) {
      case "Sinus Tachycardia":
        return "sinus-tach";
      case "Atrial Fibrillation":
        return "afib";
      case "Ventricular Tachycardia":
        return "vtach";
      case "Bradycardia":
        return "brady";
      case "Asystole":
        return "asystole";
      default:
        return "sinus";
    }
  }

  function getHeartRate(rhythm: string) {
    switch (rhythm) {
      case "Sinus Tachycardia":
        return 135;
      case "Atrial Fibrillation":
        return 120;
      case "Ventricular Tachycardia":
        return 190;
      case "Bradycardia":
        return 42;
      case "Asystole":
        return 0;
      default:
        return 80;
    }
  }

  return (
    <section className="rhythm-carousel-section">
      <div className="home-section-heading">
        <span className="badge">Rhythm Preview</span>

        <h2>Practice rhythms before they become emergencies.</h2>
      </div>

      <div className="rhythm-row">
        {rhythmPreviews.map((rhythm) => (
          <article className="rhythm-card glass-card" key={rhythm.rhythm}>
            <EKGCanvas
              rhythm={getRhythmType(rhythm.rhythm)}
              heartRate={getHeartRate(rhythm.rhythm)}
              height={90}
              compact
            />

            <h3>{rhythm.rhythm}</h3>

            <p>{rhythm.clue}</p>

            <div className="rhythm-meta">
              <span>{rhythm.difficulty}</span>
              <span>{rhythm.rate}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default RhythmCarousel;