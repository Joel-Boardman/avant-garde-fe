import { keyframes } from "styled-components";

export const introH1 = keyframes`
    0%{
        color: grey;
    }


    20%{
        left: 50%;
        top: 45%;
        transform: translate(calc(-50% + 20px), -50%);
        color: grey;
    }

    40%{
        left: 50%;
        top: 45%;
        transform: translate(calc(-50% + 20px), -50%);
        color: grey;
    }

    50%{
        left: 50%;
        top: 45%;
        transform: translate(calc(-50% + 20px), -50%);
        color: grey;
        text-align: left;
    }

    60%{
        transform: translate(calc(-50% + 20px), -50%) scale(1.3);
        color: white;

    }

    75%{
        left: 50%;
        top: 45%;
        transform: translate(calc(-50% + 20px), -50%) scale(1.3);
        color: white;
    }

    90%{
        left: 50%;
        top: 45%;
        transform: translate(calc(-50% + 20px), -50%) scale(1.3);
        color: white;
    }
`;

export const introH2 = keyframes`
    0%{
        
    }


    20%{
        left: -50%;
    }

    50%{
        left: -50%;
    }

    60%{
        left: 50%;
        transform: translateX(-50%);
    }

    75%{
        left: 50%;
        transform: translateX(-50%);
    }

    90%{
        left: 50%;
        transform: translateX(-50%);
    }
`;

export const introImg = keyframes`
    0%{
    }


    20%{
        top: -50%;
        opacity: 0;
    }

    22%{
        top: 150%;
        opacity: 0;
    }

    40%{
    }

    50%{

    }

    60%{
        top: 150%;
        opacity: 0;
    }

    75%{
        top: 150%;
        opacity: 0;
    }

    90%{
  
    }
`;

export const btnIdle = keyframes`
    100%{
        top: calc(46% + 10px);
    }
`;

export const btnIdlePulse = keyframes`
    0%{
        transform: translate(-50%, -50%) rotate(45deg) scale(0.8);
    }
`;

export const introInfo = keyframes`
    0%{
        position: absolute;
        left: 0;
    }


    20%{
        opacity: 0;
        left: -100%;
        position: absolute;

    }

    50%{
        opacity: 0;
        left: 0%;
        position: absolute;
        height: 0;

    }

    60%{
        opacity: 0;
        left: 0%;
        position: absolute;
        height: 0;
    }

    75%{
        left: 0%;
        position: absolute;
        opacity: 0;
        height: 0;
    }

    90%{
        left: 0%;
        position: absolute;
        opacity: 0;
        height: 0;
    }

    100%{
        left: 0%;
        position: absolute;
        opacity: 1;
    }
`;

export const introBtn = keyframes`
    0%{
        position: absolute;
    }


    25%{
        right: -100%;
        opacity: 0;
    }


    75%{
        right: -100%;
        opacity: 0;
    }

    100%{
        right: 0%;
        opacity: 1;
    }
`;
