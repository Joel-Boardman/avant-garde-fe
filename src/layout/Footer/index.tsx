import React from "react";
import { Link, useLocation } from "react-router-dom";

// Images
import LogoSVG from "../../assets/icons/logo.svg";
import InstaSVG from "../../assets/icons/insta.svg";
import FacebookSVG from "../../assets/icons/facebook.svg";
import EmailSVG from "../../assets/icons/email.svg";
import PhoneSVG from "../../assets/icons/phone.svg";
import PinSVG from "../../assets/icons/pin.svg";
import OpopLogo from "../../assets/icons/opop-logo.svg";

// Styles
import { FooterSection } from "./styles";
const Footer: React.FC = () => {
  const location = useLocation();
  return (
    <FooterSection className={location.pathname !== "/" ? "extend" : ""}>
      <div className="border">
        <div className="footer">
          <div className="footer__top">
            <div className="footer__top--logo">
              <img src={LogoSVG} alt="logo" />
            </div>
            <div className="footer__top--home">
              <h3>HOME</h3>
              <ul>
                <li>
                  <Link to="/#about">About Us</Link>
                </li>
                <li>
                  <Link to="/#ethos">Our Ethos</Link>
                </li>
                <li>
                  <Link to="/#services">Services</Link>
                </li>
                <li>
                  <Link to="/#testimonials">Testimonials</Link>
                </li>
                <li>
                  <Link to="/#process">Process</Link>
                </li>
              </ul>
            </div>
            <div className="footer__top--touch">
              <h3>GET IN TOUCH</h3>
              <ul>
                <li>
                  <Link to="/contact">Enquire Now</Link>
                </li>
                <li>
                  <Link to="/invest">Investments</Link>
                </li>
              </ul>
            </div>
            <div className="footer__top--socials">
              <div>
                <h3>Follow Us</h3>
                <Link
                  to="https://www.instagram.com/avant_garde_global/"
                  target="__blank"
                >
                  <img src={InstaSVG} alt="instagram" />
                </Link>
                <Link
                  to="https://www.facebook.com/people/Avant-Garde-Global/100069338290876/"
                  target="__blank"
                >
                  <img src={FacebookSVG} alt="facebook" />
                </Link>
              </div>
              <div>
                <h3>Contact Us</h3>
                <Link to="mailto: sales@avantgarde-global.co.uk">
                  <img src={EmailSVG} alt="Email" />
                </Link>
                <Link to="tel: 0161 528 5388">
                  <img src={PhoneSVG} alt="Phone" />
                </Link>
                {/* <Link to="/">
                  <img src={PinSVG} alt="Pin" />
                </Link> */}
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <div className="footer__bottom--left">
              <p>@ 2023 Avant-Garde Global. All Rights Reserved.</p>
              <ul>
                <li>
                  <Link to="/docs/terms.pdf" target="__blank">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/docs/privacy.pdf" target="__blank">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer__bottom--right">
              <Link to="https://opopmedia.co.uk/" target="__blank">
                <img src={OpopLogo} alt="Opop Media" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </FooterSection>
  );
};

export default Footer;
