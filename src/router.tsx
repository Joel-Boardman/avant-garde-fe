import React from "react";
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./global/Theme";

// Layout
import Header from "./layout/Header";
import Footer from "./layout/Footer";

// Pages
import LandingPage from "./pages/LandingPage";
import ContactPage from "./pages/ContactPage";
import InvestPage from "./pages/InvestPage";

const Router: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/contact" Component={ContactPage} />
        <Route path="/invest" Component={InvestPage} />
      </Routes>
      <Footer />
      <GlobalStyle />
    </>
  );
};

export default Router;
