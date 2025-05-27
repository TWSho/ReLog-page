import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const HomeContainer = styled.div`
  padding-top: 5rem; /* Space for fixed header */
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
  return (
    <HomeContainer>
      <Helmet>
        <title>ReLog - 大切な人との思い出を、ずっと記録に。</title>
        <meta name="description" content="恋愛ログアプリ「ReLog」は、交際期間やイベントを簡単に記録・振り返りできるアプリです。" />
        <meta property="og:title" content="ReLog - 大切な人との思い出を、ずっと記録に。" />
        <meta property="og:description" content="恋愛ログアプリ「ReLog」は、交際期間やイベントを簡単に記録・振り返りできるアプリです。" />
        <meta property="og:image" content="/icon_nobg.png" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <Hero>
        <Catchphrase>大切な人との思い出を、ずっと記録に。</Catchphrase>
        <AppDescription>
          ReLogは、交際期間やイベントを簡単に記録・振り返りできる恋愛ログアプリです。
        </AppDescription>
        <AppStoreLink href="https://apps.apple.com/jp/app/relog/id1234567890" target="_blank" rel="noopener noreferrer">
          <AppStoreImage src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" alt="App Storeからダウンロード" />
        </AppStoreLink>
      </Hero>
      
      <FeatureSection>
        <SectionTitle>ReLogの特徴</SectionTitle>
        <FeatureList>
          <FeatureItem>
            <FeatureTitle>関係の管理</FeatureTitle>
            <FeatureDescription>
              大切な関係（Relationship）を簡単に登録・編集・削除できます。
            </FeatureDescription>
          </FeatureItem>
          <FeatureItem>
            <FeatureTitle>交際期間のカウント</FeatureTitle>
            <FeatureDescription>
              交際期間を日数/年月日で自動計算。非表示にすることも可能です。
            </FeatureDescription>
          </FeatureItem>
          <FeatureItem>
            <FeatureTitle>イベント記録</FeatureTitle>
            <FeatureDescription>
              記念日や大切な出来事を記録して、いつでも振り返ることができます。
            </FeatureDescription>
          </FeatureItem>
          <FeatureItem>
            <FeatureTitle>タイムライン表示</FeatureTitle>
            <FeatureDescription>
              登録したイベントを時系列で一覧表示。思い出を簡単に振り返れます。
            </FeatureDescription>
          </FeatureItem>
          <FeatureItem>
            <FeatureTitle>終了日設定</FeatureTitle>
            <FeatureDescription>
              交際終了日を設定すると、カウントが自動的に停止します。
            </FeatureDescription>
          </FeatureItem>
        </FeatureList>
      </FeatureSection>
      
      <DownloadSection>
        <SectionTitle>さっそく使ってみる</SectionTitle>
        <AppStoreLink href="https://apps.apple.com/jp/app/relog/id1234567890" target="_blank" rel="noopener noreferrer">
          <AppStoreImage src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" alt="App Storeからダウンロード" />
        </AppStoreLink>
      </DownloadSection>
    </HomeContainer>
  );
};

export default HomePage;
