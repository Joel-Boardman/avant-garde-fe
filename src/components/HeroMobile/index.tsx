import React, { useState, useEffect } from "react";

// Styles
import { Section, Content } from "./styles";
import { ButtonMobile } from "../Hero/styles";

// Images
import watchPngOne from "../../assets/images/av-watch-1.png";
import watchPngTwo from "../../assets/images/av-watch-2.png";
import watchPngThree from "../../assets/images/av-watch-3-new.png";
import watchPngFour from "../../assets/images/av-watch-4.png";
import watchPngFive from "../../assets/images/av-watch-5.png";
import { useNavigate } from "react-router-dom";

const HeroMobile: React.FC = () => {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState<boolean>(false);
  const [arrayIndex, setArrayIndex] = useState<number>(0);
  const [arrayIndexDelay, setArrayIndexDelay] = useState<number>(0);
  const [disable, setDisable] = useState<boolean>(false);
  const [animation, setAnimation] = useState("");
  const watchInfo = [
    {
      title: "Audemars Piguet",
      type: "Skeleton",
      content: (
        <>
          <p>
            This stainless steel ‘Skeleton’ model visually showcases the expert
            craftsmanship inside every Audemars Piguet watch: the exposed
            mechanics of this particular model are something to truly remark at.
            Enquire with us today to discover the availability of this
            particular model.
          </p>

          <br />
          <br />
          <ButtonMobile onClick={() => navigate("/contact")}>
            <span>Enquire Now</span>
          </ButtonMobile>
        </>
      ),
    },
    {
      title: "Patek Philippe",
      type: "5980R",
      content: (
        <>
          <p>
            The 5980R model was designed to bring incomparable levels of class
            and prestige to the wearer in whatever they were doing. From people
            pursuing a more active lifestyle, to anyone in a more casual
            environment, the 5980R is a truly excellent choice for those seeking
            a premier option. 
          </p>
          <br />
          <br />
          <ButtonMobile onClick={() => navigate("/contact")}>
            <span>Enquire Now</span>
          </ButtonMobile>
        </>
      ),
    },

    {
      title: "Rolex",
      type: "Daytona Platinum",
      content: (
        <>
          <p>
            The Daytona model, offered by Avant-Garde Global in platinum, allows
            you to take immense pride wherever you’re wearing it. The infusion
            of this noble metal invokes an added sense of prestige and suave
            that sometimes only a Rolex can provide you. Enquire with us today
            to discover the availability of this particular model.
          </p>
          <br />
          <br />
          <ButtonMobile onClick={() => navigate("/contact")}>
            <span>Enquire Now</span>
          </ButtonMobile>
        </>
      ),
    },
    {
      title: "Rolex",
      type: "Batgirl",
      content: (
        <>
          <p>
            This stunning timepiece, the Nautilus 5711R, boasts an immaculate
            stainless steel casing, and comes fitted with an eye-catching blue
            dial and sapphire crystal glass. 
          </p>
          <br />
          <p>
            Described as boasting “casual elegance” since its first creation,
            the 5711R epitomises all that Patek Philippe stands for. Enquire
            with us today to see how you can add this beautiful watch to your
            collection.
          </p>
          <br />
          <br />
          <ButtonMobile onClick={() => navigate("/contact")}>
            <span>Enquire Now</span>
          </ButtonMobile>
        </>
      ),
    },
    {
      title: "Patek Philippe",
      type: "5711R",
      content: (
        <>
          <p>
            This stunning timepiece, the Nautilus 5711R, boasts an immaculate
            stainless steel casing, and comes fitted with an eye-catching blue
            dial and sapphire crystal glass. 
          </p>
          <br />
          <p>
            Described as boasting “casual elegance” since its first creation,
            the 5711R epitomises all that Patek Philippe stands for. Enquire
            with us today to see how you can add this beautiful watch to your
            collection.
          </p>
          <br />
          <br />
          <ButtonMobile onClick={() => navigate("/contact")}>
            <span>Enquire Now</span>
          </ButtonMobile>
        </>
      ),
    },
  ];
  const paginationImages = [
    watchPngOne,
    watchPngTwo,
    watchPngFour,
    watchPngFive,
    watchPngThree,
  ];

  useEffect(() => {
    const resetTimeout = setTimeout(() => {
      if (loaded) {
        setAnimation("");
        setDisable(false);
      }
    }, 2600);

    return () => clearTimeout(resetTimeout);
  }, [animation, loaded]);

  useEffect(() => {
    const resetTimeoutImg = setTimeout(() => {
      if (loaded) {
        let a = arrayIndexDelay + 1;
        if (a < paginationImages.length) {
          setArrayIndexDelay(arrayIndexDelay + 1);
        } else {
          setArrayIndexDelay(0);
        }
      }
    }, 500);

    return () => clearTimeout(resetTimeoutImg);
  }, [arrayIndex]);

  useEffect(() => {
    if (loaded) {
      setAnimation("animate-intro");
      setDisable(true);
    }
  }, [arrayIndex, loaded]);

  useEffect(() => {
    setLoaded(true);
  });

  const handleIncrement = () => {
    console.log(paginationImages.length);
    let a = arrayIndex + 1;
    if (a < paginationImages.length) {
      setArrayIndex(arrayIndex + 1);
    } else {
      setArrayIndex(0);
    }
  };

  return (
    <Section>
      <div className="border">
        <Content className={`${animation}`}>
          <div className="content__top">
            <h1>{watchInfo[arrayIndex].title}</h1>
            <img src={paginationImages[arrayIndexDelay]} alt="" />
          </div>
          <div className="btn-container">
            <button
              onClick={handleIncrement}
              disabled={disable ? true : false}
              className="next-btn"
            >
              <span className="chevron right"></span>
            </button>
          </div>
          <div className="content__bottom">
            <h2>{watchInfo[arrayIndexDelay].type}</h2>
            <div className="info-content">
              {watchInfo[arrayIndexDelay].content}
            </div>
          </div>
        </Content>
      </div>
    </Section>
  );
};

export default HeroMobile;
