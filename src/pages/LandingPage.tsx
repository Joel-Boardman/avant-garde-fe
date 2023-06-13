import React from "react";

// Components
import Hero from "../components/Hero";
import Perfection from "../components/Perfection";
import Trusted from "../components/Trusted";
import Excellence from "../components/Excellence";
import Purchasing from "../components/Purchasing";
import Testimonials from "../components/Testimonials";
import ImgBanner from "../components/ImgBanner";
import Living from "../components/Living";

const LandingPage: React.FC = () => {
  return (
    <>
      <Hero />
      <Perfection />
      <Trusted />
      <Excellence />
      <Purchasing />
      <Testimonials />
      <ImgBanner />
      <Living />
    </>
  );
};

export default LandingPage;
