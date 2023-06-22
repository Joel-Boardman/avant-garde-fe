import styled from "styled-components";
import { devices } from "../devices";

export const HeaderSection = styled.header<{ defaultHeader: boolean }>`
  background-color: ${(props) => (props.defaultHeader ? "#000" : "#F4F4F4")};
  padding: 39px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 500;
  max-height: 98px;

  > img {
    width: 245px;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .links {
    display: flex;
    justify-content: flex-end;

    > a {
      color: white;
      text-decoration: none;
      font-family: "casanova";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 20px;
      letter-spacing: 0.05em;
      margin: 0 16px;
      color: rgba(255, 255, 255, 0.85);
      background: ${(props) =>
        props.defaultHeader
          ? "linear-gradient(to right, #fbd71f, #fbd71f 50%, #fff 50%)"
          : "linear-gradient(to right, #fbd71f, #fbd71f 50%, #000 50%)"};
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-size: 200% 100%;
      background-position: 100%;
    }

    a {
      /* Same as before */
      transition: background-position 275ms ease;
    }
    a:hover {
      background-position: 0 100%;
    }
  }

  @media ${devices.tabletL} {
    .links {
      display: none;

      > a {
        font-size: 16px;
        margin: 0 10px;
      }
    }
  }

  @media ${devices.tablet} {
    padding: 39px 15px;
    > img {
      width: 200px;
    }
  }
`;
