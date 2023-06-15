import React from "react";

// Styles
import { Section, Content, Button } from "./styles";

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
                to your enquiry, as well as the terms listed within our Privacy
                Policy.
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>
            <Button>Submit</Button>
          </div>
        </Content>
      </div>
    </Section>
  );
};

export default Contact;
