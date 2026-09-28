import React from "react";
import { Link } from "react-router";
import styles from "./PricingTeaser.module.css";
import Icon from "../Icon/Icon";
import MoreLink from "../MoreLink/MoreLink";
import { pricingPlans, currentPrice } from "../../data/pricingPlans";

const formatPrice = (value) => value.toLocaleString("nb-NO");

// Homepage summary of the three packages; the full comparison lives on /priser.
const PricingTeaser = () => (
  <section id="priser" className="section section--light" aria-labelledby="priser-title">
    <div className="container">
      <header className="section-head" data-reveal>
        <h2 id="priser-title" className="section-title">
          Faste priser. Ingen overraskelser.
        </h2>
        <p className="section-lede">
          Tre pakker med fast pris. Du vet hva det koster før vi starter.
        </p>
      </header>

      <ul className={styles.list}>
        {pricingPlans.map((plan, i) => (
          <li key={plan.id} data-reveal style={{ "--reveal-delay": `${i * 90}ms` }}>
            <Link to={`/priser#${plan.id}`} viewTransition className={`${styles.item} ${plan.isPopular ? styles.popular : ""}`}>
              <span className={styles.name}>
                {plan.name}
                {plan.badgeText && <em>{plan.badgeText}</em>}
              </span>
              <span className={styles.tagline}>{plan.tagline}</span>
              <span className={styles.price}>
                <small>{plan.priceLabel}</small> {formatPrice(currentPrice(plan))} kr
                {currentPrice(plan) < plan.price && (
                  <s className={styles.oldPrice}>
                    <span className="visually-hidden">Normalpris: </span>
                    {formatPrice(plan.price)} kr
                  </s>
                )}
              </span>
              <Icon name="arrowRight" size={22} className={styles.go} />
            </Link>
          </li>
        ))}
      </ul>

      <div className={styles.more}>
        <MoreLink to="/priser" tone="light">
          Se hva som er inkludert
        </MoreLink>
      </div>
    </div>
  </section>
);

export default PricingTeaser;
