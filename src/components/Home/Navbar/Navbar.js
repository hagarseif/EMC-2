import React from "react";
import { ReactComponent as Logo } from "../../assets/images/Logo.svg";
import { ReactComponent as Globe } from "../../assets/images/globe.svg";
import { ReactComponent as Linkedin } from "../../assets/images/linkedin.svg";
import { ReactComponent as Facebook } from "../../assets/images/facebook.svg";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import styles from "./Navbar.module.scss";
const Navbar = () => {
  return (
    <div
      className={`${styles.nav}`}
    >
      <div className={`${styles.logo} d-flex`}>
        <Logo />
      </div>
      <div className={styles.nav_dis}>
      <ul className={`${styles.list} d-flex align-items-center m-0`}>
        <li className={styles.navItem}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${styles.link} ${
                isActive ? `${styles.active}` : `${styles.link}`
              }`
            }
          >
            Home
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
            About us
          </NavLink>
        </li>

        <li className={styles.navItem}>
          <HashLink to="/#services" className={styles.link} smooth>
            Services
          </HashLink>
        </li>
        <li className={styles.navItem}>
          <HashLink to="/#industries" className={styles.link} smooth>
            Industries
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
            OurWork
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
            Contact us
          </NavLink>
        </li>
      </ul>
      <div className={`${styles.lang_social} d-flex align-items-center `}>
        <div className={`${styles.lang} `}>
          <Globe />
          <span className="px-2">Arabic</span>
        </div>
        <div className={styles.social}>
          <Facebook className={styles.icon} />
          <Linkedin className={styles.icon} />
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default Navbar;
