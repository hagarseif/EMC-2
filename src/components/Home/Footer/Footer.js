import React from "react";
import { ReactComponent as F1 } from "../../assets/images/footer1.svg";
import { ReactComponent as F2 } from "../../assets/images/footer2.svg";
import FooterImg from "../../assets/images/Footer.png";
import styles from "./Footer.module.scss";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <img src={FooterImg} alt="" />
      <div className={styles.content}>
        <div className={styles.left}>
          <h1>
            Have problem?
            <br /> We would like to help.
          </h1>
          <div className={styles.contact}>
            <span className={styles.con_title}>Contact us</span>
            <div className={styles.phone}>
              <F1 />
              <span>+1 (917) 26 777 27</span>
            </div>
            <div className={styles.phone}>
              <F2 />
              <span>+49 (681) 988 999 59</span>
            </div>
          </div>
          </div>
          <div className={styles.right}>
            <h1>LOGO</h1>
            <p>We have the theory <br/> that solve everything</p>
          </div>
        </div>
      </div>
   
  );
};

export default Footer;
