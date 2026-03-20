"use client";

import { useState, useEffect, useCallback } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

type ScrollToTopProps = {
  isDarkTheme: boolean;
};

const ScrollToTop: React.FC<ScrollToTopProps> = ({ isDarkTheme }) => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        raf = 0;
        const next = window.scrollY > 300;
        setIsVisible((prev) => (prev === next ? prev : next));
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", update);
    };
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const shell = isDarkTheme
    ? "border-white/10 bg-gray-900/75 text-emerald-400 shadow-lg shadow-black/25 hover:bg-emerald-500/12 hover:text-emerald-300 hover:shadow-[0_0_20px_rgba(52,211,153,0.15)]"
    : "border-gray-200/80 bg-white/85 text-emerald-800 shadow-md shadow-gray-900/8 hover:bg-emerald-50 hover:text-emerald-900";

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={t("nav.scrollToTop")}
      title={t("nav.scrollToTop")}
      className={`fixed bottom-[max(2rem,env(safe-area-inset-bottom,0px))] right-[max(1rem,env(safe-area-inset-right,0px))] z-50 flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-lg transition-[opacity,transform,box-shadow,background-color,color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500/60 motion-reduce:transition-opacity ${shell} ${
        isVisible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      <svg
        className="h-[1.15rem] w-[1.15rem] shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        aria-hidden
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
};

export default ScrollToTop;
