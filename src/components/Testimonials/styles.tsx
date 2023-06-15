import styled from "styled-components";

export const Section = styled.section`
  padding: 95px 0px 79px;
  background: white;
  .border {
    padding: 0 11rem;
  }
`;

export const Content = styled.div`
  h2 {
    margin-bottom: 34px;
  }
  .info {
    margin-bottom: 125px;
  }
`;

export const TestContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  margin-left: 11rem;
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
`;
