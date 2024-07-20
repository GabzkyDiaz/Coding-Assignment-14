import React from 'react';
import styled from 'styled-components';
import { SectionProps } from './Section.types';

const StyledSection = styled.div<{ disabled?: boolean }>`
  background-color: ${({ disabled }) => (disabled ? 'lightgrey' : 'white')};
  padding: 16px;
  border: ${({ disabled }) => (disabled ? '1px solid grey' : '1px solid black')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

const Section: React.FC<SectionProps> = ({ children, disabled }) => (
  <StyledSection disabled={disabled}>{children}</StyledSection>
);

export default Section;
