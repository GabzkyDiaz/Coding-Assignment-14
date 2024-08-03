import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { MobileMenuProps } from './MobileMenu.types';

const hoverStyles = css<{ $disabled?: boolean }>`
  &:hover {
    background-color: ${(props) => (props.$disabled ? 'transparent' : '#575757')};
  }
`;

const focusStyles = css<{ $disabled?: boolean }>`
  &:focus {
    outline: ${(props) => (props.$disabled ? 'none' : '2px solid white')};
  }
`;

const MenuContainer = styled.div<{
  $isOpen: boolean;
  $disabled: boolean;
  $backgroundColor?: string;
  $visible: boolean;
}>`
  position: fixed;
  top: 0;
  left: ${(props) => (props.$isOpen ? '0' : '-100%')};
  width: 250px;
  height: 100%;
  background-color: ${(props) => (props.$disabled ? 'gray' : props.$backgroundColor || '#333')};
  transition: left 0.3s, background-color 0.3s;
  display: ${(props) => (props.$visible ? 'block' : 'none')};

  @media (max-width: 768px) {
    width: 200px;
  }

  @media (max-width: 480px) {
    width: 150px;
  }
`;

const MenuItem = styled.div<{ $disabled?: boolean; $hover?: boolean; $focus?: boolean }>`
  padding: 15px;
  color: white;
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};

  ${(props) => props.$hover && hoverStyles}
  ${(props) => props.$focus && focusStyles}
`;

const MenuButton = styled.button<{
  $backgroundColor?: string;
  $disabled: boolean;
  $hover: boolean;
}>`
  position: fixed;
  top: 10px;
  left: 10px;
  background-color: ${(props) => (props.$disabled ? 'gray' : props.$backgroundColor || '#6200ee')};
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};

  ${(props) =>
    props.$hover &&
    css<{ $disabled: boolean; $backgroundColor?: string }>`
      &:hover {
        background-color: ${(props) => (props.$disabled ? props.$backgroundColor : '#575757')};
      }
    `}

  &:focus {
    outline: 2px solid white;
  }
`;

export const MobileMenu: React.FC<MobileMenuProps> = ({
  options,
  disabled = false,
  backgroundColor,
  visible = true,
  defaultExpanded = false,
  hover = false,
  focus = false,
  className, // Add this line
}) => {
  const [isOpen, setIsOpen] = useState(defaultExpanded);

  useEffect(() => {
    setIsOpen(defaultExpanded);
  }, [defaultExpanded]);

  const toggleMenu = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  if (!visible) return null;

  return (
    <>
      <MenuButton
        onClick={toggleMenu}
        $disabled={disabled}
        $backgroundColor={backgroundColor}
        $hover={hover}
      >
        {isOpen ? 'Collapse' : 'Expand'}
      </MenuButton>
      <MenuContainer
        $isOpen={isOpen}
        $disabled={disabled}
        $backgroundColor={backgroundColor}
        $visible={visible}
        className={className} // Add this line
      >
        {options.map((option, index) => (
          <MenuItem
            key={index}
            $disabled={disabled}
            tabIndex={0}
            $hover={hover}
            $focus={focus}
          >
            {option}
          </MenuItem>
        ))}
      </MenuContainer>
    </>
  );
};

export default MobileMenu;
