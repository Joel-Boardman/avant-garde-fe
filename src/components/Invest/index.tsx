import React from "react";
import { Link } from "react-router-dom";

// Styles
import { Section, Content, Button } from "./styles";

const Invest: React.FC = () => {
  return (
    <Section>
      <div className="border">
        <Content>
          <div className="content__top">
            <h2>Invest With Avant-Garde Global.</h2>
            <p>
              Register your interest in making an investment with Avant-Garde
              Global. You could be part of one of the world’s most regarded and
              prestigious watch retailers, as a valued investor of our
              exceptional organisation.
            </p>
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
            </div>
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
    </Section>
  );
};

export default Invest;
