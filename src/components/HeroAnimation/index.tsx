import React from "react";

// Images
import WatchBG from "../../assets/background/animation.png";
import TickerSVG from "../../assets/icons/ticker.svg";
import LogoSvg from "../../assets/icons/logo.svg";

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
        <img src={LogoSvg} alt="Logo" />
      </Content>
    </Section>
  );
};

export default HeroAnimation;
