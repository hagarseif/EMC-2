import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ReactComponent as Logo } from "../../assets/images/Logo.svg";
import { ReactComponent as DarkLogo } from "../../assets/images/dark_logo.svg";
import { ReactComponent as Globe } from "../../assets/images/globe.svg";
import { ReactComponent as Linkedin } from "../../assets/images/linkedin.svg";
import { ReactComponent as Facebook } from "../../assets/images/facebook.svg";
import { ReactComponent as MenuIcon } from "../../assets/images/menu.svg";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Menu from "./Menu";
import ChangLang from "../../utility/ChangLang";
import styles from "./Navbar.module.scss";
const Navbar = ({ dark }) => {
  const [showMenu, setShowMenu] = useState(false);
  const {t,i18n,direction} = ChangLang();
  return (
    <div className={styles.container} dir={direction}>
      <div
        className={`${styles.nav} ${
          dark === false ? styles.nav : styles.dark_nav
        }`}
      >
        <div className={`${styles.logo} d-flex`}>
          {dark ? <DarkLogo /> : <Logo />}
        </div>
        <div className={styles.nav_dis}>
          <ul className={`${styles.list} d-flex align-items-center m-0`}>
            <li className={styles.navItem}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${styles.link} ${
                    isActive ? `${styles.active}` : `${styles.link}`
                  } ${dark === true ? styles.dark_link : ""}`
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
                  }  ${dark === true ? styles.dark_link : ""}`
                }
              >
                 {t("Home.Navbar.about")}
              </NavLink>
            </li>

            <li className={styles.navItem}>
              <HashLink
                to="/#services"
                className={`${styles.link}  ${
                  dark === true ? styles.dark_link : ""
                }`}
                smooth
              >
                 {t("Home.Navbar.services")}
              </HashLink>
            </li>
            <li className={styles.navItem}>
              <HashLink
                to="/#industries"
                className={`${styles.link}  ${
                  dark === true ? styles.dark_link : ""
                }`}
                smooth
              >
                 {t("Home.Navbar.industries")}
              </HashLink>
            </li>

            <li className={styles.navItem}>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `${styles.link} ${
                    isActive ? `${styles.active}` : `${styles.link}`
                  }  ${dark === true ? styles.dark_link : ""}`
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
                  }  ${dark === true ? styles.dark_link : ""}`
                }
              >
                {t("Home.Navbar.contact")}
              </NavLink>
            </li>
          </ul>
          <div className={`${styles.lang_social} d-flex align-items-center `}>
            <div
              className={`${styles.lang} `}
              onClick={
                i18n.language === "en"
                  ? () => i18n.changeLanguage("ar")
                  : () => i18n.changeLanguage("en")
              }
            >
              <Globe
                className={`${styles.icon} ${
                  dark === false ? styles.icon : styles.dark_icon
                }`}
              />
              <span className={`px-2 ${dark === true ? styles.dark_span : ""}`}>
                { i18n.language === "en"?"Arabic":"الإنجليزية"}
              </span>
            </div>
            <div className={styles.social}>
              <Facebook
                className={`${styles.icon} ${
                  dark === false ? styles.icon : styles.dark_icon
                }`}
              />
              <Linkedin
                className={`${styles.icon} ${
                  dark === false ? styles.icon : styles.dark_icon
                }`}
              />
            </div>
          </div>
        </div>
        <div className={styles.con_menu}>
          <MenuIcon
            className={`${styles.menu} ${
              dark === false ? styles.menu : styles.dark_menu
            }`}
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
      </div>
      {showMenu && <Menu />}
    </div>
  );
};

export default Navbar;
