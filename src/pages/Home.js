import React from "react";
import Navbar from "../components/Home/Navbar/Navbar";
import Panar from "../components/Home/Panar/Panar";
import About from "../components/Home/About/About";
import Features from "../components/Home/Features/Features";
import Services from "../components/Home/Services/Services";
import Process from "../components/Home/Process/Process";
import Industry from "../components/Home/Industries/Industry";
import OurWork from "../components/Home/OurWork/OurWork";
import Team from "../components/Home/Team/Team";
import Clients from "../components/Home/Clients/Clients";
import Footer from "../components/Home/Footer/Footer";

import Img from "../components/assets/images/Landing2.png";
import Img2 from "../components/assets/images/mob_land2.png";
import Img3 from "../components/assets/images/tab_land.png";
import styles from "../components/Home/Panar/Panar.module.scss";
const Home = () => {
  return (
    <div>
      <Navbar dark={false} />
      <Panar>
        <img src={Img} className={styles.img} alt="banar" />
        <img src={Img3} className={styles.tab_img} alt="banar" />
        <img src={Img2} className={`${styles.mob_img}`} alt="banar" />
      </Panar>
      <About />
      <Features />
      <Services />
      <Process />
      <Industry />
      <OurWork />
      <Team />
      <Clients />
      <Footer />
    </div>
  );
};

export default Home;
