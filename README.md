# İbrahim Can Erdoğan | Portfolio Website

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=github&logoColor=white)](https://pages.github.com)

## About

TR-first personal portfolio for İbrahim Can Erdoğan: software engineer, product builder, technical educator, and founder of Akhisar Dijital. Built as a route-driven, single-screen Next.js app and deployed to **GitHub Pages**.

## Features

- Dark / light theme
- Turkish default plus crawlable English routes under `/en`
- Route-driven section navigation without page-level scrolling
- Per-route canonical, hreflang, Open Graph, Twitter, and localized metadata
- ProfilePage, Person, and Akhisar Dijital Organization JSON-LD entity graph
- `robots.txt`, `sitemap.xml`, app icons, manifest, and dedicated social image
- Static export (`output: 'export'`) for static hosting

## Built With

- [Next.js](https://nextjs.org) — React framework
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)

## Getting Started

### Prerequisites

- Node.js 20+ (matches CI)
- npm

### Installation

```bash
git clone https://github.com/ibrahimcanerdogan/ibrahimcanerdogan.github.io.git
cd ibrahimcanerdogan.github.io
npm ci
```

### Scripts

- `npm run dev` — development server (Turbopack)
- `npm run build` — production static export to `out/`
- `npm run start` — serves the static `out/` folder on port 3000 (run `npm run build` first)
- `npm run lint` — ESLint
- `npm run verify:seo` — validates SEO/GEO source and static-export contracts
- `npm run quality` — SEO checks, TypeScript, ESLint, build, and exported-output checks

### Local preview of the static build

```bash
npm run build
npx --yes serve out
```

## Project structure

```
├── public/              # Static assets (logo, CV PDF, verification files)
├── src/
│   ├── app/             # Static TR/EN routes, metadata routes, layout, styles
│   ├── components/      # UI sections and shared components
│   └── contexts/        # Language (i18n) context
├── scripts/             # SEO/GEO verification
├── .github/workflows/   # GitHub Pages deploy workflow
└── package.json
```

## Deployment

Pull requests run TypeScript, ESLint, build, and SEO verification. Pushes to `main` trigger [.github/workflows/nextjs.yml](.github/workflows/nextjs.yml) and upload the static `out/` directory to GitHub Pages.

## Connect

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ibrahimcanerdogan/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ibrahimcanerdogan)
[![Medium](https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@ibrahimcanerdogan)
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@ibrahimcanerdogan)

## License

This project is licensed under the MIT License — see [LICENSE](LICENSE).

---

<div align="center">
  Made by İbrahim Can Erdoğan
</div>
