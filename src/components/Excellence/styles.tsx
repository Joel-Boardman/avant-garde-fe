import styled from "styled-components";

export const Section = styled.section`
  padding: 160px 0 100px;
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
`;
