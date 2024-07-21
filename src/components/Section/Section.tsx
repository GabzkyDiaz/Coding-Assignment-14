import React from 'react';
import styled from 'styled-components';
import { SectionProps } from './Section.types';

const StyledSection = styled.section<{ $disabled?: boolean; $backgroundColor?: string }>`
  padding: 20px;
  background-color: ${({ $backgroundColor }) => $backgroundColor || 'white'};
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'auto')};

  &:hover {
    cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'auto')};
  }

  @media (max-width: 1024px) {
    padding: 15px;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 480px) {
    padding: 5px;
  }
`;

const Section: React.FC<SectionProps> = ({ children, disabled, backgroundColor, visible = true }) => {
  if (!visible) return null;
  return (
    <StyledSection $disabled={disabled} $backgroundColor={backgroundColor}>
      {children}
    </StyledSection>
  );
};

export default Section;
