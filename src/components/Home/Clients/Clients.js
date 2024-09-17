import styles from "./Clients.module.scss";
import Img from "../../assets/images/client1.png";
import ChangLang from "../../utility/ChangLang";
const Clients = () => {
  const { t,direction } = ChangLang();
  return (
    <div className={styles.clients} dir={direction}>
      <div className={styles.header}>
        <span>{t('Home.clients.title')}</span>
        <h1 className="main_title">{t('Home.clients.main_title')}</h1>
        <div className={styles.line}></div>
      </div>
      <div className={styles.imgs}>
        <img src={Img} alt="client" />
      </div>
    </div>
  );
};

export default Clients;
