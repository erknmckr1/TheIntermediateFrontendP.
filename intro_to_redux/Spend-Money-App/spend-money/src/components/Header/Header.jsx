import React from 'react'
import styles from './Header.module.css'
function Header() {
  return (
    <div className={`container-fluid ${styles.header}` } >
        <img className={styles.money_img} src="/images/money.jpeg" alt="Money" />
        <h1 className={styles.title}>What would you like to buy ?</h1>
    </div>
  )
}

export default Header