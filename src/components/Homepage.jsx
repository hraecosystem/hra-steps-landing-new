import React, { useState, useEffect } from "react";
import styled, { keyframes } from 'styled-components';
import 'aos/dist/aos.css';
import { motion } from "framer-motion";
import GlobalStyles from '/GlobalStyles.js'
import Carousel from '../components/Carousel';
import NavbarComponent from '../components/NavbarComponent';
import Steps from '../components/Steps';
import Footer from '../components/Footer';

import heroImage from '../assets/hero.jpg';
import about2 from '../assets/about2.jpg';
import run from '../assets/run.jpg';
import token from '../assets/token.png';
import token2 from '../assets/token2.png';
import start2 from '../assets/start2.png';
import start3 from '../assets/start3.png';
import pink from '../assets/pink.jpg';
import appStore from '../assets/apple-store-badge.svg';
import googlePlay from '../assets/google-play-badge.svg';
import qrCode from '../assets/qrcode.png';




function App() {
  // logic to handle the navbar visibility based on scroll position
  const [isOpen, setIsOpen] = useState(false);
  const [hideNav, setHideNav] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setHideNav(true); // scroll down -> hide
      } else {
        setHideNav(false); // scroll up -> show
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  
  return (
    <>
      <GlobalStyles />

      <AppContainer>
        <NavbarComponent />
       
        <HeroContainer>
          <Overlay>
            <HeaderWrapper>
              <Header>
                <h1>Turn your steps into real money</h1>
              </Header>
              <DownloadWrapper>
                <p className='text-lg mt-4'>download now</p>
                <div className='downloadLinks'>
                  <div className='appleStore'>
                    <a href="https://apps.apple.com/ae/app/hra-step-app/id6746770273"  target="_blank">
                      <img src={appStore} alt="Download on the App Store" />
                    </a>
                  </div>
                  <div className='googlePlay'>
                    <a href="https://play.google.com/store/apps/details?id=com.hraweb3.hrastepapp&pcampaignid=web_share">
                      <img src={googlePlay} alt="Get it on Google Play" />
                    </a>
                  </div>
                  <div className='qrcode'>
                    <a href="">
                      <img src={qrCode} alt="Scan the qr code" />
                    </a>
                  </div>
                </div>
              </DownloadWrapper>
            </HeaderWrapper>
          </Overlay>
        </HeroContainer>

        <Steps />
     

        <AboutContainer id='about' >
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="aboutOverlay"></div>

            <div className="aboutContent" >
              <div className="outlinedBox" >      
                <div className="whiteBox">
                  <h2>Track your steps, conquer challenges, and earn crypto — all by just doing what you already do... walking.</h2>
                  <p>HRA-Step rewards you with crypto for every step. Complete challenges, earn HRA-Coin, and use it across the HRA ecosystem — or spend it in real life using Apple Pay.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AboutContainer>

        <TokenContainer id='token'>

          <div className='tokenBackground'>
            <Overlay>
              <div className="tokenOverlay">
                <div className="tokenImg">
                  <img src={token} alt="Token Image" />
                </div>
                <div className="tokenText">
                  <h2>HRA COIN</h2>
                  <p><Bold>HRA-Coin</Bold> is the cryptocurrency powering the HRA ecosystem — currently valued at <Bold>€0,66</Bold>.  Earn it through walking challenges, then <Bold>spend it worldwide using Apple Pay</Bold> or redeem it across HRA services like flights, hotels, and more.</p>
                </div>
                <div className="tokenButtons">
                  <button className="downloadBtn"><a href="https://apps.apple.com/ae/app/hra-step-app/id6746770273"  target="_blank"><p>Download app Now</p></a></button>

                  <button className="buyButton">
                    
                    <div className='imgDiv'><a href="https://www.hra-coin.com/"  target="_blank"><img src={token2} alt="" /></a></div>
                    <a href="https://www.hra-coin.com/"  target="_blank"><p>Buy HRA Coin</p></a>
                    
                  </button>

                </div>
              </div>
            </Overlay>
          </div>
        </TokenContainer>

        <HowToStartContainer id='howToStart'>
          <div className="content">
            <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
              <div className="topBox">
                <div className="text">
                  <h3>Challenge Yourself & Start Earning</h3>
                  <p>Pick a challenge — <Bold>Easy, Medium, or Hard</Bold> — each with a step goal and time limit. <Bold>The harder it gets, the more HRA-Coin you earn</Bold>. Walk, beat the clock, get rewarded.</p>
                </div>
                <div className="img">
                </div>
              </div>
            </motion.div>

            <div className="bottomBoxes">
              <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
                <div className="leftBox">
                  <div className="img">
                  </div>
                  <div className="text">
                    <h3>Walk. Win. Repeat.</h3>
                    <p><Bold>Lace up and get moving! </Bold>Once you start your challenge, we’ll track your steps. <Bold>Complete the goal</Bold> within the set time and you'll earn <Bold>HRA-Coin</Bold>.</p>
                  </div>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>
                <div className="rightBox">
                  <div className="img">
                  </div>
                  <div className="text">
                    <h3>Redeem Your Rewards</h3>
                    <p><Bold>Complete a challenge</Bold> and use your HRA-Coin to book flights, reserve hotels, or make payments within the HRA Ecosystem or <Bold>worldwide via Apple Pay</Bold>.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

        </HowToStartContainer>

        <EcosystemContainer id='ecosystem'>
            <div className="overlay">
              <div className="innerLayer">
                <div className="header">
                  <h2>Use Your Rewards Across the HRA Ecosystem</h2>
                  <p>Your steps don’t just earn crypto —<Bold> they unlock real-world benefits</Bold>. From <Bold>booking flights</Bold> to <Bold>paying online</Bold> and even <Bold>making everyday purchases worldwide using Apple Pay</Bold>, your movement fuels more than just fitness.</p>
                </div>
                  <Carousel />
              </div>
            </div>
        </EcosystemContainer> 

        <Footer />

      </AppContainer>
    </>


  )
}

export default App


const fadeUpStrong = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`
const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`
const Bold = styled.span`
  font-weight: 700;
`
const AppContainer = styled.div`
  width: 100%;
  height: 100vh; 
  position: relative;
  background: #000;
`
const HeroContainer = styled.section`
  width: 100%;
  height: 100vh;
  max-height: 1024px;
  background-image: url(${heroImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 440px) {
    // background-position: 40% 10%;
    background-size: 200%
  }


    @media (min-width: 441px) and (max-width: 1439p) {
      height: 115vh;
    }
`
const Overlay = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.4);



`
const HeaderWrapper = styled.div`
  display: inline-flex;
  padding: 3.25rem 39rem 5.75rem 13rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 4.5rem;


  //Phone	and tablet, laptop
@media (max-width: 1024px) {
  padding: 0;
  gap: 1rem;
}

//Desktop
@media (min-width: 1024px) and (max-width: 1439px) {
  padding: 3.25rem 35rem 5.75rem 13rem;
 width: 100%;
}



`
const Header = styled.header`
  width: 35rem;
  margin-top: 10rem;

   h1 {
    color: #92E3A9;
    background: linear-gradient(90deg, #92E3A9, #D3F4DD);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: Inter;
    font-size: 4.5rem;
    font-style: italic;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.1rem; 
    }



    //Phone
    @media (max-width: 480px) {
      width: 17rem;
      text-align: center;
      // background: red;
      margin-top: 10rem;

      h1 {
      font-size: 2.3rem;}
    }

    // tablet
    @media (min-width: 480px) and (max-width: 768px) {
      width: 26rem;

      h1 {
      font-size: 3rem;
      text-align: center;
      }
    }

    @media (min-width: 1024px) and (max-width: 1439px) {
      width: 30rem;



      h1 {
      font-size: 4rem;
      // margin-left: -10rem;

      margin-bottom: 2rem;
      }

}

`
const DownloadWrapper = styled.div`
    width: 37rem;
    height: 11.8125rem;
    border-radius: 3.125rem 0.75rem 0.75rem 0.75rem;
    border: 5px solid #FFF;
    background: rgba(0, 0, 0, 0.23);
    

    p {
      padding-top: 2.06rem;
      padding-left: 2.81rem;
      padding-bottom: 0.81rem;
      color: #FFF;
      font-family: Inter;
      font-size: 1.8rem;
      font-style: italic;
      font-weight: 500;
      line-height: normal;
      text-transform: uppercase;
    }

    .downloadLinks {
      display: flex;
      flex-direction: row;
      align-items: center;
      // justify-content: space-between;
      padding: 0rem 2.81rem 2.61rem 2.81rem;
      gap: 0.83rem;
      padding-bottom: 2.63rem;

    }

    .appleStore, 
    .googlePlay {
      width: 12.42125rem;
      height: 3.6875rem;
      flex-shrink: 0;
    }
    .qrcode {
      padding-top: 0.3rem;
      width: 3.5rem;
      height: auto;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;}
    }

    //Phone
    @media (max-width: 480px) {
      width: 17rem;
      height: 12.5rem;
      border: none;
      text-align: center;
      text-align: center;
      margin-top: 5rem;
      border-radius: 0.75rem;
      background: rgba(0, 0, 0, 0.36);
      // background: red;
      
      p {
        font-size: 1.3rem;
        padding: 1.2rem 0 1rem 0;}

      .downloadLinks {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        gap: 0;
        
      .appleStore, 
      .googlePlay {
        width: 10rem;
        margin: 0;}
      .qrcode {
        display: none;}}}

@media (min-width: 480px) and (max-width: 768px) {
    width: 23rem;
    height: 8rem;
    margin-top: 2rem;
    border: 3px solid #FFF;
    text-align: center;

      p {
        font-size: 1.5rem;
        padding-top: 1.2rem;
        padding-left: 0;}
        .appleStore, 
        .googlePlay {
        width: 8rem;
        margin: 0;}
        .qrcode {
        display: none;}
}
    @media (min-width: 1024px) and (max-width: 1439px) {
    width: 33rem;
    height: 10rem;
    border: 4px solid #FFF;
    // margin-left: -3rem;

      p {
        font-size: 1.8rem;
        padding-top: 1.5rem;
        }
        // .appleStore, 
        // .googlePlay {
        // width: 8rem;
        // }
    .qrcode {
      display: none;}

   
}


`
const AboutContainer = styled.section`
  position: relative;
  // height: 100vh;
  animation: ${fadeUpStrong} 0.6s ease-out;
  background: #000;
  background: linear-gradient(135deg, #ffffff 0%, #f4fdf8 40%, #92E3A9 100%);


  .aboutOverlay {
    position: absolute;
    inset: 0;
    z-index: 1;
    background-image: url(${about2});
    background-position: center;  
    background-size: cover;
    background-repeat: no-repeat;
    width: 60rem;
    flex-shrink: 0;
    margin: 6rem auto;
    border-radius: 1.25rem;
    border: 3px solid #000;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    

    // tablet to desktop
    @media (min-width: 769px) and (max-width: 1024px) {
        width: 42rem;
    }

    //phone to tablet
    @media (min-width: 480px) and (max-width: 768px) {
          width: 30rem;
          background-position: right;  
    } 

    @media (min-width: 380px) and (max-width: 480px) {
      width: 23rem;
      background-position: right; 
    }

    @media (min-width: 320px) and (max-width: 379px) {
          width: 20rem;
          background-position: right;  
    }

    @media (max-width: 320px) {
        width: 18rem;
        // height: 60%;
        background-position: right;
    }
  }

  .aboutContent {
    position: relative;
    z-index: 2;
    // color: black;
    padding: 1rem;
}
    .outlinedBox {
    .whiteBox {
      display: flex;
      width: 50rem;
      margin: 12.63rem auto;
      padding: 4rem 3.875rem 6.0625rem 3.875rem;
      flex-direction: column;
      align-items: center;
      border-radius: 1.25rem;
      border: 1.5px solid #414241;
      background: #FFF;
      box-shadow: 6px 6px 0px 0px #414241;


      h2 {
        color: #83cc98;
        text-align: center;
        font-size: 2rem;
        font-weight: 700;
      }
        
      p {
        // width: 50.375rem;
        // height: 6.3125rem;
        margin-top: 1rem;
        Padding: 0 3.50rem;
        color:rgb(75, 73, 73);
        text-align: center;
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.75rem; /* 140% */
        letter-spacing: 0.0625rem;
      }
    }
    
  //Desktop to xl
  @media (min-width: 1024px) and (max-width: 1439px) {
    .whiteBox {
        width: 42rem;
        padding: 4rem 2rem;

        p {
        padding: 0 2.5rem;
        }
  }}

    // tablet to desktop
    @media (min-width: 769px) and (max-width: 1024px) {
     .whiteBox {
        width:35rem;
        // background: red;
        p {
        padding: 0;
        // color: yellow;
        }
        }

}

  //phone to tablet
  @media (min-width: 480px) and (max-width: 768px) {
        .whiteBox {
        width:25rem;
        height: auto;
        padding: 4rem 2rem;

        h2{
        font-size: 1.7rem;
        }

        p {
        padding: 0 1.5rem;
        font-size: 1rem;
        line-height: 1.5rem
        }
        }
  }
@media (min-width: 380px) and (max-width: 479px) {
      .whiteBox {
        width: 20rem;
        padding: 2.5rem 1rem;

        h2 {
        font-size: 1.2rem;
        }
        p {
        padding: 0 1.5rem;
        font-size: 0.9rem;
        line-height: 1.2rem;
        }
      }
}
@media (min-width: 320px) and (max-width: 379px) {
      .whiteBox {
        width: 17.5rem;
        padding: 2.5rem 1rem;

        h2 {
        font-size: 1.2rem;
        }
        p {
        padding: 0 1.5rem;
        font-size: 0.9rem;
        line-height: 1.2rem;
        }
      }
  
}


  // small Phone
  @media (max-width: 320px) {
        .whiteBox {
         width: 15rem;
         padding: 3rem 1rem;

        h2{
        font-size: 1.2rem;
        padding: 0;
        }
        p {
        padding: 0;
        font-size: 0.9rem;
        line-height: 1rem
        }
        }
  }


`
const TokenContainer = styled.section`
    
    background-image: url(${run});
    background-position:  center ;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;


    @media (max-width: 768px) {
      background-attachment: scroll; 
      background-size: cover; 
      background-position: 73% 60%;

    }
    .tokenOverlay {
      animation: ${fadeUp} 0.6s ease-out;
      align-items: center;
      justify-content: center;
      display: flex;
      flex-direction: column;
      width: 35%;
      height: 60%;
      margin: 5rem auto;
      flex-shrink: 0;
      border-radius: 1.25rem;
      border: 1.5px solid #414241;
      box-shadow: 6px 6px 0px 0px #414241;
      padding-bottom: 2.5rem;
      background: #fff;
      animation: ${fadeUpStrong} 0.6s ease-out;


      .tokenImg {
      width: 7.89856rem;
      height: 7.875rem;
      flex-shrink: 0;
      aspect-ratio: 126.38/126.00;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }}

  .tokenText {
    h2 {
      color: #4B4B4B;
      text-align: center;
      font-size: 3rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    p {
      margin: 1rem 2.5rem;
      flex-shrink: 0;
      color: #000;
      text-align: center;
      font-size: 1.1rem;
      font-weight: 300;
      line-height: 1.6rem; 
      letter-spacing: 0.02rem;
      padding: 0 2.8rem;
    }
      
    @media (min-width: 768px) and (max-width: 1439px) {
        h2 {
        font-size: 2.5rem;}
        p {
        padding: 0 1.5rem;}
      }

      @media (min-width: 481px) and (max-width: 768px) {
        h2 {
        font-size: 2rem;}
        p {
        padding: 0 0.6rem;}
      }
      @media (min-width: 390px) and (max-width: 480px) {
        // padding: 0;
        h2 {
          font-size: 2rem;
          }

        p {
          padding: 0rem;
          font-size: 0.99rem;
        }

      }

      @media (max-width: 390px) {
        h2 {
        font-size: 2rem;}
        p {
        padding: 0;
        font-size: 0.7rem;
        }
      }

    }

    .tokenButtons {
      display: flex;
      align-items: center;  
      justify-content: center;
      gap: 1.56rem;
      margin-top: 2.5rem;

      @media (min-width: 768px) and (max-width: 1439px) {
          margin-top: 1.5rem;
      }
      @media (min-width: 480px) and (max-width: 768px) {
         margin-top: 0.6rem;
         gap: 1rem;
      }
      @media (max-width: 480px) {
        margin-top: 0.25rem;
        flex-direction: column;
        gap: 0.7rem;
      }


      .downloadBtn {
        display: inline-flex;
        padding: 1rem 1.5rem;
        justify-content: center;
        align-items: center;
        border-radius: 1.25rem;
        border: 1.5px solid #414241;
        background: #92E3A9;
        box-shadow: 4px 4px 0px 0px #414241;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          transform: scale(1.05);
        }
        p {
          color: #414241;
          font-family: Inter;
          font-size: 0.8rem;
          font-weight: 500;
          line-height: normal;
          text-transform: uppercase;
          letter-spacing: 0.025rem;
        }
      @media (min-width: 480px) and (max-width: 768px) {
         padding: 0.8rem 1.3rem;
        p {
        font-size: 0.7rem;}
      }

      @media (max-width: 480px) {
         padding: 0.6rem 1rem;
        p {
        font-size: 0.7rem;}
      }      
        
      }

      .buyButton {
        display: inline-flex;
        padding: 0.3rem 1.5rem 0.3rem 1.5rem;
        justify-content: flex-end;
        align-items: center;
        border-radius: 1.25rem;
        border: 1.5px solid #302A28;
        background: #8F7D78;
        box-shadow: 4px 4px 0px 0px #302A28;
        cursor: pointer; 
        gap: 0.31rem;
        transition: all 0.3s ease;
        &:hover {
          transform: scale(1.05);
        }
        .imgDiv {
          width: 2.1875rem;
          height: 2.1875rem;
          flex-shrink: 0;
          aspect-ratio: 1/1;
          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }

        p {
        color: #FFF;
          font-family: Inter;
          font-size: 0.8rem;
          // font-style: italic;
          font-weight: 500;
          line-height: normal;
          text-transform: uppercase;
          letter-spacing: 0.025rem;
        }
      @media (min-width: 480px) and (max-width: 768px) {
        padding: 0.13rem 1.3rem 0.13rem 1.3rem;
        .imgDiv {
          width: 1.6rem;
        }
        p {
          font-size: 0.7rem;
        }
      }

      @media (max-width: 480px) {
        padding: 0.13rem 1.3rem 0.13rem 1.3rem;
        .imgDiv {
          width: 1.6rem;
        }
        p {
          font-size: 0.7rem;
        }
      }  


      }
    }

      @media (min-width: 768px) and (max-width: 1439px) {
        width: 37rem;
      }
      @media (min-width: 480px) and (max-width: 768px) {
         width: 25rem;
      }
      @media (min-width: 390px) and (max-width: 480px) {
      width: 22rem;

    }
      @media (max-width: 390px) {
         width: 17rem;
      }


`
const HowToStartContainer = styled.section`
  width: 100%;
  display: flex;
  margin: 0 auto;

     
  .content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    margin: 7rem auto;
    // padding-top: 10rem;


    .text {    
      h3 {
        color: #83cc98;
        // color: #FFF;
        font-size: 1.4rem;
        font-weight: 700;
      }

      p {
        margin-top: 0.5rem;
        padding-right: 2.5rem;
        color: #606060;
        // color: #FFF;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5rem; 
        letter-spacing: 0.0625rem;
        }
      /// text
      //Desktop to xl
      @media (min-width: 768px) and (max-width: 1439px) {
            h3 {
            font-size: 1.3rem;
            }
            p {
            font-size: 1rem;
            }
      }


@media (min-width: 480px) and (max-width: 768px) {
            h3 {
            font-size: 1.1rem;
            }
            p {
            font-size: 0.9rem;
            }
}

//Phone
@media (max-width: 480px) {
            h3 {
            font-size: 1.1rem;
            }
            p {
            font-size: 0.9rem;
            }

}









    }    
    .topBox{
      margin-bottom: 2rem;
      display: flex;
      padding: 2.5rem 2.75rem 2.5rem 3rem;
      width: 42rem;
      flex-shrink: 0;
      border-radius: 1.25rem;
      border: 1.5px solid #1d2d22;
      background: #FFF;
      background: #fbf8f9;
      box-shadow: 6px 6px 0px 0px #1d2d22;
      transition: all 0.3s ease;

      &:hover {
      transform: scale(1.02);
      }

      @media (min-width: 780px) and (max-width: 1439px) {
            width: 42rem;
      }
      @media (max-width: 780px) {
        margin-bottom: 0;
        width: 320px;
        height: 316px;
        flex-direction: column;
        p {
        padding: 0;
        }
        .img {
          display: none;
        }
        }

        @media (min-width: 481px) and (max-width: 780px) {
          margin-bottom: 2rem;
        }

        @media (max-width: 480px) {
          h3 {
          font-size: 1.4rem;
          
        }
        p {
        font-size: 0.99rem;
        padding: 0;
        }

        }

        @media (max-width: 320px) {
          width: 18rem;
        }
      }

    .bottomBoxes {
      display: flex;
      flex-direction: row;
      align-items: center;
      // justify-content: space-between;
      gap: 1.5rem;

      @media (max-width: 780px) {
        flex-direction: column;
        gap: 2rem;
      }

      @media (max-width: 480px) {
        padding: 2rem;
      }

      @media (max-width: 320px) {
        width: 15rem;

      }
      }


      .leftBox{
        width: 20rem;
        height: 26rem;
        flex-shrink: 0;
        // margin-right: 1.5rem;
        border-radius: 1.10rem;
        border: 1.5px solid #1d2d22;
        background: #fbf8f9;
        // background: #000;
        box-shadow: 6px 6px 0px 0px #1d2d22;
        padding: 2rem 2rem 3rem 2rem;
        transition: all 0.3s ease;

        &:hover {
        transform: scale(1.02);
        }

        h3 {
          margin-top: 1.75rem;
          font-size: 1.4rem;
        }

        p {
        padding: 0;
        font-size: 1rem;
        }

        @media (max-width: 780px) {
            margin-right:0;
        }
        @media (max-width: 320px) {
          width: 18rem;
        }
        

        .img {
          // display: flex;
          width: 15.8rem;
          height: 7.5rem;
          flex-shrink: 0;
          background-image: url(${start2});
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          border-radius: 1.25rem;
          border: 1px solid #414241;

        @media (max-width: 320px) {
          width: 14rem;
          h3 {
          font-size: 1.2rem;
          }
        }

          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
      }
      .rightBox{
        width: 20rem;
        height: 26rem;
        flex-shrink: 0;
        // margin-right: 1.5rem;
        border-radius: 1.10rem;
        border: 1.5px solid #1d2d22;
        background: #fbf8f9;
        // background: #000;
        box-shadow: 6px 6px 0px 0px #1d2d22;
        padding: 2rem 1.6rem 3rem 2rem;
        transition: all 0.3s ease;

        &:hover {
        transform: scale(1.02);
        }
        
        h3 {
          margin-top: 1.75rem;
          font-size: 1.4rem;
          
        }
        p {
        padding: 0;
        font-size: 1rem;
        }

        @media (max-width: 780px) {
            margin-right:0;
        }
        @media (max-width: 320px) {
          width: 18rem;
          h3 {
          font-size: 1.2rem;
          }
        }

        .img {
          width: 15.8rem;
          height: 7.5rem;
          flex-shrink: 0;
          background-image: url(${start3});
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          border-radius: 1.25rem;
          border: 1px solid #414241;

          @media (max-width: 320px) {
          width: 14rem;
          }
          img {
            width: 100%;
            height: 100%;
            object-fit: contain;

          }
        }
      }
    }

  }

`
const EcosystemContainer = styled.section`
  width: 100%;
  margin-bottom: 7rem;
  background-image: url(${pink});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  .overlay {
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.71);
  // background-color: #000;
  padding-top: 5rem;
  
  
  }
  .innerLayer {
  display: flex;
  flex-direction: column;
  align-items: center;

    .header{
      width: 55%;
      flex-shrink: 0;
      border-radius: 1.25rem;
      padding: 3rem 3rem 2rem 3rem;
      

      h2 {
        color: #606060;
        color: #83cc98;
        text-align: center;
        font-family: Sora;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-bottom: 0.75rem;
      }
      p {
        color: #606060;
        // color: #FFF;
        padding: 0 5rem;
        text-align: center;
        font-family: Sora;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5rem; /* 140% */
        letter-spacing: 0.0625rem;
      }

      @media (min-width: 1024px) and (max-width: 1439px) {
        width: 70%;
        padding: 2rem ;

        h2 {
        font-size: 1.9rem;
        }
        p {
        font-size: 1rem;
        
        }
}

      @media (min-width: 769px) and (max-width: 1023px) {
        width: 85%;
      }

      @media (max-width: 768px) {
        width: 85%;
        padding: 2rem 1.5rem;
        h2 {
        font-size: 1.6rem;
        }
        p {
        font-size: 1rem;
        padding: 0rem;
        }
      }

      @media (max-width: 480px) {
        width: 85%;
        padding: 2rem 1rem;
        // background: red;
        h2 {
        font-size: 1.5rem;
        }
        p {
        font-size: 0.9rem;
        padding: 0.5
        }
        }

    }

    .illustrationDiv {
      width: 6rem;
      transform: translate(-29rem, -4rem);
      // transition: transform 0.3s ease; /* optional smooth transition */
      flex-shrink: 0;
      aspect-ratio: 149.24/218.15;

      img {
        width: 100%;
        height: 100%;
        transform: rotate(12deg);
  
      }
    }





  }
`
