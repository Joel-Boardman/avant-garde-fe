import React from "react";

// Components
import Hero from "../components/Hero";
import Perfection from "../components/Perfection";
import Trusted from "../components/Trusted";
import Excellence from "../components/Excellence";
import Purchasing from "../components/Purchasing";

const LandingPage: React.FC = () => {
  return (
    <>
      <Hero />
      <Perfection />
      <Trusted />
      <Excellence />
      <Purchasing />
    </>
  );
};

export default LandingPage;
