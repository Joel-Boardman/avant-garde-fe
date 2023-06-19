import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {opacity: 0;}
  100% {opacity: 1;}
`;

export const Section = styled.section`
  background: black;
  min-height: 750px;
  height: 750px;
  margin-top: 95px;
  color: white;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 80px 0;

  .watch-info {
    width: 50%;
  }

  .watch-scroll {
    width: 45%;
  }

  .watch-info {
    .title {
      display: flex;
      flex-direction: row;
      align-items: baseline;
      h1 {
        font-family: "casanova";
        font-style: normal;
        font-weight: 400;
        font-size: 70px;
        line-height: 77px;
      }
      span {
        font-family: "casanova";

        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 20px;
        /* identical to box height */

        color: rgba(255, 255, 255, 0.7);
        position: relative;
        padding-left: 9px;
        margin-left: 19px;

        &:after {
          content: "";
          left: 0;
          top: 45%;
          transform: translateY(-50%);
          border-left: 1px solid rgba(255, 255, 255, 0.7);
          height: 14px;
          width: 1px;
          position: absolute;
        }
      }

      &.fadeIn {
        animation-name: ${fadeIn};
        animation-duration: 1s;
      }
    }

    .info {
      &.fadeIn {
        animation-name: ${fadeIn};
        animation-duration: 1s;
      }
    }
    .info > * {
      font-family: "area-extended";
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 28px;
      /* or 187% */

      color: #ffffff;
    }
  }

  .watch-scroll {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .slick-dots {
      display: flex !important;
      flex-direction: column !important;
      top: 0%;
      left: calc(100% - 70px);

      li {
        height: auto !important;
        margin: 5px 0;
        opacity: 0.5;
        transition: 0.2s;

        &:hover {
          opacity: 1;
          transition: 0.2s;

          p {
            transition: 0.5s;
            opacity: 1;
          }
        }

        p {
          position: absolute;
          top: 50%;
          right: -125px;
          text-align: left;
          width: 70px;
          font-family: "casanova";
          transform: translateY(-50%);

          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          /* identical to box height */

          color: rgba(255, 255, 255, 0.7);
          opacity: 0;
          transition: 0.5s;
        }
      }

      .slick-active {
        opacity: 1;
      }
    }

    .pagination-img {
      width: 60px;
      height: auto;
    }

    &__dots {
      min-width: 55px;
      max-width: 55px;
      width: 55px;
    }

    &__slide {
      overflow: visible !important;

      .slick-slide {
        width: 376px !important;
        height: 540px !important;
        overflow: visible !important;
        .watch-img {
          margin: 12px auto;
          width: 326px !important;
          height: 515px !important;
          transition: 0.2s;

          &:hover {
            transform: scale(1.1);
            transition: 0.5s;
          }
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
  transition: 300ms;
  position: relative;
  z-index: 2;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    border: 1px solid #ffffff;

    z-index: -1;
    transition: 400ms;
  }

  span {
    color: rgba(255, 255, 255, 0.85);
    background: linear-gradient(
      to right,
      #fff,
      #fff 50%,
      rgba(95, 81, 13, 1) 50%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 100%;
    background-position: 0%;
  }

  span {
    /* Same as before */
    transition: background-position 275ms ease;
  }

  &:hover {
    span {
      background-position: 100%;
    }
    &:before {
      -moz-transform: scaleY(-1);
      -o-transform: scaleY(-1);
      -webkit-transform: scaleY(-1);
      transform: scaleY(-1);
      background: rgba(251, 215, 31, 1) !important;
    }
  }
`;
