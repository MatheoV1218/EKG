import SimButton from "../ui/SimButton";
import "./MedicationPanel.css";
interface MedicationPanelProps {
  onAction?: (action: string) => void;
  disabled?: boolean;
}
const actions = [
  "Atropine",
  "Adenosine",
  "Epinephrine",
  "Albuterol",
  "Amiodarone",
];
function MedicationPanel({ onAction, disabled = false }: MedicationPanelProps) {
  return (
    <section className="sim-action-module">
      <div className="sim-action-module-header">
        <span>Intervention Set</span>
        <h2>Medications</h2>
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
export default MedicationPanel;
