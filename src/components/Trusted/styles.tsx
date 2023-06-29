import styled, { keyframes } from "styled-components";
import TrustImg from "../../assets/images/trusted-img.png";

// Devices
import { devices } from "../../layout/devices";

const shrink = keyframes`
  100% {
  transform: scale(0.75);
  }
`;

const grow = keyframes`
  0%{
    transform: scale(0.75);
  }

  100% {
    transform: scale(1);
  }
`;

const fadeInLeft = keyframes`
 
  80% {
    left: 20%;
    transform: translate(-50%, -50%) scale(1);

  }

  100% {
    left: 20%;
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

const fadeInRight = keyframes`
  80% {
    left: 80%;
    transform: translate(-50%, -50%) scale(1);

  }

  100% {
    left: 80%;
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

const fadeOutLeft = keyframes`
  0% {
    left: 20%;
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  80% {
    left: 50%;
    transform: translate(-50%, -50%) scale(0.2);

  }

  100% {
    left: 50%;
    transform: translate(-50%, -50%) scale(0.2);
    opacity: 0;
  }
`;

const fadeOutRight = keyframes`
  0%{
    left: 80%;
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
  }
  80% {
    left: 50%;
    transform: translate(-50%, -50%) scale(0.2);

  }

  100% {
    left: 50%;
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.2);
  }
`;

export const Section = styled.section`
  padding: 100px 0;
  background: white;

  @media ${devices.laptopS} {
    padding: 80px 0;
  }

  @media ${devices.tabletL} {
    padding: 86px 0 50px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .mobile-btn {
    /* display: none; */
    border: none;
    outline: none;
    background: none;
    margin-top: 15px;

    display: block;
    color: #000;
    font-size: 16px;
    font-family: "area-extended";
    line-height: 26px;
    cursor: pointer;
  }

  .ani-container,
  .info-container {
    width: 50%;
  }

  .info-container {
    margin: 0 auto;
    display: block;
    margin-left: auto;
    h2 {
      color: #000;
      font-family: "casanova";
      font-size: 50px;
      font-weight: 400;
      margin-bottom: 40px;
      max-width: 525px;
      margin-left: auto;
    }

    p {
      max-width: 525px;
      margin-left: auto;
    }
  }

  .ani-container {
    position: relative;
    > img {
      &:nth-of-type(1) {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0.2);
        opacity: 0;
        z-index: 5;
      }
      &:nth-of-type(2) {
        width: 450px;
        height: auto;
        margin: 0 auto;
        display: block;
        z-index: 10;
        position: relative;
      }
      &:nth-of-type(3) {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0.2);
        opacity: 0;
        z-index: 5;
      }
    }

    &.animate-in {
      > img:nth-of-type(1) {
        animation-name: ${fadeInLeft};
        animation-duration: 1s;
        animation-fill-mode: forwards;
      }
      > img:nth-of-type(2) {
        animation-name: ${shrink};
        animation-duration: 1s;
        animation-fill-mode: forwards;
      }

      > img:nth-of-type(3) {
        animation-name: ${fadeInRight};
        animation-duration: 1s;
        animation-fill-mode: forwards;
      }
    }

    &.animate-out {
      > img:nth-of-type(1) {
        animation-name: ${fadeOutLeft};
        animation-duration: 1s;
        animation-fill-mode: forwards;
      }
      > img:nth-of-type(2) {
        animation-name: ${grow};
        animation-duration: 1s;
        animation-fill-mode: forwards;
      }
      > img:nth-of-type(3) {
        animation-name: ${fadeOutRight};
        animation-duration: 1s;
        animation-fill-mode: forwards;
      }
    }
  }

  @media ${devices.laptopS} {
    .info-container {
      width: 49%;
      margin: 0;

      h2 {
        font-size: 40px;
      }
      p {
        font-size: 14px;
      }
    }

    .ani-container {
      position: relative;
      width: 46%;
      > img {
        &:nth-last-of-type(1) {
          width: 200px;
        }
        &:nth-last-of-type(2) {
          width: 300px;
        }
        &:nth-last-of-type(3) {
          width: 200px;
        }
      }
    }
  }

  @media ${devices.tabletL} {
    align-items: flex-start;

    .ani-container {
      background-image: url(${TrustImg});
      background-position: 0px 0px;
      width: 30%;
      height: 229px;
      background-size: contain;
      background-repeat: no-repeat;

      > img {
        display: none !important;
      }
    }

    .info-container {
      width: 70%;

      p {
        color: rgba(0, 0, 0, 0.6);
      }
    }
  }

  @media ${devices.mobileL} {
    .info-container {
      width: 65%;

      h2 {
        font-size: 25px;
      }

      p {
        font-size: 12px;
      }
    }
    .ani-container {
      width: 26%;
    }
  }
`;
