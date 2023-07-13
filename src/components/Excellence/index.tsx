import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

// Assets
import Item1SVG from "../../assets/icons/item-1.svg";
import Item2SVG from "../../assets/icons/item-2.svg";
import Item3SVG from "../../assets/icons/item-3.svg";

import Item1SVGYellow from "../../assets/icons/item-1-yellow.svg";
import Item2SVGYellow from "../../assets/icons/item-2-yellow.svg";
import Item3SVGYellow from "../../assets/icons/item-3-yellow.svg";

// Styles
import { Section, Content } from "./styles";

const Excellence: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const myRef = useRef<null | HTMLElement>(null);
  const location = useLocation();

  React.useEffect(() => {
    if (location.hash === "#ethos" && myRef?.current) {
      myRef?.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "start",
      });
    }
  }, [location]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  const infoArray = [
    {
      icon: windowWidth > 960 ? Item1SVG : Item1SVGYellow,
      title: "Only The Finest For You",
      body: "From Rolex to Richard Mille, and Audemars Piguet to Patek Philippe, Avant-Garde Global holds expert-levels of knowledge on the world’s most luxurious watches.",
    },
    {
      icon: windowWidth > 960 ? Item2SVG : Item2SVGYellow,
      title: "Outstanding Customer Service ",
      body: "Our expert team prides itself on delivering an exceptional customer service experience for both new and returning customers alike.",
    },
    {
      icon: windowWidth > 960 ? Item3SVG : Item3SVGYellow,
      title: "More Than Just A Retailer",
      body: "Avant-Garde Global offers both watch purchasing and selling opportunities to all of our customers. Simply enquire today to discover how we can help you with exactly what you need.",
    },
    {
      icon: windowWidth > 960 ? Item3SVG : Item3SVGYellow,
      title: "Renowned Around The World",
      body: "Having established a global reputation for our stock, expertise and reliability, discover just what makes us one of the UK’s, and World’s, most trusted providers of luxury watches.",
    },
  ];

  return (
    <Section ref={myRef}>
      <div className="border">
        <Content>
          <div className="banner-info">
            <h2>Excellence: It’s Like Clockwork To Us</h2>
            <p>
              Stocking only the most prestigious, pristine watches available,
              here’s how you know Avant-Garde Global is set to become your go-to
              reputable supplier of luxury watches.
            </p>
          </div>
          <div className="quad-info">
            <div className="quad-info__container">
              {infoArray.map((obj, i) => {
                return (
                  <div className="quad-info__container--item" key={`card-${i}`}>
                    <img src={obj.icon} alt={`item-img-${i}`} />
                    <h3>{obj.title}</h3>
                    <p>{obj.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Content>
      </div>
    </Section>
  );
};

export default Excellence;
