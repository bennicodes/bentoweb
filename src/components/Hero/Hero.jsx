import React from "react";
import styles from "./Hero.module.css";
import Button from "../Button/Button";
import Portrait from "../Portrait/Portrait";
import { site } from "../../data/site";
import { lowestPrice } from "../../data/pricingPlans";

const Hero = () => (
  <section className={styles.hero} aria-labelledby="hero-title">
    <div className={styles.inner}>
      <div className={styles.copy}>
        <h1 id="hero-title" className={styles.title}>
          <span className={styles.line}>
            <span>Nettsider bygget</span>
          </span>{" "}
          <span className={`${styles.line} ${styles.lineAccent}`}>
            <span className="accent">for å bli valgt.</span>
          </span>
        </h1>

        <p className={styles.lede}>
          Vi designer og bygger moderne nettsider og nettbutikker for små og
          mellomstore bedrifter i Oslo, på Østlandet og i resten av Norge. Du
          har én fast kontaktperson — fra første prat til lansering.
        </p>

        <div className={styles.ctas}>
          <Button href="/kontakt" arrow>
            Få et tilbud
          </Button>
          <Button href="/priser" variant="ghost">
            Se prisene
          </Button>
        </div>

        <dl className={styles.proof}>
          <div>
            <dt>Fast pris fra, eks. mva</dt>
            <dd>{lowestPrice()}</dd>
          </div>
          <div>
            <dt>Levering, Enkel Start</dt>
            <dd>1–2 uker</dd>
          </div>
          <div>
            <dt>Hele veien, ingen mellomledd</dt>
            <dd>1 kontaktperson</dd>
          </div>
        </dl>
      </div>

      <Portrait
        photo={site.founder.photo}
        name={site.founder.name}
        role={site.founder.role}
        priority
        intro
        className={styles.portrait}
      />
    </div>
  </section>
);

export default Hero;
