import styled, { keyframes } from "styled-components";
import { devices } from "../../layout/devices";

export const shrink = keyframes`
    100% {
      /* width:90%; */
      width: 1300px;
      top: 40%;

    }
`;

export const shrinkTicker = keyframes`
    100%{
      height: 375px;
      width: 21px;
      top: 29%;
      left: 51%;
      /* left: calc(51% + 5px); */
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
    /* width:90%;
    top: 40%;
    opacity: 1; */
    opacity: 1;
    width: 1300px;
    top: 40%;
  }
  90%{

opacity: 0;
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
    height: 375px;
      width: 21px;
      top: 29%;
      left: 51%;
    opacity: 1;
  }
  90%{

    opacity: 0;
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

  opacity: 0;
    }
`;

// Watches Animations
export const fadeInWatch = keyframes`
  100%{
    opacity: 1;
    width: 326px;
  }
`;

export const fadeInWatchSecondary = keyframes`
  0%{
    width: 172px;
    opacity: 0;
  }

  100%{
    opacity: 1;
    width: 272px;
  }
`;

export const pulseWatchSecondary = keyframes`
  30%{
    transform: translate(-50%, -50%) scale(1.02);
  }
  100%{
    transform: translate(-50%, -50%) scale(1);
  }
`;

export const fadeOutSecondary = keyframes`
  100%{
    opacity: 0;
  }
`;

export const moveAndFade = keyframes`
  50%{
    top: 48.5%;
    left: 67.3%;
    opacity: 1;
  }
  95%{
    top: 48.5%;
    left: 67.3%;
    opacity: 1;
  }

  100%{
    top: 48.5%;
    left: 67.3%;
    opacity: 0;
  }
    `;

export const removeEntirely = keyframes`
  100%{
    opacity: 0;
  }
`;
