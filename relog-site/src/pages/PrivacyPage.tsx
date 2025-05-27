import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

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
  return (
    <PageContainer>
      <Helmet>
        <title>プライバシーポリシー | ReLog</title>
        <meta name="description" content="ReLogのプライバシーポリシーについてのページです。" />
      </Helmet>
      
      <PageTitle>Privacy Policy</PageTitle>
      <Content>
        <p style={{ textAlign: 'left', whiteSpace: 'pre-line' }}>
          This privacy policy applies to the ReLog app (hereby referred to as "Application") for mobile devices that was created by WEIHISANG LIN (hereby referred to as "Service Provider") as a Free service. This service is intended for use "AS IS".

          <br /><br />
          <b>What information does the Application obtain and how is it used?</b>
          <br />The Application does not obtain any information when you download and use it. Registration is not required to use the Application.

          <br /><br />
          <b>Does the Application collect precise real time location information of the device?</b>
          <br />This Application does not collect precise information about the location of your mobile device.

          <br /><br />
          <b>Do third parties see and/or have access to information obtained by the Application?</b>
          <br />Since the Application does not collect any information, no data is shared with third parties.

          <br /><br />
          <b>What are my opt-out rights?</b>
          <br />You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.

          <br /><br />
          <b>Children</b>
          <br />The Application is not used to knowingly solicit data from or market to children under the age of 13.
          <br />The Service Provider does not knowingly collect personally identifiable information from children. The Service Provider encourages all children to never submit any personally identifiable information through the Application and/or Services. The Service Provider encourage parents and legal guardians to monitor their children's Internet usage and to help enforce this Policy by instructing their children never to provide personally identifiable information through the Application and/or Services without their permission. If you have reason to believe that a child has provided personally identifiable information to the Service Provider through the Application and/or Services, please contact the Service Provider via the <Link to="/contact" style={{ color: '#FF75B2', textDecoration: 'underline' }}>Contact page</Link> so that they will be able to take the necessary actions. You must also be at least 16 years of age to consent to the processing of your personally identifiable information in your country (in some countries we may allow your parent or guardian to do so on your behalf).

          <br /><br />
          <b>Security</b>
          <br />The Service Provider is concerned about safeguarding the confidentiality of your information. However, since the Application does not collect any information, there is no risk of your data being accessed by unauthorized individuals.

          <br /><br />
          <b>Changes</b>
          <br />This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to their Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.
          <br />This privacy policy is effective as of 2025-06-01

          <br /><br />
          <b>Your Consent</b>
          <br />By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by the Service Provider.

          <br /><br />
          <b>Contact Us</b>
          <br />If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via the <Link to="/contact" style={{ color: '#FF75B2', textDecoration: 'underline' }}>Contact page</Link>.
        </p>
      </Content>
    </PageContainer>
  );
};

export default PrivacyPage;
