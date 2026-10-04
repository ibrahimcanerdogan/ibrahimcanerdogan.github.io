"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import SectionNav, { type SectionId } from "@/components/SectionNav/SectionNav";
import PortfolioStage from "@/components/PortfolioStage";
import { routeFor, type Locale } from "@/lib/seo";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function PortfolioApp({ initialSection, locale }: { initialSection: SectionId; locale: Locale }) {
  return <LanguageProvider initialLanguage={locale}><PortfolioScreen initialSection={initialSection} locale={locale} /></LanguageProvider>;
}

function PortfolioScreen({ initialSection, locale }: { initialSection: SectionId; locale: Locale }) {
  const router = useRouter();
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const handleSectionChange = useCallback((section: SectionId) => router.push(routeFor(locale, section)), [locale, router]);
  return (
    <main className={"relative h-dvh min-h-0 overflow-hidden transition-colors duration-300 " + (isDarkTheme ? "bg-[#090a0b] text-white" : "bg-[#f7f7f4] text-zinc-950")}>
      <div className={"pointer-events-none absolute inset-0 opacity-80 " + (isDarkTheme ? "bg-[radial-gradient(circle_at_72%_18%,rgba(16,185,129,0.09),transparent_28%),radial-gradient(circle_at_18%_82%,rgba(45,212,191,0.05),transparent_24%)]" : "bg-[radial-gradient(circle_at_72%_18%,rgba(16,185,129,0.11),transparent_28%),radial-gradient(circle_at_18%_82%,rgba(45,212,191,0.07),transparent_24%)]")} aria-hidden />
      <div className={"pointer-events-none absolute inset-0 " + (isDarkTheme ? "bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)]" : "bg-[linear-gradient(rgba(24,24,27,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(24,24,27,0.025)_1px,transparent_1px)]")} style={{ backgroundSize: "48px 48px" }} aria-hidden />
      <SectionNav isDarkTheme={isDarkTheme} activeSection={initialSection} onSectionChange={handleSectionChange} />
      <button type="button" onClick={() => setIsDarkTheme((value) => !value)} aria-label={isDarkTheme ? "Switch to light theme" : "Switch to dark theme"} className={"fixed right-[max(0.75rem,env(safe-area-inset-right))] top-[max(0.75rem,env(safe-area-inset-top))] z-[120] flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-xl transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 md:right-8 md:top-8 " + (isDarkTheme ? "border-white/10 bg-zinc-950/80 text-zinc-300 hover:text-emerald-300" : "border-zinc-200 bg-white/80 text-zinc-700 hover:text-emerald-700")}>
        {isDarkTheme ? <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg> : <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>}
      </button>
      <div className="relative z-10 h-full min-h-0 px-3 pb-[4.8rem] pt-[4.5rem] sm:px-5 md:pb-5 md:pl-[6rem] md:pr-5 md:pt-5 lg:pl-[7rem] lg:pr-8">
        <div className={"mx-auto h-full min-h-0 w-full max-w-[1380px] overflow-hidden rounded-[1.6rem] border backdrop-blur-sm sm:rounded-[2rem] " + (isDarkTheme ? "border-white/[0.07] bg-white/[0.018] shadow-[0_24px_100px_rgba(0,0,0,0.28)]" : "border-zinc-200/80 bg-white/55 shadow-[0_24px_80px_rgba(24,24,27,0.06)]")}>
          <div className="h-full min-h-0 p-4 sm:p-6 lg:p-8 xl:p-10"><PortfolioStage activeSection={initialSection} isDarkTheme={isDarkTheme} /></div>
        </div>
      </div>
    </main>
  );
}
