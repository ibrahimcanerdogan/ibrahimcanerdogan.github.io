"use client";

import { useCallback, useState } from "react";
import { Space_Grotesk } from "next/font/google";
import { useLanguage } from "@/contexts/LanguageContext";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

type Badge =
  | { kind: "current" }
  | { kind: "months"; count: number };

type RoadmapStep = {
  id: string;
  role: string;
  company: string;
  badge: Badge;
  dateKey: string;
  /** e.g. ['cities.istanbul','cities.turkey','remote'] */
  locationKeys?: string[];
  summaryKey: string;
};

const STEPS: RoadmapStep[] = [
  {
    id: "ebebek-android",
    role: "Android Software Specialist",
    company: "ebebek",
    badge: { kind: "current" },
    dateKey: "experience.ebebek.current.date",
    locationKeys: ["cities.istanbul", "cities.turkey", "remote"],
    summaryKey: "experience.summary.ebebek-android",
  },
  {
    id: "logo-android",
    role: "Android Developer",
    company: "Logo Yazılım",
    badge: { kind: "months", count: 4 },
    dateKey: "experience.logo.android.date",
    summaryKey: "experience.summary.logo-android",
  },
  {
    id: "logo-jr",
    role: "Jr. Android Developer",
    company: "Logo Yazılım",
    badge: { kind: "months", count: 10 },
    dateKey: "experience.logo.jr.date",
    locationKeys: ["cities.izmir", "cities.turkey", "remote"],
    summaryKey: "experience.summary.logo-jr",
  },
  {
    id: "logo-intern",
    role: "Android Developer Intern",
    company: "Logo Yazılım",
    badge: { kind: "months", count: 3 },
    dateKey: "experience.logo.intern.date",
    locationKeys: ["cities.izmir", "cities.turkey"],
    summaryKey: "experience.summary.logo-intern",
  },
  {
    id: "ebebek-it",
    role: "IT Intern",
    company: "ebebek",
    badge: { kind: "months", count: 4 },
    dateKey: "experience.ebebek.intern.date",
    locationKeys: ["cities.istanbul", "cities.turkey"],
    summaryKey: "experience.summary.ebebek-it",
  },
  {
    id: "yapikredi",
    role: "Intern",
    company: "Yapı Kredi",
    badge: { kind: "months", count: 2 },
    dateKey: "experience.yapikredi.date",
    locationKeys: ["cities.akhisar", "cities.manisa", "cities.turkey"],
    summaryKey: "experience.summary.yapikredi",
  },
  {
    id: "qnb",
    role: "Intern",
    company: "QNB Finansbank",
    badge: { kind: "months", count: 1 },
    dateKey: "experience.qnb.date",
    locationKeys: ["cities.balikesir", "cities.turkey"],
    summaryKey: "experience.summary.qnb",
  },
];

function formatLocation(keys: string[] | undefined, t: (k: string) => string): string | null {
  if (!keys?.length) return null;
  const hasRemote = keys.includes("remote");
  const cities = keys.filter((k) => k !== "remote").map((k) => t(k));
  const base = cities.join(", ");
  if (!base && !hasRemote) return null;
  if (hasRemote && base) return `${base} · ${t("experience.remote")}`;
  if (hasRemote) return t("experience.remote");
  return base;
}

type ExperienceRoadmapProps = {
  isDarkTheme: boolean;
};

export default function ExperienceRoadmap({ isDarkTheme }: ExperienceRoadmapProps) {
  const { t } = useLanguage();
  const [openPast, setOpenPast] = useState<Record<string, boolean>>({});

  const togglePast = useCallback((id: string) => {
    setOpenPast((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const shell =
    isDarkTheme
      ? "border-white/[0.08] bg-white/[0.03] shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
      : "border-black/[0.06] bg-white/80 shadow-[0_1px_2px_rgba(0,0,0,0.04)]";

  const card =
    isDarkTheme
      ? "border-white/[0.08] bg-white/[0.02] hover:border-emerald-500/20"
      : "border-zinc-200/80 bg-white/60 hover:border-emerald-200/80";

  const muted = isDarkTheme ? "text-zinc-400" : "text-zinc-600";
  const body = isDarkTheme ? "text-zinc-300" : "text-zinc-700";
  const title = isDarkTheme ? "text-white" : "text-zinc-900";

  return (
    <div
      id="experience"
      className={`relative scroll-mt-28 overflow-hidden rounded-2xl border backdrop-blur-md ${shell}`}
    >
      <div
        className="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 -translate-y-1/2 rounded-full blur-3xl"
        aria-hidden
        style={{
          background: isDarkTheme
            ? "radial-gradient(circle, rgba(16,185,129,0.14) 0%, transparent 65%)"
            : "radial-gradient(circle, rgba(16,185,129,0.2) 0%, transparent 65%)",
        }}
      />

      <div className="relative px-5 py-7 sm:px-8 sm:py-9 lg:px-10">
        <div className="mb-6 max-w-2xl sm:mb-7">
          <p
            className={`text-xs font-semibold uppercase tracking-[0.2em] ${
              isDarkTheme ? "text-emerald-400/90" : "text-emerald-700"
            }`}
          >
            {t("experience.eyebrow")}
          </p>
          <h2
            className={`${display.className} mt-1.5 text-2xl font-semibold tracking-tight sm:mt-2 sm:text-3xl lg:text-4xl ${title}`}
          >
            {t("experience.title")}
          </h2>
          <p className={`mt-2 text-sm leading-relaxed ${muted}`}>
            {t("experience.roadmapSubtitle")}
          </p>
        </div>

        <div className="relative max-w-3xl">
          <div
            className={`absolute left-[15px] top-1.5 bottom-1.5 w-px sm:left-[19px] ${
              isDarkTheme
                ? "bg-gradient-to-b from-emerald-500/45 via-emerald-500/15 to-emerald-500/5"
                : "bg-gradient-to-b from-emerald-400/55 via-emerald-300/25 to-emerald-200/15"
            }`}
            aria-hidden
          />

          <ul className="relative space-y-3 sm:space-y-4">
            {STEPS.map((step) => {
              const loc = formatLocation(step.locationKeys, t);
              const isCurrent = step.badge.kind === "current";
              const expanded = isCurrent || openPast[step.id];

              return (
                <li key={step.id} className="relative flex gap-4 sm:gap-5">
                  <div className="relative z-10 flex w-9 shrink-0 justify-center pt-1.5 sm:w-10">
                    <span
                      className={`h-3 w-3 rounded-full border-2 sm:h-3.5 sm:w-3.5 ${
                        isCurrent
                          ? isDarkTheme
                            ? "border-emerald-400 bg-emerald-500 shadow-[0_0_14px_rgba(52,211,153,0.55)]"
                            : "border-emerald-600 bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.35)]"
                          : isDarkTheme
                            ? "border-zinc-500 bg-zinc-950"
                            : "border-zinc-300 bg-white"
                      }`}
                    />
                  </div>

                  <div className="min-w-0 flex-1 pb-0.5">
                    {isCurrent ? (
                      <>
                        <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                          <time
                            className={`text-xs font-semibold sm:text-sm ${
                              isDarkTheme ? "text-emerald-400/95" : "text-emerald-800"
                            }`}
                          >
                            {t(step.dateKey)}
                          </time>
                          <span
                            className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
                              isDarkTheme
                                ? "bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/30"
                                : "bg-emerald-100 text-emerald-900 ring-1 ring-emerald-600/15"
                            }`}
                          >
                            {t("experience.current")}
                          </span>
                        </div>
                        <div className={`mt-2.5 rounded-xl border p-4 transition-colors sm:p-5 ${card}`}>
                          <h3 className={`text-base font-semibold sm:text-lg ${title}`}>{step.role}</h3>
                          <p
                            className={`mt-0.5 text-sm font-medium ${
                              isDarkTheme ? "text-emerald-400/85" : "text-emerald-700"
                            }`}
                          >
                            {step.company}
                          </p>
                          {loc ? <p className={`mt-2 text-xs ${muted}`}>{loc}</p> : null}
                          <div
                            className={`mt-3 border-t border-dashed pt-3 ${isDarkTheme ? "border-white/[0.08]" : "border-zinc-200/80"}`}
                          >
                            <p className={`text-[10px] font-bold uppercase tracking-wider ${muted}`}>
                              {t("experience.summaryHeading")}
                            </p>
                            <p className={`mt-1.5 text-sm leading-relaxed ${body}`}>{t(step.summaryKey)}</p>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className={`overflow-hidden rounded-xl border transition-colors ${card}`}>
                        <button
                          type="button"
                          id={`experience-trigger-${step.id}`}
                          aria-expanded={expanded}
                          aria-controls={`experience-panel-${step.id}`}
                          aria-label={`${expanded ? t("experience.collapseRole") : t("experience.expandRole")}: ${step.role}, ${step.company}`}
                          onClick={() => togglePast(step.id)}
                          className={`flex w-full items-start gap-3 px-3 py-2.5 text-left transition-colors sm:px-4 sm:py-3 ${
                            isDarkTheme ? "hover:bg-white/[0.04]" : "hover:bg-emerald-500/[0.06]"
                          }`}
                        >
                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                              <time
                                className={`text-[11px] font-semibold sm:text-xs ${
                                  isDarkTheme ? "text-emerald-400/95" : "text-emerald-800"
                                }`}
                              >
                                {t(step.dateKey)}
                              </time>
                              <span className={`text-[10px] font-medium ${muted}`}>
                                {step.badge.kind === "months"
                                  ? `${step.badge.count} ${t("experience.months")}`
                                  : null}
                              </span>
                            </div>
                            <p
                              className={`mt-0.5 text-sm font-semibold sm:text-base ${expanded ? "" : "truncate"} ${title}`}
                            >
                              {step.role}
                            </p>
                            <p
                              className={`text-xs font-medium ${
                                isDarkTheme ? "text-emerald-400/80" : "text-emerald-700"
                              } ${expanded ? "" : "truncate"}`}
                            >
                              {step.company}
                            </p>
                          </div>
                          <span
                            className={`mt-0.5 shrink-0 transition-transform duration-200 ${expanded ? "rotate-180" : ""} ${
                              isDarkTheme ? "text-zinc-500" : "text-zinc-400"
                            }`}
                            aria-hidden
                          >
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                          </span>
                        </button>
                        {expanded ? (
                          <div
                            id={`experience-panel-${step.id}`}
                            role="region"
                            aria-labelledby={`experience-trigger-${step.id}`}
                            className={`space-y-3 border-t border-dashed px-3 pb-4 pt-3 sm:px-4 ${
                              isDarkTheme ? "border-white/[0.08]" : "border-zinc-200/80"
                            }`}
                          >
                            {loc ? <p className={`text-xs ${muted}`}>{loc}</p> : null}
                            <div>
                              <p className={`text-[10px] font-bold uppercase tracking-wider ${muted}`}>
                                {t("experience.summaryHeading")}
                              </p>
                              <p className={`mt-1.5 text-sm leading-relaxed ${body}`}>{t(step.summaryKey)}</p>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
