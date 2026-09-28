import React from "react";
import styles from "./About.module.css";
import Portrait from "../Portrait/Portrait";
import MoreLink from "../MoreLink/MoreLink";
import { site } from "../../data/site";
import { workPrinciples } from "../../data/content";

// `teaser` = homepage version with a link to /om-oss; otherwise the full page body.
// Company voice ("vi"); the founder is presented as the fixed contact person.
const About = ({ teaser = false }) => {
  const { founder } = site;
  return (
    <section id="om-oss" className="section" aria-labelledby="om-oss-title">
      <div className={`container ${styles.layout}`}>
        <div data-reveal>
          <Portrait
            photo={founder.photo}
            name={founder.name}
            role={founder.role}
            showName={false}
            className={styles.portrait}
          />
        </div>

        <div className={styles.copy} data-reveal style={{ "--reveal-delay": "120ms" }}>
          <h2 id="om-oss-title" className="section-title">
            {teaser ? "Et lite byrå med kort vei til deg." : "Kort vei fra idé til ferdig side."}
          </h2>
          <p className={styles.lead}>
            BentoWeb er et lite webbyrå. Du får én fast kontaktperson fra første
            prat til lansering — den samme som designer og bygger nettsiden din.
          </p>
          {teaser ? (
            <MoreLink to="/om-oss">Mer om oss</MoreLink>
          ) : (
            <>
              <p>
                Ingen selgere, ingen prosjektledere og ingen overleveringer mellom
                avdelinger. Bare faste, oversiktlige priser og en nettside bygget
                for akkurat din bedrift.
              </p>
              <p>
                Vi holder til i {site.contact.city || "Norge"} og jobber med små og
                mellomstore bedrifter i Oslo, på Østlandet og i resten av Norge.
              </p>
              <p className={styles.sign}>
                {founder.name}
                <span>{founder.role} — din kontaktperson</span>
              </p>
            </>
          )}
        </div>
      </div>

      {!teaser && (
        <div className={`container ${styles.principles}`}>
          <h2 className={styles.principlesTitle} data-reveal>
            Slik jobber vi
          </h2>
          <ul className={styles.principleList}>
            {workPrinciples.map((p, i) => (
              <li key={p.title} data-reveal style={{ "--reveal-delay": `${i * 110}ms` }}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default About;
