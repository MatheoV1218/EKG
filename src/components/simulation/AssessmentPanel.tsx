import SimButton from "../ui/SimButton";
import "./AssessmentPanel.css";
interface AssessmentPanelProps {
  onAction?: (action: string) => void;
  disabled?: boolean;
}
const actions = [
  "Check Pulse",
  "Assess Breathing",
  "Check Blood Pressure",
  "Assess Mental Status",
  "Reassess Response",
];
function AssessmentPanel({ onAction, disabled = false }: AssessmentPanelProps) {
  return (
    <section className="sim-action-module">
      <div className="sim-action-module-header">
        <span>Intervention Set</span>
        <h2>Assessment</h2>
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
export default AssessmentPanel;
