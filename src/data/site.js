// Felles fakta om BentoWeb. Brukes av sidene OG av SEO (meta-tagger,
// strukturerte data, sitemap) ved bygging — endre her, ikke i index.html.
//
// ⚠️ Felter merket TODO må fylles ut før lansering.

import { lowestPrice } from "./pricingPlans.js";

export const site = {
  name: "BentoWeb",
  // TODO: bekreft endelig domene (brukes i canonical, sitemap og delingsbilder).
  url: "https://bentoweb.no",
  locale: "nb_NO",

  // SEO — tittel ≤ 60 tegn, beskrivelse ≈ 150–160 tegn.
  title: "Nettsider for bedrifter i Oslo og hele Norge | BentoWeb",
  description:
    `BentoWeb lager moderne, raske nettsider og nettbutikker for små og mellomstore bedrifter i Oslo, på Østlandet og i hele Norge. Faste priser fra ${lowestPrice()}.`,

  founder: {
    name: "Benedict Notoane",
    firstName: "Benedict",
    role: "Grunnlegger og utvikler",
    // TODO: legg portrettet i public/images/grunnlegger.jpg (se liste i README).
    photo: null,
  },

  contact: {
    // TODO: fyll inn. Tomme felt skjules automatisk på siden og i SEO-data.
    email: "",
    phone: "404 60 571",
    orgNumber: "",
    city: "Eidsvoll",
  },

  // Områdene SEO-dataene sier at du betjener.
  areaServed: ["Oslo", "Akershus", "Østlandet", "Norge"],

  // "Lanseres snart"-modus. Produksjonsbygg viser coming soon-siden, med mindre
  // VITE_COMING_SOON=false er satt (f.eks. i Vercel). Lokalt (npm run dev) vises
  // alltid hele siden. Lansering: sett VITE_COMING_SOON=false i Vercel og deploy.
  comingSoon: import.meta.env.PROD && import.meta.env.VITE_COMING_SOON !== "false",

  // EmailJS — nøklene settes som miljøvariabler (se .env.example).
  emailjs: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  },
};

export const navLinks = [
  { href: "/", label: "Hjem" },
  { href: "/tjenester", label: "Tjenester" },
  { href: "/prosjekter", label: "Prosjekter" },
  { href: "/priser", label: "Priser" },
  { href: "/om-oss", label: "Om oss" },
];
