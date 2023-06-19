import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

// Video
import WatchVideo from "../../assets/videos/watch.mp4";

// Styles
import { Section } from "./styles";

const Perfection: React.FC = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    console.log("Logging to console: ", inView);
  }, [inView]);
  return (
    <Section ref={ref}>
      <video autoPlay muted loop>
        <source src={WatchVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="border">
        <div className="content">
          <h2>Purveyors Of Perfection</h2>
          <p>
            Ensure you're always looking and feeling your absolute finest,
            courtesy of Avant-Garde Global and our collection of luxury watches.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Perfection;
