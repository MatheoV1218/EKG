import "./EventFeed.css";

interface EventFeedProps {
  events: string[];
}

function EventFeed({ events }: EventFeedProps) {
  return (
    <section className="event-feed-sim glass-card">
      <div className="event-feed-head">
        <span>Live Updates</span>
        <h2>Clinical Feed</h2>
      </div>
      <div className="event-feed-list">
        {events.map((event, index) => (
          <div className="event-feed-item" key={`${event}-${index}`}>
            <span>{index === 0 ? "NOW" : `-${index}`}</span>
            <p>{event}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EventFeed;
