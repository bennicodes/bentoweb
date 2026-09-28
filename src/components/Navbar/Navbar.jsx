import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import { navLinks } from "../../data/site";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.documentElement.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles.inner} aria-label="Hovedmeny">
        <Logo />

        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <NavLink
                to={link.href}
                // Exact match only for Hjem; sections stay active on their subpages.
                end={link.href === "/"}
                viewTransition
                className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <Button href="/kontakt" size="sm" className={styles.cta}>
            Få et tilbud
          </Button>
          <button
            ref={toggleRef}
            type="button"
            className={styles.toggle}
            aria-expanded={open}
            aria-controls="mobilmeny"
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} size={22} />
            <span className="visually-hidden">{open ? "Lukk meny" : "Åpne meny"}</span>
          </button>
        </div>
      </nav>

      <button
        type="button"
        className={styles.scrim}
        hidden={!open}
        tabIndex={-1}
        aria-hidden="true"
        onClick={close}
      />
      <div id="mobilmeny" className={`${styles.sheet} ${open ? styles.sheetOpen : ""}`} hidden={!open}>
        <ul className={styles.sheetLinks}>
          {navLinks.map((link, i) => (
            <li key={link.href} style={{ "--i": i }}>
              <NavLink to={link.href} end={link.href === "/"} viewTransition onClick={close}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <Button href="/kontakt" arrow onClick={close}>
          Få et tilbud
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
