import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import stepsLogo from "../assets/logo3.png";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setHideNav(true);
      } else {
        setHideNav(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavWrapper className={hideNav ? "hidden" : ""}>
      <Navbar>
        {/* Logo */}
        <div className="logoDiv">
          <div className="imgDiv">
            <img src={stepsLogo} alt="Logo" />
          </div>
          <div className="logoText">
            <a href="https://www.hra-steps.com">
              <p>HRA Step</p>
            </a>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="navbarLinks desktop">
          <a href="#about">About</a>
          <a href="#token">Token</a>
          <a href="#howToStart">How to start</a>
          <a href="#ecosystem">Ecosystem</a>
        </div>

        {/* Desktop Buttons */}
        <div className="navbar__actions desktop">
          <button className="downloadButton">
            <a
              href="https://apps.apple.com/ae/app/hra-step-app/id6746770273"
              target="_blank"
              rel="noreferrer"
            >
              Download App
            </a>
          </button>
          <button className="buyCoinButton">
            <a
              href="https://www.hra-coin.com/"
              target="_blank"
              rel="noreferrer"
            >
              Buy HRA Coin
            </a>
          </button>
        </div>

        {/* Burger Icon */}
        <div className="burger" onClick={() => setIsOpen(!isOpen)}>☰</div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mobileMenu">
            <a href="#about">About</a>
            <a href="#token">Token</a>
            <a href="#howToStart">How to start</a>
            <a href="#ecosystem">Ecosystem</a>
            <button className="downloadButton">Download App</button>
            <button className="buyCoinButton">Buy HRA Coin</button>
          </div>
        )}
      </Navbar>
    </NavWrapper>
  );
};

export default NavbarComponent;

const NavWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  transition: transform 0.5s ease-in-out;

  &.hidden {
    transform: translateY(-100%);
  }
`;

const Navbar = styled.nav`
  height: 5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 2rem;
  color: #fff;
  transition: all 0.3s ease;
  z-index: 999;

  @media (max-width: 768px) {
    padding-left: 3rem;
    padding-right: 2rem;
    justify-content: space-between;

    .imgDiv {
      display: none;
    }
  }

  //desktop to tablet
  @media (min-width: 768px) and (max-width: 1024px) {
    padding-left: 3rem;
    padding-right: 3rem;
    justify-content: space-between;

    .imgDiv {
      display: none;
    }
  }

    @media (min-width: 1441px)  {
    // background: pink; 
    }

  .logoDiv {
    display: flex;
    align-items: center;
    gap: 0.9rem;

    .imgDiv {
      width: 3.5rem;
      aspect-ratio: 1/1;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .logoText {
      width: 10rem;
      display: flex;
      align-items: center;
    }

    p {
      color: #FFF;
      color: #92E3A9;
      font-family: Inter;
      font-size: 1.5rem;
      font-style: italic;
      font-weight: 700;
      text-transform: uppercase;
      // margin-top: 0.5rem;
      cursor: pointer;
      transition: color 0.3s ease;

      @media (max-width: 1024px) {
      margin-top: 0;
      }

    }

    &:hover p {
      color: #92E3A9;
    }
  }

  /* Desktop Links */
  .navbarLinks,
  .navbar__actions {
    display: flex;
    gap: 0.5rem;
  }

  .navbarLinks a {
    color: #FFF;
    font-family: Inter;
    font-size: 0.9rem;
    font-style: italic;
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 1.5rem;
    transition: all 0.3s ease;

    @media (min-width: 1441px)  {
      font-size: 1rem;
    }
  }

  .navbarLinks a:hover {
    color: #92E3A9;
    text-shadow: 0 0 10px #00ff88;
    transform: translateY(-3px);
  }

  /* Desktop Buttons */

  .navbar__actions {
    // margin-right: 2rem;
    gap: 0;

  }

  .downloadButton {
    width: 12rem;
    height: 2.8rem;
    color: #73BE88;
    font-family: Inter;
    font-size: 0.9rem;
    font-style: italic;
    font-weight: 800;
    text-transform: uppercase;
    background: transparent;
    border-radius: 0.5rem;
    border: 3px solid #73BE88;
    cursor: pointer;
    margin-right: 2rem;
    transition: all 0.3s ease;
    // margin-top: 0.8rem;

    &:hover {
      background-color: #73BE88;
      color: #FFF;
    }

    @media (min-width: 1025px) and (max-width: 1440px) {
    width: 11rem;
    }
  }

  .buyCoinButton {
    color: #FFF;
    font-family: Inter;
    font-size: 0.9rem;
    font-style: italic;
    font-weight: 700;
    text-transform: uppercase;
    background: transparent;
    border: none;
    cursor: pointer;
    // margin-top: 0.8rem;

    &:hover {
      color: #92E3A9;
    }
  }

  /* Mobile */
  .burger {
    display: none;
    font-size: 1.5rem;
    cursor: pointer;
    
  }

  .mobileMenu {
    position: absolute;
    top: 100%;
    height: 100vh;
    left: 0;
    right: 0;
    // botton: 0;1
    background-color: rgba(0, 0, 0, 0.84);
    backdrop-filter: blur(8px);
    display: flex;
    flex-direction: column;
    padding: 2rem;
    gap: 1rem;


    a {
    color: #FFF;
    font-family: Inter;
    font-size: 0.9rem;
    font-style: italic;
    font-weight: 600;
    text-transform: uppercase;

    

    @media (min-width: 768px)  {
      font-size: 1rem;
    }
    }

    button {
      font-family: Inter;
      // margin: 0;
      // padding: 0;
      border: none;
      background: none;
      color: #FFF;
    text-align: left;

    }
    .downloadButton {
      margin: 0;
      padding-left: 1rem;
      background: #00c37e;
    }
    .buyCoinButton {
      color: #FFF;
    
    }
  }

  @media (max-width: 1024px) {
    .desktop {
      display: none;
    }

    .burger {
      display: block;
    }
  }
`;
