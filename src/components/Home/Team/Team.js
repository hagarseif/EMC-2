import styles from "./Team.module.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import T1 from "../../assets/images/service/t1.png"
import T2 from "../../assets/images/service/t2.png"
import T3 from "../../assets/images/service/t3.png"
import T4 from "../../assets/images/service/t4.png"
import T6 from "../../assets/images/service/t6.png"
import ChangLang from "../../utility/ChangLang";
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
const Team = () => {
  const { t,direction } = ChangLang();
 const team=[
  {
    id: 1,
    image: T1,
    name: "Asmaa Bakr",
    title:"UI / UX Designer"
  },
  {
    id: 2,
    image: T2,
    name: "Hagar Mohamed",
    title:"Front-end developer"
  },
  {
    id: 3,
    image: T6,
    name: "Shahd Yassen",
    title:"UI / UX Designer"
  },
  {
    id: 4,
    image: T4,
    name: "Ahmed Ragaa",
    title:"Mobile developer"
  },
  {
    id: 5,
    image: T3,
    name: "Gerges Salah",
    title:"Back-end developer"
  },
  {
    id: 6,
    image: T3,
    name: "Abanop Gerges",
    title:"Team manager"
  },
 ]
  return (
    <div className={`${styles.container} `} dir={direction}>
      <div className={styles.title}>
        <h1 className="main_title">{t('Home.team.main_title')}</h1>
        <div className={styles.line}></div>
      </div>
      <div className={`${styles.team}`}>
        <Swiper
         slidesPerView={3.2}
         spaceBetween={10}
         freeMode={true}
         modules={[FreeMode, Pagination]}
         loop={true}
         breakpoints={{
          0:{
            slidesPerView: .8
          },
          470: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          510: {
            slidesPerView: 1.1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          720: {
            slidesPerView: 1.4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1.6,
            spaceBetween: 20,
          },
          920:{
            slidesPerView: 1.8,
            spaceBetween: 20,
          },
          920:{
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1000:{
            slidesPerView: 2.2,
            spaceBetween: 20,
          },
          1220:{
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
         
          1250: {
            slidesPerView: 3.1,
            spaceBetween: 20,
          },
        }}
          className="mySwiper"
        >
          {team.map((d, i) => (
            <SwiperSlide key={i}>
              <div className={styles.card} key={i}>
                <img
                  src={d.image}
                  alt=""
                />
                <div className={styles.text}>
                  <span className={styles.name}>{d.name}</span>
                  <span  className={styles.title}>{d.title}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Team;