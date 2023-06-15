import styled from "styled-components";

export const HeaderSection = styled.header`
  background-color: #000;
  padding: 39px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 500;

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
      background: linear-gradient(to right, #fbd71f, #fbd71f 50%, #fff 50%);
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
`;