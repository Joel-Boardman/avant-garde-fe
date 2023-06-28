import styled, { keyframes } from "styled-components";
import { devices } from "../../layout/devices";

const fadeIn = keyframes`
  0% {opacity: 0;}
  100% {opacity: 1;}
`;
export const Section = styled.section<{ height: number }>`
  padding: 70px 0 160px 0;
  background: #000;
  overflow: hidden;

  .border {
    height: auto;
    &.fix-item {
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 200;
      max-width: none;
      left: 50%;
      transform: translateX(-50%);
      padding: 0px 5.8rem;
    }
  }

  &.extend {
    height: ${(props) => props.height + 70 + 160}px;
  }

  @media ${devices.laptopS} {
    padding: 70px 0px;

    &.extend {
      height: ${(props) => props.height + 70 * 2}px;
    }
  }

  @media ${devices.mobileL} {
    padding: 40px 0px;

    &.extend {
      height: ${(props) => props.height + 40 * 2}px;
    }
  }
`;

export const Content = styled.div<{ arrayIndex: number }>`
  .fadeIn {
    animation-name: ${fadeIn};
    animation-duration: 0.5s;
  }

  .options {
    &__container {
      max-width: 417px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding-bottom: 5px;
      position: relative;
      margin-bottom: 30px;
      &:before,
      &:after {
        height: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
      }

      &:before {
        content: "";
        border-bottom: 1px solid rgba(255, 255, 255, 0.42);
        width: 100%;
        z-index: 1;
      }

      &:after {
        content: "";
        border-bottom: 1px solid #fff;
        width: ${(props) => (Number(props.arrayIndex) + 1) * 100 + "px"};
        transition: 0.5s;
        z-index: 2;
      }

      button {
        background: none;
        border: none;
        color: #fff;
        font-family: "area-extended";
        font-weight: 600;
        font-size: 14px;
        margin-right: 40px;
        cursor: pointer;
        z-index: 3;
        position: relative;
      }
    }
  }

  .info {
    height: 450px;
    display: flex;
    color: #fff;

    &__left {
      margin-top: 96px;
      max-width: 633px;
      position: relative;
      z-index: 10;

      &.watch-info {
        width: 43%;
        margin-right: 50px;
      }
    }

    &__right {
      position: relative;
      width: 100%;

      .right-img {
        position: absolute;
        right: -20%;
        z-index: 0;
      }

      .right-img-two {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 0;
      }

      .watch-carousel {
        display: flex;
        flex-direction: row;
        overflow-x: auto;
        position: absolute;
        width: 933px;

        &::-webkit-scrollbar {
          display: none;
        }

        > .watchItem {
          min-width: 450px;
          display: block;

          margin: 0 10px;

          > div {
            background: #0c0c0c;
            padding: 50px;
            transition: 0.5s;

            img {
              margin: 0 auto;
              display: block;
              height: 420px;
            }
          }

          p {
            opacity: 0;
            color: white;
            font-family: "casanova";
            font-size: 22px;
            font-weight: 400;
            margin-top: 20px;
            transition: 0.5s;
            position: relative;
            &:after {
              content: "";
              position: absolute;
              right: 0;
              height: 100%;
              width: 100%;
              z-index: 5;
              background: black;
            }
          }

          &:hover {
            > div {
              transition: 0.5s;
              background: transparent;
            }
            p {
              opacity: 1;
              position: relative;
              z-index: 4;
              transition: 0.5s;

              &:after {
                content: "";
                position: absolute;
                right: 0;
                height: 100%;
                width: 0%;
                z-index: 5;
                background: black;
                transition: 2s;
              }
            }
          }
        }
      }
    }
  }

  @media ${devices.laptopS} {
    .options {
      &__container {
        display: block;
        width: 355px;
        button {
          font-size: 13px;
          margin-right: 22px;
        }
        &:after {
          content: "";
          border-bottom: 1px solid #fff;
          width: ${(props) => (Number(props.arrayIndex) + 1) * 80 + "px"};
          transition: 0.5s;
          z-index: 2;
        }
      }
    }
    .info {
      &__left {
        margin-top: 50px;
        width: 100%;
        &.watch-info {
          width: 50%;
        }

        h3 {
          font-size: 16px;
        }
        p {
          font-size: 14px;
        }
      }

      &__right {
        .watch-carousel {
          /* width: 618px; */
          width: calc(100% + 2.8rem);

          > .watchItem {
            min-width: 400px;
            > div {
              img {
                height: 354px;
              }
            }
          }
        }

        .right-img {
          width: 590px;
        }

        .right-img-two {
          width: 270px;
          top: 37%;
          opacity: 0.6;
        }
      }
    }
  }

  @media ${devices.tabletL} {
    .info {
      &__left {
        width: 155%;
        margin-top: 30px;
        p {
          color: rgba(255, 255, 255, 0.7);
        }
      }
      &__right {
        .watch-carousel {
          > .watchItem {
            min-width: 300px;
            > div {
              padding: 30px;
            }
          }
        }
        .right-img {
          width: 100%;
          right: -16%;
        }

        .right-img-two {
          left: 90%;
          width: 90%;
        }
      }
    }
  }

  @media ${devices.tablet} {
    .info {
      &__left {
        &.watch-info {
          width: 65%;
        }
      }
    }
  }

  @media ${devices.mobileL} {
    .options {
      &__container {
        display: flex;
        align-items: end;
        justify-content: flex-start;
        width: 246px;
        height: 55px;
        max-height: 55px;

        button {
          max-width: 80px;
          color: rgba(255, 255, 255, 0.6);
          font-weight: 400;
          line-height: 17px;
          &.selected {
            color: white;
            font-size: 14px;
            font-weight: 600;
          }
        }

        &:after {
          content: "";
          border-bottom: 1px solid #fff;
          width: ${(props) => (Number(props.arrayIndex) + 1) * 82 + "px"};
          transition: 0.5s;
          z-index: 2;
        }
      }
    }

    .info {
      height: 350px;
      &.mobile-col {
        flex-direction: column;
        height: 515px;

        .info__right {
          width: 100% !important;
          .watch-carousel {
            top: 50px !important;

            > .watch-item {
              min-width: 200px !important;
              div {
                img {
                  height: 165px !important;
                }
              }
            }
          }
        }

        .watch-info {
          width: 100%;
        }
      }

      &__left {
        h3 {
          font-size: 14px;
        }
        p {
          font-size: 12px;
        }
      }

      &__right {
        width: 60%;
        .right-img {
          width: 127%;
          right: -25%;
          top: 25%;
        }
      }
    }

    .info {
      &__right {
        width: 100% !important;
        .watch-carousel {
          top: 50px !important;

          > .watchItem {
            min-width: 200px !important;
            p {
              font-size: 16px;
            }
            div {
              img {
                height: 165px !important;
              }
            }
          }
        }
      }
    }
  }
`;
