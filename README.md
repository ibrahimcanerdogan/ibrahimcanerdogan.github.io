# İbrahim Can Erdoğan | Portfolio Website

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=github&logoColor=white)](https://pages.github.com)

## About

Personal portfolio: experience, projects, Udemy courses, certificates, and YouTube content. Built as a static Next.js app (App Router) and deployed to **GitHub Pages**.

## Features

- Dark / light theme
- English / Turkish UI copy
- Responsive layout and section navigation
- SEO metadata, Open Graph, Twitter cards, and Person JSON-LD
- Static export (`output: 'export'`) for static hosting

## Built With

- [Next.js](https://nextjs.org) — React framework
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [tsParticles](https://particles.js.org/) — hero background

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

### Local preview of the static build

```bash
npm run build
npx --yes serve out
```

## Project structure

```
├── public/              # Static assets (logo, CV PDF, verification files)
├── src/
│   ├── app/             # App Router: layout, page, global styles
│   ├── components/      # UI sections and shared components
│   └── contexts/        # Language (i18n) context
├── .github/workflows/   # GitHub Pages deploy workflow
└── package.json
```

## Deployment

Pushes to `main` trigger [.github/workflows/nextjs.yml](.github/workflows/nextjs.yml): lint, `next build`, then upload of the `out/` directory to GitHub Pages.

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
