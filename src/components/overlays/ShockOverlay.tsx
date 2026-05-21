import "./ShockOverlay.css";

interface ShockOverlayProps {
  active: boolean;
}

function ShockOverlay({ active }: ShockOverlayProps) {
  if (!active) return null;
  return <div className="shock-overlay" />;
}

export default ShockOverlay;
