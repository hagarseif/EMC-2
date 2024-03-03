import React, { useEffect, useState } from "react";
import styles from "./Team.module.scss";
import axios from "axios";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
const Team = () => {
  //////////////////get data/////////////
  const [data, setData] = useState([]);
  const baseUrl = "http://emc2db-001-site1.itempurl.com";
  const urlGet = "/api/TeamMember/GetAllMembers";

  useEffect(() => {
    // Make a GET request to fetch text data
    axios
      .get(`${baseUrl}${urlGet}`)
      .then((response) => {
        // Handle text data
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching text data:", error);
      });
  }, []);
  return (
    <div className={`${styles.container} `}>
      <div className={styles.title}>
        <span className={styles.meet}>Meet</span>
        <h1 className="main_title">Our Team</h1>
        <div className={styles.line}></div>
      </div>

      <div className={`${styles.team}`}>
        <Swiper
         slidesPerView={3.4}
         spaceBetween={10}
         freeMode={true}
         modules={[FreeMode, Pagination]}
         loop={true}
         breakpoints={{
          0:{
            slidesPerView: 1
          },
          640: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1.7,
            spaceBetween: 20,
          },
          1000:{
            slidesPerView: 2.2,
            spaceBetween: 20,
          },
          1220:{
            slidesPerView: 2.2,
            spaceBetween: 20,
          },
         
          1250: {
            slidesPerView: 3.4,
            spaceBetween: 20,
          },
        }}
          className="mySwiper"
        >
          {data.map((d, i) => (
            <SwiperSlide key={i}>
              <div className={styles.card} key={i}>
                <img
                  src={`data:image/jpeg;charset=utf-8;base64,${d.image}`}
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