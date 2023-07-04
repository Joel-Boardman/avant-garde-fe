import React, { useState } from "react";
import { data8Validation } from "../../global/data8";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import axios from "axios";
// Styles
import {
  Section,
  Content,
  Button,
  InfoContent,
  ThankYouContent,
} from "./styles";

// Images
import InstaSVG from "../../assets/icons/insta-yellow.svg";
import EmailSVG from "../../assets/icons/email-yellow.svg";
import PhoneSVG from "../../assets/icons/phone-yellow.svg";
import PinSVG from "../../assets/icons/pin-yellow.svg";
import { Link, useNavigate } from "react-router-dom";

const Contact: React.FC = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [consent, setConsent] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let name = e.currentTarget.name;

    if (name === "firstName") {
      setFirstName(e.currentTarget.value);
    } else if (name === "lastName") {
      setLastName(e.currentTarget.value);
    } else if (name === "email") {
      setEmail(e.currentTarget.value);
    } else if (name === "telephone") {
      setPhone(e.currentTarget.value);
    } else if (name === "message") {
      setMessage(e.currentTarget.value);
    } else if (name === "fullName") {
      setMessage(e.currentTarget.value);
    }
  };

  const handleSubmission = async () => {
    let nameConcat =
      !fullName && firstName && lastName ? firstName + " " + lastName : "";
    let nameFull = fullName ? fullName : nameConcat;

    if (!nameFull || !email || !phone) {
      return Notify.failure("Please complete the form before submitting.");
    }

    if (!consent) {
      return Notify.failure(
        "Please agree to being contacted by Avant Garde Global."
      );
    }

    const telephoneValidation = await data8Validation(
      {
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
      },
      "https://webservices.data-8.co.uk/InternationalTelephoneValidation/IsValid.json?key="
    );

    console.log(telephoneValidation);
    if (telephoneValidation?.Result?.ValidationResult !== "Valid") {
      return Notify.failure("Please provide a valid telephone number.");
    }

    const emailValidation = await data8Validation(
      {
        email: email,
        level: "MX",
        options: {
          MissingMXRecordHandling: "ServerCheck",
        },
      },
      "https://webservices.data-8.co.uk/EmailValidation/IsValid.json?key="
    );

    if (emailValidation.Result !== "Valid") {
      return Notify.failure("Please provide a valid email.");
    }

    axios({
      method: "POST",
      url: `${process.env.REACT_APP_ENDPOINT}create-lead-enquire`,
      data: {
        fullName: nameFull,
        email: email,
        telephone: phone,
        message: message,
      },
    });

    setFullName(nameFull);
    setSubmitted(true);
  };
  return (
    <Section>
      <div className="border">
        <Content>
          {!submitted ? (
            <>
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
                  <textarea
                    name="message"
                    id=""
                    placeholder="Please set out a brief summary of your enquiry..."
                    onChange={handleChange}
                  />
                </div>
                <div className="content__bottom--box"></div>
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
              <p>
                Our team has now received your enquiry, and one of our experts
                will be in touch soon.
              </p>
              <Button onClick={() => navigate("/")}>Back To Home</Button>
            </ThankYouContent>
          )}
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
                <Link to="tel: 0161 528 5388">
                  <img src={PhoneSVG} alt="Phone" /> 0162 5469 859
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.instagram.com/avant_garde_global/"
                  target="__blank"
                >
                  <img src={InstaSVG} alt="Insta" />
                  View our Instagram
                </Link>
              </li>
              <li>
                <Link to="mailto: sales@avantgarde-global.co.uk">
                  <img src={EmailSVG} alt="Email" />
                  sales@avantgarde-global.co.uk
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.google.com/maps/place/SK9,+UK/@53.3192089,-2.3218782,12z/data=!3m1!4b1!4m6!3m5!1s0x487a4cde3ee57ded:0x95465e3c15562cad!8m2!3d53.3156958!4d-2.2380617!16s%2Fg%2F11bw3g4b4s?entry=ttu"
                  target="__blank"
                >
                  <img src={PinSVG} alt="Pin" />
                  Cheshire, SK9
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </InfoContent>
    </Section>
  );
};

export default Contact;
