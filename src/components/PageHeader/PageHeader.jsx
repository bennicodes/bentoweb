import React from "react";
import { Link } from "react-router";
import Icon from "../Icon/Icon";
import styles from "./PageHeader.module.css";

// Top of every subpage: the page's single h1 and a short lede.
// `back` = optional { to, label } link shown above the title (e.g. on case pages).
const PageHeader = ({ title, accent, lede, back }) => (
  <header className={styles.header}>
    <div className={`container ${styles.inner}`}>
      {back && (
        <Link to={back.to} viewTransition className={styles.back}>
          <Icon name="arrowLeft" size={18} className={styles.backIcon} />
          {back.label}
        </Link>
      )}
      <h1 className={styles.title}>
        <span className={styles.line}>
          <span>{title}</span>
        </span>
        {accent && (
          <>
            {" "}
            <span className={`${styles.line} ${styles.lineAccent}`}>
              <span className="accent">{accent}</span>
            </span>
          </>
        )}
      </h1>
      {lede && <p className={styles.lede}>{lede}</p>}
    </div>
    <span className={styles.light} aria-hidden="true" />
  </header>
);

export default PageHeader;
