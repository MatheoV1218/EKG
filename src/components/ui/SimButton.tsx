import "./SimButton.css";

type SimButtonVariant =
  | "primary"
  | "secondary"
  | "danger"
  | "success"
  | "warning"
  | "ghost";
interface SimButtonProps {
  children: React.ReactNode;
  variant?: SimButtonVariant;
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}
function SimButton({
  children,
  variant = "primary",
  disabled = false,
  fullWidth = false,
  onClick,
  type = "button",
}: SimButtonProps) {
  return (
    <button
      type={type}
      className={`sim-button ${variant} ${fullWidth ? "full-width" : ""}`}
      disabled={disabled}
      onClick={onClick}
    >
      <span>{children}</span>
    </button>
  );
}
export default SimButton;
