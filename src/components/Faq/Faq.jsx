import React from "react";
import styles from "./Faq.module.css";
import Icon from "../Icon/Icon";
import { faq } from "../../data/content";

const Faq = () => (
  <section id="sporsmal" className="section section--light" aria-labelledby="sporsmal-title">
    <div className={`container ${styles.layout}`}>
      <header className={styles.head} data-reveal>
        <h2 id="sporsmal-title" className="section-title">
          Spørsmål og svar.
        </h2>
        <p className={styles.lede}>
          Finner du ikke svaret? Send oss en melding, så svarer vi deg personlig.
        </p>
      </header>

      <div className={styles.list} data-reveal>
        {faq.map((item, i) => (
          <details key={item.q} className={styles.item} name="faq" open={i === 0}>
            <summary className={styles.question}>
              <span>{item.q}</span>
              <Icon name="plus" size={20} className={styles.icon} />
            </summary>
            <p className={styles.answer}>{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default Faq;
