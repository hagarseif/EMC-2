import React from 'react'
import Img from '../../assets/images/panar2.png'
import styles from './Panar.module.scss'
const Panar = () => {
  return (
    <div className={styles.banar}>
        <img src={Img} className='w-100' alt="banar" />
    </div>
  )
}

export default Panar