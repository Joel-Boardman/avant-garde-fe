import React from "react";

// Styles
import { Section, Content, Button, InfoContent } from "./styles";

// Images
import InstaSVG from "../../assets/icons/insta-yellow.svg";
import EmailSVG from "../../assets/icons/email-yellow.svg";
import PhoneSVG from "../../assets/icons/phone-yellow.svg";
import PinSVG from "../../assets/icons/pin-yellow.svg";
import { Link } from "react-router-dom";

const Contact: React.FC = () => {
  return (
    <Section>
      <div className="border">
        <Content>
          <div className="content__top">
            <h2>Get In Touch</h2>
          </div>
          <div className="content__bottom">
            <div className="content__bottom--quad">
              <input
                type="text"
                name="fullName"
                id=""
                placeholder="Full Name"
              />
              <input
                type="text"
                name="firstName"
                id=""
                placeholder="First Name"
              />
              <input
                type="text"
                name="lastName"
                id=""
                placeholder="Last Name"
              />
              <input
                type="text"
                name="email"
                id=""
                placeholder="Email Address"
              />
              <input
                type="text"
                name="telephone"
                id=""
                placeholder="Phone Number"
              />
              <textarea
                name="message"
                id=""
                placeholder="Please set out a brief summary of your enquiry..."
              />
            </div>
            <div className="content__bottom--box"></div>
            <div className="content__bottom--confirm">
              <label className="container">
                {" "}
                By sending your enquiry, you consent to being contacted by
                Avant-Garde Global or one of our affiliated partners in regards
                to your enquiry, as well as the terms listed within our{" "}
                <Link to="/docs/privacy.pdf" target="__blank">
                  Privacy Policy
                </Link>
                .
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>
            <Button>Submit</Button>
          </div>
        </Content>
      </div>
      <InfoContent>
        <div className="border">
          <div className="content__top">
            <h2>Enquire About Excellence</h2>
            <p>
              The opportunity for you to purchase your very own luxury watch
              from the likes of Rolex, Audemars Piguet, and Richard Mille could
              be soon.
            </p>

            <p>
              Explore our excellent range of items today by enquiring directly
              to Avant-Garde Global using any of these contact methods, or
              simply fill out the form below.
            </p>
            <ul>
              <li>
                <img src={PhoneSVG} alt="Phone" /> 0162 5469 859
              </li>
              <li>
                <img src={InstaSVG} alt="Insta" />
                View our Instagram
              </li>
              <li>
                <img src={EmailSVG} alt="Email" />
                sales@avantgarde-global.co.uk
              </li>
              <li>
                <img src={PinSVG} alt="Pin" />
                Cheshire, SK9
              </li>
            </ul>
          </div>
        </div>
      </InfoContent>
    </Section>
  );
};

export default Contact;
