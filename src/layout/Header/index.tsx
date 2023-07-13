import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

// images
import LogoSVG from "../../assets/icons/logo.svg";
import LogoBlackSVG from "../../assets/icons/logo-black.svg";
import LogoMobileSVG from "../../assets/icons/logo-white-mobile.svg";
import LogoMobileBlackSVG from "../../assets/icons/logo-black-mobile.svg";
import InstaSVG from "../../assets/icons/insta.svg";
import EmailSVG from "../../assets/icons/email.svg";
import PhoneSVG from "../../assets/icons/phone.svg";
import PinSVG from "../../assets/icons/pin.svg";
import FacebookSVG from "../../assets/icons/facebook.svg";

// Styles
import { HeaderSection } from "./styles";

const Header: React.FC = () => {
  const location = useLocation();
  const [defaultHeader, setDefaultHeader] = useState<boolean>(true);
  const [openHeader, setOpenHeader] = useState<boolean | null>(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (location.pathname !== "/") {
      setDefaultHeader(false);
    } else {
      setDefaultHeader(true);
    }
  }, [location]);

  const handleClose = () => {
    setOpenHeader(false);
  };

  return (
    <HeaderSection
      defaultHeader={defaultHeader}
      className={`${openHeader ? "hide" : "show"}`}
    >
      <div className="mobile-header">
        <div className="mobile-links">
          <Link to="/#about" onClick={handleClose}>
            About us
          </Link>
          <Link to="/#ethos" onClick={handleClose}>
            Our Ethos
          </Link>
          <Link to="/#services" onClick={handleClose}>
            Services
          </Link>
          <Link to="/#testimonials" onClick={handleClose}>
            Testimonials
          </Link>
          <Link to="/#process" onClick={handleClose}>
            Our Process
          </Link>
          <Link to="/contact" onClick={handleClose}>
            Enquire
          </Link>
          <Link to="/invest" onClick={handleClose}>
            Investments
          </Link>
        </div>
        <div className="mobile-ext-links">
          <h4>Contact us</h4>
          <div>
            <Link
              to="https://www.instagram.com/avant_garde_global/"
              target="__blank"
              onClick={handleClose}
            >
              <img src={InstaSVG} alt="Instagram" />
            </Link>
            <Link
              to="https://www.facebook.com/people/Avant-Garde-Global/100069338290876/"
              target="__blank"
              onClick={handleClose}
            >
              <img src={FacebookSVG} alt="facebook" />
            </Link>
            <Link
              to="mailto: sales@avantgarde-global.co.uk"
              onClick={handleClose}
            >
              <img src={EmailSVG} alt="Email" />
            </Link>
            <Link to="tel: 0161 528 5388" onClick={handleClose}>
              <img src={PhoneSVG} alt="Phone" />
            </Link>
            {/* <img src={PinSVG} alt="Pin" /> */}
          </div>
        </div>
      </div>
      <div className={`mobile-header-btn`}>
        <button
          className={`${
            location.pathname !== "/" ? "btn-black" : "btn-white"
          } ${
            typeof openHeader === "boolean" && openHeader
              ? "open"
              : typeof openHeader === "boolean" && !openHeader
              ? "close"
              : ""
          }`}
          onClick={() => {
            console.log(typeof openHeader);
            if (typeof openHeader !== "boolean") {
              setOpenHeader(true);
            } else {
              setOpenHeader(!openHeader);
            }
          }}
        ></button>
      </div>
      {windowWidth < 960 ? (
        <>
          {defaultHeader || openHeader ? (
            <img src={LogoMobileSVG} alt="logo" />
          ) : (
            <img src={LogoMobileBlackSVG} alt="logo" />
          )}
        </>
      ) : (
        <>
          {defaultHeader ? (
            <img src={LogoSVG} alt="logo" />
          ) : (
            <img src={LogoBlackSVG} alt="logo" />
          )}
        </>
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
