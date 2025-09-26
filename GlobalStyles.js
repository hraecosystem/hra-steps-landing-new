// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: 'Sora', sans-serif; 
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  @media (max-width: 768px) {
  .your-container {
    flex-direction: column;
    padding: 1rem;
  }

  .hero-text {
    font-size: 1.25rem;
    text-align: center;
  }

  .button {
    width: 100%;
  }

  img {
    max-width: 100%;
    height: auto;
  }
}
  
`;


export default GlobalStyles;
