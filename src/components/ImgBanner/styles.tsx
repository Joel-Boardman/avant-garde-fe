import styled from "styled-components";
import { devices } from "../../layout/devices";

export const Section = styled.section`
  background: white;
  padding: 10px 0;

  @media ${devices.tabletL} {
    padding: 0;
  }

  /* @media ${devices.mobileL} {
    display: none;
  } */
`;

export const Banner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: white;

  position: relative;
  z-index: 250;

  > img {
    width: 25%;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  @media ${devices.tabletL} {
    overflow-x: auto;
    justify-content: normal;
    > img {
      width: 346px;
    }
  }
`;
