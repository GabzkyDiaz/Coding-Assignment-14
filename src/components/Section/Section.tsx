import React from 'react';
import styled from 'styled-components';
import { SectionProps } from './Section.types';

const StyledSection = styled.section<{ $disabled?: boolean }>`
  padding: 20px;
  margin-top: 100px; /* Add top margin to prevent overlap */
  margin-bottom: 80px;
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

const Section: React.FC<SectionProps> = ({ children, disabled, visible = true, className, style }) => {
  if (!visible) return null;
  return (
    <StyledSection className={className} $disabled={disabled} style={style}>
      {children}
    </StyledSection>
  );
};

export default Section;
