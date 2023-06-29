import React, { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Images
import WatchImg from "../../assets/images/watch.png";
import WatchGoldImg from "../../assets/images/watch-gold.png";
import WatchSilverImg from "../../assets/images/watch-silver.png";

// Styles
import { Section, Content } from "./styles";

const Trusted: React.FC = () => {
  const navigate = useNavigate();
  const [mouseEnter, setMouseEnter] = useState("");
  const myRef = useRef<null | HTMLElement>(null);

  const location = useLocation();

  React.useEffect(() => {
    if (location.hash === "#about" && myRef?.current) {
      myRef?.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "start",
      });
    }
  }, [location]);

  return (
    <Section ref={myRef}>
      <div className="border">
        <Content>
          <div
            onMouseEnter={() => setMouseEnter("animate-in")}
            onMouseLeave={() => setMouseEnter("animate-out")}
            className={`${mouseEnter} ani-container`}
          >
            <img src={WatchGoldImg} alt="Gold Watch" />
            <img src={WatchImg} alt="Steel Watch" />
            <img src={WatchSilverImg} alt="Steel Watch" />
          </div>
          <div className="info-container">
            <h2>
              Your Trusted Supplier <br />
              For Stellar Timepieces
            </h2>
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
            <p>
              <button
                className="mobile-btn"
                onClick={() => navigate("/contact")}
              >
                Enquire Now
              </button>
            </p>
          </div>
        </Content>
      </div>
    </Section>
  );
};

export default Trusted;
