import styled, { keyframes } from "styled-components";
import { devices } from "../../layout/devices";

const fadeIn = keyframes`
  0%{
    opacity: 0;
    position: relative;
  }
  100%{
    opacity: 1;
    top: 0;
  }
`;
export const Section = styled.section`
  background-color: transparent;
  padding: 120px 0;
  position: relative;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.78) 100%
  );

  video {
    position: fixed;
    top: 0%;
    left: 0;
    width: 100%;
    height: auto;
    z-index: -10;
  }

  .content {
    max-width: 900px;
    opacity: 0;

    &.fadeIn {
      animation: 0.4s ease-in-out 0s forwards ${fadeIn};
    }

    h2 {
      color: #fbd71f;
      font-family: "casanova";
      font-size: 60px;
      font-weight: 400;
      margin-bottom: 40px;
    }

    p {
      color: #fff;
      font-size: 20px;
      font-weight: 400;
    }
  }

  @media ${devices.laptopS} {
    padding: 80px 0px;

    .content {
      h2 {
        font-size: 54px;
      }

      p {
        font-size: 18px;
      }
    }
  }

  @media ${devices.tabletL} {
    background: rgba(0, 0, 0, 0.8);
    .content {
      h2 {
        color: white;
        font-size: 40px;
        margin-bottom: 25px;
      }
    }
  }
`;
