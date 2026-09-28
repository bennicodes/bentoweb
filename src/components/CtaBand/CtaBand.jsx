import React from "react";
import styles from "./CtaBand.module.css";
import Button from "../Button/Button";

// Closing call to action at the bottom of each page.
const CtaBand = ({
  title = "Klar for en nettside som blir valgt?",
  text = "Fortell kort om bedriften din, så tar vi en uforpliktende prat. Du får et personlig svar.",
}) => (
  <section className={styles.band} aria-labelledby="cta-title">
    <div className={`container ${styles.inner}`} data-reveal>
      <h2 id="cta-title" className={styles.title}>
        {title}
      </h2>
      <div className={styles.side}>
        <p>{text}</p>
        <Button href="/kontakt" arrow>
          Få et tilbud
        </Button>
      </div>
    </div>
  </section>
);

export default CtaBand;
