import styled, { keyframes } from "styled-components";

export const shrink = keyframes`
    100% {
      width:90%;
      top: 40%;
    }
`;

export const shrinkTicker = keyframes`
    100%{
      height: 360px;
      width: 21px;
      top: 31%;
      left: 51%;
    }
`;

export const rotateTicker = keyframes`
  0%{
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100%{
    transform: translate(-50%, -50%) rotate(31deg);
  }
`;

export const expand = keyframes`
    100%{
        width: 709px;
        top: 35%;

    }
`;

export const fadeToTop = keyframes`
  80%{
    position: absolute;
    width: 709px;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 1;
  }
  100%{
    top: 0;
    opacity: 0;
    width: 200px;
  }
`;

export const fadeToBottom = keyframes`
  80%{
    width:90%;
    top: 40%;
    opacity: 1;
  }
  100%{
    top: 80%;
    opacity: 0;
    width:90%;
  }
`;

export const fadeToBottomTicker = keyframes`
  80%{
    transform: translate(-50%, -50%) rotate(31deg);
    height: 360px;
      width: 21px;
      top: 31%;
      left: 51%;
    opacity: 1;
  }
  100%{
    bottom: 0;
    opacity: 0;
    transform: translate(-50%, -50%) rotate(31deg);
    height: 360px;
    width: 21px;
    top: 71%;
    left: 51%;
  }
`;

export const fadeBg = keyframes`
    100%{
          /* background: linear-gradient(
    173.1deg,
    rgba(0, 0, 0, 0.76) 12.9%,
    rgba(0, 0, 0, 0.52) 35.46%,
    #000000 67.85%
  ); */
  opacity: 0;
    }
`;
