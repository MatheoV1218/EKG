import { dailyChallenges } from "../data/homepage/dailyChallenges";
import "./DailyChallenge.css";

function DailyChallenge() {
  const challenge = dailyChallenges[0];

  return (
    <section className="daily-challenge glass-card">
      <div>
        <span className="badge">{challenge.title}</span>
        <h2>{challenge.caseName}</h2>
        <p>{challenge.description}</p>
      </div>

      <div className="challenge-panel">
        <span>Success Rate</span>
        <strong>{challenge.successRate}</strong>
        <em>{challenge.difficulty}</em>
      </div>
    </section>
  );
}

export default DailyChallenge;