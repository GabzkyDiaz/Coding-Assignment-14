import styled from 'styled-components';

export interface ButtonProps {
  label: string;
  disabled?: boolean;
  backgroundColor?: string;
  hoverColor?: string; // Add hoverColor prop
  onClick?: () => void;
  visible?: boolean; // Add visible prop
}

interface StyledButtonProps {
  backgroundColor?: string;
  disabled?: boolean;
  hoverColor?: string; // Add hoverColor prop
}

const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${(props) => props.backgroundColor || '#6200ee'};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  font-size: 1.2rem; /* Default font size */

  &:hover {
    background-color: ${(props) => !props.disabled && (props.hoverColor || '#3700b3')}; // Change background color on hover if not disabled
  }

  /* Responsive styles */
  @media (max-width: 1024px) {
    padding: 8px 18px;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    padding: 6px 16px;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 4px 14px;
    font-size: 0.8rem;
  }
`;

export const Button: React.FC<ButtonProps> = ({ label, disabled, backgroundColor, hoverColor, onClick, visible = true }) => {
  if (!visible) return null;
  return (
    <StyledButton 
      disabled={disabled} 
      backgroundColor={backgroundColor} 
      hoverColor={hoverColor} // Pass hoverColor prop
      onClick={onClick}
    >
      {label}
    </StyledButton>
  );
};
