import styles from "./Industry.module.scss";
import ChangLang from "../../utility/ChangLang";
import { industry } from "./data";
import { ReactComponent as LefttArrow } from "../../assets/images/slider-arr.svg";
import { ReactComponent as RightArrow } from "../../assets/images/rightslider-arr.svg";
////////////////////////////
import Slider from "react-slick";
import "./styles.scss"; // Custom styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Industry = () => {
  const { i18n, direction } = ChangLang();
  //////////////
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5, // Show 5 images at a time (one row)
    slidesToScroll: 1,
    rows: 2, // Two rows
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1200, // Large screens (less than 1200px)
        settings: {
          slidesToShow: 4, // Show 4 cards per row
          rows: 2,
        }
      },
      {
        breakpoint: 992, // Medium screens (less than 992px)
        settings: {
          slidesToShow: 3, // Show 3 cards per row
          rows: 2,
        }
      },
      {
        breakpoint: 768, // Tablets (less than 768px)
        settings: {
          slidesToShow: 2, // Show 2 cards per row
          rows: 2,
        }
      },
      {
        breakpoint: 576, // Small mobile screens (less than 576px)
        settings: {
          slidesToShow: 1, // Show 1 card per row
          rows: 2,
        }
      }
    ]// 1 slide per row
  };

  return (
    <div
      className={`${styles.container} structure`}
      id="industries"
      dir={direction}
    >
      <h1 className="main_title">
        {i18n.language === "en"
          ? "Industries We Serve"
          : "القطاعات التي نخدمها"}
      </h1>
      <div className={`slider-container`}>
        <Slider {...settings}>
          {industry.map((d, index) => (
            <div key={index} className={`${styles.service} service`}>
              <img className="w-40" src={d.icon} alt="" />
              <span>{i18n.language === "en" ? d.name : d.ar_name}</span>
            </div>
          ))}
        </Slider>
      </div>
      </div>
      
  );
};
export default Industry;
