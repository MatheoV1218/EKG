import { alerts } from "../data/homepage/alerts";
import "./AlertFeed.css";

function AlertFeed() {
  return (
    <section className="alert-feed glass-card">
      <div className="section-mini-header">
        <span>Hospital Alert Feed</span>
        <strong>LIVE</strong>
      </div>

      <div className="alert-list">
        {alerts.map((alert) => (
          <article className={`alert-card ${alert.severity}`} key={alert.room}>
            <div>
              <span>{alert.room}</span>
              <h3>{alert.title}</h3>
              <p>{alert.message}</p>
            </div>

            <button>Respond</button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default AlertFeed;