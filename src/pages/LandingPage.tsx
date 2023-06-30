import React, { useState, useEffect } from "react";

// Components
import Hero from "../components/Hero";
import HeroStatic from "../components/HeroStatic";

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
  const [loaded, setLoaded] = useState(true);
  const [retrieveData, setRetrieveData] = useState<null | boolean>(false);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  useEffect(() => {
    if (loaded) {
      let a = sessionStorage.getItem("viewedSite") || "false";
      setRetrieveData(JSON.parse(a));
      console.log(a);
    }
  }, [loaded]);

  useEffect(() => {
    setLoaded(true);
  });

  return (
    <>
      <Hero />
      {/* {retrieveData ? (
        <>{windowWidth >= 960 ? <HeroStatic /> : <HeroMobile />}</>
      ) : (
        <>{windowWidth >= 960 ? <Hero /> : <HeroMobile />}</>
      )} */}
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
