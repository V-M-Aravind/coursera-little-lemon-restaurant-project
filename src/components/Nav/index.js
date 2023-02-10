import React from 'react'
import styles from "./Nav.module.css";
const NavBar= () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Resevations</a></li>
        <li><a href="#">Order Online</a></li>
        <li><a href="#">Login</a></li>
      </ul>
    </nav>
  )
}

export default NavBar

