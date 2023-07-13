import styled from "styled-components";
import { devices } from "../../layout/devices";

export const Section = styled.section`
  padding: 140px 0;
  background: white;

  position: relative;
  z-index: 250;

  .info {
    margin-bottom: 99px;
    h2,
    p {
      text-align: center;
    }

    h2 {
      margin-bottom: 23px;
    }

    p {
      max-width: 1000px;
      margin: 0 auto;
      font-size: 18px;
    }
  }

  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .item {
      width: 345px;
      max-width: 345px;
      position: relative;
      padding-left: 45px;
      h4 {
        font-weight: 600;
        font-size: 22px;
        line-height: 22px;
        margin-bottom: 32px;
        color: #000000;
      }

      p {
        max-width: 273px;
      }

      img {
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }

  @media ${devices.laptopS} {
    .info {
      h2 {
        font-size: 40px;
      }

      p {
        font-size: 16px;
      }
    }

    .row {
      .item {
        max-width: 285px;
        padding-left: 40px;

        h4 {
          font-size: 18px;
        }
        p {
          font-size: 14px;
        }
      }
    }
  }

  @media ${devices.tabletL} {
    padding: 70px 0 80px;
  }

  @media ${devices.tablet} {
    .info {
      h2 {
        text-align: left;
        max-width: 350px;
      }
      p {
        display: none;
      }
    }

    .row {
      flex-direction: column;
      align-items: center;

      .item {
        margin-bottom: 50px;
        max-width: 392px;

        h4 {
          margin-bottom: 22px;
        }
      }
    }
  }

  @media ${devices.mobileL} {
    padding: 60px 0px 10px;
    .info {
      margin-bottom: 40px;
      h2 {
        font-size: 25px;
        max-width: 200px;
      }
    }

    .row {
      .item {
        max-width: 291px;
        h4 {
          font-size: 14px;
          color: rgba(50, 43, 5, 1);
          font-weight: 600;
          margin-bottom: 10px;
        }
        img {
          top: -2px;
          left: -10px;
          width: 25px;
        }

        p {
          font-size: 12px;
          color: rgba(50, 43, 5, 0.8);
          width: 249px;
        }
      }
    }
  }

  @media ${devices.mobileS} {
    .row {
      .item {
        img {
          left: 0px;
        }
      }
    }
  }
`;
