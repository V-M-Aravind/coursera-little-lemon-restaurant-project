import React from 'react';
import styles from "./Header.module.css";
import desktopLogo from "../../assets/desktop-logo.png"

const Header= ({children}) => {
  return (
    <header className={styles.header}>
      <img src={desktopLogo} alt="little-lemon-logo" className={styles.logo}/>{children}
    </header>
  )
}

export default Header

