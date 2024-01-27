import React from 'react'
import { ReactComponent as Logo } from '../../assets/images/Logo.svg'
import { ReactComponent as Globe } from '../../assets/images/globe.svg'
import { ReactComponent as Linkedin } from '../../assets/images/linkedin.svg'
import { ReactComponent as Facebook } from '../../assets/images/facebook.svg'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.scss'
const Navbar = () => {
  return (
    <div className={`${styles.nav} d-flex align-items-center justify-content-between py-3 px-5`}>
        <div className={`${styles.logo} d-flex`}>
            <Logo/>
            <h2>EMC<sup>2</sup></h2>
        </div>
        <ul className={`${styles.list} d-flex align-items-center m-0`}>
            <li className={styles.navItem}><Link to='/' className={styles.link}>Home</Link></li>
            <li className={styles.navItem}><Link to='/about' className={styles.link}>About us</Link></li>
            <li className={styles.navItem}><Link to='/services' className={styles.link}>Services</Link></li>
            <li className={styles.navItem}><Link to='/products' className={styles.link}>Products</Link></li>
            <li className={styles.navItem}><Link to='/contact' className={styles.link}>Contact us</Link></li>
        </ul>
        <div className={styles.lang}>
          <Globe/>
          <span className="px-2">Arabic</span>
        </div>
        <div className={styles.social}>
            <Facebook className={styles.icon}/>
            <Linkedin className={styles.icon}/>
        </div>
    </div>
  )
}

export default Navbar