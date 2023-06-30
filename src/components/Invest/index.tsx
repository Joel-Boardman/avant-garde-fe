import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Notify } from "notiflix/build/notiflix-notify-aio";

// Styles
import { Section, Content, Button, ThankYouContent } from "./styles";
import axios from "axios";
import { data8Validation } from "../../global/data8";

const Invest: React.FC = () => {
  const [fullName, setFullName] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [consent, setConsent] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let name = e.currentTarget.name;

    if (name === "firstName") {
      setFirstName(e.currentTarget.value);
    } else if (name === "lastName") {
      setLastName(e.currentTarget.value);
    } else if (name === "email") {
      setEmail(e.currentTarget.value);
    } else if (name === "telephone") {
      setPhone(e.currentTarget.value);
    }
  };

  const handleSubmission = async () => {
    if (!fullName || !email || !phone) {
      return Notify.failure("Please complete the form before submitting.");
    }

    if (!consent) {
      return Notify.failure(
        "Please agree to being contacted by Avant Garde Global."
      );
    }
    const telephoneValidation = await data8Validation({
      telephoneNumber: phone,
      defaultCountry: "GB",
      options: {
        UseMobileValidation: false,
        UseLineValidation: false,
        RequiredCountry: "",
        AllowedPrefixes: "",
        BarredPrefixes: "",
        UseUnavailableStatus: true,
        UseAmbiguousStatus: true,
        TreatUnavailableMobileAsInvalid: false,
        ExcludeUnlikelyNumbers: false,
      },
    });

    if (telephoneValidation?.Result?.ValidationResult !== "Valid") {
      return Notify.failure("Please provide a valid telephone number.");
    }

    const emailValidation = await data8Validation({
      email: email,
      level: "MX",
      options: {
        MissingMXRecordHandling: "ServerCheck",
      },
    });

    if (emailValidation.Result !== "Valid") {
      return Notify.failure("Please provide a valid email.");
    }

    axios({
      method: "POST",
      url: `${process.env.REACT_APP_ENDPOINT}create-lead-invest`,
      data: {
        fullName: fullName,
        email: email,
        telephone: phone,
      },
    });

    setSubmitted(true);
  };
  return (
    <Section>
      <div className="border">
        <Content>
          {!submitted ? (
            <>
              <div className="content__top">
                <h2>Invest With Avant-Garde Global.</h2>
                <p>
                  Register your interest in making an investment with
                  Avant-Garde Global. You could be part of one of the world’s
                  most regarded and prestigious watch retailers, as a valued
                  investor of our exceptional organisation.
                </p>
              </div>
              <div className="content__bottom">
                <div className="content__bottom--quad">
                  <input
                    type="text"
                    name="fullName"
                    id=""
                    placeholder="Full Name"
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="firstName"
                    id=""
                    placeholder="First Name"
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="lastName"
                    id=""
                    placeholder="Last Name"
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="email"
                    id=""
                    placeholder="Email Address"
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="telephone"
                    id=""
                    placeholder="Phone Number"
                    onChange={handleChange}
                  />
                </div>
                <div className="content__bottom--confirm">
                  <label className="container">
                    {" "}
                    By sending your enquiry, you consent to being contacted by
                    Avant-Garde Global or one of our affiliated partners in
                    regards to your enquiry, as well as the terms listed within
                    our{" "}
                    <Link to="/docs/privacy.pdf" target="__blank">
                      Privacy Policy
                    </Link>
                    .
                    <input
                      type="checkbox"
                      onChange={() => setConsent(!consent)}
                    />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <Button onClick={handleSubmission}>Submit</Button>
              </div>
            </>
          ) : (
            <ThankYouContent>
              <h4>Thank You, {fullName.split(" ")[0]}</h4>
              <p>Your enquiry has now been sent to our team.</p>
              <p>
                An adviser from Nicholas James Finance will be in touch shortly
                to discuss the investment opportunities available to you.
              </p>
              <Button onClick={() => navigate("/")}>Back To Home</Button>
            </ThankYouContent>
          )}
        </Content>
      </div>
    </Section>
  );
};

export default Invest;
