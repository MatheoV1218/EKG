import { stats } from "../data/homepage/stats";
import "./StatsSection.css";

function StatsSection() {
  return (
    <section className="stats-grid">
      {stats.map((stat) => (
        <div className="stat-card glass-card" key={stat.label}>
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
        </div>
      ))}
    </section>
  );
}

export default StatsSection;