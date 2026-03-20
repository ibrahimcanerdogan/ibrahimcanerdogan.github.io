"use client";

import { Space_Grotesk } from "next/font/google";
import { useLanguage } from "@/contexts/LanguageContext";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

type ProjectItem = {
  titleKey: string;
  dateKey: string;
  descriptionKey: string;
  repoUrl: string;
  liveDemoUrl?: string;
  tags: readonly string[];
};

const PROJECTS: ProjectItem[] = [
  {
    titleKey: "projects.compose.title",
    dateKey: "projects.compose.date",
    descriptionKey: "projects.compose.description",
    repoUrl: "https://github.com/ibrahimcanerdogan/Awesome-Jetpack-Compose-App-Samples",
    tags: ["Kotlin", "Jetpack Compose", "Material3", "MVVM"],
  },
  {
    titleKey: "projects.mlkit.title",
    dateKey: "projects.mlkit.date",
    descriptionKey: "projects.mlkit.description",
    repoUrl: "https://github.com/ibrahimcanerdogan/Google-MLKit-Android-Apps",
    tags: ["Kotlin", "ML Kit", "CameraX", "Jetpack Compose"],
  },
  {
    titleKey: "projects.boruto.title",
    dateKey: "projects.boruto.date",
    descriptionKey: "projects.boruto.description",
    repoUrl: "https://github.com/ibrahimcanerdogan/JetBorutoKtorServerApp",
    tags: ["Kotlin", "Jetpack Compose", "Ktor", "Clean Architecture"],
  },
  {
    titleKey: "projects.ecotrack.title",
    dateKey: "projects.ecotrack.date",
    descriptionKey: "projects.ecotrack.description",
    repoUrl: "https://github.com/ibrahimcanerdogan/ecotrack",
    liveDemoUrl: "https://ibrahimcanerdogan.github.io/ecotrack",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
  },
  {
    titleKey: "projects.calculator.title",
    dateKey: "projects.calculator.date",
    descriptionKey: "projects.calculator.description",
    repoUrl: "https://github.com/ibrahimcanerdogan/NextCalculator",
    liveDemoUrl: "https://ibrahimcanerdogan.github.io/NextCalculator",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Material Design 3"],
  },
];

type ProjectsSectionProps = {
  isDarkTheme: boolean;
};

export default function ProjectsSection({ isDarkTheme }: ProjectsSectionProps) {
  const { t } = useLanguage();

  const shell =
    isDarkTheme
      ? "border-white/[0.08] bg-white/[0.03] shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
      : "border-black/[0.06] bg-white/80 shadow-[0_1px_2px_rgba(0,0,0,0.04)]";

  const card =
    isDarkTheme
      ? "border-white/[0.08] bg-white/[0.02] hover:border-emerald-500/25 hover:bg-white/[0.04]"
      : "border-zinc-200/80 bg-white/70 hover:border-emerald-200/90 hover:bg-white";

  const innerPanel =
    isDarkTheme
      ? "border-white/[0.06] bg-gradient-to-br from-emerald-500/[0.07] via-white/[0.02] to-teal-500/[0.05]"
      : "border-emerald-100/80 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/50";

  const chip =
    isDarkTheme
      ? "border border-emerald-500/20 bg-emerald-500/10 text-emerald-200/95"
      : "border border-emerald-200/70 bg-emerald-50/90 text-emerald-900";

  const demoBtn =
    isDarkTheme
      ? "border border-emerald-500/35 bg-emerald-500/12 text-emerald-300 hover:bg-emerald-500/20"
      : "border border-emerald-600/25 bg-emerald-50 text-emerald-900 hover:bg-emerald-100";

  const muted = isDarkTheme ? "text-zinc-400" : "text-zinc-600";
  const title = isDarkTheme ? "text-white" : "text-zinc-900";
  const body = isDarkTheme ? "text-zinc-300" : "text-zinc-700";

  return (
    <section id="projects" className="relative scroll-mt-28">
      <div className={`relative overflow-hidden rounded-2xl border backdrop-blur-md ${shell}`}>
        <div
          className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full blur-3xl sm:h-72 sm:w-72"
          aria-hidden
          style={{
            background: isDarkTheme
              ? "radial-gradient(circle, rgba(16,185,129,0.14) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(16,185,129,0.2) 0%, transparent 70%)",
          }}
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 h-52 w-52 rounded-full blur-3xl"
          aria-hidden
          style={{
            background: isDarkTheme
              ? "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
          }}
        />

        <div className="relative px-6 py-10 sm:px-10 sm:py-12">
          <header className="mb-10 max-w-2xl">
            <p
              className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                isDarkTheme ? "text-emerald-400/90" : "text-emerald-700"
              }`}
            >
              {t("projects.eyebrow")}
            </p>
            <h2
              className={`${display.className} mt-2 text-3xl font-semibold tracking-tight sm:text-4xl ${title}`}
            >
              {t("projects.title")}
            </h2>
            <p className={`mt-3 text-sm leading-relaxed sm:text-base ${muted}`}>
              {t("projects.subtitle")}
            </p>
          </header>

          <ul className="grid list-none gap-6 p-0 sm:grid-cols-2 sm:items-start xl:grid-cols-3">
            {PROJECTS.map((project) => (
              <li key={project.titleKey} className="min-w-0">
                <article
                  className={`flex h-full flex-col rounded-xl border p-5 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${card}`}
                >
                  <div className="mb-3 flex items-start gap-3">
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                        isDarkTheme ? "bg-white/[0.06] text-zinc-300" : "bg-zinc-100 text-zinc-700"
                      }`}
                      aria-hidden
                    >
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </span>
                    <div className="min-w-0 flex-1 text-left">
                      <h3 className={`text-base font-semibold leading-snug sm:text-lg ${title}`}>
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-start gap-1.5 underline-offset-4 transition-colors hover:underline ${
                            isDarkTheme
                              ? "text-white hover:text-emerald-300"
                              : "text-zinc-900 hover:text-emerald-800"
                          }`}
                        >
                          <span className="line-clamp-2 min-w-0">{t(project.titleKey)}</span>
                          <svg
                            className="mt-0.5 h-3.5 w-3.5 shrink-0 opacity-60"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            aria-hidden
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </h3>
                      <p
                        className={`mt-1.5 text-xs font-medium tabular-nums sm:text-sm ${
                          isDarkTheme ? "text-emerald-400/90" : "text-emerald-700"
                        }`}
                      >
                        {t(project.dateKey)}
                      </p>
                    </div>
                  </div>

                  <div className={`mt-4 flex flex-1 flex-col rounded-lg border p-4 ${innerPanel}`}>
                    <p className={`text-sm leading-relaxed ${body}`}>{t(project.descriptionKey)}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium sm:text-xs ${chip}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.liveDemoUrl ? (
                      <div
                        className={`mt-4 border-t border-dashed pt-4 ${
                          isDarkTheme ? "border-white/[0.08]" : "border-zinc-200/80"
                        }`}
                      >
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold transition-colors ${demoBtn}`}
                        >
                          {t("projects.liveDemo")}
                          <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    ) : null}
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
