import React from "react";
import styles from "./About.module.scss";
import Img from "../../assets/images/Group.png";
import { ReactComponent as Arrow } from "../../assets/images/Vector.svg";
import { ReactComponent as RightArrow } from "../../assets/images/right_arrow.svg";
import { Link } from "react-router-dom";
import ChangLang from "../../utility/ChangLang";

const About = () => {
  const { t, direction, i18n } = ChangLang();
  return (
    <div className={`${styles.about} `} dir={direction}>
      <div className={styles.text}>
        <h6>{t("Home.about.title")}</h6>
        <h2>{t("Home.about.mainTitle")}</h2>
        <p>{t("Home.about.content")}</p>
        <Link to="/about">
          {t("Home.about.button")}
          {i18n.language === "en" ? (
            <Arrow className={styles.arrow} />
          ) : (
            <RightArrow className={styles.arrow} />
          )}
        </Link>
      </div>
      <img src={Img} alt="" className={styles.img} />
    </div>
  );
};

export default About;
