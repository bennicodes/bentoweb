import React from "react";
import { Link } from "react-router";
import styles from "./Button.module.css";
import Icon from "../Icon/Icon";

const Button = ({
  children,
  href,
  variant = "brass", // 'brass' | 'ghost' | 'outline-dark'
  size = "md", // 'md' | 'sm'
  arrow = false,
  block = false,
  className = "",
  type = "button",
  ...rest
}) => {
  const classes = [styles.button, styles[variant], styles[size], block && styles.block, className]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <span>{children}</span>
      {arrow && <Icon name="arrowRight" size={18} className={styles.arrow} />}
    </>
  );

  // Internal paths go through the router (smooth page transition, no reload).
  if (href?.startsWith("/")) {
    return (
      <Link to={href} viewTransition className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  return href ? (
    <a href={href} className={classes} {...rest}>
      {content}
    </a>
  ) : (
    <button type={type} className={classes} {...rest}>
      {content}
    </button>
  );
};

export default Button;
