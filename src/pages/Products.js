import React from 'react'
import Navbar from '../components/Home/Navbar/Navbar'
import Panar from '../components/Home/Panar/Panar'
import WORK from '../components/Products/Products'
import Clients from '../components/Home/Clients/Clients'
import Footer from '../components/Home/Footer/Footer'

import Img from "../components/assets/images/Landing2.png";
import Img2 from "../components/assets/images/mob_land2.png";
import Img3 from "../components/assets/images/tab_land.png";
import styles from "../components/Home/Panar/Panar.module.scss";
const Products = () => {
  return (
    <>
     <Navbar dark={false} />
     <Panar>
        <img src={Img} className={styles.img} alt="banar" />
        <img src={Img3} className={styles.tab_img} alt="banar" />
        <img src={Img2} className={`${styles.mob_img}`} alt="banar" />
      </Panar>
    <WORK/>
    <Clients/>
    <Footer/>
    </>
  )
}

export default Products