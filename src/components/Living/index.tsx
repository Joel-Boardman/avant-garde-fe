import React from "react";

// Images
import ImgOne from "../../assets/icons/y-item-1.svg";
import ImgTwo from "../../assets/icons/y-item-2.svg";
import ImgThree from "../../assets/icons/y-item-3.svg";

// Styles
import { Section } from "./styles";

const Living: React.FC = () => {
  const infoArray = [
    {
      icon: ImgOne,
      title: "Enquire Today",
      body: "Launch a direct enquiry with us today: this can be done by visiting the ‘Enquire Now’ page, or by contacting us using the options below.",
    },
    {
      icon: ImgTwo,
      title: "Evaluate Your Options",
      body: "Our expert team will look at your enquiry and contact you to discuss what watches might be the best fit for you.",
    },
    {
      icon: ImgThree,
      title: "Enjoy Excellence",
      body: "Depending on our available stock, we will look to make sure you can purchase and enjoy your brand new watch as soon as possible!",
    },
  ];
  return (
    <Section>
      <div className="border">
        <div className="info">
          <h2>It’s Time For You To Start Living Luxuriously</h2>
          <p>
            The Avant-Garde Global team is here to be your expert guide in which
            luxury watch is the right choice for you and the luxury lifestyle
            you wish to live. Find out more about the process we undertake to
            make sure you leave us satisfied.
          </p>
        </div>
        <div className="row">
          {infoArray.map((obj, i) => {
            return (
              <div className="item" key={`info-item-${i}`}>
                <img src={obj.icon} alt="" />
                <h4>{obj.title}</h4>
                <p>{obj.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Living;
