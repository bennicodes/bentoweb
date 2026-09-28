// Sidene på nettstedet. Hver side får egen adresse, tittel og beskrivelse
// (brukes i <title>, meta-beskrivelse, delingskort og sitemap ved bygging).
// Tittel ≤ 60 tegn, beskrivelse ≈ 140–160 tegn.

import { site } from "./site.js";
import { pricingPlans, currentPrice, formatKr, lowestPrice } from "./pricingPlans.js";
import { projects } from "./projects.js";

const planList = pricingPlans
  .map((p) => `${p.name} fra ${formatKr(currentPrice(p))}`)
  .join(", ")
  .replace(/, ([^,]*)$/, " og $1");

export const pages = [
  {
    path: "/",
    title: site.title,
    description: site.description,
  },
  {
    path: "/tjenester",
    name: "Tjenester",
    title: "Nettside og nettbutikk for bedrifter | BentoWeb",
    description:
      "Ny nettside, fornyet nettside eller nettbutikk — laget for små og mellomstore bedrifter i Oslo, på Østlandet og i hele Norge. Én fast kontaktperson hele veien.",
  },
  {
    path: "/prosjekter",
    name: "Prosjekter",
    title: "Prosjekter – nettsider vi har laget | BentoWeb",
    description:
      "Se nettsider BentoWeb har laget for norske bedrifter. Hver side er bygget fra bunnen av og tilpasset kundene til bedriften — ingen ferdigmaler.",
  },
  {
    path: "/priser",
    name: "Priser",
    title: `Pris på nettside – fast pris fra ${lowestPrice()} | BentoWeb`,
    description: `Hva koster en nettside? Tre pakker med faste priser: ${planList} (eks. mva). Du vet hva det koster før vi starter.`,
  },
  {
    path: "/om-oss",
    name: "Om oss",
    title: "Om oss – nettsider for små bedrifter | BentoWeb",
    description:
      "BentoWeb er et lite webbyrå med kort vei fra idé til ferdig side. Du har én fast kontaktperson fra første prat til lansering — ingen selgere eller mellomledd.",
  },
  {
    path: "/kontakt",
    name: "Kontakt",
    title: "Kontakt – få et tilbud på nettside | BentoWeb",
    description:
      "Fortell kort om bedriften din og hva du trenger, så får du et personlig svar. Uforpliktende prat, skisse og fast pris før vi starter.",
  },
];

// One case page per project (/prosjekter/<id>), generated from projects.js.
pages.push(
  ...projects.map((p) => ({
    path: `/prosjekter/${p.id}`,
    name: p.name,
    parent: { path: "/prosjekter", name: "Prosjekter" },
    title: `${p.name} – ${p.type} | BentoWeb`,
    description: p.summary,
    image: p.image,
  })),
);

export const pageByPath = (path) =>
  pages.find((p) => p.path === path) ?? {
    path,
    title: "Fant ikke siden | BentoWeb",
    description: site.description,
    notFound: true,
  };
