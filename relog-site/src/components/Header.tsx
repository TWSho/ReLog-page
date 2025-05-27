import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LogoImage = styled.img`
  height: 2.5rem;
`;

const AppName = styled.h1`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`;

const HamburgerButton = styled.button<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 2rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 10;
  position: relative;
  
  span {
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: all 0.3s ease-in-out;
    position: absolute;
    left: 0;
    
    &:nth-child(1) {
      top: 0;
      transform: ${({ isOpen }) => isOpen ? 'translateY(0.7rem) rotate(45deg)' : 'none'};
    }
    
    &:nth-child(2) {
      top: 0.7rem;
      opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
    }
    
    &:nth-child(3) {
      top: 1.4rem;
      transform: ${({ isOpen }) => isOpen ? 'translateY(-0.7rem) rotate(-45deg)' : 'none'};
    }
  }
  }
`;

const Menu = styled.nav<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 250px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
  padding-top: 5rem;
  transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
`;

const MenuItem = styled(Link)`
  display: block;
  padding: 1rem 2rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.black};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray};
  }
`;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <HeaderContainer>
      <Logo to="/" onClick={closeMenu}>
        <LogoImage src="/icon_nobg.png" alt="ReLog Logo" />
        <AppName>ReLog</AppName>
      </Logo>
      
      <HamburgerButton isOpen={isMenuOpen} onClick={toggleMenu} aria-label="メニューを開く">
        <span></span>
        <span></span>
        <span></span>
      </HamburgerButton>
      
      <Menu isOpen={isMenuOpen}>
        <MenuItem to="/" onClick={closeMenu}>ホーム</MenuItem>
        <MenuItem to="/privacy" onClick={closeMenu}>プライバシーポリシー</MenuItem>
        <MenuItem to="/contact" onClick={closeMenu}>お問い合わせ</MenuItem>
      </Menu>
    </HeaderContainer>
  );
};

export default Header;
