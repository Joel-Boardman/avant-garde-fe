import styled, { keyframes } from "styled-components";

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
    left: 150px;
    transform: translate(-50%, -50%) scale(1);

  }

  100% {
    left: 150px;
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

const fadeInRight = keyframes`
  80% {
    left: calc(50% + 150px);
    transform: translate(-50%, -50%) scale(1);

  }

  100% {
    left: calc(50% + 150px);
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

const fadeOutLeft = keyframes`
  0% {
    left: 150px;
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
    left: calc(50% + 150px);
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
  padding: 160px 0;
  background: white;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

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
`;
