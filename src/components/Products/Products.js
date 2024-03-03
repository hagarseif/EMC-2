import React, { useState } from "react";
import OurWork from "../Home/OurWork/OurWork";
import W1 from "../assets/images/w1.png";
import styles from './Products.module.scss'
const Products = () => {
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
    <div className={`${styles.all_work}`}>
      <div className={styles.text}>
        <h1>
          See how we brought value to <br />
          our partners’ products.
        </h1>
        <p>
          With a remarkable track record spanning over two decades, we have
          successfully<br/> engineered for SMEs and mega-scale projects.
        </p>
      </div>
      <div className={`${styles.work}`}>
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
    </div>
  );
};

export default Products;
