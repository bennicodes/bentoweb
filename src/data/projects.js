// Prosjekter. Hvert prosjekt får et kort på /prosjekter og en egen side på
// /prosjekter/<id>. Forsiden viser bare prosjektene med `featured: true`.
//
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
      { src: "/projects/idas-matverden/woldstad.jpg", alt: "Woldstad-siden med bildegalleri", kind: "desktop" },
      { src: "/projects/idas-matverden/mobil.jpg", alt: "Forsiden på mobil", kind: "mobile" },
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
      { src: "/projects/kristoffersen-mgmt/media.jpg", alt: "Mediesiden med artistbilder", kind: "desktop" },
      { src: "/projects/kristoffersen-mgmt/mobil.jpg", alt: "Klientsiden på mobil", kind: "mobile" },
    ],
  },
  // Flesvik (flesvik.no) legges inn etter redesignet.
];

export const projectById = (id) => projects.find((p) => p.id === id);

/** Projects for the homepage: the featured ones, or the first three if none are marked. */
export const featuredProjects = () => {
  const featured = projects.filter((p) => p.featured);
  return featured.length ? featured : projects.slice(0, 3);
};
