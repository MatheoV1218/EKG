import { trainingModes } from "../data/homepage/trainingModes";
import "./TrainingModes.css";

function TrainingModes() {
  return (
    <section className="training-section">
      <div className="home-section-heading">
        <span className="badge">Training Modes</span>
        <h2>Choose how you want to practice.</h2>
      </div>

      <div className="training-grid">
        {trainingModes.map((mode) => (
          <article className="training-card glass-card" key={mode.title}>
            <div className="training-icon">{mode.icon}</div>
            <h3>{mode.title}</h3>
            <p>{mode.description}</p>

            <div className="training-meta">
              <span>{mode.difficulty}</span>
              <span>{mode.time}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TrainingModes;