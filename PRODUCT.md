# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Small and medium Norwegian businesses, across several situations:
- Businesses with no professional website yet.
- Businesses with an outdated, slow, or dated website they want to replace.
- Newly founded companies and solo founders who need their first website quickly.
- Businesses that need e-commerce functionality, not just an informational site.

## Product Purpose

BentoWeb builds modern, professional websites for small and medium Norwegian businesses that attract customers and build credibility. It exists to give business owners a fast, affordable path to a credible online presence, whether that's their first site, a replacement for an outdated one, or a store.

## Positioning

BentoWeb is solo-run: the customer works directly with the founder/developer throughout the project, with no account managers, sales layers, or team hand-offs. This personal, direct-access model is the primary differentiator against larger agencies in the same market (e.g. digispace.no, solidmedia.no), which is the competitive set this project has been benchmarking pricing and portfolio presentation against.

## Operating Context

- Site is in Norwegian Bokmål (`lang="nb"`), targeting the Norwegian SMB market; SEO priority is Oslo/Østlandet and all of Norway.
- Hosted on Vercel; prerendered to static HTML at build (`scripts/prerender.mjs`). Contact form sends via EmailJS.
- Pricing is presented publicly as three fixed tiers (one-time setup cost + optional monthly maintenance/support retainer), editable in `src/data/pricingPlans.js`.
- Lead generation runs through on-page CTAs ("Få et tilbud", "Start et prosjekt", "Kom i gang") rather than a self-serve checkout — sales happens through direct contact/consultation, consistent with the solo-agency model.
- Portfolio/past-work is shown as a wall of taped polaroid screenshots (`src/data/projects.js`, images in `public/projects/`).

## Capabilities and Constraints

- Three fixed pricing packages (revised 2026-09-28 after market research): Enkel Start (normal 13 000 kr), Standard + SEO (25 000 kr, most popular) and Nettbutikk (45 000 kr), each with optional monthly drift (350/600/800 kr). A launch price (10 000 / 20 000 / 35 000 kr; round numbers by owner preference) applies to the first 5 customers in exchange for portfolio rights and a short testimonial. Larger/custom projects are quoted individually. All prices live in `src/data/pricingPlans.js`; the rest of the site (hero, FAQ, SEO text, structured data) derives from it — set `salePrice: null` to end the launch offer.
- Portfolio (`src/data/projects.js`) currently renders clearly-marked "Skjermbilde kommer" placeholders; real screenshots replace them by dropping images into `public/projects/` and updating the data file.
- No checkout/payment flow, client portal, or account system exists — the product surface today is a marketing/landing site, not an app.

## Brand Commitments

- Name: BentoWeb.
- Voice (changed 2026-09-28): company voice — "vi" / BentoWeb, never "jeg". Direct, warm, small-business-friendly Norwegian, not corporate agency-speak. The founder is presented as grunnlegger and the customer's fixed contact person; never claim a team, employees or departments that don't exist.

## Evidence on Hand

- A few real client projects exist and can be used as portfolio proof, but they have not yet been added to the codebase — the portfolio currently shows placeholders until those screenshots are supplied.
- No testimonials, case studies, or press mentions are confirmed to exist yet; do not fabricate any.
- Pricing figures in `pricingPlans.js` are real, confirmed product decisions (not placeholders). Positioned below established agencies like digispace.no (15 000 / 25 000 / 80 000 kr) while the portfolio is being built.

## Product Principles

1. Every touchpoint should reinforce "én fast kontaktperson hele veien" — direct access to the person who builds the site is the reason a customer picks BentoWeb over a larger agency. Framed as a small, professional firm, not as "one person".
2. Pricing must stay transparent and fixed-tier — SMB customers unfamiliar with web project costs should never feel surprised by scope or price.
3. Serve the underserved moment: no-website, outdated-website, brand-new founder, or needs-a-store — each is a distinct trigger for reaching out, not a single generic pitch.
4. Portfolio proof must be real. Placeholder project cards are a temporary scaffold, not a finished state — replace them with actual client work as it becomes available rather than treating placeholders as acceptable long-term content.
