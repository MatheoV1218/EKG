import "./DeathOverlay.css";

interface DeathOverlayProps {
  show: boolean;
  onRestart: () => void;
}

function DeathOverlay({ show, onRestart }: DeathOverlayProps) {
  if (!show) return null;

  return (
    <div className="death-overlay">
      <div className="death-card glass-card">
        <span>Critical Failure</span>
        <h2>Patient Expired</h2>
        <p>Review the timeline to identify missed priorities, unsafe interventions, or delays.</p>
        <button onClick={onRestart}>Retry Case</button>
      </div>
    </div>
  );
}

export default DeathOverlay;
