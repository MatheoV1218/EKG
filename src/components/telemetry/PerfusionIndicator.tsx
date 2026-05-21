import type { PerfusionStatus } from "../../types/simulation";
import "./PerfusionIndicator.css";

interface PerfusionIndicatorProps {
  perfusion: PerfusionStatus;
}

function PerfusionIndicator({ perfusion }: PerfusionIndicatorProps) {
  return (
    <div className={`indicator-card perfusion-${perfusion.toLowerCase()}`}>
      <span>Perfusion</span>
      <strong>{perfusion}</strong>
    </div>
  );
}

export default PerfusionIndicator;
