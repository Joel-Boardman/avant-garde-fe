import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

// Images
import WatchImg from "../../assets/background/watch-img.png";
import WatchTwoImg from "../../assets/background/watch-img-2.png";
import watchPngOne from "../../assets/images/av-watch-1.png";
import watchPngTwo from "../../assets/images/av-watch-2.png";
import watchPngThree from "../../assets/images/av-watch-3.png";
import watchPngFour from "../../assets/images/av-watch-4.png";
import watchPngFive from "../../assets/images/av-watch-5.png";

import WatchOneImgMobile from "../../assets/images/purchase-watch-one.png";
import WatchTwoImgMobile from "../../assets/images/trusted-img.png";

// Styles
import { Section, Content } from "./styles";

const Purchasing: React.FC = () => {
  const [arrayIndex, setArrayIndex] = useState<number>(0);
  const [animation, setAnimation] = useState<string>("");
  const [fixItem, setFixItem] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [top, setTop] = useState(0);
  const [elementHeight, setElementHeight] = useState<number>(0);

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
      right: [
        <>
          <img
            src={windowWidth > 960 ? WatchImg : WatchOneImgMobile}
            alt="Watch"
            className="right-img"
          />
        </>,
      ],
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
      right: [
        <>
          <img
            src={windowWidth > 960 ? WatchTwoImg : WatchTwoImgMobile}
            alt="Watch"
            className="right-img-two"
          />
        </>,
      ],
    },
    {
      content: (
        <div className="watch-info">
          <h3>
            Only The Finest <br />
            Options For You
          </h3>
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
      right: [
        <div className="watch-carousel">
          <div className="watchItem">
            <div>
              <img src={watchPngOne} alt="" />
            </div>
            <p>Audemars Piguet Skeleton</p>
          </div>

          <div className="watchItem">
            <div>
              <img src={watchPngTwo} alt="" />
            </div>
            <p>Patek Philippe 5980R</p>
          </div>

          <div className="watchItem">
            <div>
              <img src={watchPngThree} alt="" />
            </div>
            <p>Patek Philippe 5711R</p>
          </div>
          <div className="watchItem">
            <div>
              <img src={watchPngFour} alt="" />
            </div>
            <p>Rolex Daytona</p>
          </div>

          <div className="watchItem">
            <div>
              <img src={watchPngFive} alt="" />
            </div>
            <p>Rolex Batgirl</p>
          </div>
        </div>,
      ],
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

  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    setTimeout(() => {
      let el = document.querySelector(".testing");
      var viewportOffset = el?.getBoundingClientRect();
      if (viewportOffset?.top) {
        setTop(viewportOffset?.top);
      }
    }, 1000);
  }, []);

  useEffect(() => {
    if (!top) return;

    window.addEventListener("scroll", stick);
    return () => {
      window.removeEventListener("scroll", stick);
    };
  }, [top]);

  const stick = () => {
    let border = document.querySelector(".border");

    let el = document.querySelector(".testing");
    let section = document.querySelector(".purchase-section");

    var viewportOffset = el?.getBoundingClientRect();

    let a = window?.scrollY;
    let b = el?.getBoundingClientRect()?.y;

    let c = window?.scrollY;
    let d = section?.getBoundingClientRect()?.y;

    let res = typeof c === "number" && typeof d === "number" ? c + d : top;

    let differenceInHeight =
      typeof section?.getBoundingClientRect()?.height === "number" &&
      typeof el?.getBoundingClientRect()?.height === "number"
        ? (section?.getBoundingClientRect()?.height -
            el?.getBoundingClientRect()?.height) /
          2
        : 0;

    el?.getBoundingClientRect().height
      ? setElementHeight(el?.getBoundingClientRect().height)
      : setElementHeight(elementHeight);

    if (windowWidth <= 1280) {
      if (document.documentElement.scrollTop > res + differenceInHeight) {
        el?.classList.add("fix-item");
        section?.classList.add("extend");
      } else {
        el?.classList.remove("fix-item");
        section?.classList.remove("extend");
      }
    } else {
      if (document.documentElement.scrollTop > res + 70) {
        el?.classList.add("fix-item");
        section?.classList.add("extend");
      } else {
        el?.classList.remove("fix-item");
        section?.classList.remove("extend");
      }
    }
  };

  return (
    <Section className="purchase-section" height={elementHeight}>
      <div className={`${fixItem ? "fix-item" : ""} testing border`}>
        <Content arrayIndex={arrayIndex} ref={ref}>
          <div className="options">
            <div className="options__container">
              <button
                onClick={() => handleSelect(0)}
                className={`${arrayIndex === 0 ? "selected" : ""}`}
              >
                Purchase
              </button>
              <button
                onClick={() => handleSelect(1)}
                className={`${arrayIndex === 1 ? "selected" : ""}`}
              >
                Selling
              </button>
              <button
                onClick={() => handleSelect(2)}
                className={`${arrayIndex === 2 ? "selected" : ""}`}
              >
                Available Watches
              </button>
            </div>
          </div>
          <div className={`info ${arrayIndex === 2 ? "mobile-col" : ""}`}>
            <div
              className={`info__left ${animation} ${
                arrayIndex === 2 ? "watch-info" : ""
              }`}
            >
              {infoArray[arrayIndex].content}
            </div>
            <div className={`info__right ${animation}`}>
              {infoArray[arrayIndex].right}
            </div>
          </div>
        </Content>
      </div>
    </Section>
  );
};

export default Purchasing;
