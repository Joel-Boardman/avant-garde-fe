import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import { testimonialData } from "./data";

//Styles
import { Section, Content, TestContainer } from "./styles";

const Hero: React.FC = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    centerMode: true,
  };

  const myRef = useRef<null | HTMLElement>(null);
  const location = useLocation();

  React.useEffect(() => {
    if (location.hash === "#testimonials" && myRef?.current) {
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
          <div className="info">
            <h2>Testimonials</h2>
            <p>
              From an initial enquiry to their final purchase, read about how we
              here at Avant-Garde Global guide our clients throughout every step
              of the way to achieving their watch-buying dreams.
            </p>
          </div>
        </Content>
        <TestContainer>
          {testimonialData.map((obj, i) => {
            return (
              <div className="card">
                <h4>{obj.title}</h4>
                <p>{obj.body}</p>
                <p>{obj.name}</p>
              </div>
            );
          })}
        </TestContainer>
      </div>
    </Section>
  );
};

export default Hero;
