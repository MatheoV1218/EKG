import { achievements } from "../data/homepage/achievements";
import "./AchievementPreview.css";

function AchievementPreview() {
  return (
    <section className="achievement-section">
      <div className="home-section-heading">
        <span className="badge">Achievement System</span>
        <h2>Make studying feel like progress.</h2>
      </div>

      <div className="achievement-grid">
        {achievements.map((achievement) => (
          <article className="achievement-card glass-card" key={achievement.title}>
            <span>{achievement.icon}</span>
            <h3>{achievement.title}</h3>
            <p>{achievement.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default AchievementPreview;