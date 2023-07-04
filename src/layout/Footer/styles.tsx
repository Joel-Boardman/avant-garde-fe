import styled from "styled-components";
import { devices } from "../devices";

export const FooterSection = styled.footer`
  background-color: #000;
  padding: 60px 0 30px;
  color: white;

  position: relative;
  z-index: 250;

  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 28px;
  }

  .footer {
    display: flex;
    flex-direction: column;

    &__top {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 125px;
      &--logo {
        max-width: 40%;
        width: 100%;
        img {
          height: 47px;
          width: auto;
        }
      }

      &--touch,
      &--home {
        ul {
          li {
            list-style: none;

            &:not(:last-of-type) {
              margin-bottom: 10px;
            }
            a,
            a:active {
              text-decoration: none;
              color: #fff;
              font-style: normal;
              font-weight: 600;
              font-size: 14px;
              line-height: 19px;
              color: rgba(255, 255, 255, 0.8);
            }
          }
        }
      }

      &--socials {
        > div {
          h3 {
            text-transform: uppercase;
          }
          &:first-of-type {
            margin-bottom: 52px;
          }
          > a:not(:last-of-type) {
            margin-right: 12px;
          }
        }
      }
    }

    &__bottom {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      &--left {
        p {
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 16px;

          color: rgba(255, 255, 255, 0.6);
        }

        ul {
          display: flex;
          flex-direction: row;

          li {
            list-style: none;

            &:first-of-type {
              margin-right: 15px;
            }
            a {
              font-style: normal;
              font-weight: 400;
              font-size: 12px;
              line-height: 16px;
              /* identical to box height */

              text-decoration-line: underline;

              color: rgba(255, 255, 255, 0.7);
            }
          }
        }
      }
    }
  }

  @media (min-height: 1300px) {
    .extend {
      min-height: 60vh;
    }
  }

  @media ${devices.tabletL} {
    .footer {
      &__top {
        h3 {
          font-size: 14px;
        }
        &--logo {
          img {
            height: 36px;
          }
        }

        &--home,
        &--touch {
          ul {
            li {
              a {
                font-size: 12px;
              }
            }
          }
        }
      }

      &__bottom {
        &--left {
          p {
            font-size: 10px;
          }

          ul {
            li {
              a {
                font-size: 10px;
              }
            }
          }
        }

        &--right {
          img {
            height: 20px;
          }
        }
      }
    }
  }

  @media ${devices.tabletS} {
    .footer {
      &__top {
        margin-bottom: 35px;
        h3 {
          font-size: 12px;
        }
        &--logo {
          max-width: 30%;
          img {
            height: 25px;
          }
        }

        &--home,
        &--touch {
          ul {
            li {
              a {
                font-size: 10px;
              }
            }
          }
        }
      }

      &__bottom {
        flex-direction: column;
        /* max-width: 236px; */
        /* justify-content: center; */
        /* align-items: flex-start; */
        /* margin: 0 auto; */
        padding: 0px 30px;
        &--left {
          order: 2;
          p {
            font-size: 11px;
            margin: 5px 0;
          }

          ul {
            justify-content: center;
            li {
              a {
                font-size: 11px;
              }
            }
          }
        }

        &--right {
          order: 1;
          img {
            height: 20px;
            margin: 0;
          }
        }
      }
    }
  }

  @media ${devices.mobileL} {
    padding: 44px 35px 49px 35px;
    .footer {
      &__top {
        flex-wrap: wrap;

        &--logo {
          width: 100%;
          max-width: 100%;
          margin-bottom: 40px;
          img {
            display: block;
            margin: 0 auto;
            height: 35px;
          }
        }

        h3 {
          font-size: 14px;
          margin-bottom: 13px;
        }

        &--touch,
        &--home {
          width: 50%;
          margin-bottom: 56px;
          padding: 0 30px;

          ul li a {
            font-size: 12px;
          }
        }

        &--socials {
          width: 100%;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
          padding: 28px 30px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;

          > div {
            h3 {
              text-transform: capitalize;
            }
            &:first-of-type {
              order: 2;
              margin-bottom: 0;
            }
            &:last-of-type {
              margin-bottom: 22px;
              order: 1;
            }
          }
        }
      }

      &__bottom {
        max-width: 321px;

        &--left {
          ul {
            justify-content: space-between;
          }
        }
        &--right {
          width: 100%;
        }
      }
    }
  }

  @media ${devices.mobile} {
    padding: 44px 15px 49px 15px;

    .footer {
      &__top {
        &--touch,
        &--home {
          padding: 0px 12px;
        }

        &--socials {
          padding: 28px 12px;
        }
      }
    }
  }

  @media ${devices.mobileS} {
    padding: 44px 8px 49px 8px;

    .footer {
      &__top {
        &--touch,
        &--home {
          padding: 0px 8px;
        }

        &--socials {
          padding: 28px 8px;
        }
      }
    }
  }
`;
