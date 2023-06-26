import React from "react";
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
  return (
    <Section>
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
