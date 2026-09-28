import React from "react";
import { Link } from "react-router";
import styles from "./Footer.module.css";
import Logo from "../Logo/Logo";
import Icon from "../Icon/Icon";
import { site, navLinks } from "../../data/site";

const Footer = () => {
  const { email, phone, orgNumber, city } = site.contact;
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <Logo />
          <p className={styles.tagline}>
            Moderne nettsider for små og mellomstore bedrifter
            {city ? ` — basert i ${city}, jobber i Oslo og hele Norge.` : " i Oslo og hele Norge."}
          </p>
        </div>

        <nav aria-label="Bunnmeny">
          <h2 className={styles.heading}>Snarveier</h2>
          <ul className={styles.list}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link to={link.href} viewTransition>
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/priser#sporsmal" viewTransition>
                Spørsmål og svar
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className={styles.heading}>Kontakt</h2>
          <ul className={styles.list}>
            <li>
              <Link to="/kontakt" viewTransition>
                Send en melding
              </Link>
            </li>
            {email && (
              <li>
                <a href={`mailto:${email}`} className={styles.contactLink}>
                  <Icon name="mail" size={18} className={styles.contactIcon} />
                  {email}
                </a>
              </li>
            )}
            {phone && (
              <li>
                <a href={`tel:${phone.replace(/\s/g, "")}`} className={styles.contactLink}>
                  <Icon name="phone" size={18} className={styles.contactIcon} />
                  <span className="visually-hidden">Telefon: </span>
                  {phone}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>
          © {year} {site.name}
          {orgNumber && <> · Org.nr. {orgNumber}</>}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
