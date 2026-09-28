import React from "react";
import { Link } from "react-router";
import styles from "./CaseStudy.module.css";
import Icon from "../Icon/Icon";
import MoreLink from "../MoreLink/MoreLink";
import { projects } from "../../data/projects";

// The body of a /prosjekter/<id> page. Optional story fields only render
// when they're filled in, so a project never shows empty headings.
const CaseStudy = ({ project }) => {
  const index = projects.findIndex((p) => p.id === project.id);
  const next = projects.length > 1 ? projects[(index + 1) % projects.length] : null;
  const story = [
    ["Utgangspunktet", project.challenge],
    ["Løsningen", project.solution],
    ["Resultatet", project.result],
  ].filter(([, text]) => text);
  const desktopShots = (project.gallery ?? []).filter((g) => g.kind !== "mobile");
  const mobileShots = (project.gallery ?? []).filter((g) => g.kind === "mobile");

  return (
    <section className="section" aria-label={`Om prosjektet ${project.name}`}>
      <div className="container">
        {/* ---------- Main shot + facts ---------- */}
        <div className={styles.overview}>
          <figure className={styles.mainShot} data-reveal>
            <img
              src={project.image}
              alt={`Skjermbilde av nettsiden til ${project.name}`}
              width="1600"
              height="1000"
              fetchPriority="high"
              decoding="async"
            />
          </figure>

          <aside className={styles.facts} data-reveal style={{ "--reveal-delay": "120ms" }}>
            <dl>
              {project.industry && (
                <div>
                  <dt>Bransje</dt>
                  <dd>{project.industry}</dd>
                </div>
              )}
              {project.location && (
                <div>
                  <dt>Sted</dt>
                  <dd>{project.location}</dd>
                </div>
              )}
            </dl>

            {project.delivered?.length > 0 && (
              <>
                <h2 className={styles.factsTitle}>Hva vi leverte</h2>
                <ul className={styles.delivered}>
                  {project.delivered.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </>
            )}

            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.visit}
              >
                Besøk nettsiden
                <Icon name="arrowRight" size={18} />
                <span className="visually-hidden"> (åpnes i ny fane)</span>
              </a>
            )}
          </aside>
        </div>

        {/* ---------- Optional story ---------- */}
        {story.length > 0 && (
          <div className={styles.story}>
            {story.map(([title, text], i) => (
              <div key={title} data-reveal style={{ "--reveal-delay": `${i * 110}ms` }}>
                <h2>{title}</h2>
                <p>{text}</p>
              </div>
            ))}
          </div>
        )}

        {project.quote?.text && (
          <blockquote className={styles.quote} data-reveal>
            <p>«{project.quote.text}»</p>
            {project.quote.author && <cite>— {project.quote.author}</cite>}
          </blockquote>
        )}

        {/* ---------- Gallery ---------- */}
        {(desktopShots.length > 0 || mobileShots.length > 0) && (
          <div className={styles.gallery}>
            {desktopShots.map((shot) => (
              <figure key={shot.src} className={styles.desktop} data-reveal>
                <img src={shot.src} alt={shot.alt} width="1600" height="1000" loading="lazy" decoding="async" />
                <figcaption>{shot.alt}</figcaption>
              </figure>
            ))}
            {mobileShots.map((shot) => (
              <figure key={shot.src} className={styles.mobile} data-reveal style={{ "--reveal-delay": "120ms" }}>
                <img src={shot.src} alt={shot.alt} width="780" height="1688" loading="lazy" decoding="async" />
                <figcaption>{shot.alt}</figcaption>
              </figure>
            ))}
          </div>
        )}

        {/* ---------- Next project ---------- */}
        <nav className={styles.pager} aria-label="Flere prosjekter">
          <MoreLink to="/prosjekter">Alle prosjekter</MoreLink>
          {next && next.id !== project.id && (
            <Link to={`/prosjekter/${next.id}`} viewTransition className={styles.next}>
              <span>Neste prosjekt</span>
              <strong>
                {next.name}
                <Icon name="arrowRight" size={22} />
              </strong>
            </Link>
          )}
        </nav>
      </div>
    </section>
  );
};

export default CaseStudy;
