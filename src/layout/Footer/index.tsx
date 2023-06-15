import React from "react";
import { Link } from "react-router-dom";

// Images
import LogoSVG from "../../assets/icons/logo.svg";
import InstaSVG from "../../assets/icons/insta.svg";
import EmailSVG from "../../assets/icons/email.svg";
import PhoneSVG from "../../assets/icons/phone.svg";
import PinSVG from "../../assets/icons/pin.svg";
import OpopLogo from "../../assets/icons/opop-logo.svg";

// Styles
import { FooterSection } from "./styles";
const Footer: React.FC = () => {
  return (
    <FooterSection>
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
                  <Link to="/contact">Investments</Link>
                </li>
              </ul>
            </div>
            <div className="footer__top--socials">
              <div>
                <h3>FOLLOW US</h3>
                <Link to="/">
                  <img src={InstaSVG} alt="instagram" />
                </Link>
              </div>
              <div>
                <h3>CONTACT US</h3>
                <Link to="/">
                  <img src={EmailSVG} alt="Email" />
                </Link>
                <Link to="/">
                  <img src={PhoneSVG} alt="Phone" />
                </Link>
                <Link to="/">
                  <img src={PinSVG} alt="Pin" />
                </Link>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <div className="footer__bottom--left">
              <p>@ 2023 Avant-Garde Global. All Rights Reserved.</p>
              <ul>
                <li>
                  <Link to="/">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="/">Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div className="footer__bottom--right">
              <img src={OpopLogo} alt="Opop Media" />
            </div>
          </div>
        </div>
      </div>
    </FooterSection>
  );
};

export default Footer;
