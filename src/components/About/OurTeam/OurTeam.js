import styles from "./OurTeam.module.scss";
import { ReactComponent as Img } from "../../assets/images/Sline.svg";
import T1 from "../../assets/images/service/t1.png";
import T2 from "../../assets/images/service/t2.png";
import T3 from "../../assets/images/service/t3.png";
import T4 from "../../assets/images/service/t4.png";
import T6 from "../../assets/images/service/t6.png";
import ChangLang from "../../utility/ChangLang";
const OurTeam = () => {
  const { t, direction } = ChangLang();
  const team = [
    {
      id: 1,
      image: T1,
      name: "Asmaa Bakr",
      title: "UI / UX Designer",
    },
    {
      id: 2,
      image: T2,
      name: "Hagar Mohamed",
      title: "Front-end developer",
    },
    {
      id: 3,
      image: T6,
      name: "Shahd Yassen",
      title: "UI / UX Designer",
    },
    {
      id: 4,
      image: T4,
      name: "Ahmed Ragaa",
      title: "Mobile developer",
    },
    {
      id: 5,
      image: T3,
      name: "Gerges Salah",
      title: "Back-end developer",
    },
    {
      id: 6,
      image: T3,
      name: "Abanop Gerges",
      title: "Team manager",
    },
  ];
  return (
    <div className={`${styles.container} `} dir={direction}>
      <div className={styles.title}>
        <h1 className="main_title">{t("About.team.title")}</h1>
        <Img className={styles.line} />
      </div>
      <div className={`${styles.team}`}>
        {team.map((d, i) => (
          <div className={styles.card} key={i}>
            <img src={d.image} alt="" />
            <div className={styles.text}>
              <span className={styles.name}>{d.name}</span>
              <span className={styles.title}>{d.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
