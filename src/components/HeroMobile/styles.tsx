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

export const Section = styled.section`
  padding: 90px 0 50px;
  background: #0d0d0d;
  height: 630px;

  .border {
    display: flex;
  }
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  position: relative;

  .content__top {
    height: 50%;
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
      right: 0;
      top: 30%;
      transform: translateY(-50%);
    }
  }

  .content__bottom {
    h2 {
      color: rgba(255, 255, 255, 0.6);
      font-size: 14px;
      font-family: "casanova";
      font-weight: 400;
      text-transform: capitalize;
      position: absolute;
      width: 156px;
      top: 55%;
      left: 0;
    }

    .info-content {
      color: #fff;
      font-size: 10px;
      margin-top: 30px;
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

    .content__bottom {
      h2 {
        text-transform: capitalize;
        animation: 2s ease-in 0.1s 1 ${introH2};
      }

      .info-content {
      }
    }
  }
`;
