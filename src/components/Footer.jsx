import React from 'react'
import styled from 'styled-components';

export default function Footer() {
  return (
    <Wrapper>
      <div className='top'>
        <div className="left">
          <div className='borderDiv'>
            <svg xmlns="http://www.w3.org/2000/svg" width="237" height="91" viewBox="0 0 237 91" fill="none">
              <path d="M234.5 2.5L20.5 16L2.5 89L229 82L234.5 2.5Z" stroke="white" strokeWidth="3" />
            </svg>
          </div>

          <div className="logoDiv">
            <button>
              <p>HRA Step</p>
            </button>
          </div>

        </div>
        <div className="right">
          <div className="footerLinks">
            <div>
              <h4 className='links'>Quick Links</h4>
              <p><a href="https://apps.apple.com/ae/app/hra-step-app/id6746770273" target="_blank">Download the App</a></p>
              <p><a href="#token">Home</a></p>
              <p><a href="#howToStart">How to start</a></p>
              <p><a href="https://www.hra-coin.com/" target="_blank">HRA Coin</a></p>
              <p><a href="#ecosystem">Ecosystem</a></p>
            </div>

            <div className='ecosystem'>
              <h4 > Ecosystem</h4>
              <p><a href="https://www.hra-airlines.com/" target="_blank">HRA Airlines</a></p>
              <p><a href="https://www.hra-experience.com/" target="_blank">HRA Experience</a></p>
              <p><a href="https://www.hra-epay.com/" target="_blank">HRA Epay</a></p>
              <p><a href="https://www.hra-exchange.com/" target="_blank">HRA Exchange</a></p>
              <p><a href="#ecosystem">HRA Global Estates</a></p>
            </div>

            <div>
              <h4>Company</h4>
              <p><a href="#about">About</a></p>
              <p><a href="#token">Contact</a></p>
              <p><a href="#howToStart">Careers</a></p>
            </div>

            <div>
              <h4>Information</h4>
              {/* <p><a href="#about">Paper</a></p>
                <p><a href="">Terms & Conditions</a></p>
                <p><Link to="/privacy">Privacy Policy</Link></p> */}
              <p><a href="https://hra-whitepaper.gitbook.io/hra-whitepaper" target="_blank" rel="noopener noreferrer">Paper</a></p>
              <p><a href="/terms" target="_blank" rel="noopener noreferrer">Terms & Conditions</a></p>
              <p><a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></p>

            </div>

          </div>
        </div>
      </div>

      <div className="middle">
        <div className="innerBox">
          <div className="downloadButtons">
            <div className='appleStore'>
              <a href="https://apps.apple.com/ae/app/hra-step-app/id6746770273" target="_blank">
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                    <path d="M8.49657 3.86956L8.80847 3.33145C9.0004 2.99556 9.42883 2.88246 9.76472 3.0744C10.1006 3.26633 10.2137 3.69476 10.0218 4.03065L7.02278 9.22319H9.19234C9.89496 9.22319 10.2891 10.0492 9.98407 10.6216H3.62621C3.23891 10.6216 2.92702 10.3097 2.92702 9.92238C2.92702 9.53508 3.23891 9.22319 3.62621 9.22319H5.40847L7.69113 5.26794L6.97823 4.03065C6.78629 3.69476 6.8994 3.26976 7.23528 3.0744C7.57117 2.88246 7.99617 2.99556 8.19153 3.33145L8.49657 3.86956ZM5.79919 11.3413L5.12742 12.5067C4.93548 12.8425 4.50706 12.9556 4.17117 12.7637C3.83528 12.5718 3.72218 12.1433 3.91411 11.8075L4.41452 10.9437C4.97661 10.769 5.43589 10.9026 5.79919 11.3413ZM11.5881 9.22661H13.4081C13.7954 9.22661 14.1073 9.53851 14.1073 9.92581C14.1073 10.3131 13.7954 10.625 13.4081 10.625H12.397L13.079 11.8075C13.271 12.1433 13.1579 12.5683 12.822 12.7637C12.4861 12.9556 12.0611 12.8425 11.8657 12.5067C10.7175 10.5153 9.85383 9.0244 9.28145 8.03044C8.69536 7.01936 9.11351 6.00484 9.52823 5.6621C9.9875 6.4504 10.673 7.63972 11.5881 9.22661ZM8.5 0C3.80444 0 0 3.80444 0 8.5C0 13.1956 3.80444 17 8.5 17C13.1956 17 17 13.1956 17 8.5C17 3.80444 13.1956 0 8.5 0ZM15.9032 8.5C15.9032 12.5683 12.6095 15.9032 8.5 15.9032C4.43165 15.9032 1.09677 12.6095 1.09677 8.5C1.09677 4.43165 4.39052 1.09677 8.5 1.09677C12.5683 1.09677 15.9032 4.39052 15.9032 8.5Z" fill="black" />
                  </svg>
                  App Store</button>
              </a>
            </div>
            <div className='googlePlay'>
              <a href="https://play.google.com/store/apps/details?id=com.hraweb3.hrastepapp&pcampaignid=web_share">
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <g clipPath="url(#clip0_131_185)">
                      <path d="M10.1656 7.32188L3.26874 0.40625L12.0437 5.44375L10.1656 7.32188ZM1.46874 0C1.06249 0.2125 0.790619 0.6 0.790619 1.10312V14.8938C0.790619 15.3969 1.06249 15.7844 1.46874 15.9969L9.48749 7.99687L1.46874 0ZM14.7562 7.05L12.9156 5.98438L10.8625 8L12.9156 10.0156L14.7937 8.95C15.3562 8.50313 15.3562 7.49688 14.7562 7.05ZM3.26874 15.5938L12.0437 10.5562L10.1656 8.67813L3.26874 15.5938Z" fill="black" />
                    </g>
                    <defs>
                      <clipPath id="clip0_131_185">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Google Play</button>
              </a>
            </div>
          </div>
          <div className="socials">
            <p>Follow Us</p>
            <div className="socialIcons">
              <a href="https://www.instagram.com/hra_steps/" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="29" viewBox="0 0 30 29" fill="none">
                  <path d="M16.1335 0.00178401C17.1949 -0.00227617 18.2563 0.00835793 19.3174 0.033683L19.5996 0.0438326C19.9254 0.0554322 20.2469 0.0699317 20.6352 0.0873311C22.1828 0.159829 23.2388 0.403421 24.1654 0.761558C25.1253 1.12985 25.9341 1.62863 26.7428 2.4348C27.4822 3.15921 28.0545 4.03547 28.4199 5.00266C28.7791 5.92628 29.0235 6.9804 29.0962 8.52314C29.1137 8.90883 29.1282 9.23072 29.1398 9.55551L29.1486 9.8368C29.1744 10.8941 29.1856 11.9517 29.182 13.0093L29.1835 14.091V15.9904C29.1871 17.0485 29.1759 18.1066 29.15 19.1643L29.1413 19.4456C29.1297 19.7704 29.1151 20.0908 29.0977 20.478C29.0249 22.0207 28.7777 23.0734 28.4199 23.997C28.0557 24.9652 27.4833 25.8422 26.7428 26.5663C26.0155 27.3034 25.136 27.8738 24.1654 28.2381C23.2388 28.5963 22.1828 28.8399 20.6352 28.9123C20.2469 28.9297 19.9254 28.9442 19.5996 28.9558L19.3174 28.9645C18.2563 28.9903 17.1949 29.0014 16.1335 28.9979L15.0484 28.9993H13.1444C12.083 29.0029 11.0215 28.9918 9.96043 28.966L9.67825 28.9573C9.33296 28.9448 8.98775 28.9303 8.64263 28.9138C7.09501 28.8413 6.03902 28.5948 5.11103 28.2381C4.1404 27.8747 3.26122 27.3041 2.53506 26.5663C1.79478 25.8418 1.22195 24.9649 0.856538 23.997C0.49727 23.0734 0.252909 22.0207 0.180182 20.478C0.163983 20.1339 0.149438 19.7898 0.136547 19.4456L0.129274 19.1643C0.102458 18.1066 0.0903355 17.0485 0.0929108 15.9904V13.0093C0.0888513 11.9517 0.0995189 10.8941 0.124911 9.8368L0.135092 9.55551C0.146728 9.23072 0.161274 8.90883 0.178728 8.52314C0.251454 6.97895 0.495815 5.92773 0.855084 5.00266C1.22071 4.035 1.79466 3.15897 2.53652 2.43625C3.26218 1.69787 4.14081 1.12633 5.11103 0.761558C6.03902 0.403421 7.09356 0.159829 8.64263 0.0873311L9.67825 0.0438326L9.96043 0.0365831C11.0211 0.00986456 12.082 -0.00221966 13.1429 0.000334167L16.1335 0.00178401ZM14.6382 7.25154C13.6746 7.23795 12.7179 7.41542 11.8236 7.77362C10.9294 8.13182 10.1156 8.66361 9.4293 9.3381C8.74306 10.0126 8.19813 10.8163 7.82618 11.7025C7.45424 12.5888 7.26271 13.5399 7.26271 14.5006C7.26271 15.4612 7.45424 16.4123 7.82618 17.2986C8.19813 18.1848 8.74306 18.9886 9.4293 19.663C10.1156 20.3375 10.9294 20.8693 11.8236 21.2275C12.7179 21.5857 13.6746 21.7632 14.6382 21.7496C16.567 21.7496 18.4168 20.9858 19.7807 19.6262C21.1446 18.2666 21.9108 16.4226 21.9108 14.4998C21.9108 12.5771 21.1446 10.7331 19.7807 9.37349C18.4168 8.0139 16.567 7.25154 14.6382 7.25154ZM14.6382 10.1514C15.2178 10.1408 15.7938 10.2454 16.3324 10.4591C16.8711 10.6729 17.3616 10.9915 17.7753 11.3963C18.189 11.8011 18.5177 12.2841 18.7421 12.8169C18.9665 13.3498 19.0821 13.9219 19.0822 14.4998C19.0823 15.0777 18.9668 15.6499 18.7426 16.1828C18.5184 16.7158 18.1899 17.1988 17.7763 17.6038C17.3627 18.0088 16.8723 18.3275 16.3338 18.5414C15.7952 18.7554 15.2193 18.8601 14.6397 18.8497C13.4824 18.8497 12.3725 18.3914 11.5541 17.5757C10.7358 16.7599 10.2761 15.6535 10.2761 14.4998C10.2761 13.3462 10.7358 12.2398 11.5541 11.424C12.3725 10.6083 13.4824 10.15 14.6397 10.15L14.6382 10.1514ZM22.2745 5.07661C21.8052 5.09533 21.3615 5.29432 21.0361 5.6319C20.7107 5.96948 20.529 6.41946 20.529 6.8876C20.529 7.35574 20.7107 7.80572 21.0361 8.1433C21.3615 8.48088 21.8052 8.67987 22.2745 8.69859C22.7567 8.69859 23.2191 8.50764 23.5601 8.16774C23.9011 7.82784 24.0926 7.36684 24.0926 6.88615C24.0926 6.40546 23.9011 5.94446 23.5601 5.60456C23.2191 5.26466 22.7567 5.07371 22.2745 5.07371V5.07661Z" fill="#92E3A9" />
                </svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61579049930470#" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="29" viewBox="0 0 30 29" fill="none">
                  <path d="M26.0873 0C26.9759 0 27.747 0.312668 28.4004 0.938005C29.0538 1.56334 29.3675 2.31896 29.3414 3.20485V25.7561C29.3414 26.668 29.0277 27.4367 28.4004 28.062C27.7731 28.6873 27.0021 29 26.0873 29H19.6184V17.7049H22.8724L23.7742 13.7183H19.6184V11.0216C19.6184 10.4483 19.7883 9.9142 20.128 9.41914C20.4678 8.92408 21.0428 8.67655 21.8531 8.67655H23.7742V4.49461H20.8729C18.8081 4.49461 17.2791 5.04178 16.2859 6.13612C15.2927 7.23046 14.7961 8.66352 14.7961 10.4353V13.7183H11.542V17.7049H14.7961V29H3.46565C2.57699 29 1.81902 28.6873 1.19173 28.062C0.564438 27.4367 0.250793 26.668 0.250793 25.7561V3.20485C0.250793 2.31896 0.564438 1.56334 1.19173 0.938005C1.81902 0.312668 2.57699 0 3.46565 0H26.0873Z" fill="#92E3A9" />
                </svg>
              </a>
              <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" viewBox="0 0 30 24" fill="none">
                  <path d="M27.5379 0.157806L1.76795 9.93284C0.00925514 10.6277 0.0194296 11.5928 1.44528 12.0231L8.06146 14.0533L23.3694 4.55278C24.0932 4.11958 24.7545 4.35262 24.2109 4.82729L11.8085 15.8376H11.8056L11.8085 15.839L11.3521 22.5473C12.0207 22.5473 12.3158 22.2456 12.6908 21.8896L15.9044 18.8157L22.5889 23.6725C23.8214 24.3402 24.7066 23.997 25.0133 22.5502L29.4013 2.20803C29.8504 0.436602 28.7138 -0.365474 27.5379 0.157806Z" fill="#92E3A9" />
                </svg>                </a>
              <a href="https://www.linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="23" viewBox="0 0 30 23" fill="none">
                  <path d="M26.6594 5.71676V6.44798C26.6594 8.4422 26.2846 10.4032 25.5352 12.3309C24.7858 14.2587 23.7184 16.0202 22.333 17.6156C20.9477 19.211 19.1536 20.5072 16.9507 21.5043C14.7477 22.5014 12.3291 23 9.69467 23C6.37895 23 3.33575 22.1358 0.565079 20.4075C1.01929 20.4518 1.49621 20.474 1.99584 20.474C4.76651 20.474 7.24195 19.6541 9.42215 18.0145C8.10494 17.9701 6.93536 17.5713 5.91339 16.8179C4.89142 16.0645 4.19875 15.1118 3.83538 13.9595C4.19875 14.0482 4.56211 14.0925 4.92548 14.0925C5.47053 14.0925 5.99287 14.0039 6.4925 13.8266C5.12988 13.5607 3.99435 12.896 3.08594 11.8324C2.17752 10.7688 1.72331 9.5501 1.72331 8.1763V8.10983C2.58631 8.55299 3.49472 8.79672 4.44856 8.84104C2.67715 7.64451 1.79144 6.02698 1.79144 3.98844C1.79144 2.92486 2.06397 1.9499 2.60902 1.06358C4.10791 2.83622 5.91339 4.25434 8.02546 5.31792C10.1375 6.3815 12.4199 6.97977 14.8727 7.11272C14.7818 6.66956 14.7364 6.2264 14.7364 5.78324C14.7364 4.18786 15.3155 2.82514 16.4737 1.69509C17.632 0.565029 19.0287 0 20.6638 0C22.3898 0 23.8433 0.598266 25.0242 1.7948C26.3868 1.5289 27.6586 1.06358 28.8396 0.398844C28.3854 1.77264 27.4997 2.83622 26.1824 3.5896C27.4088 3.45665 28.567 3.16859 29.6571 2.72543C28.8396 3.87765 27.8403 4.87476 26.6594 5.71676Z" fill="#92E3A9" />
                </svg>                </a>
              <a href="https://www.youtube.com/yourchannel" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="29" viewBox="0 0 26 29" fill="none">
                  <path d="M13.9996 0.0244687C15.586 0 17.1634 0.0145 18.7389 0C18.8344 1.84966 19.5017 3.73375 20.8599 5.04147C22.2154 6.38181 24.1327 6.99534 25.9983 7.20288V12.0685C24.25 12.0114 22.4936 11.6489 20.9072 10.8986C20.2162 10.5868 19.5726 10.1853 18.9425 9.77481C18.9344 13.3056 18.9571 16.8318 18.9198 20.348C18.8253 22.0373 18.2661 23.7184 17.2807 25.1104C15.6951 27.4277 12.9432 28.9384 10.1167 28.9855C8.38303 29.0843 6.65114 28.613 5.17381 27.7448C2.72553 26.3057 1.00274 23.6712 0.751818 20.8438C0.720212 20.2449 0.715358 19.645 0.737272 19.0458C0.955462 16.7466 2.09642 14.5471 3.8674 13.0509C5.87475 11.3082 8.68668 10.4781 11.3195 10.9692C11.3441 12.7591 11.2722 14.5471 11.2722 16.337C10.0695 15.9491 8.66395 16.0578 7.613 16.7856C6.8441 17.2905 6.26304 18.0334 5.9593 18.8998C5.70838 19.5125 5.7802 20.1931 5.79475 20.8438C6.08294 22.8266 7.99574 24.4932 10.0376 24.3129C11.3913 24.2984 12.6887 23.5154 13.3941 22.369C13.6223 21.9675 13.8778 21.557 13.8914 21.0848C14.0105 18.9234 13.9633 16.7711 13.9778 14.6097C13.9878 9.73856 13.9633 4.88106 14.0005 0.025375L13.9996 0.0244687Z" fill="#92E3A9" />
                </svg>                </a>
            </div>

          </div>
        </div>

      </div>

      <div className="line"></div>

      <div className='bottom'>
        <p>© 2025 HRA Step. All rights reserved.</p>
        <p>Part of the HRA Ecosystem.</p>

      </div>
    </Wrapper>
  )
}



const Wrapper = styled.footer`
  width: 100%;
  height: 21.25rem;
  // overflow: hidden;
  background-color: #000;
  color: #fff;

      @media (max-width: 768px) {
    height: 5rem;
}

  .top{
    display: flex;
    flex-direction: row;
    align-items: center;

    .left {
      display: flex;
      width: 35%;


      @media (max-width: 1023px) {
        display: none;
        }

// @media (min-width: 769px) and (max-width: 1023px) {
// padding-left: 0rem;
// align-self: left;
// }


      .borderDiv {
        position: absolute;
        svg {
        transform: translate(110px, -8px);
        cursor: pointer;
        }
      }

      .logoDiv {
        margin-left: 7.5rem;
        width: 13rem;
        height: 4.5rem;
        flex-shrink: 0;
        border-radius: 0.3125rem;
        border: 1px solid #000;
        background: #FFF;
        display: flex;
        align-items: center;
        justify-content: center;

        button {
          border: none;
          background: transparent;
        }

        p {
          color: #000;
          -webkit-text-strokeWidth: 1px;
          -webkit-text-stroke-color: #000;
          font-family: Inter;
          font-size: 1.5rem;
          font-style: italic;
          font-weight: 500;
          line-height: normal;
          text-transform: uppercase;

        

        }
      }
      }
    .right {
      width: 65%;

      @media (max-width: 1024px) {
          width: 80%;

}
      
      .footerLinks {
        display: flex;
        flex-direction: row;
        gap: 4rem;
        margin-top: 7rem;

@media (min-width: 1024px) and (max-width: 1052px) {
   gap: 1.5rem;
   padding-left: 2rem;
}

          @media (max-width: 1024px) {
          gap: 3rem;
          width: 100%;
          
          // background: red;
          h4 {
            font-size: 1rem;
            }
            p {
            font-size: 0.78rem;
            margin-bottom: 0rem;
            }
        }


        @media (max-width: 1024px) {
          margin-left: 1rem;
          margin-top: 4rem;
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          margin-left: 6rem;
        }

      }

        h4 {
          color: #FFF;
          font-family: Inter;
          font-size: 1rem;
          font-style: italic;
          font-weight: 800;
          line-height: normal;
          text-transform: uppercase;
          margin-bottom: 0.63rem;

  }

        p {
          color: #FFF;
          margin-bottom: 0.3rem;
          font-family: Sora;
          font-size: 0.875rem;
          font-style: normal;
          font-weight: 400;
          line-height: 1.6875rem; /* 192.857% */
          border-bottom: solid 3px transparent;
          transition: all 0.3s ease;

          &:hover {
          color: #92E3A9;
          border-bottom: solid 3px #92E3A9;
          transform: translateY(-3px);
        }
          
        }

      @media (max-width: 768px) {
          display:none;}
          

      }
    }
  }


     .middle {
      background: black;
      padding-bottom:7rem;

      @media (max-width: 1024px) {
      display:none;}

    .innerBox{
        height: 7rem;
        display: flex;
        // padding-left: 10rem;
        background: black;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        padding-top: 7rem;
        // transform: translatex(5rem);
    }

    button {
    display: inline-flex;
    padding: 0.625rem 1.1875rem 0.625rem 1rem;
    justify-content: center;
    align-items: flex-end;
    gap: 0.5625rem;
    border-radius: 1.25rem;
    border: 1px solid #000;
    background: #FFF;
    border: none;
    color: #000;
    font-family: Sora;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 0.63rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &: hover {
      background: #92E3A9;
      color: #FFF;
    }

    svg {
    width: 1rem;
    height: 1rem;
    transform: translate(3px, -3px);
    }
    }
    .appleStore button{
      padding-right: 2.1rem;
      }



    .socials {
      padding-left: 6rem;
      p {
        color: #FFF;
        font-family: Inter;
        font-size: 1rem;
        font-style: italic;
        font-weight: 800;
        line-height: normal;
        text-transform: uppercase;
        margin-bottom: 1.94rem;

      }

     .socialIcons a {
        margin-right: 1rem;
        // color: #FFF;
        }
    }

  }
  
  .line {
    width: 100%;
    height: 0.0625rem;
    background: #EBE0E0;
    // background: red;

    @media (max-width: 1024px) {
    display: none;

}

  }

  .bottom {
    display: flex;
    justify-content: space-between;
    background: #000;
    flex-direction: row;
    // heightL: 3.125rem;
    padding: 1rem 5rem;

      @media (min-width: 759px) and (max-width: 1024px) {
        padding-bottom: 0;
        padding-top: 2rem;
        margin-bottom: 0;
        // background: red;
      }

      @media (max-width: 768px) {
        flex-direction: column;
        justify-content: flex-start;
        padding: 0;
        padding-top: 1rem;
        padding-left: 2rem;
        font-size: 0.875rem;

      }
  }
  
`