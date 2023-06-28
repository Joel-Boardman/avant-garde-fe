import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

// Images
import watchPngOne from "../../assets/images/av-watch-1.png";
import watchPngTwo from "../../assets/images/av-watch-2.png";
import watchPngThree from "../../assets/images/av-watch-3.png";
import watchPngFour from "../../assets/images/av-watch-4.png";
import watchPngFive from "../../assets/images/av-watch-5.png";

// Background Images
import watchPngBackgroundOne from "../../assets/background/watch-one.png";
import watchPngBackgroundTwo from "../../assets/background/watch-two.png";
import watchPngBackgroundThree from "../../assets/background/watch-three.png";
import watchPngBackgroundFour from "../../assets/background/watch-four.png";
import watchPngBackgroundFive from "../../assets/background/watch-five.png";

// Styles
import { Section, Content, Button } from "./styles";

// Components
import HeroAnimation from "../HeroAnimation";

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const [animation, setAnimation] = useState<string>("");
  const [arrayIndex, setArrayIndex] = useState<number>(0);

  const [loaded, setLoaded] = useState(true);
  const [retrieveData, setRetrieveData] = useState<null | boolean>(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      setTimeout(() => {
        sessionStorage.setItem("viewedSite", JSON.stringify(true));
      }, 10000);
    }
  }, [loaded]);

  const watchInfo = [
    {
      background: watchPngBackgroundOne,
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
          <Button onClick={() => navigate("/contact")}>
            <span>Enquire Now</span>
          </Button>
        </>
      ),
    },
    {
      background: watchPngBackgroundTwo,
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
          <Button onClick={() => navigate("/contact")}>
            <span>Enquire Now</span>
          </Button>
        </>
      ),
    },
    {
      background: watchPngBackgroundThree,
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
          <Button onClick={() => navigate("/contact")}>
            <span>Enquire Now</span>
          </Button>
        </>
      ),
    },
    {
      background: watchPngBackgroundFour,
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
          <Button onClick={() => navigate("/contact")}>
            <span>Enquire Now</span>
          </Button>
        </>
      ),
    },
    {
      background: watchPngBackgroundFive,
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
          <Button onClick={() => navigate("/contact")}>
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

  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: false,
    dotsClass: "slick-dots slick-thumb",
    customPaging: function (i: number) {
      return (
        <a>
          <img
            className="pagination-img"
            src={paginationImages[i]}
            onClick={() => {
              setArrayIndex(i);
            }}
          />
          <p>
            {watchInfo[i].title} {watchInfo[i].type}
          </p>
        </a>
      );
    },
  };

  useEffect(() => {
    setTimeout(() => {
      setAnimation("");
    }, 1500);
  }, [animation]);

  useEffect(() => {
    setAnimation("fadeIn");
  }, [arrayIndex]);

  return (
    <Section background={watchInfo[arrayIndex].background}>
      <div className="border">
        <HeroAnimation />
        <Content>
          <div className="watch-info">
            <div className={`title ${animation}`}>
              <h1>{watchInfo[arrayIndex].title}</h1>
              <span>{watchInfo[arrayIndex].type}</span>
            </div>
            <div className={`info ${animation}`}>
              {watchInfo[arrayIndex].content}
            </div>
          </div>
          <div className="watch-scroll">
            <div className="watch-scroll__slide">
              <Slider {...settings}>
                {paginationImages.map((img, i) => {
                  return (
                    <img
                      className="watch-img"
                      src={img}
                      alt="Watch pagination"
                    />
                  );
                })}
              </Slider>
            </div>
            <div className="watch-scroll__dots"></div>
          </div>
        </Content>
      </div>
    </Section>
  );
};

export default Hero;
