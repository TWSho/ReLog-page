import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const FooterContainer = styled.footer`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.white};
  text-align: center;
  border-top: 1px solid #eee;
`;

const FooterLogo = styled.img`
  height: 2rem;
  margin-bottom: 1rem;
`;

const Copyright = styled.p`
  font-size: 0.875rem;
  color: #666;
`;

const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <FooterContainer>
      <FooterLogo src={`${process.env.PUBLIC_URL}/icon_nobg.png`} alt="ReLog Logo" />
      <Copyright>{t('footer.copyright')}</Copyright>
    </FooterContainer>
  );
};

export default Footer;
