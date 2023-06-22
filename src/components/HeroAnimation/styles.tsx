import styled, { keyframes } from "styled-components";
import {
  shrink,
  shrinkTicker,
  rotateTicker,
  expand,
  fadeToTop,
  fadeToBottom,
  fadeToBottomTicker,
  fadeBg,
  fadeInWatch,
  fadeInWatchSecondary,
  pulseWatchSecondary,
  fadeOutSecondary,
  moveAndFade,
  removeEntirely,
} from "./animations";

export const AnimationWrapper = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 90%;
  overflow: hidden;
`;

export const Section = styled.div`
  position: relative;
  height: fit-content;
  height: 100%;
  min-height: inherit;

  > img {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 140%;
    z-index: 2s;

    &:nth-of-type(1) {
      animation: 1.5s 1s forwards 1 ${shrink},
        5s ease-in 1s forwards 1 ${fadeToBottom};
    }
  }

  > .ticker {
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 32px;
    height: calc(313px * 2);
    animation: 1.5s 1s forwards 1 ${shrinkTicker},
      2s linear 2s forwards 1 ${rotateTicker},
      5s ease-in 1s forwards 1 ${fadeToBottomTicker};

    position: absolute;
    top: 21%;
    left: 51.4%;
    z-index: 2s;

    img {
      width: 100%;
    }
  }
`;

export const Content = styled.div`
  background: linear-gradient(
    173.1deg,
    rgba(0, 0, 0, 0.66) 12.9%,
    rgba(0, 0, 0, 0.42) 35.46%,
    #000000 67.85%
  );
  height: 100%;
  width: 100%;
  z-index: 10;
  position: relative;
  width: 100%;
  min-height: inherit;
  z-index: 90;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      173.1deg,
      rgba(0, 0, 0, 0.96) 12.9%,
      rgba(0, 0, 0, 0.72) 35.46%,
      #000000 67.85%
    );
    z-index: 10;
    animation: 1s linear 1s forwards 1 ${fadeBg};
  }

  .animation-one {
    > img {
      position: absolute;
      top: 45%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation: 1s linear 2s forwards 1 ${expand},
        5s ease-in 1s forwards 1 ${fadeToTop};
      animation-delay: 1s;
      width: 394px;
      z-index: 50;
    }
  }

  .animation-two {
    > img {
      position: absolute;
      opacity: 0;

      &:nth-of-type(1) {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 143px;
        z-index: 20;
        animation: 0.5s linear 5.5s forwards ${fadeInWatch},
          1.2s ease-out 8.5s forwards ${moveAndFade};
      }

      &:nth-of-type(2) {
        top: 50%;
        left: 35%;
        transform: translate(-50%, -50%);
        width: 272px;
        z-index: 15;
        animation: 0.45s linear 6.5s forwards ${fadeInWatchSecondary},
          0.2s linear 7s forwards ${pulseWatchSecondary},
          0.2s linear 8s forwards ${fadeOutSecondary};
      }

      &:nth-of-type(3) {
        top: 50%;
        left: 64%;
        transform: translate(-50%, -50%);
        width: 272px;
        z-index: 15;
        animation: 0.45s linear 6.5s forwards ${fadeInWatchSecondary},
          0.2s linear 7s forwards ${pulseWatchSecondary},
          0.2s linear 8s forwards ${fadeOutSecondary};
      }
    }
  }
`;
