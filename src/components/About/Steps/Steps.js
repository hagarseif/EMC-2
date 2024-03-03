import React from "react";
import "./Steps.scss";
import { ReactComponent as Line } from "../../assets/images/Sline.svg";
const Steps = () => {
  const steps = [
    {
      id: "01",
      class: "Standards",
      title: "Build On Standards",
      desc: `It could be a mobile app or a
    website, to ensure the long-
    term viability of our products,
    we adhere to industry
    standards during
    development.`,
    },
    {
      id: "02",
      class: "Assistance",
      title: "Assistance &Support",
      desc: `Global IT and operational
      support services that make
      operations more accessible
      and respond quickly to our
      client’s needs.`,
    },
    {
      id: "03",
      class: "Deliver",
      title: "Deliver With Love",
      desc: `At objects we Love what we
      do. Our projects are not
      rushed into development yet
      made with love and
      attention to detail.`,
    },
    {
      id: "04",
      class: "Global",
      title: "Global Expertise",
      desc: `Our successful projects and strategic alliances in over six
      continents provide you confidence in our technology
      services.`,
    },
  ];
  return (
    <div className="structure ">
      <div className="title_line d-flex flex-column align-items-end gap-0">
        <h1 className="main_title text-center">
          What We Do for <br />
          Your Success
        </h1>
        <Line className="line" />
      </div>

      <div className="all_steps">
        {steps.map((d, i) => (
          <div className={`${d.class} card_steps`} key={i}>
            <span>{d.id}</span>
            <div className="steps_title">
              <h2>{d.title}</h2>
              <p>{d.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
