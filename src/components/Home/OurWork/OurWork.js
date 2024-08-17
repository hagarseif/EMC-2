import React, { useState } from "react";
import styles from "./OurWork.module.scss";
import W1 from "../../assets/images/w1.png";
import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "../../assets/images/Vector.svg";

const OurWork = () => {
  const [work, setWork] = useState([
    {
      img: W1,
      title: "Circle Loyalty Program App",
      technologies: ["Android", "iOS", "Node js", "MySQL"],
    },
    {
      img: W1,
      title: "Circle Loyalty Program App",
      technologies: ["Android", "iOS", "Node js", "MySQL"],
    },
    {
      img: W1,
      title: "Circle Loyalty Program App",
      technologies: ["Android", "iOS", "Node js", "MySQL"],
    },
  ]);
  return (
    <div className={`${styles.container} structure`}>
      <h1 className="main_title">Our Creative Work</h1>
      <div className={styles.work}>
        {work.map((d, i) => (
          <div className={styles.card} key={i}>
            <img src={d.img} alt="" />
            <div className={styles.tech}>
              <h3>{d.title}</h3>
              <ul>
                {d.technologies.map((t,i)=>(
                  <li key={i}>{t}</li>
                ))}
                
              </ul>
            </div>
          </div>
        ))}
        
      </div>
      <Link className={styles.link} to="/products">Discover more <Arrow className={styles.arrow}/></Link>
    </div>
  );
};

export default OurWork;
