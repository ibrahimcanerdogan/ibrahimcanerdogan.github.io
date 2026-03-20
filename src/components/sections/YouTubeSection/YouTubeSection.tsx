"use client";

import { Space_Grotesk } from "next/font/google";
import { useLanguage } from "@/contexts/LanguageContext";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const CHANNEL_URL = "https://www.youtube.com/@ibrahimcanerdogan";

const VIDEOS = [
  {
    embedSrc: "https://www.youtube.com/embed/sVB5CDGcuBc",
    titleKey: "youtube.video1.title",
    descriptionKey: "youtube.video1.description",
  },
  {
    embedSrc: "https://www.youtube.com/embed/TeAg03D_gCk",
    titleKey: "youtube.video2.title",
    descriptionKey: "youtube.video2.description",
  },
  {
    embedSrc: "https://www.youtube.com/embed/zYGIMyqopWY",
    titleKey: "youtube.video3.title",
    descriptionKey: "youtube.video3.description",
  },
] as const;

type YouTubeSectionProps = {
  isDarkTheme: boolean;
};

export default function YouTubeSection({ isDarkTheme }: YouTubeSectionProps) {
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

  const channelBtn =
    isDarkTheme
      ? "border border-emerald-500/35 bg-emerald-500/12 text-emerald-300 hover:bg-emerald-500/20"
      : "border border-emerald-600/25 bg-emerald-50 text-emerald-900 hover:bg-emerald-100";

  const muted = isDarkTheme ? "text-zinc-400" : "text-zinc-600";
  const title = isDarkTheme ? "text-white" : "text-zinc-900";
  const body = isDarkTheme ? "text-zinc-300" : "text-zinc-700";

  return (
    <section id="youtube" className="relative scroll-mt-28">
      <div className={`relative overflow-hidden rounded-2xl border backdrop-blur-md ${shell}`}>
        <div
          className="pointer-events-none absolute -left-16 top-0 h-56 w-56 rounded-full blur-3xl sm:h-72 sm:w-72"
          aria-hidden
          style={{
            background: isDarkTheme
              ? "radial-gradient(circle, rgba(239,68,68,0.1) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(239,68,68,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          className="pointer-events-none absolute -right-12 bottom-0 h-52 w-52 rounded-full blur-3xl"
          aria-hidden
          style={{
            background: isDarkTheme
              ? "radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(16,185,129,0.18) 0%, transparent 70%)",
          }}
        />

        <div className="relative px-6 py-10 sm:px-10 sm:py-12">
          <header className="mb-10 max-w-2xl">
            <p
              className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                isDarkTheme ? "text-emerald-400/90" : "text-emerald-700"
              }`}
            >
              {t("youtube.eyebrow")}
            </p>
            <h2
              className={`${display.className} mt-2 text-3xl font-semibold tracking-tight sm:text-4xl ${title}`}
            >
              {t("youtube.title")}
            </h2>
            <p className={`mt-3 text-sm leading-relaxed sm:text-base ${muted}`}>{t("youtube.subtitle")}</p>
            <a
              href={CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors sm:w-auto sm:justify-start ${channelBtn}`}
            >
              <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              {t("youtube.channelCta")}
            </a>
          </header>

          <ul className="grid list-none gap-6 p-0 md:grid-cols-2 lg:grid-cols-3">
            {VIDEOS.map((video) => (
              <li key={video.embedSrc} className="flex min-h-0 min-w-0">
                <article
                  className={`flex h-full min-h-0 w-full flex-col overflow-hidden rounded-xl border transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${card}`}
                >
                  <div className="relative h-0 shrink-0 bg-black/20 pb-[56.25%]">
                    <iframe
                      className="absolute left-0 top-0 h-full w-full"
                      src={video.embedSrc}
                      title={t(video.titleKey)}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className={`flex min-h-0 flex-1 flex-col border-t p-5 ${innerPanel}`}>
                    <h3 className={`text-base font-semibold leading-snug sm:text-lg ${title}`}>{t(video.titleKey)}</h3>
                    <p className={`mt-2 flex-1 text-sm leading-relaxed ${body}`}>{t(video.descriptionKey)}</p>
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
