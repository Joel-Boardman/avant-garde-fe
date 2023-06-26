import styled, { keyframes } from "styled-components";

const introH1 = keyframes`
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

const introH2 = keyframes`
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

const introImg = keyframes`
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

const btnIdle = keyframes`
    100%{
        top: calc(46% + 10px);
    }
`;

const btnIdlePulse = keyframes`
    0%{
        transform: translate(-50%, -50%) rotate(45deg) scale(0.8);
    }
`;

const introInfo = keyframes`
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

const introBtn = keyframes`
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

export const Section = styled.section`
  padding: 10px 0 50px;
  background: rgb(12, 12, 12);
  height: 805px;
  .border {
    display: flex;
  }
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  /* min-height: 650px; */

  .btn-container {
    position: absolute;
    top: 46%;
    right: 0;
    animation: 1s linear 0.1s infinite alternate ${btnIdle};
  }
  .next-btn {
    outline: none;
    border: 2px solid white;
    border-radius: 50%;
    background: #0d0d0d;
    width: 50px;
    height: 50px;
    position: relative;
    z-index: 50;

    .chevron::before {
      border-style: solid;
      border-width: 3px 3px 0 0;
      content: "";
      display: inline-block;
      height: 11px;
      left: calc(50% - 2px);
      top: 50%;
      transform: translate(-50%, -50%) rotate(-45deg);
      position: absolute;
      color: white;
      vertical-align: top;
      width: 11px;
    }

    .chevron.right:before {
      transform: translate(-50%, -50%) rotate(45deg);
      animation: 1s linear 0.1s infinite alternate ${btnIdlePulse};
    }
  }

  .content__top {
    /* height: 50%; */
    height: 330px;
    width: 100%;

    h1 {
      text-transform: uppercase;
      width: 156px;
      color: #fff;
      font-size: 25px;
      font-family: "casanova";
      line-height: 34.636px;
      font-weight: 400;
      position: absolute;
      top: 25%;
      left: 0%;
    }

    img {
      position: absolute;
      width: 150px;
      right: 8%;
      top: 30%;
      transform: translateY(-50%);
    }
  }

  .content__bottom {
    min-height: 330px;
    h2 {
      color: rgba(255, 255, 255, 0.6);
      font-size: 14px;
      font-family: "casanova";
      font-weight: 400;
      text-transform: capitalize;
      position: absolute;
      width: 156px;
      top: 52%;
      left: 0;
    }

    .info-content {
      color: #fff;
      font-size: 12px;
      /* margin-top: 10px; */
      margin-top: 85px;
      width: 80%;
    }
  }

  &.animate-intro {
    .content__top {
      h1 {
        animation: 2s ease-in 0.1s 1 ${introH1};
      }

      img {
        animation: 2s ease-in 0.1s 1 ${introImg};
      }
    }

    .btn-container {
      animation: 2.5s ease-in 0.1s 1 ${introBtn};
    }

    .content__bottom {
      h2 {
        text-transform: capitalize;
        animation: 2s ease-in 0.1s 1 ${introH2};
      }

      .info-content {
        animation: 2s ease-in 0.1s 1 ${introInfo};
      }
    }
  }
`;
