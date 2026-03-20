"use client";

import { Space_Grotesk } from "next/font/google";
import { useLanguage } from "@/contexts/LanguageContext";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const TECH_CHIPS = [
  "Kotlin",
  "Jetpack Compose",
  "Material 3",
  "Coroutines",
  "Clean Architecture",
  "Next.js",
] as const;

const SOCIAL_LINKS = [
  {
    href: "https://github.com/ibrahimcanerdogan",
    label: "GitHub",
    icon: (
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    ),
  },
  {
    href: "https://www.linkedin.com/in/ibrahimcanerdogan/",
    label: "LinkedIn",
    icon: (
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    ),
  },
  {
    href: "https://www.instagram.com/icanerdogan",
    label: "Instagram",
    icon: (
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    ),
  },
  {
    href: "https://www.youtube.com/@ibrahimcanerdogan",
    label: "YouTube",
    icon: (
      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
    ),
  },
  {
    href: "https://medium.com/@ibrahimcanerdogan",
    label: "Medium",
    icon: (
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    ),
  },
  {
    href: "https://www.udemy.com/user/ibrahim-can-erdogan/",
    label: "Udemy",
    icon: (
      <path d="M12 0L5.81 3.573v3.574l6.189-3.574 6.191 3.574V3.573zM5.81 10.148v8.144c0 1.85.589 3.243 1.741 4.234S10.177 24 11.973 24s3.269-.482 4.448-1.474c1.179-.991 1.768-2.439 1.768-4.314v-8.064h-3.242v7.85c0 2.036-1.002 3.055-2.974 3.055-1.971 0-2.974-1.02-2.974-3.055v-7.85H5.81z" />
    ),
  },
] as const;

type StatKey = "experience" | "projects" | "certificates" | "courses";

const STAT_CONFIG: { key: StatKey; value: string }[] = [
  { key: "experience", value: "5+" },
  { key: "projects", value: "10+" },
  { key: "certificates", value: "3+" },
  { key: "courses", value: "2+" },
];

interface LandingHeroProps {
  isDarkTheme: boolean;
  onScrollToContent: () => void;
}

export default function LandingHero({ isDarkTheme, onScrollToContent }: LandingHeroProps) {
  const { t } = useLanguage();

  const surface =
    isDarkTheme
      ? "border-white/[0.08] bg-white/[0.03] shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
      : "border-black/[0.06] bg-white/80 shadow-[0_1px_2px_rgba(0,0,0,0.04)]";

  const chip =
    isDarkTheme
      ? "border-white/10 bg-white/[0.06] text-zinc-300"
      : "border-black/10 bg-zinc-100/80 text-zinc-700";

  const muted = isDarkTheme ? "text-zinc-400" : "text-zinc-600";
  const headline = isDarkTheme ? "text-white" : "text-zinc-900";

  return (
    <section
      id="hero"
      className="relative z-10 flex min-h-[100dvh] min-h-screen flex-col scroll-mt-24 px-4 pt-[max(5.5rem,calc(env(safe-area-inset-top,0px)+4.75rem))] pb-0 sm:px-6 sm:pt-28 md:pl-[var(--site-nav-rail-gutter)] md:pr-6 md:pt-28 lg:pr-8"
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden
      >
        <div
          className={`absolute -left-1/4 top-0 h-[min(70vh,520px)] w-[min(90vw,640px)] rounded-full blur-3xl ${
            isDarkTheme
              ? "bg-emerald-500/[0.12]"
              : "bg-emerald-500/[0.18]"
          }`}
        />
        <div
          className={`absolute -right-1/4 bottom-1/4 h-[min(50vh,400px)] w-[min(70vw,480px)] rounded-full blur-3xl ${
            isDarkTheme ? "bg-teal-600/[0.08]" : "bg-teal-500/[0.12]"
          }`}
        />
      </div>

      <div className="relative z-[1] flex min-h-0 flex-1 flex-col">
        <div className="mx-auto flex w-full max-w-6xl min-h-0 flex-1 flex-col justify-center md:justify-start md:py-4 lg:py-6">
        <div className="grid items-center gap-5 sm:gap-10 md:gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="min-w-0 lg:col-span-7">
            <p
              className={`hero-enter mb-3 text-xs font-medium uppercase tracking-[0.2em] sm:mb-4 sm:text-sm ${isDarkTheme ? "text-emerald-400/90" : "text-emerald-700"}`}
            >
              {t("hero.eyebrow")}
            </p>

            <h1
              className={`hero-enter hero-enter-delay-1 ${display.className} text-[1.7rem] font-semibold leading-[1.12] tracking-tight min-[400px]:text-[1.85rem] sm:text-4xl sm:leading-[1.08] md:text-5xl lg:text-[3.25rem] xl:text-6xl ${headline}`}
            >
              {t("hero.title")}
            </h1>

            <p
              className={`hero-enter hero-enter-delay-2 mt-3 text-lg font-medium sm:mt-4 sm:text-xl md:text-2xl ${isDarkTheme ? "text-zinc-200" : "text-zinc-800"}`}
            >
              {t("hero.subtitle")}
            </p>

            <p
              className={`hero-enter hero-enter-delay-2 mt-3 max-w-xl text-sm leading-relaxed sm:mt-5 sm:text-base md:text-lg ${muted}`}
            >
              {t("hero.intro")}
            </p>

            <ul
              className="hero-enter hero-enter-delay-3 mt-6 hidden flex-wrap gap-1.5 sm:mt-8 sm:flex sm:gap-2"
              aria-label="Tech stack"
            >
              {TECH_CHIPS.map((label) => (
                <li key={label}>
                  <span
                    className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] font-medium tracking-wide sm:px-3 sm:py-1.5 sm:text-xs ${chip}`}
                  >
                    {label}
                  </span>
                </li>
              ))}
            </ul>

            <div className="hero-enter hero-enter-delay-4 mt-6 flex flex-col gap-2.5 touch-manipulation sm:mt-8 sm:flex-row sm:items-center sm:gap-3 md:mt-10">
              <a
                href="https://drive.google.com/file/d/1C7Z2dq72Rf2M9uNx2R8bz_Zdu4mkiKv1/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 active:scale-[0.98] sm:min-h-0 sm:px-6 sm:py-3.5"
              >
                <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                {t("hero.viewResume")}
              </a>
              <a
                href="/source/cv-ibrahim-can-erdogan.pdf"
                download
                className={`inline-flex min-h-11 items-center justify-center rounded-xl border px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] sm:min-h-0 sm:px-6 sm:py-3.5 ${
                  isDarkTheme
                    ? "border-emerald-500/40 text-emerald-100 hover:border-emerald-400/60 hover:bg-emerald-500/10 focus-visible:outline-emerald-400"
                    : "border-emerald-700/30 text-emerald-900 hover:bg-emerald-50 focus-visible:outline-emerald-600"
                }`}
              >
                <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                {t("hero.downloadResume")}
              </a>
            </div>

            <nav
              className="hero-enter hero-enter-delay-5 mt-5 w-full min-w-0 sm:mt-8 md:mt-10"
              aria-label="Social links"
            >
              <div className="w-full min-w-0 overflow-x-auto overflow-y-hidden pb-1 [scrollbar-width:none] sm:overflow-visible [&::-webkit-scrollbar]:hidden">
                <div
                  className={`inline-flex min-w-max flex-nowrap items-center gap-0.5 rounded-2xl border p-1 sm:flex-wrap sm:gap-1 sm:p-1.5 ${surface} backdrop-blur-md`}
                >
                  {SOCIAL_LINKS.map(({ href, label, icon }) => (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className={`touch-manipulation rounded-lg p-2 transition sm:rounded-xl sm:p-2.5 ${
                        isDarkTheme
                          ? "text-zinc-400 hover:bg-white/10 hover:text-white"
                          : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900"
                      }`}
                    >
                      <svg className="h-[1.15rem] w-[1.15rem] sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                        {icon}
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </nav>
          </div>

          <div className="hero-enter hero-enter-delay-2 min-w-0 lg:col-span-5">
            <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
              {STAT_CONFIG.map(({ key, value }) => (
                <div
                  key={key}
                  className={`rounded-xl border p-3 transition duration-300 sm:rounded-2xl sm:p-5 motion-safe:hover:-translate-y-0.5 ${surface} backdrop-blur-md`}
                >
                  <div
                    className={`font-semibold tabular-nums ${display.className} text-2xl sm:text-3xl md:text-4xl ${
                      isDarkTheme ? "text-emerald-400" : "text-emerald-700"
                    }`}
                  >
                    {value}
                  </div>
                  <div className={`mt-1 text-xs font-medium leading-snug sm:mt-2 sm:text-sm ${muted}`}>
                    {t(`hero.${key}`)}
                  </div>
                </div>
              ))}
            </div>
            <p
              className={`mt-3 max-md:pb-1 text-center text-[11px] leading-snug sm:mt-4 sm:text-xs ${isDarkTheme ? "text-zinc-500" : "text-zinc-500"}`}
            >
              {t("hero.statsHint")}
            </p>
          </div>
        </div>
        </div>
      </div>

      <div className="relative z-20 flex shrink-0 justify-center border-t border-transparent pt-1 pb-[max(0.75rem,env(safe-area-inset-bottom,0px)+0.5rem)] sm:pt-2 sm:pb-[max(1rem,env(safe-area-inset-bottom,0px)+0.75rem)] md:pb-6">
        <button
          type="button"
          onClick={onScrollToContent}
          className={`group flex touch-manipulation flex-col items-center gap-1.5 rounded-full px-3 py-1.5 text-xs transition sm:gap-2 sm:px-4 sm:py-2 sm:text-sm ${muted} hover:text-emerald-500`}
        >
          <span>{t("hero.scrollDown")}</span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-current/20 transition group-hover:border-emerald-500/40 group-hover:bg-emerald-500/10">
            <svg className="h-4 w-4 motion-safe:animate-[nudge_2s_ease-in-out_infinite]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
}
