import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

// images
import LogoSVG from "../../assets/icons/logo.svg";
import LogoBlackSVG from "../../assets/icons/logo-black.svg";

// Styles
import { HeaderSection } from "./styles";

const Header: React.FC = () => {
  const location = useLocation();
  const [defaultHeader, setDefaultHeader] = useState<boolean>(true);

  React.useEffect(() => {
    if (location.pathname !== "/") {
      setDefaultHeader(false);
    } else {
      setDefaultHeader(true);
    }
  }, [location]);

  return (
    <HeaderSection defaultHeader={defaultHeader}>
      {defaultHeader ? (
        <img src={LogoSVG} alt="logo" />
      ) : (
        <img src={LogoBlackSVG} alt="logo" />
      )}
      <div className="links">
        {defaultHeader ? (
          <>
            <Link to="/invest">Investments</Link>
            <Link to="/contact">Enquire Now</Link>
          </>
        ) : (
          <Link to="/">BACK TO HOME</Link>
        )}
      </div>
    </HeaderSection>
  );
};

export default Header;
