import styled from "styled-components";

export const Section = styled.section`
  padding: 140px 0;

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
`;
