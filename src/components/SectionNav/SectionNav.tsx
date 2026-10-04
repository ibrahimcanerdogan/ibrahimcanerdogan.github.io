"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export type SectionId =
  | "hero"
  | "about"
  | "experience"
  | "projects"
  | "expertise"
  | "teaching"
  | "certificates"
  | "contact";

const NAV_CONFIG: { id: SectionId; labelKey: string }[] = [
  { id: "hero", labelKey: "nav.hero" },
  { id: "about", labelKey: "nav.about" },
  { id: "experience", labelKey: "nav.experience" },
  { id: "projects", labelKey: "nav.projects" },
  { id: "expertise", labelKey: "nav.expertise" },
  { id: "teaching", labelKey: "nav.teaching" },
  { id: "certificates", labelKey: "nav.certificates" },
  { id: "contact", labelKey: "nav.contact" },
];

function NavIcon({ id, className = "h-4 w-4" }: { id: SectionId; className?: string }) {
  if (id === "hero") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5L12 3l9 7.5V20a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1v-9.5z" />
      </svg>
    );
  }
  if (id === "about") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM5 21v-1a7 7 0 0114 0v1" />
      </svg>
    );
  }
  if (id === "experience") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    );
  }
  if (id === "projects") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    );
  }
  if (id === "expertise") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5m9.25-11.396v5.714c0 .597.237 1.169.659 1.591L19 14.5M6.75 3h10.5M5.5 14.5h13M7 21h10a2 2 0 001.789-2.894L15 10.528V3H9v7.528l-3.789 7.578A2 2 0 007 21z" />
      </svg>
    );
  }
  if (id === "teaching") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    );
  }
  if (id === "certificates") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    );
  }
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

type SectionNavProps = {
  isDarkTheme: boolean;
  activeSection: SectionId;
  onSectionChange: (section: SectionId) => void;
};

export default function SectionNav({ isDarkTheme, activeSection, onSectionChange }: SectionNavProps) {
  const { t } = useLanguage();

  const rail = isDarkTheme
    ? "border-white/10 bg-zinc-950/85 shadow-[0_18px_60px_rgba(0,0,0,0.35)]"
    : "border-zinc-200/90 bg-white/85 shadow-[0_18px_50px_rgba(24,24,27,0.09)]";
  const line = isDarkTheme
    ? "bg-gradient-to-b from-emerald-500/15 via-emerald-400/35 to-emerald-500/15"
    : "bg-gradient-to-b from-emerald-400/20 via-emerald-600/35 to-emerald-400/20";
  const idle = isDarkTheme
    ? "bg-zinc-950 text-zinc-500 hover:bg-zinc-900 hover:text-zinc-200"
    : "bg-white text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900";
  const active = isDarkTheme
    ? "bg-emerald-400 text-zinc-950 shadow-[0_0_22px_rgba(52,211,153,0.3)]"
    : "bg-emerald-600 text-white shadow-[0_0_18px_rgba(5,150,105,0.2)]";

  const move = (current: SectionId, delta: number) => {
    const index = NAV_CONFIG.findIndex((item) => item.id === current);
    const next = NAV_CONFIG[(index + delta + NAV_CONFIG.length) % NAV_CONFIG.length];
    onSectionChange(next.id);
    window.requestAnimationFrame(() => {
      document.getElementById("section-nav-" + next.id)?.focus();
    });
  };

  return (
    <>
      <div className="fixed left-[max(0.75rem,env(safe-area-inset-left))] top-[max(0.75rem,env(safe-area-inset-top))] z-[120] md:left-4 md:top-4">
        <LanguageSwitcher isDarkTheme={isDarkTheme} />
      </div>

      <div className="pointer-events-none fixed left-4 top-0 z-[100] hidden h-dvh md:flex md:items-center">
        <nav
          aria-label={t("nav.ariaLabel")}
          className={"section-nav-rail pointer-events-auto relative flex w-12 flex-col items-center rounded-full border px-1.5 py-4 backdrop-blur-xl " + rail}
        >
          <div className={"section-nav-line pointer-events-none absolute bottom-6 left-1/2 top-6 w-px -translate-x-1/2 " + line} aria-hidden />
          <div className="relative z-10 flex flex-col gap-2">
            {NAV_CONFIG.map(({ id, labelKey }, index) => {
              const isActive = activeSection === id;
              const label = t(labelKey);
              return (
                <button
                  id={"section-nav-" + id}
                  key={id}
                  type="button"
                  onClick={() => onSectionChange(id)}
                  onKeyDown={(event) => {
                    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
                      event.preventDefault();
                      move(id, 1);
                    }
                    if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
                      event.preventDefault();
                      move(id, -1);
                    }
                  }}
                  aria-label={label}
                  aria-current={isActive ? "page" : undefined}
                  title={label}
                  style={{ animationDelay: String(70 + index * 35) + "ms" }}
                  className={"section-nav-node group relative flex h-8 w-8 items-center justify-center rounded-full transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 " + (isActive ? active : idle)}
                >
                  <NavIcon id={id} className="h-[14px] w-[14px]" />
                  <span className={"pointer-events-none absolute left-11 whitespace-nowrap rounded-lg border px-2.5 py-1.5 text-[11px] font-semibold opacity-0 shadow-lg backdrop-blur-xl transition group-hover:opacity-100 group-focus-visible:opacity-100 " + (isDarkTheme ? "border-white/10 bg-zinc-950/95 text-zinc-200" : "border-zinc-200 bg-white/95 text-zinc-800")}>
                    {label}
                  </span>
                </button>
              );
            })}
          </div>
        </nav>
      </div>

      <nav
        aria-label={t("nav.ariaLabel")}
        className={"fixed bottom-[max(0.6rem,env(safe-area-inset-bottom))] left-1/2 z-[120] flex -translate-x-1/2 items-center gap-1 rounded-2xl border p-1.5 backdrop-blur-xl md:hidden " + rail}
      >
        {NAV_CONFIG.map(({ id, labelKey }) => {
          const isActive = activeSection === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => onSectionChange(id)}
              aria-label={t(labelKey)}
              aria-current={isActive ? "page" : undefined}
              className={"flex h-8 w-8 items-center justify-center rounded-xl transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400 " + (isActive ? active : idle)}
            >
              <NavIcon id={id} className="h-[13px] w-[13px]" />
            </button>
          );
        })}
      </nav>
    </>
  );
}
