import React from 'react'
import styles from './Blogtag.module.scss'
export const Blogtag = (props) => {
  const{name}=props
  return (
    <div className={styles["blog-tag"]}>{name}</div>
  )
}
