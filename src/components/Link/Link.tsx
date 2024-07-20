import React from 'react';
import styled from 'styled-components';
import { LinkProps } from './Link.types';

const StyledLink = styled.a<{ disabled?: boolean }>`
  color: ${({ disabled }) => (disabled ? 'grey' : 'blue')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  text-decoration: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    text-decoration: ${({ disabled }) => (disabled ? 'none' : 'underline')};
  }
`;

const Link: React.FC<LinkProps> = ({ href, children, disabled }) => (
  <StyledLink href={disabled ? undefined : href} disabled={disabled}>
    {children}
  </StyledLink>
);

export default Link;
