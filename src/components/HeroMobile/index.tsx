import React, { useState, useEffect } from "react";

// Styles
import { Section, Content } from "./styles";
import { Button } from "../Hero/styles";

// Images
import watchPngOne from "../../assets/images/av-watch-1.png";
import watchPngTwo from "../../assets/images/av-watch-2.png";
import watchPngThree from "../../assets/images/av-watch-3.png";
import watchPngFour from "../../assets/images/av-watch-4.png";
import watchPngFive from "../../assets/images/av-watch-5.png";
const HeroMobile: React.FC = () => {
  const [loaded, setLoaded] = useState<boolean>(false);

  const [arrayIndex, setArrayIndex] = useState<number>(0);
  const [arrayIndexImg, setArrayIndexImg] = useState<number>(0);
  const [disable, setDisable] = useState<boolean>(false);
  const [animation, setAnimation] = useState("");
  const watchInfo = [
    {
      title: "Audemars Piguet",
      type: "Skeleton",
      content: (
        <>
          <br />
          <p>
            The product of decades of innovation and inspiration, each model
            produced by Audemars Piguet has accounted for evolutions of style
            and technology to create timepieces tailored to every individual’s
            desires.
          </p>
          <br />
          <p>
            In particular, this stainless steel ‘Skeleton’ model visually
            showcases the expert craftsmanship inside every Audemars Piguet
            watch: the exposed mechanics of this particular model are something
            to truly remark at. Enquire with us today to discover the
            availability of this particular model.
          </p>
          <br />
          <Button>
            <span>Enquire Now</span>
          </Button>
        </>
      ),
    },
    {
      title: "Patek Philippe",
      type: "5980R",
      content: (
        <>
          <br />
          <p>
            Utilising Genevan artistry and craftsmanship in every single one of
            their watches, Patek Philippe stands as a premier choice for those
            seeking a sophisticated, elegant design in their choice of
            timepiece.
          </p>
          <br />
          <p>
            The 5980R model was designed to bring incomparable levels of class
            and prestige to the wearer in whatever they were doing. From people
            pursuing a more active lifestyle, to anyone in a more casual
            environment, the 5980R is a truly excellent choice for those seeking
            a premier option. 
          </p>
          <br />
          <Button>
            <span>Enquire Now</span>
          </Button>
        </>
      ),
    },
    {
      title: "Patek Philippe",
      type: "5711R",
      content: (
        <>
          <br />
          <p>
            Specially designed in accordance with values of uniqueness and
            respect, you can enjoy pure perfection courtesy of any and all
            available Patek Philippe watches. 
          </p>
          <br />
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
          <Button>
            <span>Enquire Now</span>
          </Button>
        </>
      ),
    },
    {
      title: "Rolex",
      type: "Daytona Platinum",
      content: (
        <>
          <br />
          <p>
            Crafted with precious metals whilst infused with intricate
            technology and mechanics, every Rolex is specially designed to
            challenge and surpass the concept of excellence itself. 
          </p>
          <br />
          <p>
            The Daytona model, offered by Avant-Garde Global in platinum, allows
            you to take immense pride wherever you’re wearing it. The infusion
            of this noble metal invokes an added sense of prestige and suave
            that sometimes only a Rolex can provide you. Enquire with us today
            to discover the availability of this particular model.
          </p>
          <br />
          <Button>
            <span>Enquire Now</span>
          </Button>
        </>
      ),
    },
    {
      title: "Rolex",
      type: "Batgirl",
      content: (
        <>
          <br />
          <p>
            Though they may demand a high-level of expertise to create, Rolex
            watches are perfect to enjoy wearing across professional and more
            casual experiences, and are a testament to the class and quality
            conveyed through luxury watches. 
          </p>
          <b />
          <p>
            This model, affectionately dubbed ‘The Batgirl’ for its more-refined
            design and visually stunning black and blue bezel, is one of the
            latest offerings from the renowned Switzerland-based manufacturer.
            Enquire with us today to explore how you can make ‘The Batgirl’ your
            next watch purchase. 
          </p>
          <br />
          <Button>
            <span>Enquire Now</span>
          </Button>
        </>
      ),
    },
  ];
  const paginationImages = [
    watchPngOne,
    watchPngTwo,
    watchPngThree,
    watchPngFour,
    watchPngFive,
  ];

  useEffect(() => {
    const resetTimeout = setTimeout(() => {
      if (loaded) {
        setAnimation("");
        setDisable(false);
      }
    }, 2100);

    return () => clearTimeout(resetTimeout);
  }, [animation, loaded]);

  useEffect(() => {
    const resetTimeoutImg = setTimeout(() => {
      if (loaded) {
        setArrayIndexImg(arrayIndexImg + 1);
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

  return (
    <Section>
      <div className="border">
        <Content className={`${animation}`}>
          <div className="content__top">
            <h1>{watchInfo[arrayIndex].title}</h1>
            <img src={paginationImages[arrayIndexImg]} alt="" />
          </div>
          <div className="content__bottom">
            <h2>{watchInfo[arrayIndex].type}</h2>
            <div className="info-content">{watchInfo[arrayIndex].content}</div>
          </div>
        </Content>
      </div>
      <button
        onClick={() => setArrayIndex(arrayIndex + 1)}
        disabled={disable ? true : false}
      >
        Click Me
      </button>
    </Section>
  );
};

export default HeroMobile;
