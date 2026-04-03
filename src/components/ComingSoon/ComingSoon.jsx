import React from "react";
import styles from "./ComingSoon.module.css";

const ComingSoon = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logoIcon} />
        <span>BentoWeb</span>
      </header>

      <main>
        <div className={styles.badge}>Lanseres snart</div>
        <h1 className={styles.title}>
          Nettsider som får bedriften din til å{" "}
          <span className={styles.accent}>skille seg ut</span>
        </h1>
        <p className={styles.subtitle}>
          BentoWeb hjelper små og mellomstore bedrifter med moderne nettsider
          som tiltrekker kunder og bygger troverdighet.
        </p>
      </main>

      <footer className={styles.footer}>
        © {new Date().getFullYear()} BentoWeb — Modern Web Agency Norway
      </footer>
    </div>
  );
};

export default ComingSoon;
