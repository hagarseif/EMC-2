import styles from "./OurTeam.module.scss";
import { ReactComponent as Img } from "../../assets/images/Sline.svg";
import T1 from "../../assets/images/service/abanop.jpg";
import T2 from "../../assets/images/service/mohamed3.jpg";
import T3 from "../../assets/images/service/mary.jpg";
import T4 from "../../assets/images/service/gerges.jpg";
import T5 from "../../assets/images/service/kerolos.jpg";
import T6 from "../../assets/images/service/hagar.jpg";
import T7 from "../../assets/images/service/shahd.jpg";
import T8 from "../../assets/images/service/ahmed1.jpg";
import T9 from "../../assets/images/service/asmaa1.jpg";
import ChangLang from "../../utility/ChangLang";
const OurTeam = () => {
  const { t, direction } = ChangLang();
  const team = [
    {
      id: 1,
      image: T1,
      name: "Abanop Gerges",
      title: "chief executive officer",
    },
    {
      id: 2,
      image: T2,
      name: "Mohamed Mostafa",
      title: "Chief Technical Officer",
    },
    {
      id: 3,
      image: T3,
      name: "Mary Gerges",
      title: "Graphic Designer",
    },
    {
      id: 4,
      image: T4,
      name: "Gerges Salah",
      title: "Back-end Developer",
    },
    {
      id: 5,
      image: T5,
      name: "Kyrillos Reyad",
      title: "Cyber Security Engineer",
    },
    {
      id: 6,
      image: T6,
      name: "Hagar Mohamed",
      title: "Front-end Developer",
    },
    {
      id: 7,
      image: T7,
      name: "Shahd Mohamed",
      title: "UI / UX Designer",
    },
    {
      id: 8,
      image: T8,
      name: "Ahmed Ragaa",
      title: "Flutter Developer",
    },
    {
      id: 9,
      image: T9,
      name: "Asmaa Bakr",
      title: "UI / UX Designer",
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
