export interface SectionProps {
  children: React.ReactNode;
  disabled?: boolean;
  backgroundColor?: string;
  visible?: boolean;
  className?: string; // Add the className prop
  style?: React.CSSProperties; // Add the style property
}
