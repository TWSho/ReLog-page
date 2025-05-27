import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const PageContainer = styled.div`
  padding: 8rem 2rem 4rem;
  max-width: 800px;
  margin: 0 auto;
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
  return (
    <PageContainer>
      <Helmet>
        <title>プライバシーポリシー | ReLog</title>
        <meta name="description" content="ReLogのプライバシーポリシーについてのページです。" />
      </Helmet>
      
      <PageTitle>プライバシーポリシー</PageTitle>
      <Content>
        <p>準備中</p>
      </Content>
    </PageContainer>
  );
};

export default PrivacyPage;
