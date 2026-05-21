import SimButton from "../ui/SimButton";
import "./CPRPanel.css";
interface CPRPanelProps {
  onAction?: (action: string) => void;
  disabled?: boolean;
}
const actions = [
  "Start Compressions",
  "Switch Compressor",
  "Pause For Rhythm Check",
  "Resume CPR",
];
function CPRPanel({ onAction, disabled = false }: CPRPanelProps) {
  return (
    <section className="sim-action-module">
      <div className="sim-action-module-header">
        <span>Intervention Set</span>
        <h2>CPR Controls</h2>
      </div>
      <div className="sim-action-button-grid">
        {actions.map((action) => (
          <SimButton
            key={action}
            variant="secondary"
            fullWidth
            disabled={disabled}
            onClick={() => onAction?.(action)}
          >
            {action}
          </SimButton>
        ))}
      </div>
    </section>
  );
}
export default CPRPanel;
