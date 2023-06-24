import styled from "styled-components";
import { devices } from "../../layout/devices";

export const Section = styled.section`
  padding: 160px 0 100px;
  background: white;

  @media ${devices.laptopS} {
    padding: 80px 0;
  }

  @media ${devices.tabletL} {
    padding: 50px 0;
  }
`;

export const Content = styled.div`
  .banner-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    h2 {
      max-width: 432px;
    }
    p {
      max-width: 812px;
    }
  }

  .quad-info {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    &__container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      max-width: 815px;

      &--item {
        width: 300px;
        margin: 45px;
        position: relative;

        h3,
        p {
          margin-left: 20px;
        }

        h3 {
          font-size: 22px;
          font-weight: 600;
          line-height: 30px;
          margin-bottom: 33px;
          margin-right: 30px;
        }

        img {
          position: absolute;
          top: 0;
          left: -15px;
        }
      }
    }
  }

  @media ${devices.laptopS} {
    .banner-info {
      h2 {
        width: 100%;
        font-size: 40px;
      }

      p {
        font-size: 14px;
      }
    }

    .quad-info {
      &__container {
        justify-content: flex-end;
        margin-top: 50px;
        &--item {
          margin: 25px;
          p {
            font-size: 14px;
          }
        }
      }
    }
  }

  @media ${devices.tabletL} {
    .banner-info {
      p {
        display: none;
      }
    }

    .quad-info {
      &__container {
        justify-content: center;

        &--item {
          width: 340px;

          img {
            top: 5px;
          }
          h3 {
            color: rgba(50, 43, 5, 0.75);
          }

          p {
            color: rgba(0, 0, 0, 0.7);
          }
        }
      }
    }
  }

  @media ${devices.mobileL} {
    .banner-info {
      h2 {
        font-size: 25px;
        max-width: 200px;
      }
    }

    .quad-info {
      &__container {
        margin-top: 30px;

        &--item {
          max-width: 240px;

          h3 {
            font-size: 15px;
            margin-bottom: 15px;
            line-height: 25px;
          }

          p {
            font-size: 12px;
          }
        }
      }
    }
  }
`;
