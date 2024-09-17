import React from 'react'
import styles from './Panar.module.scss'
const Panar = ({children}) => {
  return (
    <div className={styles.banar}>
        {children}
    </div>
  )
}

export default Panar