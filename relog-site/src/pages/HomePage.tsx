import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

const HomeContainer = styled.div`
  padding-top: 5rem; /* Space for fixed header */
  background-color: ${({ theme }) => theme.colors.white};
`;

const Hero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
`;

const Catchphrase = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2.5rem;
  }
`;

const AppDescription = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto 2rem;
`;

const FeatureSection = styled.section`
  padding: 3rem 2rem;
  background-color: ${({ theme }) => theme.colors.gray};
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`;

const FeatureList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const FeatureItem = styled.li`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const FeatureTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
`;

const DownloadSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
`;

const AppStoreLink = styled.a`
  display: inline-block;
  transition: transform 0.2s;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const AppStoreImage = styled.img`
  height: 3rem;
`;

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  
  // Define the features array with type annotation
  const features = t('homePage.featureSection.features', { returnObjects: true }) as { title: string; description: string }[];
  
  return (
    <HomeContainer>
      <Helmet>
        <title>{t('homePage.title')}</title>
        <meta name="description" content={t('homePage.meta.description')} />
        <meta property="og:title" content={t('homePage.title')} />
        <meta property="og:description" content={t('homePage.meta.description')} />
        <meta property="og:image" content="/icon_nobg.png" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <Hero>
        <Catchphrase>{t('homePage.catchphrase')}</Catchphrase>
        <AppDescription>
          {t('homePage.appDescription')}
        </AppDescription>
        <AppStoreLink href="https://apps.apple.com/jp/app/relog/id1234567890" target="_blank" rel="noopener noreferrer">
          <AppStoreImage src={`${process.env.PUBLIC_URL}/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg`} alt={t('homePage.appStoreAlt')} />
        </AppStoreLink>
      </Hero>
      
      <FeatureSection>
        <SectionTitle>{t('homePage.featureSection.title')}</SectionTitle>
        <FeatureList>
          {features.map((feature, index) => (
            <FeatureItem key={index}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>
                {feature.description}
              </FeatureDescription>
            </FeatureItem>
          ))}
        </FeatureList>
      </FeatureSection>
      
      <DownloadSection>
        <SectionTitle>{t('homePage.downloadSection.title')}</SectionTitle>
        <AppStoreLink href="https://apps.apple.com/jp/app/relog/id1234567890" target="_blank" rel="noopener noreferrer">
          <AppStoreImage src={`${process.env.PUBLIC_URL}/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg`} alt={t('homePage.appStoreAlt')} />
        </AppStoreLink>
      </DownloadSection>
    </HomeContainer>
  );
};

export default HomePage;
