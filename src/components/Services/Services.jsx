import React from "react";
import { Link } from "react-router";
import styles from "./Services.module.css";
import Icon from "../Icon/Icon";
import MoreLink from "../MoreLink/MoreLink";
import { situations, alwaysIncluded } from "../../data/content";

// `full` = the /tjenester page (details per situation); otherwise a homepage teaser.
const Services = ({ full = false }) => (
  <section id="tjenester" className="section section--light" aria-labelledby="tjenester-title">
    <div className="container">
      <header className="section-head" data-reveal>
        <h2 id="tjenester-title" className="section-title">
          Uansett hvor bedriften din står i dag.
        </h2>
        <p className="section-lede">
          Fire vanlige utgangspunkt. Én fast kontaktperson hele veien, og en fast
          pris før vi starter.
        </p>
      </header>

      <ol className={styles.rows}>
        {situations.map((s, i) => (
          <li
            key={s.id}
            id={full ? s.id : undefined}
            className={`${styles.row} ${full ? styles.rowFull : ""}`}
            data-reveal
            style={{ "--reveal-delay": `${i * 90}ms` }}
          >
            <span className={styles.n} aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className={styles.title}>{s.title}</h3>
            <div className={styles.body}>
              <p className={styles.text}>{s.text}</p>
              {full && (
                <>
                  <ul className={styles.points}>
                    {s.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <p className={styles.plan}>
                    Passer best: <strong>{s.plan}</strong>
                  </p>
                </>
              )}
            </div>
            <Link
              to={full ? "/kontakt" : `/tjenester#${s.id}`}
              viewTransition
              className={styles.go}
              aria-label={full ? `Få et tilbud: ${s.title}` : `Les mer: ${s.title}`}
            >
              <Icon name="arrowRight" size={22} />
            </Link>
          </li>
        ))}
      </ol>

      {full ? (
        <ul className={styles.always} data-reveal>
          {alwaysIncluded.map((item) => (
            <li key={item}>
              <Icon name="check" size={18} className={styles.check} />
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.more}>
          <MoreLink to="/tjenester" tone="light">
            Se alle tjenester
          </MoreLink>
        </div>
      )}
    </div>
  </section>
);

export default Services;
