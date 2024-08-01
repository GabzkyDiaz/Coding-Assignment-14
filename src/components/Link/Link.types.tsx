export interface LinkProps {
  href: string;
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  visible?: boolean;
  backgroundColor?: string;
  className?: string; // Add this line
}
