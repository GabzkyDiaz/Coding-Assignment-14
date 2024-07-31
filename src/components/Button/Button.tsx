import React from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  label: string;
  disabled?: boolean;
  backgroundColor?: string;
  hoverColor?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  visible?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) =>
    !['backgroundColor', 'hoverColor'].includes(prop),
})<{ disabled?: boolean, backgroundColor?: string, hoverColor?: string }>`
  background-color: ${(props) => props.backgroundColor || '#6200ee'};
  color: ${(props) => props.color || 'white'};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  font-size: 1.2rem;
  transition: color 0.3s ease, background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => !props.disabled && (props.hoverColor || '#5fe0e0')};
    color: white;
  }

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

const Button: React.FC<ButtonProps> = ({ label, disabled, backgroundColor, hoverColor, onClick, visible = true, className, type = 'button' }) => {
  if (!visible) return null;
  return (
    <StyledButton
      type={type}
      disabled={disabled}
      backgroundColor={disabled ? 'gray' : backgroundColor}
      hoverColor={hoverColor}
      onClick={onClick}
      className={className}
    >
      {label}
    </StyledButton>
  );
};

export default Button;
