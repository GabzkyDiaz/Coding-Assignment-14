export interface ButtonProps {
  label: string;
  disabled?: boolean;
  backgroundColor?: string;
  hoverColor?: string; // Add hoverColor prop
  onClick?: () => void;
  visible?: boolean; // Add visible prop
}
