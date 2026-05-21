import { learnTopics } from "../data/learn";
import "./Learn.css";

function Learn() {
  return (
    <section className="page learn-page">
      <div className="learn-header">
        <span className="badge">Study Mode</span>
        <h1 className="section-title">
          Build your foundation before entering the simulator.
        </h1>
        <p className="section-subtitle">
          This page will eventually hold rhythm breakdowns, treatments,
          contraindications, and review guides. For now, it gives the site its
          clean study structure.
        </p>
      </div>

      <div className="learn-grid">
        {learnTopics.map((topic) => (
          <article className="learn-card glass-card" key={topic.title}>
            <div className="learn-icon">✦</div>
            <h2>{topic.title}</h2>
            <p>{topic.description}</p>
            <button>Preview Topic</button>
          </article>
        ))}
      </div>

      <div className="learn-panel glass-card">
        <div>
          <h2>Future Learning Layout</h2>
          <p>
            Each topic can later open into a clean lesson page with examples,
            rhythm strips, treatment notes, and quick checks.
          </p>
        </div>

        <div className="topic-tags">
          <span>EKGs</span>
          <span>Meds</span>
          <span>Vitals</span>
          <span>Oxygen</span>
          <span>Emergency Care</span>
        </div>
      </div>
    </section>
  );
}

export default Learn;