export interface TextProps {
  text: string;
  size?: 'small' | 'medium' | 'large';
  bold?: boolean;
  visible?: boolean;
  backgroundColor?: string;
  disabled?: boolean;
  fontColor?: string;
  className?: string; // Add the className prop
}
