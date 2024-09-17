import React from "react";
import { ReactComponent as F1 } from "../../assets/images/footer1.svg";
import { ReactComponent as F2 } from "../../assets/images/footer2.svg";
import styles from "./Footer.module.scss";
import { ReactComponent as Logo } from "../../assets/images/footer_logo.svg";
import ChangLang from "../../utility/ChangLang";
const Footer = () => {
  const { t, direction } = ChangLang();
  return (
    <div className={styles.footer} dir={direction}>  
        <div className={styles.left}>
          <h1>
          {t('Home.footer.title')}
            <br /> {t('Home.footer.main_title')}
          </h1>
          <div className={styles.contact}>
            <span className={styles.con_title}>{t("Home.footer.contact")}</span>
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
