import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const requiredSource = [
  "src/app/robots.ts", "src/app/sitemap.ts", "src/app/[section]/page.tsx",
  "src/app/en/page.tsx", "src/app/en/[section]/page.tsx", "src/lib/seo.ts",
  "public/site.webmanifest", "public/opengraph-image.png", "public/icon-192.png",
  "public/icon-512.png", "public/apple-touch-icon.png",
];
const requiredRoutes = ["about", "experience", "work", "expertise", "teaching", "certificates", "contact"];

const fail = (message) => { console.error(`✗ ${message}`); process.exitCode = 1; };
for (const file of requiredSource) if (!existsSync(file)) fail(`Missing SEO contract file: ${file}`);

const seo = readFileSync("src/lib/seo.ts", "utf8");
const manifest = readFileSync("public/site.webmanifest", "utf8");
const sitemap = readFileSync("src/app/sitemap.ts", "utf8");
for (const phrase of ["Senior Android Engineer", "ebebek — Present", "ebebek - Present"]) {
  if (seo.includes(phrase) || manifest.includes(phrase)) fail(`Forbidden legacy phrase remains: ${phrase}`);
}
if (sitemap.includes("/#")) fail("Hash URL found in sitemap source");
for (const route of requiredRoutes) if (!seo.includes(`"${route}"`)) fail(`Route missing from SEO inventory: ${route}`);

if (existsSync("out")) {
  for (const file of ["robots.txt", "sitemap.xml", "index.html"]) {
    if (!existsSync(join("out", file))) fail(`Static export is missing: out/${file}`);
  }
  if (!existsSync(join("out", "en.html")) && !existsSync(join("out", "en", "index.html"))) fail("Static export is missing English home route");
  for (const route of requiredRoutes) {
    if (!existsSync(join("out", `${route}.html`)) && !existsSync(join("out", route, "index.html"))) fail(`Static export is missing Turkish route: ${route}`);
    if (!existsSync(join("out", "en", `${route}.html`)) && !existsSync(join("out", "en", route, "index.html"))) fail(`Static export is missing English route: en/${route}`);
  }
  const sitemapXml = readFileSync("out/sitemap.xml", "utf8");
  if (sitemapXml.includes("#")) fail("Generated sitemap contains a fragment URL");
  const trHtml = readFileSync("out/index.html", "utf8");
  const enHtmlPath = existsSync(join("out", "en.html")) ? join("out", "en.html") : join("out", "en", "index.html");
  const enHtml = readFileSync(enHtmlPath, "utf8");
  if (!trHtml.includes('<html lang="tr"')) fail("Turkish HTML lang attribute is incorrect");
  if (!enHtml.includes('<html lang="en"')) fail("English HTML lang attribute is incorrect");
}

if (!process.exitCode) console.log("✓ SEO/GEO static contracts verified.");
