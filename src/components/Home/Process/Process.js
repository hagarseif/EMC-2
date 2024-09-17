// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { process } from "./data";
import ChangeLang from "../../utility/ChangLang";
import styles from "./Process.module.scss";

const Process = () => {
  const { i18n, direction } = ChangeLang();
  let arabic = i18n.language === "ar";
  return (
    <div className={`${styles.process}  structure`} dir={direction}>
      <h1 className="main_title">
        {arabic ? "الخطوات التي نتبعها" : "Process We Follow"}
      </h1>
      <div className={`${styles.all_processes} ${styles.no_slider}`}>
        {process.map((p, i) => (
          <div className={styles.card} key={i}>
            <p.img className={styles.img} />
            <h3>{arabic ? p.title_ar : p.title}</h3>
            <p>{arabic ? p.desc_ar : p.desc}</p>
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
          390: {
            slidesPerView: 1.2,
            spaceBetween: 5,
          },
          430: {
            slidesPerView: 1.3,
            spaceBetween: 5,
          },
          465: {
            slidesPerView: 1.4,
            spaceBetween: 5,
          },
          550: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          580: {
            slidesPerView: 1.8,
            spaceBetween: 10,
          },
          660: {
            slidesPerView: 1.95,
            spaceBetween: 10,
          },
          730: {
            slidesPerView: 2.1,
            spaceBetween: 10,
          },
          750: {
            slidesPerView: 3.1,
            spaceBetween: 10,
          },
        }}
        className={`${styles.swiper} "mySwiper"`}
      >
        {process.map((p, i) => (
          <SwiperSlide key={i} className={styles.all_processes}>
            <div className={styles.card} key={i}>
              <p.img className={styles.img} />
              <h3>{arabic ? p.title_ar : p.title}</h3>
              <p>{arabic ? p.desc_ar : p.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Process;
