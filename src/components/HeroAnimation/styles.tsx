import styled, { keyframes } from "styled-components";

const shrink = keyframes`
    100% {
      width:90%;
      top: 40%;
    }
`;

const shrinkTicker = keyframes`
    100%{
      height: 360px;
      width: 21px;
      top: 31%;
      left: 51%;
    }
`;

const rotateTicker = keyframes`
  0%{
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100%{
    transform: translate(-50%, -50%) rotate(31deg);
  }
`;

const expand = keyframes`
    100%{
        width: 709px;
        top: 35%;

    }
`;

const fadeToTop = keyframes`
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

const fadeToBottom = keyframes`
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

const fadeToBottomTicker = keyframes`
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
    rgba(0, 0, 0, 0.96) 12.9%,
    rgba(0, 0, 0, 0.72) 35.46%,
    #000000 67.85%
  );
  height: 100%;
  width: 100%;
  z-index: 10;
  position: relative;
  width: 100%;
  min-height: inherit;

  > img {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: 1s linear 2s forwards 1 ${expand},
      5s ease-in 1s forwards 1 ${fadeToTop};
    animation-delay: 1s;
    width: 394px;
  }
`;
