import React, { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";

// Video
import WatchVideo from "../../assets/videos/watch.mp4";

// Styles
import { Section } from "./styles";

const Perfection: React.FC = () => {
  const [sidebarWidth, setSidebarWidth] = useState<number | null>(null);
  const [sidebarTop, setSidebarTop] = useState<number | null>(null);
  const [animation, setAnimation] = useState<string>("");
  const inputRef = useRef();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  const { ref, inView, entry } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      setAnimation("fadeIn");
    } else {
      setAnimation("");
    }
  }, [inView]);

  useEffect(() => {
    const sidebarEl = document?.querySelector(".sidebar")
      ? document?.querySelector(".sidebar")?.getBoundingClientRect()
      : null;

    if (sidebarEl && sidebarEl?.width && sidebarEl?.top) {
      setSidebarWidth(sidebarEl?.width);
      setSidebarTop(sidebarEl?.top);
    }
  }, []);

  useEffect(() => {
    if (!sidebarTop) return;

    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, [sidebarTop]);

  const isSticky = () => {
    const sidebarEl = document.querySelector(".sidebar");
    const scrollTop = window.scrollY;

    if (sidebarTop) {
      console.log(scrollTop, sidebarTop + 98);
      if (scrollTop >= sidebarTop - 98) {
        sidebarEl?.classList.add("is-sticky");
      } else {
        sidebarEl?.classList.remove("is-sticky");
      }
    }
  };

  return (
    <Section ref={ref}>
      <video autoPlay muted loop className="sidebar">
        <source src={WatchVideo} type="video/mp4" />
      </video>
      <div className="border">
        <div className={`content ${animation}`}>
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
