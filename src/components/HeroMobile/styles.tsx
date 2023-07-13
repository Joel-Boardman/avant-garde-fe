import styled from "styled-components";
import {
  introBtn,
  introH1,
  introH2,
  introImg,
  introInfo,
  btnIdle,
  btnIdlePulse,
} from "./animations";

export const Section = styled.section`
  padding: 10px 0 50px;
  background: rgb(12, 12, 12);
  height: 805px;
  .border {
    display: flex;
  }

  @media (min-width: 560px) {
    padding: 43px 0px 50px;
  }

  @media (min-width: 750px) {
    padding: 70px 0px 30px;
  }
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  position: relative;

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

  @media (min-width: 560px) {
    .content__top {
      h1 {
        font-size: 35px;
      }

      img {
        width: 200px;
        right: 13%;
      }
    }

    .content__bottom {
      h2 {
        font-size: 18px;
      }

      .info-content {
        font-size: 14px;
        margin-top: 85px;
      }
    }
  }

  @media (min-width: 750px) {
    .content__bottom {
      .info-content {
        margin-top: 62px;
      }
    }
  }

  @media (min-width: 810px) {
    .content__bottom {
      .info-content {
        /* margin-top: 55px; */
      }
    }
  }
`;
