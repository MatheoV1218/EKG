import type { OxygenationStatus } from "../../types/simulation";
import "./OxygenationIndicator.css";

interface OxygenationIndicatorProps {
  oxygenation: OxygenationStatus;
}

function OxygenationIndicator({ oxygenation }: OxygenationIndicatorProps) {
  return (
    <div className={`oxygenation-card oxygenation-${oxygenation.replaceAll(" ", "-").toLowerCase()}`}>
      <span>Oxygenation</span>
      <strong>{oxygenation}</strong>
    </div>
  );
}

export default OxygenationIndicator;
