import React from 'react'
import NavLink from '../navlink/NavLink';
import styles from './Navbar.module.scss'
const Navbar = props => {
    const { link } = props;
    const links = link.map((linkItem) => {

     return   <NavLink link={linkItem.name} url={linkItem.url} key={ linkItem} />
})
  return (
      <div className={styles["nav-bar"]}>
          {links}
    </div>
  )
}

export default Navbar