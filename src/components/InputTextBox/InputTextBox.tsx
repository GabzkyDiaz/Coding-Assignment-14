import React, { useState } from 'react';
import styled from 'styled-components';
import { InputTextBoxProps } from './InputTextBox.types';

const StyledInput = styled.input<{ $disabled?: boolean; $backgroundColor?: string; $focused?: boolean }>`
  padding: 10px;
  border: 1px solid ${({ $focused }) => ($focused ? '#007bff' : '#ccc')};
  background-color: ${({ $backgroundColor }) => $backgroundColor || 'white'};
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'text')};
  width: 100%;

  &:hover {
    cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'text')};
  }

  @media (max-width: 1024px) {
    padding: 8px;
  }

  @media (max-width: 768px) {
    padding: 6px;
  }

  @media (max-width: 480px) {
    padding: 4px;
  }
`;

const InputTextBox: React.FC<InputTextBoxProps> = ({ value, placeholder, disabled, backgroundColor, visible = true, onChange, className, required }) => {
  const [focused, setFocused] = useState(false);

  if (!visible) return null;

  return (
    <StyledInput
      type="text"
      value={value}
      placeholder={placeholder}
      $disabled={disabled}
      $backgroundColor={backgroundColor}
      $focused={focused}
      disabled={disabled}
      onChange={onChange}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      className={className}
      required={required} // Add this line
    />
  );
};

export default InputTextBox;
