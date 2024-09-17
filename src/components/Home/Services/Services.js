import styles from "./Services.module.scss";
import {service} from "./data";
import ChangLang from "../../utility/ChangLang";


const Services = () => {
 const {  direction, i18n } = ChangLang();
  return (
    <div className={`${styles.container} structure`} id="services" dir={direction}>
      <h1 className="main_title">{i18n.language === 'en'? "Services We Offer":"الخدمات التي نقدمها"}</h1>
      <div className={styles.all_services}>
        {service.map((d, i) => (
          <div key={i} className={styles.service}>
            <img
              className="w-40"
              src={d.icon}
              alt=""
            />
            <span>{i18n.language === 'en'? d.name:d.ar_name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
