import React from "react";
import Panar from "../components/Home/Panar/Panar";
import Contact from "../components/ContactUs/Contact";
import Footer from '../components/Home/Footer/Footer'
import Navbar from "../components/Home/Navbar/Navbar";

import Img from '../components/assets/images/Landing.png'
import Img2 from '../components/assets/images/mob_landd.png'
import Img3 from '../components/assets/images/tab_landd2.png'
import styles from '../components/Home/Panar/Panar.module.scss'
const ContactUs = () => {
  return (
    <div>
       <Navbar dark={true} />
       <Panar>
        <img src={Img} className={styles.img} alt="banar" />
        <img src={Img2} className={styles.mob_img} alt="banar" />
        <img src={Img3} className={styles.tab_img} alt="banar" />
      </Panar>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default ContactUs;
