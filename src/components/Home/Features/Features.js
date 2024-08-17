import React, { useState } from "react";
import { ReactComponent as F1 } from "../../assets/images/f1.svg";
import { ReactComponent as F2 } from "../../assets/images/f2.svg";
import { ReactComponent as F3 } from "../../assets/images/f3.svg";
import { ReactComponent as F4 } from "../../assets/images/f4.svg";
import { ReactComponent as Line } from "../../assets/images/Sline.svg";

import styles from "./Features.module.scss";
const Features = () => {
  const [feature, setFeature] = useState([
    {
      img: F1,
      title: "Dedicated Development Team",
      content: `Our skilled team leverage 
            projects to provide best
            results. The team dedicates
            their every effort and does not
            look back until it's
            accomplished.`,
    },
    {
      img: F2,
      title: "Enhancement",
      content: `During Discovery, Designing
and Development phases, our
technical team is always there
to provide suggestions and
edits to improvise their
product in the best possible
manner.`,
    },
    {
      img: F3,
      title: "Client Centric Development",
      content: `We craft the client's needs on
            web, mobile, and blockchain
    to tailor the solutions and 
   enhance growth of the businesses.`,
    },
    {
      img: F4,
      title: "Agile Development",
      content: `We follow the Agile
      Development process that
      helps us to deliver the project
      with utmost quality and solid
      product for reliable and
      scalable business.`,
    },
  ]);
  return (
    <div className={`${styles.feature} structure`}>
      <div className={`${styles.title_line} d-flex flex-column align-items-end gap-0`}>
        <h1 className="main_title text-center">
          What We Do for <br />
          Your Success
        </h1>
        <Line className={styles.line}/>
      </div>
      <div className={styles.allcards}>
        {feature.map((f, i) => (
          <div className={styles.card} key={i}>
            <f.img className={styles.img} />
            <h3>{f.title}</h3>
            <p>{f.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
