import React from "react";

// Assets
import Item1SVG from "../../assets/icons/item-1.svg";
import Item2SVG from "../../assets/icons/item-2.svg";
import Item3SVG from "../../assets/icons/item-3.svg";
// Styles
import { Section, Content } from "./styles";

const Excellence: React.FC = () => {
  const infoArray = [
    {
      icon: Item1SVG,
      title: "Only The Finest For You",
      body: "From Rolex to Richard Mille, and Audemars Piguet to Patek Phillipe, Avant-Garde Global holds expert-levels of knowledge on the world’s most luxurious watches.",
    },
    {
      icon: Item2SVG,
      title: "Outstanding Customer Service ",
      body: "Our expert team prides itself on delivering an exceptional customer service experience for both new and returning customers alike.",
    },
    {
      icon: Item3SVG,
      title: "More Than Just A Retailer",
      body: "Avant-Garde Global offers both watch purchasing and selling opportunities to all of our customers. Simply enquire today to discover how we can help you with exactly what you need.",
    },
    {
      icon: Item3SVG,
      title: "Renowned Around The World",
      body: "Having established a global reputation for our stock, expertise and reliability, discover just what makes us one of the UK’s, and World’s, most trusted providers of luxury watches.",
    },
  ];
  return (
    <Section>
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
