"use client";

import { Space_Grotesk } from "next/font/google";
import { useLanguage } from "@/contexts/LanguageContext";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const CERT_ITEMS = [
  {
    titleKey: "certificates.neo.title",
    companyKey: "certificates.neo.company",
    dateKey: "certificates.neo.date",
    qualificationId: "67ce94df183680903a4d2d761741631567829",
  },
  {
    titleKey: "certificates.udemy.title",
    companyKey: "certificates.udemy.company",
    dateKey: "certificates.udemy.date",
    qualificationId: "UC-cfb6d7d6-efd1-4a65-80d8-de0add5f6308",
  },
  {
    titleKey: "certificates.meta.title",
    companyKey: "certificates.meta.company",
    dateKey: "certificates.meta.date",
    qualificationId: "CFX39BKNZSTW",
  },
] as const;

type CertificatesSectionProps = {
  isDarkTheme: boolean;
};

export default function CertificatesSection({ isDarkTheme }: CertificatesSectionProps) {
  const { t } = useLanguage();

  const shell =
    isDarkTheme
      ? "border-white/[0.08] bg-white/[0.03] shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
      : "border-black/[0.06] bg-white/80 shadow-[0_1px_2px_rgba(0,0,0,0.04)]";

  const card =
    isDarkTheme
      ? "border-white/[0.08] bg-white/[0.02] hover:border-emerald-500/25 hover:bg-white/[0.04]"
      : "border-zinc-200/80 bg-white/70 hover:border-emerald-200/90 hover:bg-white";

  const muted = isDarkTheme ? "text-zinc-400" : "text-zinc-600";
  const title = isDarkTheme ? "text-white" : "text-zinc-900";

  return (
    <section
      id="certificates"
      className={`relative scroll-mt-28 overflow-hidden rounded-2xl border backdrop-blur-md ${shell}`}
    >
      <div
        className="pointer-events-none absolute -right-16 top-0 h-56 w-56 rounded-full blur-3xl sm:h-72 sm:w-72"
        aria-hidden
        style={{
          background: isDarkTheme
            ? "radial-gradient(circle, rgba(16,185,129,0.14) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(16,185,129,0.22) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-12 h-48 w-48 rounded-full blur-3xl"
        aria-hidden
        style={{
          background: isDarkTheme
            ? "radial-gradient(circle, rgba(52,211,153,0.08) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(110,231,183,0.2) 0%, transparent 70%)",
        }}
      />

      <div className="relative px-6 py-10 sm:px-10 sm:py-12">
        <header className="mb-10 max-w-2xl">
          <p
            className={`text-xs font-semibold uppercase tracking-[0.2em] ${
              isDarkTheme ? "text-emerald-400/90" : "text-emerald-700"
            }`}
          >
            {t("certificates.eyebrow")}
          </p>
          <h2
            className={`${display.className} mt-2 text-3xl font-semibold tracking-tight sm:text-4xl ${title}`}
          >
            {t("certificates.title")}
          </h2>
          <p className={`mt-3 text-sm leading-relaxed sm:text-base ${muted}`}>
            {t("certificates.subtitle")}
          </p>
        </header>

        <ul className="grid list-none gap-5 p-0 md:grid-cols-3 md:items-stretch">
          {CERT_ITEMS.map((item) => (
            <li key={item.titleKey} className="min-w-0">
              <article
                className={`flex h-full min-h-full flex-col gap-5 rounded-xl border p-5 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${card}`}
              >
                <div className="flex min-h-0 flex-1 gap-3">
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                      isDarkTheme ? "bg-emerald-500/12 text-emerald-400" : "bg-emerald-100 text-emerald-700"
                    }`}
                    aria-hidden
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </span>
                  <div className="min-w-0 flex-1 text-left">
                    <h3
                      className={`min-h-[3.75rem] text-base font-semibold leading-snug sm:min-h-[4.25rem] sm:text-lg ${title} line-clamp-3`}
                    >
                      {t(item.titleKey)}
                    </h3>
                    <p
                      className={`mt-1 min-h-[1.25rem] text-left text-sm font-medium leading-snug ${
                        isDarkTheme ? "text-emerald-400/90" : "text-emerald-700"
                      }`}
                    >
                      {t(item.companyKey)}
                    </p>
                    <p className={`mt-1 min-h-[1rem] text-left text-xs leading-relaxed ${muted}`}>
                      {t(item.dateKey)}
                    </p>
                  </div>
                </div>
                <div
                  className={`shrink-0 border-t border-dashed pt-5 ${
                    isDarkTheme ? "border-white/[0.08]" : "border-zinc-200/80"
                  }`}
                >
                  <p className={`text-[10px] font-bold uppercase tracking-wider ${muted}`}>
                    {t("certificates.qualification")}
                  </p>
                  <p
                    className={`mt-1.5 break-all font-mono text-[11px] leading-relaxed ${
                      isDarkTheme ? "text-zinc-300" : "text-zinc-700"
                    }`}
                  >
                    {item.qualificationId}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
