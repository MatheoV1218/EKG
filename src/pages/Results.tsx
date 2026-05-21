import { Link } from "react-router-dom";
import "./Results.css";

function Results() {
  return (
    <section className="page results-page">
      <div className="results-card glass-card">
        <span className="badge">Results Preview</span>

        <h1>Your training summary will appear here.</h1>

        <p>
          Later this page can show score, streak, missed questions, weak areas,
          and suggestions for what to practice next.
        </p>

        <div className="results-stats">
          <div>
            <span>Accuracy</span>
            <strong>--%</strong>
          </div>
          <div>
            <span>Score</span>
            <strong>---</strong>
          </div>
          <div>
            <span>Streak</span>
            <strong>--</strong>
          </div>
        </div>

        <div className="results-actions">
          <Link to="/quiz" className="primary-btn">Try Quiz</Link>
          <Link to="/simulation" className="secondary-btn">Run Simulation</Link>
        </div>
      </div>
    </section>
  );
}

export default Results;