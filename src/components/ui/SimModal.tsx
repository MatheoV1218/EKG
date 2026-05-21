import SimButton from "./SimButton";
import "./SimModal.css";
interface SimModalProps {
  open: boolean;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}
function SimModal({
  open,
  title,
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
}: SimModalProps) {
  if (!open) return null;
  return (
    <div className="sim-modal-backdrop">
      <div className="sim-modal">
        <span className="sim-modal-badge">Simulation Control</span>
        <h2>{title}</h2>
        <p>{message}</p>
        <div className="sim-modal-actions">
          <SimButton variant="secondary" onClick={onCancel}>
            {cancelText}
          </SimButton>
          <SimButton variant="primary" onClick={onConfirm}>
            {confirmText}
          </SimButton>
        </div>
      </div>
    </div>
  );
}
export default SimModal;
