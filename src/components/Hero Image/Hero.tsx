import React from 'react';
import styled from 'styled-components';

export interface HeroProps {
  imageUrl: string;
  title: string;
  subtitle?: string;
  disabled?: boolean;
  backgroundColor?: string;
  visible?: boolean;
  className?: string;
  children?: React.ReactNode;
}

interface StyledHeroProps {
  imageUrl: string;
  disabled?: boolean;
  backgroundColor?: string;
  visible?: boolean;
}

const StyledHero = styled.div.withConfig({
  shouldForwardProp: (prop) => !['imageUrl', 'backgroundColor', 'visible', 'disabled'].includes(prop),
})<StyledHeroProps>`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  color: white;
  min-height: 400px; /* Ensure it occupies space like a section */
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  text-align: center;
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  margin-bottom: 0; /* Ensure no overlap with the next section */

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${(props) => props.imageUrl});
    background-size: cover;
    background-position: center;
    opacity: 0.5;
    z-index: -1;
  }

  @media (max-width: 1024px) {
    min-height: 350px;
  }

  @media (max-width: 768px) {
    min-height: 300px;
  }

  @media (max-width: 480px) {
    min-height: 250px;
  }
`;

const Title = styled.h1`
  font-size: 3em;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2.5em;
  }

  @media (max-width: 480px) {
    font-size: 2em;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.5em;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.2em;
  }

  @media (max-width: 480px) {
    font-size: 1em;
  }
`;

export const Hero: React.FC<HeroProps> = ({ imageUrl, title, subtitle, disabled, backgroundColor, visible = true, className, children }) => {
  if (!visible) return null;
  return (
    <StyledHero
      imageUrl={imageUrl}
      disabled={disabled}
      backgroundColor={backgroundColor}
      visible={visible}
      className={className}
    >
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      {children}
    </StyledHero>
  );
};

export default Hero;
