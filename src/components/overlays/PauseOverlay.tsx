import "./PauseOverlay.css";

interface PauseOverlayProps {
  paused: boolean;
  onResume: () => void;
}

function PauseOverlay({ paused, onResume }: PauseOverlayProps) {
  if (!paused) return null;

  return (
    <div className="pause-overlay">
      <div className="pause-card glass-card">
        <span>Simulation Paused</span>
        <h2>Training suspended</h2>
        <p>Resume when you are ready to continue managing the patient.</p>
        <button onClick={onResume}>Resume Simulation</button>
      </div>
    </div>
  );
}

export default PauseOverlay;
