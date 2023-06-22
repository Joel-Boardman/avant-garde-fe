import styled from "styled-components";
import { devices } from "../../layout/devices";

export const Section = styled.section`
  padding: 95px 0px 79px;
  background: white;
  min-height: 800px;

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
`;
