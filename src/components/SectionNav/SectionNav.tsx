"use client";

import { useCallback, useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

/** DOM / scroll-spy order — keep in sync with `src/app/page.tsx` main sections (after hero). */
type SectionId =
  | "hero"
  | "about"
  | "experience"
  | "projects"
  | "courses"
  | "certificates"
  | "youtube"
  | "contact";

const SECTION_ORDER: SectionId[] = [
  "hero",
  "about",
  "experience",
  "projects",
  "courses",
  "certificates",
  "youtube",
  "contact",
];

const NAV_CONFIG: { id: SectionId; labelKey: string }[] = [
  { id: "hero", labelKey: "nav.hero" },
  { id: "about", labelKey: "nav.about" },
  { id: "experience", labelKey: "nav.experience" },
  { id: "projects", labelKey: "nav.projects" },
  { id: "courses", labelKey: "nav.courses" },
  { id: "certificates", labelKey: "nav.certificates" },
  { id: "youtube", labelKey: "nav.youtube" },
  { id: "contact", labelKey: "nav.contact" },
];

function NavIcon({ id, className }: { id: SectionId; className?: string }) {
  const cn = className ?? "h-4 w-4";
  switch (id) {
    case "hero":
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5L12 3l9 7.5V20a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1v-9.5z" />
        </svg>
      );
    case "about":
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM5 21v-1a7 7 0 0114 0v1" />
        </svg>
      );
    case "experience":
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case "projects":
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      );
    case "courses":
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      );
    case "certificates":
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      );
    case "youtube":
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    case "contact":
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    default:
      return null;
  }
}

type SectionNavProps = {
  isDarkTheme: boolean;
};

export default function SectionNav({ isDarkTheme }: SectionNavProps) {
  const { t } = useLanguage();
  const [active, setActive] = useState<SectionId>("hero");

  const scrollTo = useCallback((id: SectionId) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  useEffect(() => {
    const ACTIVATION_Y = 0.3;

    let raf = 0;
    const updateActive = () => {
      const line = window.innerHeight * ACTIVATION_Y;
      const doc = document.documentElement;
      const maxScrollY = Math.max(0, doc.scrollHeight - window.innerHeight);
      const nearDocumentEnd =
        maxScrollY > 0 && window.scrollY >= maxScrollY - Math.max(8, window.innerHeight * 0.04);

      let next: SectionId = SECTION_ORDER[0];
      for (const id of SECTION_ORDER) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= line) next = id;
      }

      if (nearDocumentEnd && document.getElementById("contact")) {
        next = "contact";
      }

      setActive((prev) => (prev === next ? prev : next));
    };

    const onScrollOrResize = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        raf = 0;
        updateActive();
      });
    };

    updateActive();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  const rail =
    isDarkTheme
      ? "border-white/10 bg-gray-900/95 shadow-[0_4px_24px_rgba(0,0,0,0.45)]"
      : "border-gray-200/90 bg-white/95 shadow-[0_4px_20px_rgba(15,23,42,0.12)]";

  const line =
    isDarkTheme
      ? "bg-gradient-to-b from-emerald-500/25 via-emerald-400/15 to-teal-500/20"
      : "bg-gradient-to-b from-emerald-400/40 via-emerald-500/25 to-teal-400/35";

  const idleBtn =
    isDarkTheme
      ? "text-zinc-400 hover:bg-white/[0.1] hover:text-emerald-300 hover:shadow-[0_0_14px_rgba(52,211,153,0.12)]"
      : "text-zinc-600 hover:bg-emerald-500/12 hover:text-emerald-800 hover:shadow-[0_2px_12px_rgba(16,185,129,0.15)]";

  const activeBtn =
    isDarkTheme
      ? "bg-emerald-500/20 text-emerald-300 shadow-[0_0_16px_rgba(52,211,153,0.32)] ring-1 ring-emerald-400/35"
      : "bg-emerald-500/15 text-emerald-900 shadow-[0_0_14px_rgba(16,185,129,0.22)] ring-1 ring-emerald-600/25";

  const aria = t("nav.ariaLabel");

  const renderRailButton = (id: SectionId, labelKey: string, animationDelayMs: number) => {
    const isActive = active === id;
    const label = t(labelKey);
    const baseBtn =
      isDarkTheme ? "focus-visible:outline-emerald-400/70" : "focus-visible:outline-emerald-600/70";

    return (
      <button
        key={id}
        type="button"
        onClick={() => scrollTo(id)}
        title={label}
        aria-label={label}
        aria-current={isActive ? "location" : undefined}
        style={{ animationDelay: `${animationDelayMs}ms` }}
        className={`section-nav-node group relative z-[1] flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-[transform,box-shadow,background-color,color,ring-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.08] active:scale-[0.94] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:transition-colors motion-reduce:hover:scale-100 motion-reduce:active:scale-100 ${baseBtn} ${isActive ? activeBtn : idleBtn}`}
      >
        <span className="flex items-center justify-center transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 group-active:scale-95 motion-reduce:transition-none motion-reduce:group-hover:scale-100">
          <NavIcon id={id} className="h-[15px] w-[15px]" />
        </span>
      </button>
    );
  };

  return (
    <>
      <div className="fixed left-[max(1rem,env(safe-area-inset-left))] top-[max(1rem,env(safe-area-inset-top))] z-[110] md:hidden">
        <LanguageSwitcher isDarkTheme={isDarkTheme} />
      </div>

      <div className="pointer-events-none fixed left-4 top-0 z-[100] hidden h-dvh md:inline-flex md:flex-col md:items-center">
        <div className="pointer-events-auto shrink-0 pt-4">
          <LanguageSwitcher isDarkTheme={isDarkTheme} />
        </div>
        <div className="pointer-events-auto absolute left-1/2 top-1/2 w-10 -translate-x-1/2 -translate-y-1/2">
          <nav
            className={`section-nav-rail relative isolate z-[100] flex w-10 shrink-0 flex-col items-stretch overflow-hidden rounded-full border py-5 transition-shadow duration-500 ease-out ${rail}`}
            aria-label={aria}
          >
            <div
              className={`section-nav-line pointer-events-none absolute inset-y-5 left-1/2 w-px -translate-x-1/2 ${line}`}
              aria-hidden
            />
            <div
              className={`relative flex w-full flex-col items-center justify-between gap-0 overflow-y-auto overflow-x-hidden px-0 py-3 min-h-[30rem] max-h-[min(40rem,calc(100dvh-4rem))]`}
            >
              {NAV_CONFIG.map(({ id, labelKey }, index) => renderRailButton(id, labelKey, 90 + index * 48))}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
