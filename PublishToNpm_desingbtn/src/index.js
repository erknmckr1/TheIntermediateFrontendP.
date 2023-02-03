import React from 'react'
import styles from './styles.module.css'


export const Buttons = ({text,type=""})=>{
  return(
    <button className={styles[type]} >{text}</button>
  )
}
