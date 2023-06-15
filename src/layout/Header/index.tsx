import React from "react";
import { Link } from "react-router-dom";

// images
import LogoSVG from "../../assets/icons/logo.svg";

// Styles
import { HeaderSection } from "./styles";

const Header: React.FC = () => {
  return (
    <HeaderSection>
      <img src={LogoSVG} alt="logo" />
      <div className="links">
        <Link to="/invest">Investments</Link>
        <Link to="/contact">Enquire Now</Link>
      </div>
    </HeaderSection>
  );
};

export default Header;
