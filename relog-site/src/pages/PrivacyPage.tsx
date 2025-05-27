import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PageContainer = styled.div`
  padding: 8rem 2rem 4rem;
  max-width: 800px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.white};
`;

const PageTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`;

const Content = styled.div`
  font-size: 1.1rem;
  text-align: center;
`;

const PrivacyPage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <PageContainer>
      <Helmet>
        <title>{t('privacyPage.title')}</title>
        <meta name="description" content={t('privacyPage.meta.description')} />
      </Helmet>
      
      <PageTitle>{t('privacyPage.policyTitle')}</PageTitle>
      <Content>
        <p style={{ textAlign: 'left', whiteSpace: 'pre-line' }}>
          {t('privacyPage.policyIntro')}

          <br /><br />
          <b>{t('privacyPage.sections.information.title')}</b>
          <br />{t('privacyPage.sections.information.content')}

          <br /><br />
          <b>{t('privacyPage.sections.location.title')}</b>
          <br />{t('privacyPage.sections.location.content')}

          <br /><br />
          <b>{t('privacyPage.sections.thirdParty.title')}</b>
          <br />{t('privacyPage.sections.thirdParty.content')}

          <br /><br />
          <b>{t('privacyPage.sections.optOut.title')}</b>
          <br />{t('privacyPage.sections.optOut.content')}

          <br /><br />
          <b>{t('privacyPage.sections.children.title')}</b>
          <br />{t('privacyPage.sections.children.content')}

          <br /><br />
          <b>{t('privacyPage.sections.security.title')}</b>
          <br />{t('privacyPage.sections.security.content')}

          <br /><br />
          <b>{t('privacyPage.sections.changes.title')}</b>
          <br />{t('privacyPage.sections.changes.content')}

          <br /><br />
          <b>{t('privacyPage.sections.consent.title')}</b>
          <br />{t('privacyPage.sections.consent.content')}

          <br /><br />
          <b>{t('privacyPage.sections.contact.title')}</b>
          <br />{t('privacyPage.sections.contact.content')}
          <Link to="/contact" style={{ color: '#FF75B2', textDecoration: 'underline' }}>{t('header.contact')}</Link>
        </p>
      </Content>
    </PageContainer>
  );
};

export default PrivacyPage;
