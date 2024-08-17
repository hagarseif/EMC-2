import React from 'react'
import Img from '../../assets/images/vision.png'
import styles from './Vision.module.scss'
const Vision = () => {
  return (
    <div className={`${styles.vision}  d-flex`}>
        <div className={styles.text}>
            <h1>Our Vision </h1>
            <p>We believe every person has the potential to be amazing. And that there’s a better way to bring out what they already have in them. We know this because we’ve lived it. We’ve had the honor of training more people than anyone. We help democratize learning with powerful cloud-based tools and unmatched enterprise-wide smarts and skills. Like our customers, we’re always evolving – making sure individuals, teams, and enterprises have exactly what they need to unleash their edge.</p>
        </div>
        <img src={Img} alt="" />
    </div>
  )
}

export default Vision