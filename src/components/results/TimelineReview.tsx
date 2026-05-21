import type { TimelineEntry } from "../../types/simulation";
import { formatSimulationTime } from "../../utils/time";
import "./TimelineReview.css";

interface TimelineReviewProps {
  timeline: TimelineEntry[];
}

function TimelineReview({ timeline }: TimelineReviewProps) {
  return (
    <section className="timeline-review">
      <h2>Timeline Review</h2>
      <div>
        {timeline.slice(-12).map((entry) => (
          <article className={entry.kind} key={entry.id}>
            <span>{formatSimulationTime(entry.time)}</span>
            <strong>{entry.label}</strong>
            <p>{entry.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TimelineReview;
