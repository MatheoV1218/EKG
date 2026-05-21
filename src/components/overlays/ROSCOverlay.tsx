import "./ROSCOverlay.css";

interface ROSCOverlayProps {
  show: boolean;
}

function ROSCOverlay({ show }: ROSCOverlayProps) {
  if (!show) return null;
  return <div className="rosc-overlay">ROSC ACHIEVED • CONTINUE POST-ARREST CARE</div>;
}

export default ROSCOverlay;
