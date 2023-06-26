import React, { useState, useEffect } from "react";

// Components
import Hero from "../components/Hero";
import HeroMobile from "../components/HeroMobile";
import Perfection from "../components/Perfection";
import Trusted from "../components/Trusted";
import Excellence from "../components/Excellence";
import Purchasing from "../components/Purchasing";
import Testimonials from "../components/Testimonials";
import ImgBanner from "../components/ImgBanner";
import Living from "../components/Living";

const LandingPage: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <>
      {windowWidth >= 960 ? <Hero /> : <HeroMobile />}
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
