import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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

const MenuSection = styled.div`
  margin-top: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
  padding-top: 1rem;
`;

const MenuSectionTitle = styled.h3`
  padding: 0.5rem 2rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`;

const LanguageButton = styled.button<{ isActive?: boolean }>`
  display: block;
  width: 100%;
  padding: 0.8rem 2rem;
  text-align: left;
  font-size: 1rem;
  background-color: transparent;
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.primary : theme.colors.black};
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
  border: none;
  cursor: pointer;
  transition: color 0.2s, font-weight 0.2s, background-color 0.2s;

  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.gray};
    color: ${({ isActive, theme }) =>
      isActive ? theme.colors.primary : theme.colors.black};
  }
`;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    closeMenu();
  };
  
  return (
    <HeaderContainer>
      <Logo to="/" onClick={closeMenu}>
        <LogoImage src={`${process.env.PUBLIC_URL}/icon_nobg.png`} alt="ReLog Logo" />
        <AppName>ReLog</AppName>
      </Logo>
      
      <HamburgerButton isOpen={isMenuOpen} onClick={toggleMenu} aria-label={t('header.menu')}>
        <span></span>
        <span></span>
        <span></span>
      </HamburgerButton>
      
      <Menu isOpen={isMenuOpen}>
        <MenuItem to="/" onClick={closeMenu}>{t('header.home')}</MenuItem>
        <MenuItem to="/privacy" onClick={closeMenu}>{t('header.privacy')}</MenuItem>
        <MenuItem to="/contact" onClick={closeMenu}>{t('header.contact')}</MenuItem>
        
        <MenuSection>
          <MenuSectionTitle>{t('header.language')}</MenuSectionTitle>
          <LanguageButton 
            onClick={() => changeLanguage('ja')} 
            isActive={i18n.language === 'ja'}
          >
            {t('languageSwitcher.ja')}
          </LanguageButton>
          <LanguageButton 
            onClick={() => changeLanguage('en')} 
            isActive={i18n.language === 'en'}
          >
            {t('languageSwitcher.en')}
          </LanguageButton>
          <LanguageButton 
            onClick={() => changeLanguage('zh')} 
            isActive={i18n.language === 'zh'}
          >
            {t('languageSwitcher.zh')}
          </LanguageButton>
        </MenuSection>
      </Menu>
    </HeaderContainer>
  );
};

export default Header;
