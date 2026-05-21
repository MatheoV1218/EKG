import { rhythmLabel } from "../../engines/telemetry/rhythmEngine";
import type { RhythmType } from "../../types/simulation";
import "./RhythmLabel.css";

interface RhythmLabelProps {
  rhythm: RhythmType;
}

function RhythmLabel({ rhythm }: RhythmLabelProps) {
  return <span className={`rhythm-label ${rhythm}`}>{rhythmLabel(rhythm)}</span>;
}

export default RhythmLabel;
