import styled from "styled-components";
import { devices } from "../../layout/devices";

export const Section = styled.section`
  padding: 160px 0px 200px;

  @media ${devices.laptopS} {
    padding: 160px 0px 150px;
  }
`;

export const Content = styled.div`
  .content__top {
    text-align: center;
    max-width: 1027px;
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
        width: 50%;
        max-width: 417px;
        margin-bottom: 15px;
        padding: 18px 0 18px 35px;
        border: 1px solid rgba(50, 43, 5, 0.15);

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
      > input:focus {
        outline: none !important;
        outline-width: 0 !important;
        border: 1px solid #fbd71f;
        box-shadow: 0 0 2px #fbd71f !important;
        -moz-box-shadow: 0 0 2px #fbd71f !important;
        -webkit-box-shadow: 0 0 2px #fbd71f !important;
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
    .content__top {
      h2 {
        font-size: 40px;
      }

      p {
        font-size: 14px;
      }
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
`;
