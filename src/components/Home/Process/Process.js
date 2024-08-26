// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

import styles from "./Process.module.scss";
import { ReactComponent as P1 } from "../../assets/images/p1.svg";
import { ReactComponent as P2 } from "../../assets/images/p2.svg";
import { ReactComponent as P3 } from "../../assets/images/p3.svg";
import { ReactComponent as P4 } from "../../assets/images/p4.svg";
import { ReactComponent as P5 } from "../../assets/images/p5.svg";
import { ReactComponent as P6 } from "../../assets/images/p6.svg";
import { ReactComponent as P7 } from "../../assets/images/p7.svg";

const Process = () => {
  const process = [
    {
      img: P1,
      title: "1. Requirement Gathering",
      desc: `We follow the first and
            foremost priority of
            gathering requirements,
            resources, and information
            to begin our project.`,
    },
    {
      img: P2,
      title: "2. UI/UX Design",
      desc: `We create catchy and
            charming designs with the
            latest tools of designing to
            make it a best user-friendly
            experience.`,
    },
    {
      img: P3,
      title: "3. Prototype",
      desc: `After designing, you will get
            your prototype, which will be
            sent ahead for the
            development process for the
            product.`,
    },
    {
      img: P4,
      title: "4. Development",
      desc: `Development of mobile
            application/web/blockchain
            started using latest tools
            and technologies with
            transparency.`,
    },
    {
      img: P5,
      title: "5. Quality Assurance",
      desc: `Hyperlink values quality and
            provides 100% bug free
            application with no
            compromisation in it.`,
    },
    {
      img: P6,
      title: "6. Deployment",
      desc: `After trial and following all
            processes, your app is ready
            to launch on the App store or
            Play Store.`,
    },
    {
      img: P7,
      title: "7. Support & Maintenance",
      desc: `Our company offers you all
            support and the team is
            always ready to answer
            every query after
            deployment.`,
    },
  ];
  return (
    <div className={`${styles.process}  structure`}>
      <h1 className="main_title">Process We Follow</h1>
      <div className={`${styles.all_processes} ${styles.no_slider}`}>
        {process.map((p, i) => (
          <div className={styles.card} key={i}>
            <p.img className={styles.img} />
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
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
          0: {
            slidesPerView: 1,
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
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Process;
