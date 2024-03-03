import React from "react";
import styles from './About.module.scss'
const AboutUs = () => {
  return (
    <div className="d-flex align-items-center flex-column structure">
      <h1 className="main_title">About EMC²</h1>
      <p className={styles.about}>
        We are an Egyptian software company specialized in providing information
        technology solutions. Our team is proud of being made up of
        distinguished Egyptians in the field of programming and software
        development, and we strive to provide high quality services to our
        customers. Empowering Minds, Elevating Software Where Innovation
        Meets Education.
      </p>
    </div>
  );
};

export default AboutUs;
