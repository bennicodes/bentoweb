import React from "react";
import styles from "./Pricing.module.css";
import Button from "../Button/Button";
import { pricingPlans, pricingSectionContent, hasLaunchPrice } from "../../data/pricingPlans";

const formatPrice = (value) => value.toLocaleString("nb-NO");

const PricingCard = ({ plan, index }) => {
  const isOnSale = plan.salePrice != null && plan.salePrice < plan.price;
  const displayPrice = isOnSale ? plan.salePrice : plan.price;

  return (
    <li
      id={plan.id}
      className={`${styles.plan} ${plan.isPopular ? styles.popular : ""}`}
      data-reveal
      style={{ "--reveal-delay": `${index * 110}ms` }}
    >
      <p className={styles.badge}>{plan.badgeText}</p>
      <h3 className={styles.name}>{plan.name}</h3>
      <p className={styles.tagline}>{plan.tagline}</p>

      <p className={styles.priceBlock}>
        <span className={styles.priceLabel}>{plan.priceLabel}</span>
        {isOnSale && (
          <s className={styles.oldPrice}>
            <span className="visually-hidden">Før: </span>
            {formatPrice(plan.price)} kr
          </s>
        )}
        <span className={styles.price}>{formatPrice(displayPrice)}</span>
        <span className={styles.priceSuffix}>kr {plan.priceSuffix}</span>
      </p>
      {isOnSale && <p className={styles.saleLabel}>Lanseringspris</p>}

      {plan.maintenance && (
        <p className={styles.maintenance}>
          + {plan.maintenance.label.toLowerCase()} {formatPrice(plan.maintenance.price)} kr/
          {plan.maintenance.period}
        </p>
      )}

      <ul className={styles.features}>
        {plan.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>

      <Button
        href={`${plan.ctaLink}?pakke=${encodeURIComponent(plan.name)}`}
        variant={plan.isPopular ? "brass" : "outline-dark"}
        arrow
        block
        aria-label={`${plan.ctaText} med ${plan.name}`}
      >
        {plan.ctaText}
      </Button>
    </li>
  );
};

const Pricing = () => (
  <section id="priser" className="section section--light" aria-labelledby="priser-title">
    <div className="container">
      <header className="section-head" data-reveal>
        <h2 id="priser-title" className="section-title">
          {pricingSectionContent.title} {pricingSectionContent.accentText}.
        </h2>
        <p className="section-lede">{pricingSectionContent.description}</p>
      </header>

      {hasLaunchPrice() && pricingSectionContent.launchNote && (
        <p className={styles.launchNote} data-reveal>
          <strong>Lansering</strong>
          <span>{pricingSectionContent.launchNote}</span>
        </p>
      )}

      <ul className={styles.plans}>
        {pricingPlans.map((plan, i) => (
          <PricingCard key={plan.id} plan={plan} index={i} />
        ))}
      </ul>

      {pricingSectionContent.footnote && (
        <p className={styles.footnote}>{pricingSectionContent.footnote}</p>
      )}
    </div>
  </section>
);

export default Pricing;
