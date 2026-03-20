"use client";

import { Space_Grotesk } from "next/font/google";
import { useLanguage } from "@/contexts/LanguageContext";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const EMAIL = "ibrahimcanerdogan@outlook.com";

const SOCIALS = [
  {
    href: "https://github.com/ibrahimcanerdogan",
    label: "GitHub",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
        />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/in/ibrahimcanerdogan/",
    label: "LinkedIn",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: "https://medium.com/@ibrahimcanerdogan",
    label: "Medium",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
      </svg>
    ),
  },
  {
    href: "https://www.youtube.com/@ibrahimcanerdogan",
    label: "YouTube",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    href: "https://www.udemy.com/user/ibrahim-can-erdogan/",
    label: "Udemy",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M12 0L5.81 3.573v3.574l6.189-3.574 6.191 3.574V3.573zM5.81 10.148v8.144c0 1.85.589 3.243 1.741 4.234S10.177 24 11.973 24s3.269-.482 4.448-1.474c1.179-.991 1.768-2.439 1.768-4.314v-8.064h-3.242v7.85c0 2.036-1.002 3.055-2.974 3.055-1.971 0-2.974-1.02-2.974-3.055v-7.85H5.81z" />
      </svg>
    ),
  },
] as const;

type SiteFooterProps = {
  isDarkTheme: boolean;
};

export default function SiteFooter({ isDarkTheme }: SiteFooterProps) {
  const { t } = useLanguage();

  const shell =
    isDarkTheme
      ? "border-white/[0.08] bg-white/[0.03] shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
      : "border-black/[0.06] bg-white/80 shadow-[0_1px_2px_rgba(0,0,0,0.04)]";

  const socialBtn =
    isDarkTheme
      ? "border-white/[0.1] bg-white/[0.04] text-zinc-300 hover:border-emerald-500/35 hover:bg-emerald-500/10 hover:text-emerald-200"
      : "border-zinc-200/90 bg-white text-zinc-600 hover:border-emerald-200 hover:bg-emerald-50/80 hover:text-emerald-900";

  const mailBtn =
    isDarkTheme
      ? "border border-emerald-500/35 bg-emerald-500/12 text-emerald-300 hover:bg-emerald-500/20"
      : "border border-emerald-600/25 bg-emerald-50 text-emerald-900 hover:bg-emerald-100";

  const muted = isDarkTheme ? "text-zinc-400" : "text-zinc-600";
  const title = isDarkTheme ? "text-white" : "text-zinc-900";

  return (
    <footer
      id="contact"
      className={`relative z-20 scroll-mt-28 border-t pt-10 pb-6 ${
        isDarkTheme ? "border-white/[0.06] bg-gray-950" : "border-zinc-200/80 bg-zinc-50/80"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className={`relative overflow-hidden rounded-2xl border backdrop-blur-md ${shell}`}>
          <div
            className="pointer-events-none absolute -left-20 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full blur-3xl"
            aria-hidden
            style={{
              background: isDarkTheme
                ? "radial-gradient(circle, rgba(16,185,129,0.14) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(16,185,129,0.2) 0%, transparent 70%)",
            }}
          />
          <div
            className="pointer-events-none absolute -right-16 bottom-0 h-48 w-48 rounded-full blur-3xl"
            aria-hidden
            style={{
              background: isDarkTheme
                ? "radial-gradient(circle, rgba(52,211,153,0.08) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(110,231,183,0.15) 0%, transparent 70%)",
            }}
          />

          <div className="relative px-6 py-10 sm:px-10 sm:py-12">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-xl">
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                    isDarkTheme ? "text-emerald-400/90" : "text-emerald-700"
                  }`}
                >
                  {t("footer.eyebrow")}
                </p>
                <p className={`${display.className} mt-2 text-2xl font-semibold tracking-tight sm:text-3xl ${title}`}>
                  {t("hero.title")}
                </p>
                <p className={`mt-1 text-sm font-medium ${isDarkTheme ? "text-emerald-400/85" : "text-emerald-700"}`}>
                  {t("hero.subtitle")}
                </p>
                <p className={`mt-4 text-sm leading-relaxed sm:text-base ${muted}`}>{t("footer.subtitle")}</p>

                <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
                  <a
                    href={`mailto:${EMAIL}`}
                    className={`inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${mailBtn}`}
                  >
                    <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {EMAIL}
                  </a>
                  <span className={`inline-flex items-center gap-2 text-sm ${muted}`}>
                    <svg className="h-4 w-4 shrink-0 opacity-70" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {t("footer.location")}
                  </span>
                </div>
              </div>

              <div>
                <p className={`mb-3 text-xs font-semibold uppercase tracking-[0.2em] ${muted}`}>{t("footer.socialLabel")}</p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {SOCIALS.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-colors ${socialBtn}`}
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div
              className={`mt-10 border-t pt-6 text-center text-xs sm:text-sm ${muted} ${
                isDarkTheme ? "border-white/[0.08]" : "border-zinc-200/80"
              }`}
            >
              {t("footer.copyright")}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
