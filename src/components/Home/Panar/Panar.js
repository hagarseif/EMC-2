import React from 'react'
import Img from '../../assets/images/Landing.png'
import Img2 from '../../assets/images/mob_landd.png'
import Img3 from '../../assets/images/tab_landd2.png'
import styles from './Panar.module.scss'
const Panar = ({children}) => {
  return (
    <div className={styles.banar}>
        {children}
        {/* <img src={Img} className={styles.img} alt="banar" />
        <img src={Img2} className={styles.mob_img} alt="banar" />
        <img src={Img3} className={styles.tab_img} alt="banar" /> */}
    </div>
  )
}

export default Panar