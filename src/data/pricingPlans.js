// Innhold for prisseksjonen. Endre priser, tekst og innhold her —
// resten av siden (hero, FAQ, SEO-tekster, tjenestesiden) leser prisene herfra.
//
// Lanseringspris: sett `salePrice` til et tall for å vise tilbud (normalprisen
// vises overstreket). Sett `salePrice: null` når tilbudet er over.

export const pricingSectionContent = {
  title: "Velg pakken som passer",
  accentText: "din bedrift",
  description:
    "Faste priser, ingen overraskelser. Alle pakker inkluderer design, utvikling og lansering — du velger omfanget.",
  // Vises over pakkene når minst én pakke har lanseringspris.
  launchNote:
    "Lanseringspris for de 5 første kundene — mot at vi får vise frem nettsiden og en kort anbefaling fra deg.",
  footnote:
    "Alle priser er eks. mva. Større eller skreddersydd prosjekt, med integrasjoner eller flere språk? Da får du et fast tilbud etter en uforpliktende prat.",
};

export const pricingPlans = [
  {
    id: "enkel-start",
    name: "Enkel Start",
    tagline: "For deg som trenger en enkel og profesjonell nettside raskt.",
    price: 13000,
    salePrice: 10000,
    priceLabel: "Fra",
    priceSuffix: "eks. mva",
    maintenance: {
      price: 350,
      period: "mnd",
      label: "Drift og support fra",
    },
    isPopular: false,
    badgeText: null,
    features: [
      "Ettsides nettside (one-pager)",
      "Responsivt design (mobil, nettbrett, PC)",
      "Kontaktskjema",
      "Grunnleggende SEO-oppsett",
      "Levering innen 1–2 uker",
    ],
    ctaText: "Kom i gang",
    ctaLink: "/kontakt",
  },
  {
    id: "standard-seo",
    name: "Standard + SEO",
    tagline: "Den mest populære pakken for små og mellomstore bedrifter.",
    price: 25000,
    salePrice: 20000,
    priceLabel: "Fra",
    priceSuffix: "eks. mva",
    maintenance: {
      price: 600,
      period: "mnd",
      label: "Drift og support fra",
    },
    isPopular: true,
    badgeText: "Mest populær",
    features: [
      "Opptil 8 undersider",
      "Skreddersydd responsivt design",
      "Kontaktskjema med e-postvarsling",
      "SEO for lokale søk (f.eks. «rørlegger Oslo»)",
      "Oppsett av Google-bedriftsprofil",
      "Levering innen 2–4 uker",
    ],
    ctaText: "Kom i gang",
    ctaLink: "/kontakt",
  },
  {
    id: "nettbutikk",
    name: "Nettbutikk",
    tagline: "For deg som vil selge varer eller tjenester på nett.",
    price: 45000,
    salePrice: 35000,
    priceLabel: "Fra",
    priceSuffix: "eks. mva",
    maintenance: {
      price: 800,
      period: "mnd",
      label: "Drift og support fra",
    },
    isPopular: false,
    badgeText: null,
    features: [
      "Nettbutikk med opptil 100 produkter",
      "Betaling med kort og Vipps",
      "Frakt- og lageroppsett",
      "SEO for produkter og kategorier",
      "Opplæring så du kan drifte butikken selv",
    ],
    ctaText: "Kom i gang",
    ctaLink: "/kontakt",
  },
];

// ---------- Helpers — the rest of the site reads prices through these ----------

export const formatKr = (value) => `${value.toLocaleString("nb-NO")} kr`;

/** The price a customer pays today (launch price if active). */
export const currentPrice = (plan) =>
  plan.salePrice != null && plan.salePrice < plan.price ? plan.salePrice : plan.price;

export const planById = (id) => pricingPlans.find((p) => p.id === id);

/** Lowest entry price across all packages, e.g. "9 900 kr". */
export const lowestPrice = () => formatKr(Math.min(...pricingPlans.map(currentPrice)));

/** Lowest monthly drift price, e.g. "349 kr". */
export const lowestMaintenance = () =>
  formatKr(Math.min(...pricingPlans.map((p) => p.maintenance?.price ?? Infinity)));

export const hasLaunchPrice = () => pricingPlans.some((p) => currentPrice(p) < p.price);
