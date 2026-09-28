import React from "react";
import styles from "./ComingSoon.module.css";
import Logo, { LogoMark } from "../Logo/Logo";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import { site } from "../../data/site";

// "Lanseres snart" — shown in production until VITE_COMING_SOON=false.
// Same world as the full site: navy, brass light, Gloock headline.
const ComingSoon = () => {
  const { phone, email, city } = site.contact;
  const tel = phone ? `tel:+47${phone.replace(/\s/g, "")}` : null;

  return (
    <div className={styles.page}>
      <header className={`container ${styles.top}`}>
        <Logo />
        {tel && (
          <a href={tel} className={styles.topPhone} aria-label={`Ring ${phone}`}>
            <Icon name="phone" size={18} />
            <span>{phone}</span>
          </a>
        )}
      </header>

      <main className={`container ${styles.hero}`}>
        <div>
          <h1 className={styles.title}>
            <span className={styles.line}>
              <span>Nettsider bygget</span>
            </span>{" "}
            <span className={`${styles.line} ${styles.accentLine}`}>
              <span className="accent">for å bli valgt.</span>
            </span>
          </h1>

          <p className={styles.lede}>
            BentoWeb designer og bygger moderne nettsider og nettbutikker for små
            og mellomstore bedrifter i Oslo, på Østlandet og i hele Norge.
          </p>

          <p className={styles.status}>
            <span className={styles.dot} aria-hidden="true" />
            Den nye nettsiden vår lanseres snart
          </p>

          <div className={styles.ctas}>
            {tel && (
              <Button href={tel} arrow>
                Ring oss: {phone}
              </Button>
            )}
            {email && (
              <Button href={`mailto:${email}`} variant="ghost">
                {email}
              </Button>
            )}
          </div>

          <ul className={styles.facts}>
            <li>
              <strong>Fast pris</strong>Ingen overraskelser
            </li>
            <li>
              <strong>1 kontaktperson</strong>Hele veien
            </li>
            <li>
              <strong>Oslo og hele Norge</strong>
              {city ? `Basert i ${city}` : "Digitalt samarbeid"}
            </li>
          </ul>
        </div>

        <div className={styles.studio} aria-hidden="true">
          <span className={`${styles.light} ${styles.lightTop}`} />
          <span className={`${styles.light} ${styles.lightBottom}`} />
          <div className={styles.mark}>
            <LogoMark size="100%" />
          </div>
        </div>
      </main>

      <footer className={`container ${styles.bottom}`}>
        <p>© {new Date().getFullYear()} {site.name}</p>
        <p>Nettsider og nettbutikker for bedrifter</p>
      </footer>
    </div>
  );
};

export default ComingSoon;
