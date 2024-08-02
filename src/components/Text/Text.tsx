import React, { ReactNode } from 'react';
import styled from 'styled-components';

export interface TextProps {
  text?: string; // Add the text prop back
  children?: ReactNode;
  size?: 'small' | 'medium' | 'large';
  bold?: boolean;
  visible?: boolean;
  backgroundColor?: string;
  disabled?: boolean;
  fontColor?: string;
  className?: string;
}

interface StyledTextProps {
  size?: 'small' | 'medium' | 'large';
  isBold?: boolean;
  backgroundColor?: string;
  disabled?: boolean;
  color?: string;
}

const StyledText = styled.span.withConfig({
  shouldForwardProp: (prop) =>
    !['isBold', 'backgroundColor', 'disabled', 'color', 'size'].includes(prop),
})<StyledTextProps>`
  font-size: ${(props) => {
    if (props.size === 'large') return '24px';
    if (props.size === 'medium') return '16px';
    return '12px';
  }};
  font-weight: ${(props) => (props.isBold ? 'bold' : 'normal')};
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  color: ${(props) => props.color || 'white'};

  @media (max-width: 1024px) {
    font-size: ${(props) => {
      if (props.size === 'large') return '20px';
      if (props.size === 'medium') return '14px';
      return '10px';
    }};
  }

  @media (max-width: 768px) {
    font-size: ${(props) => {
      if (props.size === 'large') return '18px';
      if (props.size === 'medium') return '12px';
      return '8px';
    }};
  }

  @media (max-width: 480px) {
    font-size: ${(props) => {
      if (props.size === 'large') return '16px';
      if (props.size === 'medium') return '10px';
      return '6px';
    }};
  }
`;

export const Text: React.FC<TextProps> = ({ text, children, size, bold, visible = true, backgroundColor, disabled, fontColor, className }) => {
  if (!visible) return null;
  return (
    <StyledText className={className} size={size} isBold={bold} backgroundColor={backgroundColor} disabled={disabled} color={fontColor}>
      {text || children} {/* Render text prop or children if text is not provided */}
    </StyledText>
  );
};

export default Text;
