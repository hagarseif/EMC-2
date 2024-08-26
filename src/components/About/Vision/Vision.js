import React from "react";
import Img from "../../assets/images/vision.png";
import styles from "./Vision.module.scss";
const Vision = () => {
  return (
    <div className={`${styles.vision}`}>
      <div className={styles.text}>
        <h1>Our Vision </h1>
        <p>
          We believe every person ,student, teams, and enterprises have the
          potential to be amazing. And there’s a better way to bring out what
          they already have in them. We know this because we’ve lived it. we’re
          always evolving and wants everybody to evolve with us so our mission
          is to make sure that our customers have exactly what they need to
          unleash their edge.
        </p>
      </div>
      <div className={styles.img_con}>
        <img src={Img} alt="" className={styles.img} />
      </div>
    </div>
  );
};

export default Vision;
