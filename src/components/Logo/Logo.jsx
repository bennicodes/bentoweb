import React from "react";
import { Link } from "react-router";
import styles from "./Logo.module.css";

// The mark: a bento box seen from above — four compartments, one lit in brass.
// Mirrors public/favicon.svg.
export const LogoMark = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={styles.mark} aria-hidden="true" focusable="false">
    <rect x="1" y="1" width="10" height="10" className={styles.lit} />
    <rect x="13.6" y="1.6" width="8.8" height="8.8" className={styles.cell} />
    <rect x="1.6" y="13.6" width="8.8" height="8.8" className={styles.cell} />
    <rect x="13.6" y="13.6" width="8.8" height="8.8" className={styles.cell} />
  </svg>
);

const Logo = ({ href = "/" }) => (
  <Link to={href} viewTransition className={styles.logo} aria-label="BentoWeb – til forsiden">
    <LogoMark />
    <span className={styles.word}>BentoWeb</span>
  </Link>
);

export default Logo;
