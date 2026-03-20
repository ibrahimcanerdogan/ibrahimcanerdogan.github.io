"use client";

import { useState, useCallback, useEffect, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import ScrollToTop from '@/components/ScrollToTop';
import SectionNav from '@/components/SectionNav/SectionNav';
import LandingHero from '@/components/sections/LandingHero/LandingHero';
import AboutSection from '@/components/sections/AboutSection/AboutSection';
import ExperienceRoadmap from '@/components/sections/ExperienceRoadmap/ExperienceRoadmap';
import CertificatesSection from '@/components/sections/CertificatesSection/CertificatesSection';
import CoursesSection from '@/components/sections/CoursesSection/CoursesSection';
import ProjectsSection from '@/components/sections/ProjectsSection/ProjectsSection';
import YouTubeSection from '@/components/sections/YouTubeSection/YouTubeSection';
import SiteFooter from '@/components/sections/SiteFooter/SiteFooter';

export default function Home() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [isMobileLayout, setIsMobileLayout] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const apply = () => setIsMobileLayout(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const handleScroll = useCallback(() => {
    const about = document.getElementById("about");
    if (!about) return;
    const headerClearance = 88;
    const top = about.getBoundingClientRect().top + window.scrollY - headerClearance;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: isMobileLayout ? 50 : 90,
      interactivity: {
        events: {
          onClick: {
            enable: !isMobileLayout,
            mode: "push" as const,
          },
          onHover: {
            enable: !isMobileLayout,
            mode: "repulse" as const,
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 2,
          },
          repulse: {
            distance: 120,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: isDarkTheme ? "#6ee7b7" : "#047857",
        },
        links: {
          color: isDarkTheme ? "#6ee7b7" : "#047857",
          distance: isMobileLayout ? 100 : 140,
          enable: true,
          opacity: 0.1,
          width: 1,
        },
        move: {
          direction: "none" as const,
          enable: true,
          outModes: {
            default: "bounce" as const,
          },
          random: false,
          speed: isMobileLayout ? 0.35 : 0.6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: isMobileLayout ? 1400 : 900,
          },
          value: isMobileLayout ? 14 : 36,
        },
        opacity: {
          value: 0.12,
        },
        shape: {
          type: "circle" as const,
        },
        size: {
          value: { min: 1, max: isMobileLayout ? 2 : 2.5 },
        },
      },
      detectRetina: true,
    }),
    [isDarkTheme, isMobileLayout]
  );

  return (
    <main className={`relative min-h-screen transition-colors duration-500 ${isDarkTheme ? 'bg-gray-950' : 'bg-white'}`}>
      <SectionNav isDarkTheme={isDarkTheme} />

      {/* Theme toggle — matches LanguageSwitcher shell + emerald accent */}
      <button
        type="button"
        onClick={() => setIsDarkTheme(!isDarkTheme)}
        aria-label={isDarkTheme ? "Switch to light theme" : "Switch to dark theme"}
        className={`fixed right-[max(1rem,env(safe-area-inset-right))] top-[max(1rem,env(safe-area-inset-top))] z-50 flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-lg transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500/60 ${
          isDarkTheme
            ? "border-white/10 bg-gray-900/70 text-emerald-400 shadow-lg shadow-black/20 hover:bg-emerald-500/10 hover:text-emerald-300"
            : "border-gray-200/80 bg-white/80 text-emerald-800 shadow-md shadow-gray-900/5 hover:bg-emerald-50 hover:text-emerald-900"
        }`}
      >
        {isDarkTheme ? (
          <svg className="h-[1.15rem] w-[1.15rem]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
          <svg className="h-[1.15rem] w-[1.15rem]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </button>

      {/* Particles Background */}
      <Particles id="tsparticles" init={particlesInit} options={particlesOptions} className="absolute inset-0" />

      <LandingHero isDarkTheme={isDarkTheme} onScrollToContent={handleScroll} />

      <div className="md:pl-[var(--site-nav-rail-gutter)]">
      {/* Main Content */}
      <div
        id="content"
        className="container relative z-20 mx-auto scroll-mt-28 space-y-6 px-4 pb-16 pt-6 sm:space-y-8 sm:pb-24 sm:pt-10 md:pb-28 md:pt-16 lg:pb-32 lg:pt-20"
      >
        <AboutSection isDarkTheme={isDarkTheme} />

        <ExperienceRoadmap isDarkTheme={isDarkTheme} />

        <ProjectsSection isDarkTheme={isDarkTheme} />

        <CoursesSection isDarkTheme={isDarkTheme} />

        <CertificatesSection isDarkTheme={isDarkTheme} />

        <YouTubeSection isDarkTheme={isDarkTheme} />
      </div>

      <SiteFooter isDarkTheme={isDarkTheme} />
      </div>
      <ScrollToTop isDarkTheme={isDarkTheme} />
    </main>
  );
}
