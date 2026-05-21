import SimButton from "../ui/SimButton";
import "./DefibPanel.css";
interface DefibPanelProps {
  onAction?: (action: string) => void;
  disabled?: boolean;
}
const actions = [
  "Charge Defibrillator",
  "Defibrillate",
  "Synchronized Cardioversion",
  "Prepare Pacing",
];
function DefibPanel({ onAction, disabled = false }: DefibPanelProps) {
  return (
    <section className="sim-action-module">
      <div className="sim-action-module-header">
        <span>Intervention Set</span>
        <h2>Electrical Therapy</h2>
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
export default DefibPanel;
