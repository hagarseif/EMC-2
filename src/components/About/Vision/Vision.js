import React from "react";
import Img from "../../assets/images/vision.png";
import Img2 from "../../assets/images/vision2.png";
import styles from "./Vision.module.scss";
import ChangLang from "../../utility/ChangLang";

const Vision = () => {
  const { t, direction } = ChangLang();

  return (
    <div className={`${styles.vision}`} dir={direction}>
      <div className={styles.text}>
        <h1>{t("About.vision.title")} </h1>
        <p>{t("About.vision.content")}</p>
      </div>
      <div className={styles.img_con}>
        {direction === "ltr" ? (
          <img src={Img} alt="" className={styles.img} />
        ) : (
          <img src={Img2} alt="" className={styles.img} />
        )}
      </div>
    </div>
  );
};

export default Vision;
