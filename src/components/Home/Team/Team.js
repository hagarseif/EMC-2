import styles from "./Team.module.scss";
// Import Swiper React components

import T1 from "../../assets/images/service/abanop.jpg";
import T2 from "../../assets/images/service/mohamed3.jpg";
import T3 from "../../assets/images/service/mary.jpg";
import T4 from "../../assets/images/service/gerges.jpg";
import T5 from "../../assets/images/service/kerolos.jpg";
import T6 from "../../assets/images/service/hagar.jpg";
import T7 from "../../assets/images/service/shahd.jpg";
import T8 from "../../assets/images/service/ahmed1.jpg";
import T9 from "../../assets/images/service/asmaa1.jpg";
import ChangLang from "../../utility/ChangLang";
// import required modules
import Slider from "react-slick";
// import "./Team.scss"; // Custom styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
const Team = () => {
  const { t, direction } = ChangLang();
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const team = [
    {
      id: 1,
      image: T1,
      name: "Abanop Gerges",
      title: "chief executive officer",
    },
    {
      id: 2,
      image: T2,
      name: "Mohamed Mostafa",
      title: "Chief Technical Officer",
    },
    {
      id: 3,
      image: T3,
      name: "Mary Gerges",
      title: "Graphic Designer",
    },
    {
      id: 4,
      image: T4,
      name: "Gerges Salah",
      title: "Back-end Developer",
    },
    {
      id: 5,
      image: T5,
      name: "Kyrillos Reyad",
      title: "Cyber Security Engineer",
    },
    {
      id: 6,
      image: T6,
      name: "Hagar Mohamed",
      title: "Front-end Developer",
    },
    {
      id: 7,
      image: T7,
      name: "Shahd Mohamed",
      title: "UI / UX Designer",
    },
    {
      id: 8,
      image: T8,
      name: "Ahmed Ragaa",
      title: "Flutter Developer",
    },
    {
      id: 9,
      image: T9,
      name: "Asmaa Bakr",
      title: "UI / UX Designer",
    },
  ];
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3, // Show 5 images at a time (one row)
    slidesToScroll: 1,
    rows: 1, // Two rows
    slidesPerRow: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 4000,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },
    afterChange: (currentIndex) => {
      const totalSlides = team.length; // Total number of slides (update according to your case)
      if (currentIndex === totalSlides - 3) { // Check if the last set of slides is visible
        setTimeout(() => {
          sliderRef.current.slickGoTo(0); // Reset to the first slide
        }, 4000); // Delay of 5 seconds before resetting to the first slide
      }
    },
    responsive: [
      {
        breakpoint: 1240, // For screens < 1200px
        settings: {
          slidesToShow: 2.7, // Show 2 cards per row
        },
      },
      {
        breakpoint: 1200, // For screens < 1200px
        settings: {
          slidesToShow: 2.5, // Show 2 cards per row
        },
      },
      {
        breakpoint: 1100, // For screens < 1200px
        settings: {
          slidesToShow: 2.2, // Show 2 cards per row
        },
      },
      {
        breakpoint: 950, // For screens < 1200px
        settings: {
          slidesToShow: 2, // Show 2 cards per row
        },
      },
      {
        breakpoint: 880, // For screens < 1200px
        settings: {
          slidesToShow: 1.7, // Show 2 cards per row
        },
      },
      {
        breakpoint: 770, // For screens < 1200px
        settings: {
          slidesToShow: 1.5, // Show 2 cards per row
        },
      },
      {
        breakpoint: 668, // For screens < 768px
        settings: {
          slidesToShow: 1, // Show 1 card per row
        },
      },
    ], // 1 slide per row
  };
  return (
    <div className={`${styles.container} `} dir={direction}>
      <div className={styles.title}>
        <h1 className="main_title">{t("Home.team.main_title")}</h1>
        <div className={styles.line}></div>
      </div>
      <div className={`${styles.team}`}>
        <div className={`slider-container`}>
          <Slider {...settings} ref={sliderRef}>
            {team.map((d, i) => (
              <div className={styles.card} key={i}>
                <img src={d.image} alt="" />
                <div className={styles.text}>
                  <span className={styles.name}>{d.name}</span>
                  <span className={styles.title}>{d.title}</span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Team;
