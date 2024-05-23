import React from 'react';
import styles from "./Navbar.module.css"
import Links from './Links/Links';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to={'/'} className={styles.logoContainer}>
        <img className={styles.logo} src="/assets/logo.svg" alt="Logo" />
      </Link>
      <Links/>
    </div>
  );
};

export default Navbar;