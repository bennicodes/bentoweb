import React, { useState } from "react";
import { Link } from "react-router";
import styles from "./Projects.module.css";
import Icon from "../Icon/Icon";
import MoreLink from "../MoreLink/MoreLink";
import { projects, featuredProjects } from "../../data/projects";

// From this many projects, the homepage shows a slow auto-scrolling band
// instead of a static grid.
const MARQUEE_FROM = 4;

// Each card opens the project's own case page (/prosjekter/<id>).
const ProjectCard = ({ project, hidden = false }) => {
  return (
    <Link
      to={`/prosjekter/${project.id}`}
      viewTransition
      className={styles.card}
      // Duplicate cards in the marquee are decoration only.
      aria-hidden={hidden || undefined}
      tabIndex={hidden ? -1 : undefined}
    >
      <div className={styles.frame}>
        {project.image ? (
          <img
            src={project.image}
            alt={hidden ? "" : `Skjermbilde av nettsiden til ${project.name}`}
            width="1600"
            height="1000"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <span className={styles.pending}>Skjermbilde kommer</span>
        )}
      </div>
      <div className={styles.caption}>
        <span>
          <strong>{project.name}</strong>
          {project.type}
        </span>
        <Icon name="arrowRight" size={20} className={styles.go} />
      </div>
    </Link>
  );
};

const Marquee = ({ items }) => {
  const [paused, setPaused] = useState(false);
  // Roughly 7 seconds per project keeps the band calm and readable.
  const duration = `${items.length * 7}s`;

  return (
    <div className={styles.marquee} data-paused={paused || undefined}>
      <div className={styles.track} style={{ "--marquee-duration": duration }}>
        {[...items, ...items].map((project, i) => (
          <div key={`${project.id}-${i}`} className={styles.slide}>
            <ProjectCard project={project} hidden={i >= items.length} />
          </div>
        ))}
      </div>
      <button
        type="button"
        className={styles.pause}
        onClick={() => setPaused((p) => !p)}
        aria-pressed={paused}
      >
        {paused ? "Spill av" : "Pause"}
        <span className="visually-hidden"> rullering av prosjekter</span>
      </button>
    </div>
  );
};

// `teaser` = homepage: only featured projects, under "Utvalgt arbeid".
// Otherwise (the /prosjekter page): every project in an even grid, so no single
// project draws the eye. That page's PageHeader already carries the h1.
const Projects = ({ teaser = false }) => {
  const items = teaser ? featuredProjects() : projects;
  const useMarquee = teaser && items.length >= MARQUEE_FROM;

  return (
    <section
      id="prosjekter"
      className="section"
      aria-labelledby={teaser ? "prosjekter-title" : undefined}
      aria-label={teaser ? undefined : "Alle prosjekter"}
    >
      <div className="container">
        {teaser && (
          <header className="section-head" data-reveal>
            <h2 id="prosjekter-title" className="section-title">
              Utvalgt arbeid.
            </h2>
            <p className="section-lede">
              Ekte bedrifter, ingen maler. Hver side er bygget fra bunnen av og
              tilpasset kundene til bedriften.
            </p>
          </header>
        )}

        {useMarquee ? (
          <div data-reveal>
            <Marquee items={items} />
          </div>
        ) : (
          <ul className={styles.grid}>
            {items.map((project, i) => (
              <li key={project.id} data-reveal style={{ "--reveal-delay": `${(i % 3) * 110}ms` }}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        )}

        {teaser && (
          <div className={styles.more}>
            <MoreLink to="/prosjekter">Se alle prosjekter</MoreLink>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
