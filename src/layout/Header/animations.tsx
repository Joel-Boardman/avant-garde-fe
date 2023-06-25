import { keyframes } from "styled-components";

export const rotateTop = keyframes`
  0%{
    position: absolute;
    height: 1px;
    border: 1px solid white;
    width: 100%;
    top: 0%;
    left: 0;
  }

  100%{
    position: absolute;
    height: 1px;
    border: 1px solid white;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

export const rotateTopReverse = keyframes`
  0%{
    position: absolute;
    height: 1px;
    border: 1px solid white;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  100%{
    position: absolute;
    height: 1px;
    border: 1px solid white;
    width: 100%;
    top: 0%;
    left: 0;

  }
`;

export const rotateBottom = keyframes`
  0%{
    position: absolute;
    height: 1px;
    border: 1px solid white;
    width: 100%;
    top: 100%;
    left: 0;
  }

  100%{
    position: absolute;
    height: 1px;
    border: 1px solid white;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
  }
`;

export const rotateBottomReverse = keyframes`
  0%{
    position: absolute;
    height: 1px;
    border: 1px solid white;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  100%{
    position: absolute;
    height: 1px;
    border: 1px solid white;
    width: 100%;
    top: 100%;
    left: 0;
  }
`;
