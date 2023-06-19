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
    width: 40%;
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
      left: 100%;

      li {
        height: auto !important;
        margin: 5px 0;
        opacity: 0.5;
        transition: 0.2s;

        &:hover {
          opacity: 1;
          transition: 0.2s;
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
