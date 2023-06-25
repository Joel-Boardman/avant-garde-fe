import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

// images
import LogoSVG from "../../assets/icons/logo.svg";
import LogoBlackSVG from "../../assets/icons/logo-black.svg";
import InstaSVG from "../../assets/icons/insta.svg";
import EmailSVG from "../../assets/icons/email.svg";
import PhoneSVG from "../../assets/icons/phone.svg";
import PinSVG from "../../assets/icons/pin.svg";

// Styles
import { HeaderSection } from "./styles";

const Header: React.FC = () => {
  const location = useLocation();
  const [defaultHeader, setDefaultHeader] = useState<boolean>(true);
  const [openHeader, setOpenHeader] = useState<boolean>(false);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (location.pathname !== "/") {
      setDefaultHeader(false);
    } else {
      setDefaultHeader(true);
    }
  }, [location]);

  return (
    <HeaderSection
      defaultHeader={defaultHeader}
      className={`${openHeader ? "hide" : "show"}`}
    >
      <div className="mobile-header">
        <div className="mobile-links">
          <Link to="/">About us</Link>
          <Link to="/">Our Ethos</Link>
          <Link to="/">Services</Link>
          <Link to="/">Testimonials</Link>
          <Link to="/">Our Process</Link>
          <Link to="/">Enquire</Link>
          <Link to="/">Investments</Link>
        </div>
        <div className="mobile-ext-links">
          <h4>Contact us</h4>
          <div>
            <img src={InstaSVG} alt="Instagram" />
            <img src={EmailSVG} alt="Email" />
            <img src={PhoneSVG} alt="Phone" />
            <img src={PinSVG} alt="Pin" />
          </div>
        </div>
      </div>
      <div className="mobile-header-btn">
        <button
          className={`${openHeader ? "open" : "close"}`}
          onClick={() => setOpenHeader(!openHeader)}
        ></button>
      </div>
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
