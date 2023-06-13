import React from "react";

// Styles
import { Section, Content } from "./styles";

const Trusted: React.FC = () => {
  return (
    <Section>
      <div className="border">
        <Content>
          <div className="ani-container">TO BE DONE</div>
          <div className="info-container">
            <h2>Your Trusted Supplier For Stellar Timepieces</h2>
            <p>
              Founded in 2018, Avant-Garde Global is one of the UK’s leading
              specialists and providers of luxury watches. Our expert team
              possesses vast knowledge and passion for all kinds of timepieces.
            </p>
            <br />
            <p>
              Expertise is at the epicentre of everything we do: our dedicated
              team combines years of experience with our deep admiration and
              respect for watch craftsmanship and ingenuity. 
            </p>
            <br />
            <p>
              This means that every time you enquire and shop with Avant-Garde
              Global, you can rest assured that you’re receiving only
              exceptional customer service and guidance concerning all of our
              stock.
            </p>
          </div>
        </Content>
      </div>
    </Section>
  );
};

export default Trusted;
