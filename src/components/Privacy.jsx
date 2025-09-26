import styled from "styled-components";
import React from "react";
import Footer from '../components/Footer';
import NavbarComponent from '../components/NavbarComponent';

const policies = [
  {title: "1. Information We Collect",
    content: `**Personal Information**: When you create an account, we collect your name, email address, phone number, and optionally 
    a profile picture. \n\n**Health & Fitness Data**: With your permission, we sync step counts and other health metrics from your device’s health data (Apple Health or Google Fit). \n\n**Usage Data**: We collect information about how you use the App (features used, session length, preferences).`
  },
  {title: "2. How We Use Your Data",
    content: "**To Provide the Service**: Sync and track your steps, calculate HRA Coin earnings, and display personalized challenges. \n\n**To Improve & Personalize**: Analyze usage patterns to enhance features, offer relevant challenges, and optimize performance. \n\n**Email Communications**: Send you notifications, updates, newsletters, and promotional offers (you can opt out at any time)."
  },
  {title: "3. Sharing & Disclosure",
    content: "**Third‐Party Service Providers**: We may share data with analytics or payment providers who help us run and improve the App. \n\n**Legal Requirements**: We may disclose your information if required by law or to protect our rights and safety."
  },
  {title: "4. Data Security",
    content: "We implement reasonable security measures to protect your data. However, no method of transmission over the Internet is 100% secure. Use at your own risk."
  },
  {title: "5. Your Choices",
    content: "**Account Settings**: You can update or delete your profile information at any time. \n\n**Notifications**: Opt out of marketing emails via the unsubscribe link in each email. \n\n**Data Access**: Contact us at info@hra-steps.com to request a copy or deletion of your personal data."
  },
  {title: "6. Children’s Privacy",
    content: "Our App is not directed to children under 13. We do not knowingly collect personal data from children under 13."
  },
  {title: "7. Changes to This Policy",
    content: "We may update this Privacy Policy periodically. Any changes will be effective when posted. We encourage you to review this page regularly."
  },
  {title: "8. Contact Us",
    content: "If you have questions or concerns about this policy, email us at info@hra-steps.com."
  },

]

export default function Privacy() {
  return (
    <Container>
            <NavbarComponent />
      <Overlay>
        <Header>
          <h2>Privacy Policy</h2>
          <p>At HRA Steps, we take your privacy seriously. This Privacy Policy explains how we collect, use, and share your personal data when you use our App (“HRA Steps”), our website, or any related service.</p>
        </Header>
        <PolicyContent>
          { policies.map((policy, index) => (
            <Policy key={index}>
              <PolicyTitle>{policy.title}</PolicyTitle>
              <PolicyDescription>{policy.content.split('\n').map((line, i) => {
    // Replace **bold** with <strong>
    const formattedLine = line.split(/(\*\*.*?\*\*)/g).map((part, idx) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={idx}>{part.slice(2, -2)}</strong>;
      }
      return <span key={idx}>{part}</span>;
    });

    return (
      <React.Fragment key={i}>
        {formattedLine}
        <br />
      </React.Fragment>
    );
  })}
  </PolicyDescription>
            </Policy>
          ))}

        </PolicyContent>
      </Overlay>
        <Footer />
    </Container>
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

export const PolicyContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Policy = styled.div`
  padding: 1.5rem;
  border: 1px solid #e2e2e2;
  border-radius: 1rem;
  background: #fafafa;
`;

export const PolicyTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #2c2c2c;
  margin-bottom: 0.5rem;
`;

export const PolicyDescription = styled.p`
  font-size: 0.9rem;
  color: #555;
  line-height: 1.6;
`;