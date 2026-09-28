import React from "react";
import styles from "./Process.module.css";
import { processSteps } from "../../data/content";

const Process = () => (
  <section id="prosess" className={`section ${styles.section}`} aria-labelledby="prosess-title">
    <div className="container">
      <header className="section-head" data-reveal>
        <h2 id="prosess-title" className="section-title">
          Fra første prat til ferdig nettside.
        </h2>
        <p className="section-lede">
          Fire steg, én fast kontaktperson. Du vet alltid hva som skjer, og hvem du skal
          snakke med.
        </p>
      </header>

      <ol className={styles.steps} data-reveal>
        {processSteps.map((step, i) => (
          <li key={step.id} className={styles.step} style={{ "--i": i }}>
            <span className={styles.dot} aria-hidden="true" />
            <span className={styles.n}>Steg {i + 1}</span>
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.text}>{step.text}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Process;
