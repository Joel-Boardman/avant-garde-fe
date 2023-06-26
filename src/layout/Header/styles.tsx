import styled from "styled-components";
import { devices } from "../devices";
import {
  rotateBottom,
  rotateBottomReverse,
  rotateTop,
  rotateTopReverse,
} from "./animations";

export const HeaderSection = styled.header<{ defaultHeader: boolean }>`
  background-color: ${(props) => (props.defaultHeader ? "#000" : "#F4F4F4")};
  padding: 39px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 500;
  max-height: 98px;

  > img {
    width: 245px;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .mobile-header {
    display: none;
  }

  .mobile-header-btn {
    display: none;
  }

  .links {
    display: flex;
    justify-content: flex-end;

    > a {
      color: white;
      text-decoration: none;
      font-family: "casanova";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 20px;
      letter-spacing: 0.05em;
      margin: 0 16px;
      color: rgba(255, 255, 255, 0.85);
      background: ${(props) =>
        props.defaultHeader
          ? "linear-gradient(to right, #fbd71f, #fbd71f 50%, #fff 50%)"
          : "linear-gradient(to right, #fbd71f, #fbd71f 50%, #000 50%)"};
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-size: 200% 100%;
      background-position: 100%;
    }

    a {
      /* Same as before */
      transition: background-position 275ms ease;
    }
    a:hover {
      background-position: 0 100%;
    }
  }

  @media ${devices.tabletL} {
    &.hide {
      background: transparent;
      transition: 0.5s;

      .mobile-header {
        top: 0;
        left: 0;
        transition: 0.5s;
      }
    }
    &.show {
      background-color: ${(props) =>
        props.defaultHeader ? "#0d0d0d" : "#fff"};
      transition: 0.5s;

      .mobile-header {
        top: 0;
        left: -100vw;
        transition: 0.5s;
      }
    }
    .mobile-header {
      display: block;
      position: absolute;
      top: 0;
      left: -100vw;
      width: 100vw;
      height: 100%;
      min-height: 100vh;
      background: #000000de;
      padding-top: 100px;
      padding-left: 2.6rem;

      .mobile-links {
        display: flex;
        flex-direction: column;

        a {
          color: #fff;
          font-size: 18px;
          font-family: "area-extended";
          font-weight: 600;
          text-decoration: none;
          text-transform: uppercase;
          margin-bottom: 20px;
        }
      }

      .mobile-ext-links {
        h4 {
          color: rgba(255, 255, 255, 0.8);
          font-size: 16px;
          font-family: "area-extended";
          font-weight: 600;
          margin-bottom: 14px;
        }

        div {
          display: flex;
          flex-direction: row;

          img {
            width: 28px;
            height: 28px;
            margin-right: 22px;
          }
        }
      }
    }

    .mobile-header-btn {
      display: flex;
      button {
        position: relative;
        width: 30px;
        height: 15px;
        background: transparent;
        border: none;
        outline: none;

        &:before {
          content: "";
          position: absolute;
          height: 1px;
          border: 1px solid white;
          width: 100%;
          top: 0%;
          left: 0;
        }

        &:after {
          content: "";
          border: 1px solid white;
          position: absolute;
          height: 1px;
          width: 100%;
          top: 100%;
          left: 0;
        }

        &.open {
          &:before {
            animation: 0.5s 0s forwards 1 ${rotateTop};
          }

          &:after {
            animation: 0.5s 0s forwards 1 ${rotateBottom};
          }
        }

        &.close {
          &:before {
            animation: 0.5s 0s forwards 1 ${rotateTopReverse};
          }
          &:after {
            animation: 0.5s 0s forwards 1 ${rotateBottomReverse};
          }
        }
      }
    }

    .links {
      display: none;

      > a {
        font-size: 16px;
        margin: 0 10px;
      }
    }
  }

  @media ${devices.tablet} {
    padding: 39px 15px;
    > img {
      width: 200px;
    }
  }

  @media ${devices.mobileL} {
    background-color: ${(props) => (props.defaultHeader ? "#0d0d0d" : "#fff")};

    .mobile-header {
      padding-top: 120px;
      padding-left: 1.6rem;
      .mobile-links {
        a {
          font-size: 14px;
        }
      }
    }

    .mobile-header-btn {
      button {
        width: 24px;
        height: 9px;
      }
    }
  }
`;
