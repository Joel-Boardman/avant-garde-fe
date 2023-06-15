import styled from "styled-components";

export const Section = styled.section`
  background-color: transparent;
  padding: 120px 0;
  position: relative;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.78) 100%
  );

  video {
    position: fixed;
    top: 0%;
    left: 0;
    width: 100%;
    height: auto;
    z-index: -10;
  }

  .content {
    max-width: 900px;

    h2 {
      color: #fbd71f;
      font-family: "casanova";
      font-size: 60px;
      font-weight: 400;
      margin-bottom: 40px;
    }

    p {
      color: #fff;
      font-size: 20px;
      font-weight: 400;
    }
  }
`;
