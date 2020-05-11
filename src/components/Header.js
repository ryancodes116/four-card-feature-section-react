import React from 'react';
import styles from '../styles/Header.module.css';

function Header() {
  return (
    <header className="container">
      <h1 className={styles.topTitle}>Reliable, efficient delivery</h1>
      <h1 className={styles.bottomTitle}>Powered by Technology</h1>
      <p className={styles.text}>
        Our artificial intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </p>
    </header>
  );
}

export default Header;
