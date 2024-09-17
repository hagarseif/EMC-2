// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import React, { useState } from "react";
import styles from "./OurWork.module.scss";
import W1 from "../../assets/images/w1.png";
import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "../../assets/images/Vector.svg";
import { ReactComponent as Arrow2 } from "../../assets/images/right_arrow.svg";
import ChangLang from "../../utility/ChangLang";
const OurWork = () => {
  const { t,i18n, direction } = ChangLang();
  const [work, setWork] = useState([
    {
      img: W1,
      title: "Circle Loyalty Program App",
      technologies: ["Android", "iOS", "Node js", "MySQL"],
    },
    {
      img: W1,
      title: "Circle Loyalty Program App",
      technologies: ["Android", "iOS", "Node js", "MySQL"],
    },
    {
      img: W1,
      title: "Circle Loyalty Program App",
      technologies: ["Android", "iOS", "Node js", "MySQL"],
    },
  ]);
  return (
    <div className={`${styles.container} structure`} dir={direction}>
      <h1 className="main_title">{t("Home.work.title")}</h1>
      <div className={`${styles.work} ${styles.no_slider}`}>
        {work.map((d, i) => (
          <div className={styles.card} key={i}>
            <img src={d.img} alt="" />
            <div className={styles.tech}>
              <h3>{d.title}</h3>
              <ul>
                {d.technologies.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <Swiper
        dir={direction}
        slidesPerView={3.1}
        spaceBetween={10}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 0.8,
          },
          400: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          465: {
            slidesPerView: 1.1,
            spaceBetween: 5,
          },
          540: {
            slidesPerView: 1.2,
            spaceBetween: 5,
          },
          590: {
            slidesPerView: 1.3,
            spaceBetween: 5,
          },
          680: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          790: {
            slidesPerView: 1.8,
            spaceBetween: 10,
          },
          879: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }}
        className={`${styles.swiper} "mySwiper"`}
      >
        {work.map((d, i) => (
          <SwiperSlide key={i} className={styles.work}>
            <div className={styles.card} key={i}>
              <img src={d.img} alt="" />
              <div className={styles.tech}>
                <h3>{d.title}</h3>
                <ul>
                  {d.technologies.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Link className={styles.link} to="/products">
        {t("Home.work.more")}
       {i18n.language === 'en' ?<Arrow className={styles.arrow} />:<Arrow2 className={styles.arrow} />}
      </Link>
    </div>
  );
};

export default OurWork;
