import React from "react";

// Images
import ImgOnePNG from "../../assets/images/img-1.png";
import ImgTwoPNG from "../../assets/images/img-2.png";
import ImgThreePNG from "../../assets/images/img-3.png";
import ImgFourPNG from "../../assets/images/img-4.png";

// styles
import { Section, Banner } from "./styles";

const ImgBanner: React.FC = () => {
  return (
    <Section>
      <Banner>
        <img src={ImgOnePNG} alt="img-1" />
        <img src={ImgTwoPNG} alt="img-2" />
        <img src={ImgThreePNG} alt="img-3" />
        <img src={ImgFourPNG} alt="img-4" />
      </Banner>
    </Section>
  );
};

export default ImgBanner;
