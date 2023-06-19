import React from "react";

// Images
import WatchBG from "../../assets/background/animation.png";
import TickerSVG from "../../assets/icons/ticker.svg";
import LogoSvg from "../../assets/icons/logo.svg";
import WatchOnePng from "../../assets/images/watch.png";
import WatchTwoImg from "../../assets/images/watch-gold.png";
import WatchThreeImg from "../../assets/images/watch-silver.png";

// Styles
import { Content, Section } from "./styles";

const HeroAnimation: React.FC = () => {
  return (
    <Section>
      <img src={WatchBG} alt="Background watch" />
      <div className="ticker">
        <img src={TickerSVG} alt="Background watch" />
      </div>
      <Content>
        <div className="animation-one">
          <img src={LogoSvg} alt="Logo" />
        </div>
        <div className="animation-two">
          <img src={WatchOnePng} alt="Watch One" />
          <img src={WatchTwoImg} alt="Watch Two" />
          <img src={WatchThreeImg} alt="Watch Three" />
        </div>
      </Content>
    </Section>
  );
};

export default HeroAnimation;
