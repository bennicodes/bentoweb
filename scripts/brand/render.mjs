// Renders the social share image and app icons from the HTML sources here.
// Usage: node scripts/brand/render.mjs   (needs Google Chrome + playwright-core)
import { chromium } from "playwright-core";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
const here = path.dirname(fileURLToPath(import.meta.url));
const pub = path.resolve(here, "../../public");
const browser = await chromium.launch({ executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" });
const shot = async (file, w, h, out, scale = 1) => {
  const page = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: scale });
  await page.goto(pathToFileURL(path.join(here, file)).href);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: path.join(pub, out) });
  await page.close();
};
await shot("og.html", 1200, 630, "og-image.png");
await shot("icon.html", 512, 512, "icon-512.png");
await shot("icon.html", 512, 512, "apple-touch-icon.png", 180 / 512);
await shot("icon.html", 512, 512, "favicon-32.png", 32 / 512);
await browser.close();
console.log("✓ public/og-image.png, icon-512.png, apple-touch-icon.png, favicon-32.png");
