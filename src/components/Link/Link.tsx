import React from 'react';
import styled from 'styled-components';
import { LinkProps } from './Link.types';

const Wrapper = styled.div<{ $visible?: boolean; $backgroundColor?: string; disabled?: boolean }>`
  display: ${({ $visible }) => ($visible ? 'inline-block' : 'none')};
  background-color: ${({ $backgroundColor }) => $backgroundColor || 'transparent'};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const StyledLink = styled.a<{ disabled?: boolean }>`
  color: ${({ disabled }) => (disabled ? 'grey' : 'white')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  text-decoration: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  outline: none; /* Remove default focus outline */
  border: none; /* Remove default border */
  background: none; /* Remove default background */
  margin-top: 10px; /* Add this line for spacing */  

  &:hover {
    text-decoration: ${({ disabled }) => (disabled ? 'none' : 'underline')};
  }

  &:focus {
    outline: none; /* Remove focus outline */
  }
`;

const Link: React.FC<LinkProps> = ({ href, children, disabled, onClick, visible = true, backgroundColor, className }) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (disabled) {
      event.preventDefault();
    } else if (event.ctrlKey || event.metaKey || event.shiftKey) {
      // Allow default behavior for Ctrl+Click, Cmd+Click, and Shift+Click
      return;
    } else {
      const isInCanvas = event.nativeEvent.isTrusted;
      if (!isInCanvas) {
        event.preventDefault();
      }
    }

    if (onClick) {
      onClick(event);
    }
  };

  return (
    <Wrapper $visible={visible} $backgroundColor={backgroundColor} disabled={disabled}>
      <StyledLink
        href={disabled ? undefined : href}
        target={disabled ? undefined : '_blank'}
        rel={disabled ? undefined : 'noopener noreferrer'}
        disabled={disabled}
        onClick={handleClick}
        className={className} // Add this line
      >
        {children}
      </StyledLink>
    </Wrapper>
  );
};

export default Link;
