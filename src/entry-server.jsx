import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "./App.jsx";

// Used only at build time by scripts/prerender.mjs — never shipped to browsers.
export { site } from "./data/site.js";
export { pages, pageByPath } from "./data/pages.js";
export { pricingPlans } from "./data/pricingPlans.js";
export { faq } from "./data/content.js";

export function render(url) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  );
}
