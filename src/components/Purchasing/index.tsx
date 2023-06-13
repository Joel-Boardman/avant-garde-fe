import React, { useEffect, useState } from "react";

// Styles
import { Section, Content } from "./styles";

const Purchasing: React.FC = () => {
  const [arrayIndex, setArrayIndex] = useState<number>(0);
  const [animation, setAnimation] = useState<string>("");

  const infoArray = [
    {
      content: (
        <div>
          <h3>Purchasing Opportunities</h3>
          <br />
          <p>
            {" "}
            For those seeking something new and lavish to treat yourself to,
            Avant-Garde Global is on-hand to ensure you discover a truly
            extravagant item that you could once only dream of.
          </p>{" "}
          <br />
          <p>
            We proudly stock the likes of Rolex and Richard Mille, and can have
            these watches ready for you to admire upon your enquiry.
          </p>
        </div>
      ),
    },
    {
      content: (
        <div>
          <h3>Selling Services</h3>
          <br />
          <p>
            {" "}
            If you’re interested in selling your watch, then the Avant-Garde
            Global team is on-hand to ensure your item is sold in a safe, secure
            and suitable manner.
          </p>{" "}
          <br />
          <p>
            Our expert team will evaluate your item and advise you on the best
            price we recommend selling it for. Get in touch with us today to
            discuss this further.
          </p>
        </div>
      ),
    },
    {
      content: (
        <div>
          <h3>Only The Finest Options For You</h3>
          <br />
          <p>
            {" "}
            We want to extend our passion and appreciation for watches directly
            to you: uncover the beauty and luxurious nature of Rolex, Patek
            Phillipe, Richard Mille and more by enquiring about our current
            stock at Avant-Garde Global.
          </p>
        </div>
      ),
    },
  ];

  const handleSelect = (index: number) => {
    setAnimation("fadeIn");
    setArrayIndex(index);
  };

  useEffect(() => {
    setTimeout(() => {
      setAnimation("");
    }, 550);
  }, [animation]);

  return (
    <Section>
      <div className="border">
        <Content arrayIndex={arrayIndex}>
          <div className="options">
            <div className="options__container">
              <button onClick={() => handleSelect(0)}>Purchase</button>
              <button onClick={() => handleSelect(1)}>Selling</button>
              <button onClick={() => handleSelect(2)}>Available Watches</button>
            </div>
          </div>
          <div className="info">
            <div className={`info__left ${animation}`}>
              {infoArray[arrayIndex].content}
            </div>
            <div className="info__right"></div>
          </div>
        </Content>
      </div>
    </Section>
  );
};

export default Purchasing;
