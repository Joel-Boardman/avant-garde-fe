import styled from "styled-components";
import { devices } from "../../layout/devices";

export const Section = styled.section`
  /* padding: 160px 0px 0px;

  @media ${devices.laptopS} {
    padding: 160px 0px 0;
  } */

  /* @media ${devices.laptopS} {
    padding: 140px 0px 0;
  } */

  @media ${devices.mobileL} {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const Content = styled.div`
  padding: 150px 0 160px;

  .content__top {
    text-align: center;
    margin: 0 auto 40px;

    h2 {
      margin-bottom: 23px;
    }
  }

  .content__bottom {
    max-width: 850px;
    margin: 0 auto;
    &--quad {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-bottom: 34px;

      > input {
        &:first-of-type {
          display: none;
        }
      }

      > input,
      > textarea {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 21px;
        letter-spacing: -0.05em;
        font-family: "area-extended";

        &:hover {
          border: 1px solid #fbd71f;
          transition: 0.5s;
        }
      }

      > input:focus,
      > textarea:focus {
        outline: none !important;
        outline-width: 0 !important;
        border: 1px solid #fbd71f;
        box-shadow: 0 0 2px #fbd71f !important;
        -moz-box-shadow: 0 0 2px #fbd71f !important;
        -webkit-box-shadow: 0 0 2px #fbd71f !important;
      }

      > input {
        width: 50%;
        max-width: 417px;
        margin-bottom: 15px;
        padding: 15px 0 15px 35px;
        border: 1px solid rgba(50, 43, 5, 0.15);
      }

      > textarea {
        width: 100%;
        max-width: 100%;
        height: 133px;
        box-sizing: border-box;
        resize: none;
        margin-bottom: 15px;
        padding: 18px 0 18px 35px;
        border: 1px solid rgba(50, 43, 5, 0.15);
      }
    }
    &--confirm {
      display: flex;
      justify-content: space-between;
      margin-bottom: 39px;
      .container {
        display: block;
        position: relative;
        padding-left: 35px;
        margin-bottom: 12px;
        cursor: pointer;
        font-size: 22px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;

        font-family: "area-extended";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        letter-spacing: -0.05em;
        color: #322b05;

        a {
          color: #322b05;
        }
      }

      .container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
      }

      .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 25px;
        width: 25px;
        background-color: #fff;
        border: 1px solid rgba(50, 43, 5, 0.15);
        transition: 0.3s;
        top: 50%;
        transform: translateY(-50%);
      }

      .container input:checked ~ .checkmark {
        background-color: #fff;
        border: 1px solid #bfa315;
        transition: 0.3s;
      }

      .checkmark:after {
        content: "";
        position: absolute;
        display: none;
      }

      .container input:checked ~ .checkmark:after {
        display: block;
        transition: 1s;
        border: solid #bfa315;
        border-width: 0 2px 2px 0;
        transition: 0.2s;
      }

      .container .checkmark:after {
        transition: 1s;
        left: 8px;
        top: 3px;
        width: 8px;
        height: 15px;
        border: solid #bfa315;
        border-width: 0 2px 2px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
      }
    }
  }

  @media ${devices.laptopS} {
    padding: 150px 0 110px;

    .content__top {
      h2 {
        font-size: 40px;
      }
    }

    .content__bottom {
      max-width: 804px;
      &--quad {
        > input {
          max-width: 395px;
        }
      }
    }
  }

  @media ${devices.tabletL} {
    .content__bottom {
      max-width: 650px;

      &--quad {
        > input {
          max-width: 318px;
        }
      }
      &--confirm {
        .container {
          font-size: 12px;
        }
      }
    }
  }

  @media ${devices.tablet} {
    .content__top {
      h2 {
        font-size: 35px;
      }
    }
    .content__bottom {
      max-width: 590px;

      &--quad {
        > input {
          max-width: 287px;
        }

        > input,
        > textarea {
          font-size: 12px;
          margin-bottom: 15px;
          padding: 11px 0px 11px 25px;
        }
      }
      &--confirm {
        .container {
          font-size: 12px;
        }
      }
    }
  }

  @media ${devices.tabletS} {
    padding: 130px 0 80px;

    .content {
      &__top {
        max-width: 514px;

        h2 {
          font-size: 30px;
          margin-bottom: 13px;
        }

        p {
          font-size: 12px;
        }
      }
      &__bottom {
        max-width: 508px;

        &--quad {
          margin-bottom: 20px;
          > input {
            max-width: 248px;
          }
        }

        &--confirm {
          margin-bottom: 27px;
          .container {
            font-size: 10px;
            line-height: 14px;
          }
        }
      }
    }
  }

  @media ${devices.mobileL} {
    padding: 50px 0 80px;

    .content {
      &__top {
        margin: 0px auto 29px;

        h2 {
          margin-bottom: 3px;
        }
        p {
          font-size: 11px;
        }
      }
      &__bottom {
        &--quad {
          flex-direction: column;

          > textarea {
            font-size: 12px;
            color: rgba(50, 43, 5, 0.4);

            &::placeholder {
              color: rgba(50, 43, 5, 0.4);
            }
          }
          > input {
            width: 100%;
            max-width: 100%;
            font-size: 12px;
            color: rgba(50, 43, 5, 0.4);

            &::placeholder {
              color: rgba(50, 43, 5, 0.4);
            }

            &:first-of-type {
              display: block;
            }

            &:nth-of-type(2),
            &:nth-of-type(3) {
              display: none;
            }
          }
        }
      }
    }
  }

  @media ${devices.mobile} {
    .content {
      &__top {
        h2 {
          font-size: 22px;
        }

        p {
          font-size: 9px;
        }
      }

      &__bottom {
        &--confirm {
          .container {
            font-size: 8px;
            line-height: 9px;
          }
        }
      }
    }
  }
`;

export const InfoContent = styled.div`
  background: #f4f4f4;
  padding: 150px 0 160px;

  .content {
    &__top {
      max-width: 525px;
      h2 {
        font-size: 50px;
        margin-bottom: 16px;
      }

      p {
        color: var(--yellow-word, #322b05);
        font-size: 16px;
        font-family: "area-extended";
        line-height: 30px;

        margin-bottom: 25px;
      }

      ul {
        list-style: none;

        li {
          margin: 20px 0;
          font-size: 14px;
          display: flex;
          flex-direction: row;
          align-items: center;

          img {
            margin-right: 12px;
            height: 26px;
            width: 26px;
          }
        }
      }
    }
  }

  @media ${devices.tablet} {
    padding: 100px 0px;

    .content__top {
      max-width: 375px;
      h2 {
        font-size: 35px;
      }
      p {
        font-size: 12px;
        line-height: 22px;
      }

      ul {
        li {
          font-size: 10px;
          margin: 13px 0px;
        }
      }
    }
  }

  @media ${devices.tabletS} {
    padding: 80px 0px;

    .content__top {
      max-width: 335px;
      h2 {
        font-size: 30px;
      }
      p {
        font-size: 10px;
        line-height: 18px;
      }

      ul {
        li {
          font-size: 10px;
          margin: 13px 0px;
        }
      }
    }
  }

  @media ${devices.mobileL} {
    padding: 120px 0px 40px;

    .content__top {
      max-width: 335px;
      h2 {
        font-size: 30px;
      }
      p {
        font-size: 10px;
        line-height: 18px;
      }

      ul {
        li {
          font-size: 10px;
          margin: 9px 0px;
        }
      }
    }
  }

  @media ${devices.mobile} {
    padding: 120px 0px 40px;

    .content__top {
      max-width: 335px;
      h2 {
        font-size: 22px;
      }
      p {
        font-size: 12px;
        line-height: 18px;
      }

      ul {
        li {
          font-size: 12px;
          margin: 9px 0px;
        }
      }
    }
  }
`;

export const Button = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  font-family: "area-extended";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  padding: 14px 58px;
  text-align: center;

  color: #ffffff;
  background: transparent;
  border: 1px solid #ffffff;
  transition: 300ms;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #bfa315;
    z-index: -1;
    transition: 400ms;
  }

  &:hover {
    color: black;
    &:before {
      -moz-transform: scaleY(-1);
      -o-transform: scaleY(-1);
      -webkit-transform: scaleY(-1);
      transform: scaleY(-1);
      background: #fbd71f;
    }
  }

  @media ${devices.tablet} {
    padding: 12px 50px;
    font-size: 14px;
  }
`;
