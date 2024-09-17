import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { HashLink } from "react-router-hash-link";
import { ReactComponent as Globe } from "../../assets/images/globe.svg";
import ChangLang from "../../utility/ChangLang";

const Menu = () => {
  const { t, i18n } = ChangLang();
  return (
    <div className={styles.toggle_menue}>
      <ul className={`${styles.mob_list}`}>
        <li className={styles.navItem}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${styles.link} ${
                isActive ? `${styles.active}` : `${styles.link}`
              }`
            }
          >
            {t("Home.Navbar.home")}
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${styles.link} ${
                isActive ? `${styles.active}` : `${styles.link}`
              }`
            }
          >
            {t("Home.Navbar.about")}
          </NavLink>
        </li>

        <li className={styles.navItem}>
          <HashLink to="/#services" className={styles.link} smooth>
          {t("Home.Navbar.services")}
          </HashLink>
        </li>
        <li className={styles.navItem}>
          <HashLink to="/#industries" className={styles.link} smooth>
          {t("Home.Navbar.industries")}
          </HashLink>
        </li>

        <li className={styles.navItem}>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `${styles.link} ${
                isActive ? `${styles.active}` : `${styles.link}`
              }`
            }
          >
             {t("Home.Navbar.ourWork")}
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${styles.link} ${
                isActive ? `${styles.active}` : `${styles.link}`
              }`
            }
          >
             {t("Home.Navbar.contact")}
          </NavLink>
        </li>
      </ul>
      <div className={`${styles.mob_lang} `}  onClick={
                i18n.language === "en"
                  ? () => i18n.changeLanguage("ar")
                  : () => i18n.changeLanguage("en")
              }>
          <Globe />
          <span className="px-2" >{i18n.language === "en"? "Arabic":"الإنجليزية"}</span>
      </div>
    </div>
  );
};

export default Menu;
