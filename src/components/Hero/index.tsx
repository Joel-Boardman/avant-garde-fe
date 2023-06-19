import React from "react";

// Styles
import { Section } from "./styles";

// Components
import HeroAnimation from "../HeroAnimation";

const Hero: React.FC = () => {
  return (
    <Section>
      <div className="border">
        <HeroAnimation />
      </div>
    </Section>
  );
};

export default Hero;
