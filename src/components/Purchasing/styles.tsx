import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {opacity: 0;}
  100% {opacity: 1;}
`;
export const Section = styled.section`
  padding: 70px 0 160px 0;
  background: #000;
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
    height: 500px;
    display: flex;
    color: #fff;

    &__left {
      margin-top: 96px;
      max-width: 633px;
    }
  }
`;
