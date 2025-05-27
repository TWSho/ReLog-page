import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

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

const ContactPage: React.FC = () => {
  return (
    <PageContainer>
      <Helmet>
        <title>お問い合わせ | ReLog</title>
        <meta name="description" content="ReLogへのお問い合わせページです。" />
      </Helmet>
      
      <PageTitle>お問い合わせ</PageTitle>
      <Content>
        <p>準備中</p>
      </Content>
    </PageContainer>
  );
};

export default ContactPage;
