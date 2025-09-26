import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
// import hraLogo from '../assets/hralogo.png';
import greenLogo from '../assets/greenLogo.png';
// import divider from '../assets/divider.png';

const originalCards = [
  {
    title: "HRA Airlines",
    short: "Book Flights with Crypto.",
    description: "Book flights with ease using HRA Airlines. Pay with cards, Tabby, or HRA Coin for exclusive discounts, and enjoy a seamless, flexible travel experience worldwide.",
    image: greenLogo,
    website: "https://www.hra-airlines.com/",
  },
  {
    title: "HRA Experience",
    short: "Reserve Now, Pay Later.",
    description: "Book luxury hotels now with up to €6,000 travel credit and pay later with HRA Experience. Enjoy the freedom to travel first and settle your balance later.",
    image: greenLogo,
    website: "https://www.hra-experience.com/",
  },
  {
    title: "HRA Epay",
    short: "Online Payments in Crypto.",
    description: "HRA ePay makes payments effortless. Shop, pay bills, and send money worldwide using cards, wallets, or crypto—all with speed, security, and flexibility.",
    image: greenLogo,
    website: "https://www.hra-epay.com/",
  },
  {
    title: "HRA Exchange",
    short: "Trade and Grow Your Assets",
    description: "Trade, buy, and sell cryptocurrencies with ease. HRA Exchange offers secure transactions, real-time rates, and a seamless experience for every investor.",
    image: greenLogo,
    website: "https://www.hra-exchange.com/",
  },
  {
    title: "Global Estates",
    short: "Buy Properties Worldwide.",
    description: "Discover global real estate opportunities with HRA Global Estates. Buy, sell, or invest in properties worldwide with expert support and trusted guidance.",
    image: greenLogo,
    website: "#ecosystem",
  },
    {
    title: "HRA Airlines",
    short: "Book Flights with Crypto.",
    description: "Book flights with ease using HRA Airlines. Pay with cards, Tabby, or HRA Coin for exclusive discounts, and enjoy a seamless, flexible travel experience worldwide.",
    image: greenLogo,
    website: "https://www.hra-airlines.com/",
  },
  {
    title: "HRA Experience",
    short: "Reserve Now, Pay Later.",
    description: "Book luxury hotels now with up to €6,000 travel credit and pay later with HRA Experience. Enjoy the freedom to travel first and settle your balance later.",
    image: greenLogo,
    website: "https://www.hra-experience.com/",
  },
  {
    title: "HRA Epay",
    short: "Online Payments in Crypto.",
    description: "HRA ePay makes payments effortless. Shop, pay bills, and send money worldwide using cards, wallets, or crypto—all with speed, security, and flexibility.",
    image: greenLogo,
    website: "https://www.hra-epay.com/",
  },
  {
    title: "HRA Exchange",
    short: "Trade and Grow Your Assets",
    description: "Trade, buy, and sell cryptocurrencies with ease. HRA Exchange offers secure transactions, real-time rates, and a seamless experience for every investor.",
    image: greenLogo,
    website: "https://www.hra-exchange.com/",
  },
  {
    title: "Global Estates",
    short: "Buy Properties Worldwide.",
    description: "Discover global real estate opportunities with HRA Global Estates. Buy, sell, or invest in properties worldwide with expert support and trusted guidance.",
    image: greenLogo,
    website: "#ecosystem",
  },
];

// 💡 Repeat cards enough to scroll forever visually
const cards = [...originalCards, ...originalCards, ...originalCards];

export default function Carousel() {
  const scrollRef = useRef(null);
  const CARD_WIDTH = 280 + 24; // Card width + gap
  const LOOP_POINT = originalCards.length * CARD_WIDTH; // Reset after 1 full cycle

  useEffect(() => {
    const scroll = scrollRef.current;
    let interval;

    const startAutoScroll = () => {
      interval = setInterval(() => {
        if (scroll) {
          // Reset scroll if passed LOOP_POINT * 2
          if (scroll.scrollLeft >= LOOP_POINT * 2) {
            scroll.scrollTo({ left: LOOP_POINT, behavior: 'auto' }); // Instant reset to mid
          } else {
            scroll.scrollBy({ left: CARD_WIDTH, behavior: 'smooth' });
          }
        }
      }, 3000);
    };

    const stopAutoScroll = () => clearInterval(interval);

    // Initial scroll to center group
    scroll.scrollLeft = LOOP_POINT;

    // Start autoplay
    startAutoScroll();

    // Pause on hover
    scroll.addEventListener('mouseenter', stopAutoScroll);
    scroll.addEventListener('mouseleave', startAutoScroll);

    return () => {
      clearInterval(interval);
      scroll.removeEventListener('mouseenter', stopAutoScroll);
      scroll.removeEventListener('mouseleave', startAutoScroll);
    };
  }, []);

  return (
    <Wrapper>
      <ScrollContainer ref={scrollRef}>
        {cards.map((card, index) => (
          <Card key={index}>
            <a href={card.website} target="_blank" rel="noopener noreferrer">
              <CardTitle>{card.title}</CardTitle>
              <CardShort>{card.short}</CardShort>
              <CardText>{card.description}</CardText>
              <CardImg><img src={card.image} alt="" /></CardImg>
            </a>
          </Card>
        ))}
      </ScrollContainer>
    </Wrapper>
  );
}



const Wrapper = styled.div`
    background: transparent;
    text-align: center;
    // background: yellow;
    margin-top: 1.5rem;
    width: 100%;
    overflow: hidden;
    position: relative;
    margin-bottom: 3rem;
    
    .overlay {
    background-color: #C5C5C580;
    
    }
`;

const Heading = styled.div`
  max-width: 700px;
  margin: 0 auto 2rem;

  h3 {
    font-size: 1.8rem;
    font-weight: 700;
    color: #1b1f3b;
  }

  p {
    font-size: 1rem;
    color: #555;
    margin-top: 0.5rem;
  }

`;

const ScrollContainer = styled.div`
  max-width: 100vw;
  display: flex;
  gap: 3rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding-bottom: 1rem;
  background: transparent;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Card = styled.div`
  flex: 0 0 280px;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 1.25rem;
  border: 1px solid #83cc98;
  box-shadow: 6px 6px 0px 0px #83cc98;
  // transition: 0.3s ease;
  text-align: left;
  position: relative;
  background: #92E3A9;
  background: #f7f9f9f6;
  background: #FFF;


  
`;

const CardTitle = styled.h4`
color: #606060;
color: #83cc98;
font-family: Sora;
font-size: 1.5rem;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-bottom: 0.25rem;

`;

const  CardShort = styled.p`
    color: #606060;
    // color: #fff;
    font-family: Sora;
    font-size: 0.9rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    margin-bottom: 0.5rem;

`
const CardText = styled.p`
  color: #606060;
  // color: #fff;
  font-size: 0.9rem;
  // font-style: normal;
  font-weight: 400;
  line-height: 1.25rem; 
  letter-spacing: 0.05rem;
  padding-right: 0rem;
  // padding-left: 0rem;
  margin-bottom:1rem;

`;

const CardImg = styled.div`
    // width: 5.6rem;
    // height: 1.5rem;
    // flex-shrink: 0;
    // aspect-ratio: 18/5;
    // background: red;
        // display: flex;
    // align-self: flex-end;
    // transform: translate(-4px , 5rem);
      // width: 200px;

    img {
    // width: 100%;
    // height: 100%;
      position: absolute;
      bottom: 1rem;
      // padding-top: 3rem;
      right: 1.5rem;
      width: 40px; 
    }


`
