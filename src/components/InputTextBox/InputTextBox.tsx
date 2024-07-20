import React, { useState } from 'react';
import styled from 'styled-components';
import { InputTextBoxProps } from './InputTextBox.types';

const StyledInput = styled.input<{ focused: boolean; disabled: boolean }>`
  padding: 8px;
  border: 1px solid ${({ focused }) => (focused ? 'blue' : 'grey')};
  background-color: ${({ disabled }) => (disabled ? 'lightgrey' : 'white')};
  color: ${({ disabled }) => (disabled ? 'darkgrey' : 'black')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'text')};
`;

const InputTextBox: React.FC<InputTextBoxProps> = ({ disabled = false }) => {
  const [focused, setFocused] = useState(false);

  return (
    <StyledInput
      disabled={disabled}
      focused={focused}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  );
};

export default InputTextBox;
