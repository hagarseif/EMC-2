import React from "react";
import styles from './About.module.scss'
const AboutUs = () => {
  return (
    <div className="d-flex align-items-center flex-column structure">
      <h1 className="main_title">About EMC²</h1>
      <p className={styles.about}>
      We believe every person ,student, teams, and enterprises have the potential to be amazing. And there’s a better way to bring out what they already have in them. We know this because we’ve lived it. we’re always evolving and wants everybody to evolve with us so our mission is to make sure that our customers have exactly what they need to unleash their edge.
      </p>
    </div>
  );
};

export default AboutUs;
