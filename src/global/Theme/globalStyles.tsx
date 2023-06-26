import { createGlobalStyle } from "styled-components";
import { devices } from "../../layout/devices";

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  code {
    font-family: "area-extended", source-code-pro, Menlo, Monaco, Consolas,
      "Courier New", monospace;
  }

  html {
    overflow-x: hidden;
    scroll-behavior: smooth;
    font-size: 16px;
    height: 100%;
    margin: 0;
    

  }

  body {
    overflow-x: hidden;
    margin: 0;
    font-family: "area-extended", Helvetica, Arial, Sans-Serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
    background: white;
  }

  .border {
    max-width: 1400px;
    height: 100%;
    margin: 0 auto;
    padding: 0 4.6rem;
    min-height: inherit;

    @media ${devices.laptopS}{
      padding: 0 2.6rem;
    }

    @media ${devices.tabletS}{
      padding: 0 1.6rem;
    }
  }


`;
