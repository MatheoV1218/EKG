import type { SimulationMistake } from "../../types/simulation";
import "./MistakesPanel.css";

interface MistakesPanelProps {
  mistakes: SimulationMistake[];
}

function MistakesPanel({ mistakes }: MistakesPanelProps) {
  return (
    <section className="mistakes-panel">
      <h2>Safety Review</h2>
      {mistakes.length === 0 ? (
        <p>No major safety errors recorded.</p>
      ) : (
        mistakes.map((mistake) => (
          <article key={mistake.id}>
            <span>{mistake.time}s</span>
            <strong>{mistake.title}</strong>
            <p>{mistake.explanation}</p>
          </article>
        ))
      )}
    </section>
  );
}

export default MistakesPanel;
