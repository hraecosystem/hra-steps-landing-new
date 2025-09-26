import React from 'react'
import styled from 'styled-components';
import Footer from '../components/Footer';
import NavbarComponent from '../components/NavbarComponent';
export default function Terms() {

const terms = [
  {
    title: "1. Acceptance of Terms",
    description: "By downloading, installing, or using the HRA Steps application (the “App”), you agree to these Terms. If you do not agree, please do not use the App.",
  },
    {
    title: "2. User Eligibility",
    description: "You must be at least 18 years old to use the App. By using the App, you represent and warrant that you are at least 18 years old.",
  },
    {
    title: "3. User Accounts",
    description: "To access certain features, you may be required to create an account. You agree to provide accurate, current, and complete information. You are responsible for safeguarding your account credentials and for any activity under your account.",
  },
    {
    title: "4. Earning HRA Coins",
    description: "HRA Coins are virtual tokens you earn by tracking your steps through the App. The rate of earning and redemption of HRA Coins is determined by us and may change at any time.",
  },
    {
    title: "5. Use of the App",
    description: "You agree not to use the App for any illegal or unauthorized purpose. You will not attempt to disrupt or interfere with the proper functioning of the App.",
  },
    {
    title: "6. Intellectual Property",
    description: "All content, features, and functionality of the App are owned by HRA Experience or its licensors and are protected by copyright, trademark, and other intellectual property laws.",
  },
    {
    title: "7. Termination",
    description: "We may suspend or terminate your access to the App at any time, with or without cause or notice.",
  },
    {
    title: "8. Limitation of Liability",
    description: "In no event shall HRA Experience be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the App.",
  },  
  {
    title: "9. Changes to These Terms",
    description: "We reserve the right to modify these Terms at any time. Any changes will be effective upon posting, and your continued use of the App after such changes constitutes your acceptance.",
  },  
  {
    title: "10. Contact Us",
    description: "For questions about these Terms, please contact us at info@hra-steps.com.",
  },
];

  return (
    <div>
      <NavbarComponent />
        <Container>
            <Overlay>
                <Header>
                    <h2>Terms & Conditions</h2>
                    <p>Welcome to HRA Steps. These Terms & Conditions (the “Terms”) govern your use of our website and mobile application. By accessing or using HRA Steps, you agree to comply with and be bound by these Terms.</p>
                </Header>
                <TermsContent>
                    {terms.map((term, index) => (
                        <Term key={index}>
                            <TermTitle>{term.title}</TermTitle>
                            <TermDescription>{term.description}</TermDescription>
                        </Term>
                    ))}

                </TermsContent>
            </Overlay>
        </Container>
        <Footer />
    </div>
  )
}


export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 5rem 1rem;
  background: #f8f9fa;
  // font-family: 
  @media (min-width: 768px) {
    padding: 6rem 4rem;
  }
`;

export const Overlay = styled.div`
  max-width: 900px;
  margin: 0 auto;
  background: #fff;
  border-radius: 1.5rem;
  padding: 3rem 2rem;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);

  @media (min-width: 768px) {
    padding: 4rem;
  }
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h2 {
    font-size: 2.4rem;
    color: #202020;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    color: #4b4b4b;
    line-height: 1.7;
    max-width: 700px;
    margin: 0 auto;
  }
`;

export const TermsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Term = styled.div`
  padding: 1.5rem;
  border: 1px solid #e2e2e2;
  border-radius: 1rem;
  background: #fafafa;
`;

export const TermTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #2c2c2c;
  margin-bottom: 0.5rem;
`;

export const TermDescription = styled.p`
  font-size: 0.9rem;
  color: #555;
  line-height: 1.6;
`;