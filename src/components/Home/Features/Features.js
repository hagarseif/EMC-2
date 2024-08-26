// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

import React, { useState } from "react";
import { ReactComponent as F1 } from "../../assets/images/f1.svg";
import { ReactComponent as F2 } from "../../assets/images/f2.svg";
import { ReactComponent as F3 } from "../../assets/images/f3.svg";
import { ReactComponent as F4 } from "../../assets/images/f4.svg";
import { ReactComponent as Line } from "../../assets/images/Sline.svg";

import styles from "./Features.module.scss";
const Features = () => {
  const [feature] = useState([
    {
      img: F1,
      title: "Dedicated Development Team",
      content: `Our skilled team leverage 
            projects to provide best
            results. The team dedicates
            their every effort and does not
            look back until it's
            accomplished.`,
    },
    {
      img: F2,
      title: "Enhancement",
      content: `During Discovery, Designing
and Development phases, our
technical team is always there
to provide suggestions and
edits to improvise their
product in the best possible
manner.`,
    },
    {
      img: F3,
      title: "Client Centric Development",
      content: `We craft the client's needs on
            web, mobile, and blockchain
    to tailor the solutions and 
   enhance growth of the businesses.`,
    },
    {
      img: F4,
      title: "Agile Development",
      content: `We follow the Agile
      Development process that
      helps us to deliver the project
      with utmost quality and solid
      product for reliable and
      scalable business.`,
    },
  ]);
  return (
    <div className={`${styles.feature} structure`}>
      <div
        className={`${styles.title_line} d-flex flex-column align-items-end gap-0`}
      >
        <h1 className="main_title text-center">
          What We Do for <br />
          Your Success
        </h1>
        <Line className={styles.line} />
      </div>
      <div className={`${styles.allcards} ${styles.no_slider}`}>
        {feature.map((f, i) => (
          <div className={styles.card} key={i}>
            <f.img className={styles.img} />
            <h3>{f.title}</h3>
            <p>{f.content}</p>
          </div>
        ))}
      </div>

      <Swiper
        slidesPerView={3.1}
        spaceBetween={10}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: .8,
          },
          390: {
            slidesPerView: 1.15,
            spaceBetween:5,
          },
          430: {
            slidesPerView: 1.2,
            spaceBetween: 5,
          },
          465: {
            slidesPerView: 1.3,
            spaceBetween: 5,
          },
          580: {
            slidesPerView: 1.6,
            spaceBetween: 10,
          },
          610: {
            slidesPerView: 1.7,
            spaceBetween: 10,
          },
          730: {
            slidesPerView: 1.9,
            spaceBetween: 10,
          },
          750: {
            slidesPerView: 3.1,
            spaceBetween: 10,
          },
          
        }}
        className={`${styles.swiper} "mySwiper"`}
      >
        <div className={styles.allcards}>
          {feature.map((f, i) => (
            <SwiperSlide key={i} className={styles.allcards}>
              <div className={`${styles.card}`} key={i}>
                <f.img className={styles.img} />
                <h3>{f.title}</h3>
                <p>{f.content}</p>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>

    </div>
  );
};

export default Features;
