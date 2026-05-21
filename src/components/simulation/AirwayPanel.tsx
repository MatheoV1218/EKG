import SimButton from "../ui/SimButton";
import "./AirwayPanel.css";
interface AirwayPanelProps {
  onAction?: (action: string) => void;
  disabled?: boolean;
}
const actions = [
  "Reposition Airway",
  "Suction",
  "Insert OPA",
  "Insert NPA",
  "Prepare Advanced Airway",
];
function AirwayPanel({ onAction, disabled = false }: AirwayPanelProps) {
  return (
    <section className="sim-action-module">
      <div className="sim-action-module-header">
        <span>Intervention Set</span>
        <h2>Airway Management</h2>
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
export default AirwayPanel;
