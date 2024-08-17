import React from "react";
import styles from "./About.module.scss";
import Img from "../../assets/images/Group.png";
import { ReactComponent as Arrow } from "../../assets/images/Vector.svg";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className={`${styles.about} d-flex align-items-center`}>
        <div className={styles.text}>
          <h6>About EMC² Solutions</h6>
          <h2>Your Reliable Partner for any problem</h2>
          <p>
            EMC² Solutions is a community that offer a wide array of services
            for customers and students.<br/> our creative team design and develop
            custom software tailored specifically to our customer's business<br/>
            needs in high-quality and a cost-efficient way to bring growth to
            your business.<br/>Our team also help students to grow in software world
            Empowering their beautiful Minds, Elevating their Software skills we
            create a place Where Innovation Meets Education. 
          </p>
          <Link>
            See More <Arrow className={styles.arrow}/>
          </Link>
        </div>
        <img src={Img} alt=""/>
    </div>
  );
};

export default About;
