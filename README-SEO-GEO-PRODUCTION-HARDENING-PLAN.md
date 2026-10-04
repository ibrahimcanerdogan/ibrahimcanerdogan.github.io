# SEO & GEO Production Hardening Plan

## Purpose

This document defines the production-readiness plan for the portfolio's **SEO (Search Engine Optimization)** and **GEO (Generative Engine Optimization / AI search visibility)**.

The portfolio is intentionally designed as a single-screen, app-like experience. The goal of this plan is to preserve that UX while ensuring that search engines, AI search systems, social platforms, and crawlers can reliably discover, understand, index, and attribute the content.

---

## Current Positioning

The portfolio should represent İbrahim Can Erdoğan as:

- **Software Engineer**
- **Founder**
- **Product Builder**
- **Technical Educator**

Android remains a strong technical specialization, but it should not define the entire public profile.

Current career truth that must be consistent across all public sources:

- **Akhisar Dijital — Founder & Software Engineer — April 2026 - Present**
- **ebebek — Android Software Specialist — April 2023 - April 2026**

The same dates and role positioning must be consistent across:

- Portfolio
- CV
- LinkedIn
- GitHub profile
- Akhisar Dijital references
- Structured data
- Search-engine indexed documents

---

# Executive Findings

## P0 — Critical

| Area | Current State | Risk | Required Action |
| --- | --- | --- | --- |
| robots.txt | Missing | No explicit crawl contract or sitemap discovery | Add `src/app/robots.ts` |
| sitemap.xml | Missing | Search engines do not receive a canonical URL inventory | Add `src/app/sitemap.ts` |
| Section URLs | Hash-based: `/#experience`, `/#projects` | Hash-based state is weak for crawlability and direct indexing | Move to real crawlable paths while preserving single-screen UX |
| Indexable section content | Active section rendered conditionally on client | Crawlers may primarily see default Home content | Pre-render section content through real routes |
| Old CV content | Public PDF still contains outdated employment state | Search engines / AI systems may learn conflicting career facts | Replace/update CV and remove stale copies |
| Entity consistency | New site data and indexed historical data disagree | Weak GEO trust and ambiguous entity resolution | Align all public profile sources |

---

# P0.1 — robots.txt

## Required implementation

Create:

`src/app/robots.ts`

Recommended behavior:

- Allow normal search crawlers.
- Do not block Googlebot/Bingbot.
- Keep OAI-SearchBot accessible for ChatGPT Search discovery.
- Reference the sitemap.
- Do not expose private/internal paths.

Expected output:

```txt
User-agent: *
Allow: /

User-agent: OAI-SearchBot
Allow: /

Sitemap: https://ibrahimcanerdogan.github.io/sitemap.xml
```

Do not add aggressive crawler blocks without a specific privacy/security reason.

---

# P0.2 — sitemap.xml

Create:

`src/app/sitemap.ts`

The sitemap must include every **real crawlable content route**.

Target route inventory after route hardening:

### Turkish

- `/`
- `/about`
- `/experience`
- `/work`
- `/expertise`
- `/teaching`
- `/certificates`
- `/contact`

### English

Preferred structure:

- `/en`
- `/en/about`
- `/en/experience`
- `/en/work`
- `/en/expertise`
- `/en/teaching`
- `/en/certificates`
- `/en/contact`

Use meaningful `lastModified` values.

Do not add hash URLs such as `/#experience` to the sitemap.

---

# P0.3 — Replace hash navigation with real URLs

## Problem

Current interaction model uses:

- `/#about`
- `/#experience`
- `/#projects`
- etc.

The visual behavior is good, but search engines should not be expected to treat fragment-driven application states as independent documents.

## Required architecture

Preserve the exact single-screen UX, but make each section a real route.

Example:

| Visual screen | Route |
| --- | --- |
| Home | `/` |
| About | `/about` |
| Experience | `/experience` |
| Work | `/work` |
| Expertise | `/expertise` |
| Teaching | `/teaching` |
| Certificates | `/certificates` |
| Contact | `/contact` |

The user should still experience:

- one viewport,
- no page-level vertical scroll,
- the same left rail,
- short transitions between screens.

Navigation should use Next.js routing rather than only React state + URL hash.

---

# P0.4 — Ensure crawler-visible HTML

## Current risk

The application currently renders one active section through client state.

This can reduce the amount of meaningful content available in the initial HTML and creates unnecessary dependence on crawler JavaScript execution.

## Required behavior

Each route must have meaningful statically generated HTML.

Recommended structure:

- Shared app shell
- Shared left rail
- Route-driven active screen
- Route-specific content pre-rendered during static export

Do not hide core SEO content behind user interaction only.

---

# P0.5 — CV / indexed document consistency

The current public CV must be reviewed before production launch.

Known profile truth:

- ebebek ended in **April 2026**
- Akhisar Dijital started in **April 2026**

The published CV must no longer state:

`ebebek — Present`

## Required jobs

1. Produce the updated CV.
2. Replace `public/source/cv-ibrahim-can-erdogan.pdf`.
3. Review the root-level duplicate CV:
   - `CV - Ibrahim Can Erdogan.pdf`
4. Prefer a single canonical public CV asset.
5. Remove obsolete duplicate copies if unnecessary.
6. Verify whether sensitive personal information such as phone number should remain publicly indexable.
7. After release, request recrawl / removal of stale indexed PDF versions where necessary.

---

# P0.6 — Entity consistency

All public sources must tell the same story.

Canonical entity facts:

```text
Name: İbrahim Can Erdoğan
Primary identity: Software Engineer · Founder
Current company: Akhisar Dijital
Current role: Founder & Software Engineer
Akhisar Dijital start: April 2026
ebebek role end: April 2026
Country: Türkiye
```

Before production release, compare:

- Portfolio metadata
- Page copy
- JSON-LD
- CV
- LinkedIn
- GitHub profile
- Akhisar Dijital website
- YouTube / Udemy public descriptions where applicable

Conflicting public facts should be corrected.

---

# P1 — International SEO

## Current issue

The site supports TR and EN through client-side language state, but both languages live on the same URL.

Current metadata also declares hreflang-like language alternatives that point to the same canonical URL.

That is not a strong international SEO model.

## Preferred architecture

Turkish is the default language.

### Turkish

- `/`
- `/about`
- `/experience`
- etc.

### English

- `/en`
- `/en/about`
- `/en/experience`
- etc.

This allows:

- unique titles,
- unique descriptions,
- correct `html lang`,
- correct canonical URLs,
- correct hreflang pairs,
- shareable language-specific URLs.

---

# P1.1 — hreflang

Only add hreflang when separate localized URLs exist.

Target pattern:

```text
tr-TR -> https://ibrahimcanerdogan.github.io/experience
en-US -> https://ibrahimcanerdogan.github.io/en/experience
x-default -> https://ibrahimcanerdogan.github.io/experience
```

Do not point multiple language alternatives to the exact same URL.

---

# P1.2 — Metadata localization

Current default UI is Turkish.

Turkish routes should use Turkish:

- title
- description
- Open Graph title
- Open Graph description
- locale
- page headings
- structured-data descriptions

English routes should use English equivalents.

Example Turkish homepage title:

`İbrahim Can Erdoğan | Yazılım Mühendisi · Kurucu`

Example English homepage title:

`İbrahim Can Erdoğan | Software Engineer · Founder`

---

# P1.3 — Open Graph / Twitter

Current Open Graph and Twitter metadata must be reviewed after localization.

Required:

- route-aware title
- route-aware description
- language-aware locale
- correct canonical URL
- real social image

## Social image

Do not rely on `logo.jpg` as the main large social card.

Create a dedicated:

- `1200 × 630`
- lightweight
- readable
- portfolio-branded

Open Graph image.

Recommended content:

- İbrahim Can Erdoğan
- Software Engineer · Founder
- Akhisar Dijital
- minimal visual identity

Avoid excessive text.

---

# P1.4 — Structured data / GEO entity graph

Current `Person` JSON-LD is a useful start, but should be upgraded into a clearer entity graph.

## Target entities

### ProfilePage

Use the homepage as a profile page:

```text
ProfilePage
  mainEntity -> Person
```

### Person

Include:

- name
- alternateName
- url
- image
- jobTitle
- description
- sameAs
- knowsAbout
- alumniOf
- worksFor
- homeLocation / addressCountry where appropriate

### Organization — Akhisar Dijital

Include:

- name
- url
- founder
- foundingDate
- description
- sameAs where appropriate

## Recommended relationship

```text
ProfilePage
 └─ mainEntity -> Person: İbrahim Can Erdoğan
                    ├─ worksFor -> Akhisar Dijital
                    ├─ alumniOf -> Balıkesir Üniversitesi
                    ├─ sameAs -> GitHub
                    ├─ sameAs -> LinkedIn
                    ├─ sameAs -> YouTube
                    ├─ sameAs -> Medium
                    └─ knowsAbout -> Software Engineering / Kotlin / Android / Next.js / Product Development

Organization: Akhisar Dijital
 ├─ founder -> İbrahim Can Erdoğan
 ├─ foundingDate -> 2026-04
 └─ url -> https://akhisardijital.com/
```

Use stable `@id` values for entities when practical.

---

# P1.5 — Experience and project semantics

Experience and project content should be written for humans first but should also make relationships clear to search and AI systems.

Avoid vague text.

Prefer:

```text
Company
Role
Date range
Problem / responsibility
Engineering contribution
Outcome
Technology
```

For selected projects use:

```text
Project
Problem
Role
Solution
Technical decisions
Outcome
Repository / Demo
```

This is stronger for both recruiter comprehension and GEO retrieval.

---

# P1.6 — Credentials

Credentials should include, where available:

- credential name
- issuing organization
- issue date
- expiration date
- verification URL
- credential ID if safe to publish

Do not present unverifiable certification claims when a public verification link exists.

---

# P2 — Technical cleanup and secondary SEO

## Manifest

Current manifest still describes the profile as:

`Senior Android Engineer — portfolio and freelance.`

Update it to the broader positioning.

Recommended:

```json
{
  "name": "İbrahim Can Erdoğan — Software Engineer & Founder",
  "short_name": "İbrahim Erdoğan",
  "description": "Yazılım mühendisi, ürün geliştirici, teknik eğitmen ve Akhisar Dijital kurucusu.",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#f7f7f4",
  "theme_color": "#f7f7f4"
}
```

Dark-theme support can still be handled by runtime viewport metadata.

---

# P2.1 — Search engine verification

Current repository contains:

- Google verification file
- Yandex verification file
- Google verification metadata

These are acceptable.

Also verify the site in:

- Google Search Console
- Bing Webmaster Tools

Bing verification is useful for Bing search and AI discovery ecosystems.

---

# P2.2 — Favicon / app icons

Review:

- `src/app/favicon.ico`
- `public/logo.jpg`
- Apple touch icon
- manifest icons

Current favicon is relatively large.

Optimize assets while preserving visual quality.

Recommended assets:

- favicon.ico
- icon-192.png
- icon-512.png
- apple-touch-icon.png
- opengraph-image.png

---

# P2.3 — Meta keywords

Current metadata includes a large keyword list.

Do not depend on the `keywords` meta field for rankings.

Prioritize:

- page titles
- headings
- descriptive copy
- semantic HTML
- entity consistency
- quality external profiles
- structured data
- real crawlable URLs

The keywords list may be reduced to a concise set or removed if desired.

---

# P2.4 — README consistency

The main `README.md` still references older portfolio behavior and dependencies.

After redesign completion:

- remove outdated Senior Android Engineer-only positioning
- remove tsParticles references if unused
- describe the single-screen architecture
- document TR-first behavior
- document route-based multilingual SEO
- document SEO/GEO validation commands

---

# P2.5 — llms.txt

`llms.txt` may be evaluated experimentally, but it is **not a substitute** for:

- robots.txt
- sitemap.xml
- crawlable HTML
- structured data
- consistent entity information

Do not prioritize it before P0/P1 work.

If added later, keep it factual and concise.

---

# GEO Content Principles

Generative systems benefit from content that is explicit, consistent, and verifiable.

## Prefer

- Exact company names
- Exact role names
- Exact date ranges
- Stable URLs
- Clear founder relationship
- Clear institution names
- Public verification links
- Consistent profile descriptions
- Direct project outcomes
- Named technologies attached to actual work

## Avoid

- Generic marketing claims
- Artificial keyword repetition
- Hidden SEO-only text
- Contradictory dates
- Multiple stale CV versions
- Important facts available only after client interaction

---

# Required Semantic HTML Review

Every route should have:

- one primary `h1`
- logical `h2` / `h3` hierarchy
- semantic `main`
- semantic `nav`
- meaningful link text
- accessible labels
- no hidden keyword blocks

For route-driven single-screen architecture, do not duplicate multiple visible `h1` elements in the same rendered document.

---

# Canonical Strategy

Every crawlable route must self-canonicalize.

Examples:

```text
/experience
canonical -> /experience

/en/experience
canonical -> /en/experience
```

Do not canonicalize every section route back to the homepage.

That would prevent the section pages from having independent indexing value.

---

# URL Naming

Preferred:

- `/work` instead of `/projects` if the UI label is "Çalışmalar / Work"
- `/experience`
- `/expertise`
- `/teaching`
- `/certificates`
- `/contact`

Use lowercase English slugs for stable cross-language infrastructure.

Do not translate path names per locale unless there is a strong reason.

---

# Performance / Core Web Vitals Review

SEO production hardening also requires checking:

- font loading
- unused JS
- unused old section components
- unused particle dependencies
- image sizes
- hydration cost
- static export output
- layout shift
- animation cost
- mobile viewport behavior

The redesign should remain lightweight.

Remove dead dependencies and old components only after route migration is stable.

---

# Search / AI Crawler Accessibility

Do not accidentally block:

- Googlebot
- Bingbot
- OAI-SearchBot

Review CDN / GitHub Pages behavior after deployment.

robots.txt should remain simple unless a real exclusion is required.

---

# Production Validation Checklist

## Build

- [ ] `npm ci`
- [ ] `npx tsc --noEmit`
- [ ] `npx eslint .`
- [ ] `npm run build`

## Generated output

Verify exported files include:

- [ ] `robots.txt`
- [ ] `sitemap.xml`
- [ ] route HTML files
- [ ] manifest
- [ ] Open Graph asset
- [ ] favicon/app icons

## HTML

For each route verify:

- [ ] title
- [ ] meta description
- [ ] canonical
- [ ] hreflang
- [ ] `html lang`
- [ ] Open Graph
- [ ] Twitter metadata
- [ ] h1
- [ ] structured data
- [ ] meaningful static HTML content

## External validation

After merge/deploy:

- [ ] Google Search Console URL Inspection
- [ ] Submit sitemap in Google Search Console
- [ ] Bing Webmaster Tools verification
- [ ] Submit sitemap to Bing
- [ ] Rich Results Test
- [ ] Schema.org validator
- [ ] Open Graph preview validation
- [ ] Twitter/X card preview validation where available
- [ ] Search indexed CV URLs
- [ ] Request stale PDF recrawl/removal where needed

---

# Atomic Implementation Jobs

## Phase 1 — Crawl Foundation

### JOB-SEO-001 — Add robots route

Files:

- `src/app/robots.ts`

Acceptance:

- `/robots.txt` exists in static export.
- Sitemap URL is correct.
- OAI-SearchBot is not blocked.

---

### JOB-SEO-002 — Add sitemap route

Files:

- `src/app/sitemap.ts`

Acceptance:

- `/sitemap.xml` exists.
- Only canonical crawlable URLs are listed.
- No hash URLs appear.

---

### JOB-SEO-003 — Route model migration

Convert client-only section state into route-driven screens.

Acceptance:

- All sections have real URLs.
- Single-screen visual UX remains unchanged.
- No document-level vertical scrolling.
- Direct URL loads the correct screen.
- Static export succeeds.

---

### JOB-SEO-004 — Canonical metadata per route

Acceptance:

- Every route self-canonicalizes.
- No section canonical points incorrectly to the homepage.

---

## Phase 2 — International SEO

### JOB-SEO-005 — Add English route namespace

Implement `/en/*`.

Acceptance:

- TR remains default.
- EN pages are directly crawlable.
- Page refresh preserves language.

---

### JOB-SEO-006 — Correct hreflang

Acceptance:

- TR and EN equivalents reference each other.
- `x-default` is intentional.
- No hreflang entry points multiple languages to one URL.

---

### JOB-SEO-007 — Localize metadata

Acceptance:

- Turkish routes use Turkish metadata.
- English routes use English metadata.
- Open Graph locale matches route language.

---

## Phase 3 — GEO / Structured Data

### JOB-GEO-001 — Build entity graph

Implement:

- ProfilePage
- Person
- Organization / Akhisar Dijital

Acceptance:

- Stable `@id` values.
- Founder relationship is explicit.
- Person -> worksFor is explicit.
- alumniOf is included.
- sameAs links are correct.

---

### JOB-GEO-002 — Validate career facts

Acceptance:

- Akhisar Dijital April 2026 - Present everywhere.
- ebebek April 2023 - April 2026 everywhere.
- No "ebebek Present" remains in public site assets.

---

### JOB-GEO-003 — Strengthen project/entity content

Acceptance:

- Featured work contains problem / role / solution / outcome context.
- External repository/demo URLs are available.
- Claims remain concise and factual.

---

### JOB-GEO-004 — Credential verification

Acceptance:

- Public verification links added where available.
- Dates and issuer names are accurate.

---

## Phase 4 — Social / Assets

### JOB-SEO-008 — Dedicated Open Graph image

Acceptance:

- 1200 × 630.
- Correct identity.
- Works in TR/EN context without misleading text.

---

### JOB-SEO-009 — Manifest hardening

Acceptance:

- No old Senior Android Engineer-only copy.
- Light default colors are correct.
- Name and description match portfolio positioning.

---

### JOB-SEO-010 — Icon optimization

Acceptance:

- Favicons and app icons optimized.
- No oversized unnecessary asset.

---

## Phase 5 — CV and External Consistency

### JOB-GEO-005 — Update public CV

Acceptance:

- ebebek end date corrected.
- Akhisar Dijital added.
- Profile positioning matches site.
- Public personal information reviewed.

---

### JOB-GEO-006 — Remove stale CV duplicates

Acceptance:

- One intentional canonical public CV remains.
- Old duplicate files removed or intentionally redirected/replaced where possible.

---

### JOB-GEO-007 — External profile audit

Manually compare:

- LinkedIn
- GitHub
- YouTube
- Medium
- Udemy
- Akhisar Dijital

Acceptance:

- No critical career/date contradiction.

---

## Phase 6 — Quality Gate

### JOB-SEO-011 — Add SEO verification script

Add a repository script such as:

`npm run verify:seo`

It should validate static contracts where practical:

- required route files
- robots
- sitemap
- manifest
- metadata constants
- no forbidden legacy phrases
- no hash URLs in sitemap config

---

### JOB-SEO-012 — Extend PR quality workflow

Acceptance:

- TypeScript
- ESLint
- Build
- SEO verification

must all pass before merge.

---

# Definition of Done

SEO/GEO hardening is complete when:

- [ ] robots.txt exists
- [ ] sitemap.xml exists
- [ ] real route-based section navigation is implemented
- [ ] all main screens are statically crawlable
- [ ] Turkish is the default indexed experience
- [ ] English has separate crawlable URLs
- [ ] canonical URLs are correct
- [ ] hreflang is correct
- [ ] localized metadata is correct
- [ ] ProfilePage / Person / Organization schema is valid
- [ ] Akhisar Dijital founder relationship is explicit
- [ ] CV career dates match the website
- [ ] stale public career information is addressed
- [ ] manifest is updated
- [ ] dedicated OG image exists
- [ ] Google Search Console is configured
- [ ] Bing Webmaster Tools is configured
- [ ] sitemap is submitted after deployment
- [ ] TypeScript / ESLint / build / SEO verification all pass

---

# Non-Goals

This hardening must not:

- turn the portfolio back into a long scrolling page,
- introduce SEO-only hidden text,
- keyword-stuff visible content,
- add unnecessary pages solely for rankings,
- weaken the current visual identity,
- change production deployment before the implementation is verified.

The final architecture should remain a **clean single-screen portfolio for humans** while becoming a **fully crawlable, structured, entity-consistent profile for search engines and generative systems**.
