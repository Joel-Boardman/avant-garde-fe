import styled from "styled-components";

export const FooterSection = styled.footer`
  background-color: #000;
  padding: 60px 0 30px;
  color: white;

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
`;
