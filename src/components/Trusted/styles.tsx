import styled from "styled-components";

export const Section = styled.section`
  padding: 160px 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .ani-container,
  .info-container {
    width: 50%;
  }

  .info-container {
    margin: 0 auto;
    display: block;
    h2 {
      color: #000;
      font-family: "casanova";
      font-size: 50px;
      font-weight: 400;
      margin-bottom: 40px;
      max-width: 432px;
    }

    p {
      max-width: 525px;
    }
  }
`;
