import React from "react";
import { ReactComponent as F1 } from "../../assets/images/footer1.svg";
import { ReactComponent as F2 } from "../../assets/images/footer2.svg";
import styles from "./Footer.module.scss";
import { ReactComponent as Logo } from "../../assets/images/footer_logo.svg";

const Footer = () => {
  return (
    <div className={styles.footer}>  
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
            <Logo className={styles.logo}/>
          </div>
      </div>
   
  );
};

export default Footer;
