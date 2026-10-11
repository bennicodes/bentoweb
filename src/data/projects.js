// Prosjekter. Hvert prosjekt får et kort på /prosjekter og en egen side på
// /prosjekter/<id>. Forsiden viser bare prosjektene med `featured: true`.

// Slik legger du til et prosjekt:
//   1. Lag en mappe public/projects/<id>/ og legg skjermbilder der.
//      Hovedbilde: 1600 × 1000 px (16:10), JPG/WebP, under ~250 kB.
//      Mobilbilde: 390 × 844 px (2x), valgfritt.

//   2. Legg til et objekt under. `id` blir adressen, f.eks. /prosjekter/frisor-hansen.

//   3. Feltene `challenge`, `solution`, `result` og `quote` er valgfrie — de
//      vises bare når de er fylt ut. Skriv bare det som er sant.

export const projects = [
  {
    id: "idas-matverden",
    name: "Idas Matverden",
    type: "Catering i Isfjorden",
    featured: true,
    url: "https://idasmatverden.no",
    image: "/projects/idas-matverden.jpg",
    industry: "Catering og selskapsmat",
    location: "Isfjorden",
    summary:
      "Nettside for Idas Matverden, som lager mat til alt fra minnestunder og dåp til bursdager og bryllup — og tilbyr lokaler som Woldstad-gården.",
    delivered: [
      "Skreddersydd design og utvikling",
      "Meny med veiledende priser",
      "Egne sider for lokalene Woldstad og Markamyra",
      "Bildegallerier",
      "Booking via telefon og kontaktknapp i menyen",
      "Tilpasset mobil, nettbrett og PC",
    ],
    gallery: [
      {
        src: "/projects/idas-matverden/woldstad.jpg",
        alt: "Woldstad-siden med bildegalleri",
        kind: "desktop",
      },
      {
        src: "/projects/idas-matverden/mobil.jpg",
        alt: "Forsiden på mobil",
        kind: "mobile",
      },
    ],
    // challenge: "",
    // solution: "",
    // result: "",
    // quote: { text: "", author: "Ida" },
  },
  {
    id: "kristoffersen-mgmt",
    name: "Kristoffersen MGMT",
    type: "Artistmanagement i Oslo",
    featured: true,
    url: "https://kristoffersenmgmt.no",
    image: "/projects/kristoffersen-mgmt.jpg",
    industry: "Artistmanagement",
    location: "Oslo",
    summary:
      "Nettside for Kristoffersen MGMT, et moderne artistmanagement i Oslo som jobber med både nye og etablerte artister.",
    delivered: [
      "Skreddersydd design og utvikling",
      "Sanity CMS — kunden oppdaterer artister, media og presse selv",
      "Klientsider med artistprofiler",
      "Media- og pressesider",
      "Kontaktskjema og «Book en samtale»",
      "Tilpasset mobil, nettbrett og PC",
    ],
    gallery: [
      {
        src: "/projects/kristoffersen-mgmt/media.jpg",
        alt: "Mediesiden med artistbilder",
        kind: "desktop",
      },
      {
        src: "/projects/kristoffersen-mgmt/mobil.jpg",
        alt: "Klientsiden på mobil",
        kind: "mobile",
      },
    ],
  },
  // Flesvik (flesvik.no) legges inn etter redesignet.

  // ---------- Eksempelsider (fiktive bedrifter, én per pakke) ----------
  // `demo: true` = vises i egen seksjon på /prosjekter, merket «Eksempel»,
  // aldri blant «Utvalgt arbeid» på forsiden. `plan` = id i pricingPlans.js.
  {
    id: "eksempel-frisor",
    demo: true,
    plan: "enkel-start",
    name: "Salong Hegg",
    type: "Eksempel: frisør",
    url: "https://fris-r-eksempel.vercel.app/",
    image: "/projects/demo-frisor.jpg",
    industry: "Frisør (fiktiv bedrift)",
    location: "Lillestrøm",
    summary:
      "Eksempelside for pakken Enkel Start: en ryddig one-pager for en frisørsalong, med priser, frisørene, åpningstider og timebestilling.",
    delivered: [
      "Ettsides nettside (one-pager)",
      "Prisliste, frisørene og åpningstider",
      "Tydelig «Bestill time»-knapp",
      "Grunnleggende SEO for «frisør Lillestrøm»",
      "Tilpasset mobil, nettbrett og PC",
    ],
    gallery: [
      { src: "/projects/demo-frisor/seksjon.jpg", alt: "Prislisten", kind: "desktop" },
      { src: "/projects/demo-frisor/mobil.jpg", alt: "Forsiden på mobil", kind: "mobile" },
    ],
  },
  {
    id: "eksempel-rorlegger",
    demo: true,
    plan: "standard-seo",
    name: "Holtvang Rør",
    type: "Eksempel: rørlegger",
    url: "https://r-rlegger-eksempel.vercel.app/",
    image: "/projects/demo-rorlegger.jpg",
    industry: "Rørlegger (fiktiv bedrift)",
    location: "Øvre Romerike",
    summary:
      "Eksempelside for pakken Standard + SEO: et rørleggerfirma med egne sider for hver tjeneste og hvert område — bygget for å bli funnet på lokale søk.",
    delivered: [
      "Flere undersider: tjenester, om oss og kontakt",
      "Egne sider per tjeneste (bad, lekkasje, bereder)",
      "Egne områdesider for lokal SEO (Jessheim, Eidsvoll)",
      "Døgnvakt-boks og telefonknapp synlig hele tiden",
      "Tilpasset mobil, nettbrett og PC",
    ],
    gallery: [
      { src: "/projects/demo-rorlegger/seksjon.jpg", alt: "Tjenesteoversikten", kind: "desktop" },
      { src: "/projects/demo-rorlegger/mobil.jpg", alt: "Forsiden på mobil", kind: "mobile" },
    ],
  },
  {
    id: "eksempel-nettbutikk",
    demo: true,
    plan: "nettbutikk",
    name: "Vardehus",
    type: "Eksempel: interiørbutikk",
    url: "https://interi-r-nettbutikk-eksempel.vercel.app/",
    image: "/projects/demo-nettbutikk.jpg",
    industry: "Interiør (fiktiv nettbutikk)",
    location: "Fredrikstad",
    summary:
      "Eksempelside for pakken Nettbutikk: en interiørbutikk med kategorier, produktsider, handlekurv og kundeservice-sider.",
    delivered: [
      "Kategorier og produktsider",
      "Handlekurv",
      "Fri frakt-grense og frakt-informasjon",
      "Kundeservice: frakt, retur og angrerett",
      "Tilpasset mobil, nettbrett og PC",
    ],
    gallery: [
      { src: "/projects/demo-nettbutikk/seksjon.jpg", alt: "Nyheter og produktkort", kind: "desktop" },
      { src: "/projects/demo-nettbutikk/mobil.jpg", alt: "Forsiden på mobil", kind: "mobile" },
    ],
  },
];

export const projectById = (id) => projects.find((p) => p.id === id);

/** Real client projects (not the example sites). */
export const clientProjects = () => projects.filter((p) => !p.demo);

/** Example sites, one per package. */
export const demoProjects = () => projects.filter((p) => p.demo);

/** The example site that shows a given package, if any. */
export const demoForPlan = (planId) => projects.find((p) => p.demo && p.plan === planId);

/** Projects for the homepage: featured client projects, or the first three if none are marked. */
export const featuredProjects = () => {
  const real = clientProjects();
  const featured = real.filter((p) => p.featured);
  return featured.length ? featured : real.slice(0, 3);
};
