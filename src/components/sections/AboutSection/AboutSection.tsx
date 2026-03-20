"use client";

import { Space_Grotesk } from "next/font/google";
import { useLanguage } from "@/contexts/LanguageContext";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const STACK_TAGS = [
  "Kotlin",
  "Jetpack Compose",
  "Material 3",
  "Coroutines",
  "Clean Architecture",
  "Next.js",
] as const;

type AboutSectionProps = {
  isDarkTheme: boolean;
};

export default function AboutSection({ isDarkTheme }: AboutSectionProps) {
  const { t } = useLanguage();

  const surface =
    isDarkTheme
      ? "border-white/[0.08] bg-white/[0.03] shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
      : "border-black/[0.06] bg-white/80 shadow-[0_1px_2px_rgba(0,0,0,0.04)]";

  const sideCard =
    isDarkTheme
      ? "border-white/[0.1] bg-gradient-to-br from-emerald-500/[0.08] via-white/[0.02] to-violet-500/[0.06]"
      : "border-emerald-200/40 bg-gradient-to-br from-emerald-50/90 via-white to-violet-50/60";

  const chip =
    isDarkTheme
      ? "border-white/10 bg-white/[0.06] text-zinc-200"
      : "border-emerald-200/60 bg-white/90 text-zinc-800";

  const muted = isDarkTheme ? "text-zinc-400" : "text-zinc-600";
  const body = isDarkTheme ? "text-zinc-300" : "text-zinc-700";

  return (
    <div
      id="about"
      className={`relative w-full scroll-mt-28 overflow-hidden rounded-2xl border backdrop-blur-md ${surface}`}
    >
      <div
        className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full blur-3xl sm:h-80 sm:w-80"
        aria-hidden
        style={{
          background: isDarkTheme
            ? "radial-gradient(circle, rgba(16,185,129,0.2) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(16,185,129,0.25) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-16 h-56 w-56 rounded-full blur-3xl"
        aria-hidden
        style={{
          background: isDarkTheme
            ? "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="relative grid gap-10 p-8 sm:p-10 lg:grid-cols-12 lg:gap-12">
        <div className="flex min-w-0 flex-col justify-center space-y-6 lg:col-span-7">
          <p
            className={`text-xs font-semibold uppercase tracking-[0.2em] ${
              isDarkTheme ? "text-emerald-400/90" : "text-emerald-700"
            }`}
          >
            {t("about.eyebrow")}
          </p>
          <h2
            className={`${display.className} text-3xl font-semibold tracking-tight sm:text-4xl ${
              isDarkTheme ? "text-white" : "text-zinc-900"
            }`}
          >
            {t("about.title")}
          </h2>
          <div
            className={`grid gap-6 text-base leading-relaxed md:grid-cols-2 md:gap-8 ${body}`}
          >
            <p>{t("about.description1")}</p>
            <p>{t("about.description2")}</p>
          </div>
          <p className={`text-base leading-relaxed ${body}`}>{t("about.freelance")}</p>
          <div
            className={`border-t pt-6 ${isDarkTheme ? "border-white/[0.08]" : "border-zinc-200/80"}`}
          >
            <p className={`text-sm ${muted}`}>
              <span
                className={`font-semibold ${
                  isDarkTheme ? "text-emerald-400/90" : "text-emerald-700"
                }`}
              >
                {t("about.contact")}
              </span>{" "}
              <a
                href="mailto:ibrahimcanerdogan@outlook.com"
                className={`font-medium underline decoration-emerald-500/40 underline-offset-4 transition-colors ${
                  isDarkTheme
                    ? "text-emerald-300 hover:text-emerald-200 hover:decoration-emerald-400/60"
                    : "text-emerald-700 hover:text-emerald-800 hover:decoration-emerald-600/50"
                }`}
              >
                {t("about.email")}
              </a>
            </p>
          </div>
        </div>

        <div className="flex min-w-0 lg:col-span-5">
          <div
            className={`flex w-full flex-col justify-between gap-8 rounded-xl border p-6 sm:p-7 ${sideCard}`}
          >
            <div className="relative">
              <span
                className={`pointer-events-none absolute -left-1 -top-3 font-serif text-5xl leading-none opacity-[0.18] select-none ${
                  isDarkTheme ? "text-emerald-400" : "text-emerald-600"
                }`}
                aria-hidden
              >
                &ldquo;
              </span>
              <p
                className={`relative pl-1 text-lg font-medium leading-snug sm:text-xl ${
                  isDarkTheme ? "text-zinc-100" : "text-zinc-900"
                }`}
              >
                {t("about.highlight")}
              </p>
            </div>
            <div>
              <p
                className={`mb-3 text-xs font-semibold uppercase tracking-[0.18em] ${
                  isDarkTheme ? "text-emerald-400/80" : "text-emerald-800"
                }`}
              >
                {t("about.stackTitle")}
              </p>
              <div className="flex flex-wrap gap-2">
                {STACK_TAGS.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-full border px-3 py-1.5 text-xs font-medium ${chip}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
