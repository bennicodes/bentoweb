import React from "react";
import styles from "./Portrait.module.css";

// Founder portrait in a dark "studio" frame with brass backlight lines.
// Until site.founder.photo is set, a lit silhouette stands in, clearly marked.
const Portrait = ({ photo, name, role, showName = true, priority = false, intro = false, className = "" }) => (
  <figure className={[styles.frame, intro && styles.intro, className].filter(Boolean).join(" ")}>
    <span className={`${styles.light} ${styles.lightTop}`} aria-hidden="true" />
    <span className={`${styles.light} ${styles.lightBottom}`} aria-hidden="true" />

    {photo ? (
      <img
        src={photo}
        alt={`${name}, ${role.toLowerCase()} i BentoWeb`}
        className={styles.photo}
        width="1200"
        height="1500"
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding="async"
      />
    ) : (
      <>
        <svg viewBox="0 0 400 460" className={styles.silhouette} aria-hidden="true" focusable="false">
          <defs>
            <linearGradient id="portrett-rim" x1="1" x2="0">
              <stop offset="0" stopColor="var(--color-brass-hi)" />
              <stop offset="0.45" stopColor="var(--color-brass)" stopOpacity="0.15" />
              <stop offset="1" stopColor="var(--color-brass)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            className={styles.body}
            d="M200 40c52 0 88 42 88 98 0 44-20 80-50 94v22c70 14 132 50 150 206H12C30 304 92 268 162 254v-22c-30-14-50-50-50-94 0-56 36-98 88-98z"
          />
          <path
            className={styles.rim}
            d="M200 40c52 0 88 42 88 98 0 44-20 80-50 94v22c70 14 132 50 150 206"
          />
        </svg>
        <figcaption className={styles.pending}>
          Portrett kommer
          <small>Mørk bakgrunn, sidelys, mørke klær</small>
        </figcaption>
      </>
    )}

    {showName && (
      <p className={styles.name}>
        <strong>{name}</strong>
        {role}
      </p>
    )}
  </figure>
);

export default Portrait;
