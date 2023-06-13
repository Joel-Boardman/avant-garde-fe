import React from "react";
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./global/Theme";

// Pages
import LandingPage from "./pages/LandingPage";
import ContactPage from "./pages/ContactPage";

const Router: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/contact" Component={ContactPage} />
      </Routes>
      <GlobalStyle />
    </>
  );
};

export default Router;
