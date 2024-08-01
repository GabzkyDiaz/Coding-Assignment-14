export interface InputTextBoxProps {
  value: string;
  placeholder?: string;
  disabled?: boolean;
  backgroundColor?: string;
  visible?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  required?: boolean; // Add this line
}
