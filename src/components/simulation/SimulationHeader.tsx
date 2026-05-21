import { formatSimulationTime } from "../../utils/time";
import type { SimulationState } from "../../types/simulation";
import "./SimulationHeader.css";

interface SimulationHeaderProps {
  state: SimulationState;
  progress: number;
  onPause: () => void;
  onReset: () => void;
}

function SimulationHeader({ state, progress, onPause, onReset }: SimulationHeaderProps) {
  return (
    <div className="simulation-header-sim">
      <div>
        <span className="badge">Live Patient Simulation</span>
        <h1 className="section-title">Treat the patient. Watch the outcome change.</h1>
        <p className="section-subtitle">
          {state.caseTemplate.title} • {state.caseTemplate.category} • {state.caseTemplate.difficulty}
        </p>
      </div>
      <div className="sim-header-controls glass-card">
        <div><span>Time</span><strong>{formatSimulationTime(state.elapsedSeconds)}</strong></div>
        <div><span>Care Progress</span><strong>{progress}%</strong></div>
        <div><span>Score</span><strong>{state.score}</strong></div>
        <button onClick={onPause}>{state.paused ? "Resume" : "Pause"}</button>
        <button onClick={onReset}>New Case</button>
      </div>
    </div>
  );
}

export default SimulationHeader;
