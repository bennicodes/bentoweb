import React from "react";
import { Link } from "react-router";
import styles from "./MoreLink.module.css";
import Icon from "../Icon/Icon";

// "Les mer →" link from a homepage teaser to its full subpage.
const MoreLink = ({ to, children, tone = "dark" }) => (
  <Link to={to} viewTransition className={`${styles.link} ${styles[tone]}`}>
    <span>{children}</span>
    <Icon name="arrowRight" size={18} className={styles.arrow} />
  </Link>
);

export default MoreLink;
