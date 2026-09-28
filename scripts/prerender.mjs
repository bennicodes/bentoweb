// Prerenders every page to static HTML after `vite build` so search engines
// (and visitors on slow connections) get the full page immediately. Each page
// gets its own <title>, description, canonical, share tags and structured
// data; then robots.txt, sitemap.xml and 404.html are written.
//
// All facts come from src/data — edit those, not this file.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssrEntry = path.join(root, "dist-ssr", "entry-server.js");

const { render, site, pages, pageByPath, pricingPlans, faq } = await import(
  pathToFileURL(ssrEntry).href
);

const base = site.url.replace(/\/$/, "");
const home = `${base}/`;
const urlFor = (p) => (p === "/" ? home : `${base}${p}`);
const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

// ---------- Structured data shared by every page ----------
const { email, phone, orgNumber, city } = site.contact;
const businessId = `${home}#bedrift`;
const websiteId = `${home}#nettsted`;

const business = {
  "@type": "ProfessionalService",
  "@id": businessId,
  name: site.name,
  description: site.description,
  url: home,
  logo: `${home}apple-touch-icon.png`,
  image: `${home}og-image.png`,
  priceRange: (() => {
    const prices = pricingPlans.map((p) => p.salePrice ?? p.price);
    return `${Math.min(...prices).toLocaleString("nb-NO")}–${Math.max(...prices).toLocaleString("nb-NO")} kr`;
  })(),
  currenciesAccepted: "NOK",
  areaServed: site.areaServed.map((name) =>
    name === "Norge"
      ? { "@type": "Country", name: "Norge" }
      : { "@type": "AdministrativeArea", name },
  ),
  knowsLanguage: ["nb", "en"],
  knowsAbout: ["Webdesign", "Nettsider", "Nettbutikk", "Søkemotoroptimalisering (SEO)"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Nettsidepakker",
    itemListElement: pricingPlans.map((p) => ({
      "@type": "Offer",
      name: p.name,
      description: p.tagline,
      url: `${base}/priser#${p.id}`,
      price: p.salePrice ?? p.price,
      priceCurrency: "NOK",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: p.salePrice ?? p.price,
        priceCurrency: "NOK",
        valueAddedTaxIncluded: false,
      },
      itemOffered: { "@type": "Service", name: `Nettside – ${p.name}` },
    })),
  },
  founder: site.founder.name.startsWith("Fornavn")
    ? undefined
    : { "@type": "Person", name: site.founder.name, jobTitle: site.founder.role },
  email: email || undefined,
  telephone: phone || undefined,
  taxID: orgNumber ? orgNumber.replace(/\s/g, "") : undefined,
  address: city
    ? { "@type": "PostalAddress", addressLocality: city, addressCountry: "NO" }
    : undefined,
};

const website = {
  "@type": "WebSite",
  "@id": websiteId,
  url: home,
  name: site.name,
  inLanguage: "nb-NO",
  publisher: { "@id": businessId },
};

const graphFor = (page) => {
  const url = urlFor(page.path);
  const nodes = [
    business,
    website,
    {
      "@type": page.path === "/om-oss" ? "AboutPage" : page.path === "/kontakt" ? "ContactPage" : "WebPage",
      "@id": `${url}#side`,
      url,
      name: page.title,
      description: page.description,
      inLanguage: "nb-NO",
      isPartOf: { "@id": websiteId },
      about: { "@id": businessId },
    },
  ];
  if (page.path !== "/") {
    const trail = [{ name: "Forside", item: home }];
    if (page.parent) trail.push({ name: page.parent.name, item: urlFor(page.parent.path) });
    trail.push({ name: page.name, item: url });
    nodes.push({
      "@type": "BreadcrumbList",
      itemListElement: trail.map((t, i) => ({ "@type": "ListItem", position: i + 1, ...t })),
    });
  }
  // The FAQ is shown on /priser, so its structured data lives there.
  if (page.path === "/priser") {
    nodes.push({
      "@type": "FAQPage",
      "@id": `${url}#sporsmal`,
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }
  return { "@context": "https://schema.org", "@graph": nodes };
};

// ---------- Head ----------
const assets = fs.readdirSync(path.join(dist, "assets"));
const displayFont = assets.find((f) => /^gloock-latin-400-normal.*\.woff2$/.test(f));

const headFor = (page) => {
  const url = urlFor(page.path);
  return [
    displayFont &&
      `<link rel="preload" href="/assets/${displayFont}" as="font" type="font/woff2" crossorigin />`,
    `<meta name="description" content="${esc(page.description)}" />`,
    page.notFound
      ? `<meta name="robots" content="noindex" />`
      : `<meta name="robots" content="index, follow, max-image-preview:large" />`,
    !page.notFound && `<link rel="canonical" href="${url}" />`,
    !page.notFound && `<link rel="alternate" hreflang="nb-NO" href="${url}" />`,
    !page.notFound && `<link rel="alternate" hreflang="x-default" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="${site.locale}" />`,
    `<meta property="og:site_name" content="${esc(site.name)}" />`,
    `<meta property="og:title" content="${esc(page.title)}" />`,
    `<meta property="og:description" content="${esc(page.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    // Case pages share their own screenshot; everything else the brand image.
    `<meta property="og:image" content="${page.image ? base + page.image : `${home}og-image.png`}" />`,
    `<meta property="og:image:width" content="${page.image ? 1600 : 1200}" />`,
    `<meta property="og:image:height" content="${page.image ? 1000 : 630}" />`,
    `<meta property="og:image:alt" content="${esc(site.name)} – nettsider bygget for å bli valgt" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    !page.notFound &&
      `<script type="application/ld+json">${JSON.stringify(graphFor(page)).replace(/</g, "\\u003c")}</script>`,
  ]
    .filter(Boolean)
    .join("\n    ");
};

// ---------- Write one HTML file per page ----------
const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");

const writePage = (page, outFile) => {
  const html = template
    .replace(/<title>.*?<\/title>/, `<title>${esc(page.title)}</title>`)
    .replace("<!--app-head-->", headFor(page))
    .replace("<!--app-html-->", render(page.path));
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, html);
  return html.length;
};

// Coming soon mode: only the homepage exists (plus 404.html showing the same page).
const livePages = site.comingSoon ? pages.filter((p) => p.path === "/") : pages;

for (const page of livePages) {
  const out =
    page.path === "/"
      ? path.join(dist, "index.html")
      : // Flat files (om-oss.html) — Vercel's cleanUrls serves them at /om-oss.
        path.join(dist, `${page.path.slice(1)}.html`);
  const size = writePage(page, out);
  console.log(`✓ ${page.path.padEnd(12)} ${(size / 1024).toFixed(1)} kB`);
}
writePage(site.comingSoon ? pageByPath("/") : pageByPath("/404"), path.join(dist, "404.html"));

// ---------- robots.txt + sitemap.xml ----------
const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(path.join(dist, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${home}sitemap.xml\n`);
fs.writeFileSync(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${livePages
  .map(
    (p) => `  <url>
    <loc>${urlFor(p.path)}</loc>
    <lastmod>${today}</lastmod>
  </url>`,
  )
  .join("\n")}
</urlset>
`,
);

fs.rmSync(path.join(root, "dist-ssr"), { recursive: true, force: true });
console.log(
  `✓ ${livePages.length} pages + 404.html, robots.txt, sitemap.xml for ${home}` +
    (site.comingSoon ? "  [COMING SOON — set VITE_COMING_SOON=false to launch]" : ""),
);
