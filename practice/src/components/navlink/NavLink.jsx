import React from 'react'
import Link from 'next/link'
import styles from './NavLink.module.scss'
const NavLink = props => {
    
    const { link ,url} = props
   
  return (
      <Link href={`${url}`} className={styles["nav-link"]}>{link }</Link>
  )
}



export default NavLink