// Tekstinnhold for seksjonene. Endre fritt — komponentene leser herfra.
// FAQ-en brukes også til strukturerte data (FAQPage) for Google.
// Priser hentes fra pricingPlans.js, så de aldri kommer i utakt.

import { pricingPlans, currentPrice, formatKr, lowestMaintenance } from "./pricingPlans.js";

const priceList = pricingPlans
  .map((p) => `${p.name} fra ${formatKr(currentPrice(p))}`)
  .join(", ")
  .replace(/, ([^,]*)$/, " og $1");

export const situations = [
  {
    id: "ingen-nettside",
    icon: "blank",
    color: "yellow",
    title: "Ingen nettside ennå",
    text: "Kundene googler deg før de ringer. Vi lager en profesjonell side som gjør at de finner deg — og tar kontakt.",
    plan: "Enkel Start eller Standard + SEO",
    points: [
      "Profesjonelt design tilpasset mobil, nettbrett og PC",
      "Kontaktskjema rett til innboksen din",
      "SEO-oppsett så bedriften dukker opp på Google",
    ],
  },
  {
    id: "utdatert",
    icon: "refresh",
    color: "pink",
    title: "Nettsiden er utdatert",
    text: "Treg, gammeldags eller vanskelig på mobil? Vi bygger den på nytt: rask, moderne og enkel å bruke.",
    plan: "Standard + SEO",
    points: [
      "Nytt, skreddersydd design",
      "Opptil 15 undersider",
      "Avansert SEO-oppsett",
    ],
  },
  {
    id: "nystartet",
    icon: "rocket",
    color: "teal",
    title: "Nystartet bedrift",
    text: "Se etablert ut fra dag én. Enkel Start leveres innen 1–2 uker, så du kan fokusere på kundene.",
    plan: "Enkel Start",
    points: [
      "Ettsides nettside (one-pager)",
      "Levering innen 1–2 uker",
      "Grunnleggende SEO-oppsett",
    ],
  },
  {
    id: "nettbutikk",
    icon: "bag",
    color: "white",
    title: "Trenger nettbutikk",
    text: "Selg varene dine på nett med en butikk som er enkel å drifte — med betaling og integrasjoner når du trenger det.",
    plan: "Nettbutikk",
    points: [
      "Opptil 100 produkter",
      "Betaling med kort og Vipps",
      "Opplæring så du kan drifte butikken selv",
    ],
  },
];

export const alwaysIncluded = [
  "Design tilpasset mobil, nettbrett og PC",
  "SEO-oppsett så Google finner deg",
  "Kontaktskjema rett til innboksen din",
  "Én fast kontaktperson hele veien",
];

export const processSteps = [
  {
    id: "prat",
    title: "Vi tar en prat",
    text: "Du forteller om bedriften og hva du trenger. Uforpliktende, og på vanlig norsk.",
  },
  {
    id: "skisse",
    title: "Skisse og fast pris",
    text: "Du får en skisse av siden og et fast tilbud. Ingen overraskelser på fakturaen.",
  },
  {
    id: "bygg",
    title: "Vi bygger",
    text: "Du følger med underveis og gir innspill direkte til den som bygger siden — ikke via en prosjektleder.",
  },
  {
    id: "lansering",
    title: "Lansering",
    text: "Siden går live. Velger du drift og support, er vi fortsatt bare en e-post unna.",
  },
];

export const faq = [
  {
    q: "Hva koster en nettside?",
    a: `${priceList} (alle eks. mva). Større prosjekter får et fast tilbud. Du vet alltid hva det koster før vi starter.`,
  },
  {
    q: "Hvor lang tid tar det å lage en nettside?",
    a: "En enkel one-pager leveres innen 1–2 uker. Større prosjekter avhenger av omfanget, og du får en tidsplan sammen med tilbudet.",
  },
  {
    q: "Hvem jobber jeg med?",
    a: "Du har én fast kontaktperson hos BentoWeb fra første prat til lansering — den samme som designer og bygger nettsiden din. Ingen selgere eller mellomledd.",
  },
  {
    q: "Må jeg betale for drift og support?",
    a: `Nei, drift og support er valgfritt. Velger du det, betaler du en fast månedspris fra ${lowestMaintenance()}: hosting, sikkerhetsoppdateringer, sikkerhetskopi og små endringer når du trenger det.`,
  },
  {
    q: "Kan dere lage nettbutikk?",
    a: "Ja. Nettbutikk-pakken gir deg opptil 100 produkter med kort- og Vipps-betaling, frakt og opplæring. Trenger du mer, får du et fast tilbud.",
  },
  {
    q: "Jobber dere bare med bedrifter i Oslo?",
    a: "Nei. Vi jobber med bedrifter i Oslo, på Østlandet og i resten av Norge. Det meste av samarbeidet kan gjøres digitalt.",
  },
];

// "Slik jobber vi" på Om oss-siden.
export const workPrinciples = [
  {
    title: "Direkte kontakt",
    text: "Du har én fast kontaktperson — den samme som bygger siden din — fra første prat til lansering og videre. Ingen kø, ingen mellomledd.",
  },
  {
    title: "Faste priser",
    text: "Du vet hva det koster før vi starter. Pakkene har fast pris, og drift og support er valgfritt.",
  },
  {
    title: "Ekte arbeid",
    text: "Hver side bygges fra bunnen av og tilpasses bedriften din. Ingen ferdigmaler med byttet logo.",
  },
];
