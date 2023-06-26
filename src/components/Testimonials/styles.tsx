import styled from "styled-components";
import { devices } from "../../layout/devices";

export const Section = styled.section`
  padding: 95px 0px 79px;
  background: white;
  min-height: 800px;
  position: relative;
  z-index: 250;

  .border {
    padding: 0 11rem;
    position: relative;
  }

  @media ${devices.laptopS} {
    padding: 80px 0px 70px;

    .border {
      padding: 0 9rem;
    }
  }

  @media ${devices.tabletL} {
    min-height: 500px;

    .border {
      padding: 0 2.6rem;
    }
  }

  @media ${devices.mobileL} {
    min-height: 430px;
    padding: 80px 0px 0px;

    .border {
      padding: 0 1.6rem;
    }
  }
`;

export const Content = styled.div`
  h2 {
    margin-bottom: 34px;
  }
  .info {
    margin-bottom: 125px;
  }

  @media ${devices.laptopS} {
    h2 {
      font-size: 40px;
    }
  }

  @media ${devices.tabletL} {
    .info {
      p {
        display: none;
      }
    }
  }

  @media ${devices.mobileL} {
    h2 {
      font-size: 25px;
    }
  }
`;

export const TestContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  margin-left: 8rem;
  position: absolute;
  left: 0;
  top: 250px;
  max-width: 93%;

  &::-webkit-scrollbar {
    display: none;
  }
  .card {
    width: 436px;
    min-width: 436px;
    margin-right: 20px;
    padding: 50px 50px 90px;
    display: inline-block;
    border: 1px solid transparent;
    transition: 0.5s;

    h4 {
      margin-bottom: 34px;

      font-style: normal;
      font-weight: 600;
      font-size: 23px;
      line-height: 30px;
    }

    &:hover {
      border: 1px solid #fbd71f;
    }

    p {
      color: #000000;

      &:first-of-type {
        margin-bottom: 25px;
      }

      &:last-of-type {
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 30px;
      }
    }
  }

  @media ${devices.tabletL} {
    margin-left: 2.6rem;
    top: 100px;

    .card {
      padding: 0;
      p {
        width: 364px;
      }
      &:hover {
        border: 1px solid #dfdede;
        padding: 35px;
      }
    }
  }

  @media ${devices.tablet} {
    .card {
      h4 {
        font-size: 20px;
      }
      p {
        font-size: 14px;
      }
    }
  }
  @media ${devices.mobileL} {
    margin-left: 1.6rem;
    top: 70px;
    .card {
      min-width: calc(100vw - 8.2rem);
      width: calc(100vw - 8.2rem);

      img {
        top: -5px;
        left: -13px;
      }

      h4 {
        max-width: 90%;
        font-size: 14px;
      }

      p {
        font-size: 12px;
        width: 290px;
        &:last-of-type {
          font-size: 14px;
        }
      }
      &:hover {
        padding: 16px;
      }
    }
  }

  @media (max-width: 420px) {
    .card {
      min-width: calc(100vw - 6.2rem);
      width: calc(100vw - 6.2rem);

      p {
        width: 234px;
      }
    }
  }
`;
