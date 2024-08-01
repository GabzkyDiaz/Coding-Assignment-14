import React from 'react';
import styled from 'styled-components';

export interface ImgProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  disabled?: boolean;
  backgroundColor?: string;
  visible?: boolean;
  className?: string;
}

interface StyledImgProps {
  width?: string;
  height?: string;
  disabled?: boolean;
  backgroundColor?: string;
  visible?: boolean;
}

const Wrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !['backgroundColor', 'visible'].includes(prop),
})<StyledImgProps>`
  display: ${(props) => (props.visible ? 'inline-block' : 'none')};
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || 'auto'};
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  position: relative;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};

  @media (max-width: 1024px) {
    width: 80%;
    height: auto;
  }

  @media (max-width: 768px) {
    width: 70%;
    height: auto;
  }

  @media (max-width: 480px) {
    width: 60%;
    height: auto;
  }
`;

const StyledImg = styled.img.withConfig({
  shouldForwardProp: (prop) => prop !== 'disabled',
})<StyledImgProps>`
  width: 100%;
  height: 100%;
  display: block;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

export const Img: React.FC<ImgProps> = ({ src, alt, width, height, disabled, backgroundColor, visible = true, className }) => {
  if (!visible) return null;
  return (
    <Wrapper
      width={width}
      height={height}
      disabled={disabled}
      backgroundColor={backgroundColor}
      visible={visible}
      className={className}
    >
      <StyledImg src={src} alt={alt} disabled={disabled} />
    </Wrapper>
  );
};

export default Img;