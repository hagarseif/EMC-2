// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { ReactComponent as Line } from "../../assets/images/Sline.svg";
import { features } from "./data";
import ChangeLang from "../../utility/ChangLang";
import styles from "./Features.module.scss";
const Features = () => {
  const { i18n, direction } = ChangeLang();
  let arabic = i18n.language === "ar";

  return (
    <div className={`${styles.feature} structure`} dir={direction}>
      <div
        className={`${styles.title_line} d-flex flex-column align-items-end gap-0`}
      >
        <h1 className="main_title text-center">
          {i18n.language === "en" ? (
            <>
              What We Do for
              <br />
              Your Success
            </>
          ) : (
            <>
              ما نقوم به <br />
              لضمان نجاحك
            </>
          )}
        </h1>
        <Line className={styles.line} />
      </div>
      <div className={`${styles.allcards} ${styles.no_slider}`}>
        {features.map((f, i) => (
          <div className={styles.card} key={i}>
            <f.img className={styles.img} />
            <h3>{arabic ? f.title_ar : f.title}</h3>
            <p>{arabic ? f.content_ar : f.content}</p>
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
            slidesPerView: 1.07,
            spaceBetween: 5,
          },
          425: {
            slidesPerView: 1.1,
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
          {features.map((f, i) => (
            <SwiperSlide key={i} className={styles.allcards}>
              <div className={`${styles.card}`} key={i}>
                <f.img className={styles.img} />
                <h3>{arabic ? f.title_ar : f.title}</h3>
                <p>{arabic ? f.content_ar : f.content}</p>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};
export default Features;
