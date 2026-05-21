import "./SuccessOverlay.css";

interface SuccessOverlayProps {
  show: boolean;
  outcome: string;
  onRestart: () => void;
}

function SuccessOverlay({ show, outcome, onRestart }: SuccessOverlayProps) {
  if (!show) return null;

  return (
    <div className="success-overlay">
      <div className="success-card glass-card">
        <span>Simulation Complete</span>
        <h2>Patient Outcome Recorded</h2>
        <p>{outcome}</p>
        <button onClick={onRestart}>Start New Case</button>
      </div>
    </div>
  );
}

export default SuccessOverlay;
