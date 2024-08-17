import styles from "./Clients.module.scss";
import Img from "../../assets/images/client1.png";
const Clients = () => {
  return (
    <div className={styles.clients}>
      <div className={styles.header}>
        <span>Some of Our</span>
        <h1 className="main_title">Amazing Clients</h1>
        <div className={styles.line}></div>
      </div>
      <div className={styles.imgs}>
        <img src={Img} alt="client" />
      </div>
    </div>
  );
};

export default Clients;
