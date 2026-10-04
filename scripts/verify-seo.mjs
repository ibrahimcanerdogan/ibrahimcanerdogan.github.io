import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const SITE_URL = "https://ibrahimcanerdogan.github.io";
const requiredSource = [
  "src/app/robots.ts",
  "src/app/sitemap.ts",
  "src/app/[section]/page.tsx",
  "src/app/en/page.tsx",
  "src/app/en/[section]/page.tsx",
  "src/lib/seo.ts",
  "src/components/PortfolioStage.tsx",
  "public/site.webmanifest",
  "public/opengraph-image.png",
  "public/icon-192.png",
  "public/icon-512.png",
  "public/apple-touch-icon.png",
];
const requiredRoutes = ["about", "experience", "work", "expertise", "teaching", "certificates", "contact"];

const fail = (message) => {
  console.error(`✗ ${message}`);
  process.exitCode = 1;
};

for (const file of requiredSource) {
  if (!existsSync(file)) fail(`Missing SEO/GEO contract file: ${file}`);
}

if (existsSync("public/source/cv-ibrahim-can-erdogan.pdf")) {
  fail("Public CV asset must not exist.");
}
if (existsSync("src/app/favicon.ico")) {
  fail("Oversized legacy favicon.ico must not exist.");
}

const seo = readFileSync("src/lib/seo.ts", "utf8");
const layout = readFileSync("src/app/layout.tsx", "utf8");
const trHome = readFileSync("src/app/page.tsx", "utf8");
const enHome = readFileSync("src/app/en/page.tsx", "utf8");
const stage = readFileSync("src/components/PortfolioStage.tsx", "utf8");
const language = readFileSync("src/contexts/LanguageContext.tsx", "utf8");
const manifest = readFileSync("public/site.webmanifest", "utf8");
const sitemap = readFileSync("src/app/sitemap.ts", "utf8");

const forbiddenLegacyPhrases = [
  "Senior Android Engineer",
  "ebebek — Present",
  "ebebek - Present",
  "cv-ibrahim-can-erdogan",
  "View Resume",
  "Download Resume",
  "Özgeçmişime Göz At",
  "Özgeçmişimi İndir",
];
for (const phrase of forbiddenLegacyPhrases) {
  if ([seo, manifest, stage, language].some((source) => source.includes(phrase))) {
    fail(`Forbidden legacy phrase remains: ${phrase}`);
  }
}

if (sitemap.includes("/#")) fail("Hash URL found in sitemap source.");
for (const route of requiredRoutes) {
  if (!seo.includes(`"${route}"`)) fail(`Route missing from SEO inventory: ${route}`);
}

for (const token of ["ProfilePage", "Person", "Organization", "founder", "worksFor", "alumniOf"]) {
  if (!seo.includes(token)) fail(`Structured-data entity missing: ${token}`);
}
if (layout.includes("application/ld+json")) {
  fail("Profile structured data must not be injected globally from the root layout.");
}
if (!trHome.includes('createEntityGraph("tr")') || !enHome.includes('createEntityGraph("en")')) {
  fail("Localized ProfilePage structured data must be scoped to both home routes.");
}

for (const token of [
  "problemLabel",
  "roleLabel",
  "outcomeLabel",
  "caseStudy",
  "qualificationId",
  "https://www.udemy.com/certificate/",
  "https://www.coursera.org/account/accomplishments/professional-cert/",
]) {
  if (!stage.includes(token)) fail(`GEO content contract missing: ${token}`);
}

function routeHtml(locale, route = "") {
  const candidates = route === ""
    ? locale === "en"
      ? [join("out", "en.html"), join("out", "en", "index.html")]
      : [join("out", "index.html")]
    : locale === "en"
      ? [join("out", "en", `${route}.html`), join("out", "en", route, "index.html")]
      : [join("out", `${route}.html`), join("out", route, "index.html")];

  return candidates.find((candidate) => existsSync(candidate)) ?? null;
}

if (existsSync("out")) {
  for (const file of ["robots.txt", "sitemap.xml", "index.html"]) {
    if (!existsSync(join("out", file))) fail(`Static export is missing: out/${file}`);
  }

  const sitemapXml = readFileSync("out/sitemap.xml", "utf8");
  if (sitemapXml.includes("#")) fail("Generated sitemap contains a fragment URL.");

  const allRoutes = ["", ...requiredRoutes];
  for (const locale of ["tr", "en"]) {
    for (const route of allRoutes) {
      const htmlPath = routeHtml(locale, route);
      if (!htmlPath) {
        fail(`Static export is missing route: ${locale === "en" ? "/en" : ""}/${route}`);
        continue;
      }

      const html = readFileSync(htmlPath, "utf8");
      const expectedLang = locale === "en" ? "en" : "tr";
      if (!html.includes(`<html lang="${expectedLang}"`)) {
        fail(`Incorrect html lang for ${htmlPath}`);
      }
      if (!html.includes("<h1")) {
        fail(`Missing primary h1 in ${htmlPath}`);
      }

      const expectedPath = locale === "en"
        ? `/en${route ? `/${route}` : ""}`
        : route
          ? `/${route}`
          : "";
      const canonical = `${SITE_URL}${expectedPath}`;
      if (!html.includes(canonical)) {
        fail(`Expected canonical URL not found in ${htmlPath}: ${canonical}`);
      }

      const isHome = route === "";
      if (isHome && !html.includes("ProfilePage")) {
        fail(`Home route is missing ProfilePage schema: ${htmlPath}`);
      }
      if (!isHome && html.includes('"@type":"ProfilePage"')) {
        fail(`ProfilePage schema leaked into section route: ${htmlPath}`);
      }
    }
  }
}

if (!process.exitCode) console.log("✓ SEO/GEO static contracts verified.");
