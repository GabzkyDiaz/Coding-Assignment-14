export interface InputTextBoxProps {
  value: string;
  placeholder?: string;
  disabled?: boolean;
  backgroundColor?: string;
  visible?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
