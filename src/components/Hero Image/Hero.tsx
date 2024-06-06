import React from 'react';
import styled from 'styled-components';

export interface HeroProps {
  imageUrl: string;
  title: string;
  subtitle?: string;
  disabled?: boolean;
  backgroundColor?: string; // Add backgroundColor prop
  visible?: boolean; // Add visible prop
}

interface StyledHeroProps {
  imageUrl: string;
  disabled?: boolean;
  backgroundColor?: string;
  visible?: boolean; // Add visible prop to StyledHeroProps
}

const StyledHero = styled.div<StyledHeroProps>`
  display: ${(props) => (props.visible ? 'flex' : 'none')}; // Handle visibility
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative; // Ensure positioning for background layering
  color: white;
  height: 400px;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  text-align: center;
  background-color: ${(props) => props.backgroundColor || 'transparent'}; // Use backgroundColor prop
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')}; // Set cursor style based on disabled state

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
    opacity: 0.5; // Adjust as necessary to see the background color
    z-index: -1; // Ensure this layer is below the content
  }

  // Responsive styles
  @media (max-width: 1024px) {
    height: 350px;
  }

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 250px;
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

export const Hero: React.FC<HeroProps> = ({ imageUrl, title, subtitle, disabled, backgroundColor, visible = true }) => {
  console.log('backgroundColor:', backgroundColor); // Add this line for debugging
  if (!visible) return null;
  return (
    <StyledHero imageUrl={imageUrl} disabled={disabled} backgroundColor={backgroundColor} visible={visible}>
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </StyledHero>
  );
};
