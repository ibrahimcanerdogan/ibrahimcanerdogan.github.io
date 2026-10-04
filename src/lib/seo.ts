import type { Metadata } from "next";
import type { SectionId } from "@/components/SectionNav/SectionNav";

export const SITE_URL = "https://ibrahimcanerdogan.github.io";
export const SECTIONS = ["about", "experience", "work", "expertise", "teaching", "certificates", "contact"] as const;
export type SectionSlug = (typeof SECTIONS)[number];
export type Locale = "tr" | "en";

export const slugToSection = (slug?: string): SectionId => slug === "work" ? "projects" : (slug ?? "hero") as SectionId;
export const sectionToSlug = (section: SectionId): string => section === "hero" ? "" : section === "projects" ? "work" : section;
export const routeFor = (locale: Locale, section: SectionId) => {
  const slug = sectionToSlug(section);
  return `${locale === "en" ? "/en" : ""}${slug ? `/${slug}` : ""}` || "/";
};

const copy = {
  tr: {
    hero: ["İbrahim Can Erdoğan | Yazılım Mühendisi · Kurucu", "Yazılım mühendisi, ürün geliştirici, teknik eğitmen ve Akhisar Dijital kurucusu İbrahim Can Erdoğan'ın portföyü."],
    about: ["Hakkımda", "İbrahim Can Erdoğan'ın yazılım mühendisliği, ürün geliştirme, girişimcilik ve teknik eğitim yaklaşımı."],
    experience: ["Deneyim", "Akhisar Dijital kuruculuğu, ebebek ve Logo Yazılım dahil İbrahim Can Erdoğan'ın doğrulanabilir kariyer çizgisi."],
    work: ["Çalışmalar", "Mobil, web ve ürün mühendisliği alanlarında seçilmiş açık kaynak projeler ve dijital ürünler."],
    expertise: ["Uzmanlık", "Kotlin, Android, Next.js, TypeScript, yazılım mimarisi, kalite ve ürün teslimi uzmanlıkları."],
    teaching: ["Eğitim ve Topluluk", "11 binden fazla öğrenciye ulaşan Udemy eğitimleri, YouTube videoları ve açık kaynak içerikler."],
    certificates: ["Sertifikalar", "İbrahim Can Erdoğan'ın teknik sertifikaları ve sürekli öğrenme çalışmaları."],
    contact: ["İletişim", "Yazılım, ürün geliştirme, teknik danışmanlık ve iş birliği için İbrahim Can Erdoğan ile iletişime geçin."],
  },
  en: {
    hero: ["İbrahim Can Erdoğan | Software Engineer · Founder", "Portfolio of İbrahim Can Erdoğan, software engineer, product builder, technical educator, and founder of Akhisar Dijital."],
    about: ["About", "İbrahim Can Erdoğan's approach to software engineering, product development, entrepreneurship, and technical education."],
    experience: ["Experience", "The verified career timeline of İbrahim Can Erdoğan, including Akhisar Dijital, ebebek, and Logo Yazılım."],
    work: ["Work", "Selected open-source projects and digital products across mobile, web, and product engineering."],
    expertise: ["Expertise", "Expertise in Kotlin, Android, Next.js, TypeScript, software architecture, quality, and product delivery."],
    teaching: ["Teaching & Community", "Udemy courses, YouTube videos, and open-source learning resources reaching more than 11,000 students."],
    certificates: ["Certificates", "Technical credentials and continuous learning by İbrahim Can Erdoğan."],
    contact: ["Contact", "Contact İbrahim Can Erdoğan for software, product development, technical consulting, and collaboration."],
  },
} as const;

export function createMetadata(locale: Locale, slug?: SectionSlug): Metadata {
  const key = slug ?? "hero";
  const [title, description] = copy[locale][key];
  const path = routeFor(locale, slugToSection(slug));
  const trPath = routeFor("tr", slugToSection(slug));
  const enPath = routeFor("en", slugToSection(slug));
  const canonical = `${SITE_URL}${path}`;
  return {
    title, description,
    alternates: { canonical, languages: { "tr-TR": `${SITE_URL}${trPath}`, "en-US": `${SITE_URL}${enPath}`, "x-default": `${SITE_URL}${trPath}` } },
    openGraph: { type: "profile", url: canonical, title, description, siteName: "İbrahim Can Erdoğan — Portfolio", locale: locale === "tr" ? "tr_TR" : "en_US", alternateLocale: [locale === "tr" ? "en_US" : "tr_TR"], images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "İbrahim Can Erdoğan — Software Engineer and Founder" }] },
    twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image.png"], creator: "@ibrahimcanerdogan" },
  };
}

export function createEntityGraph(locale: Locale) {
  const profilePath = locale === "en" ? "/en" : "";
  const profileUrl = `${SITE_URL}${profilePath}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${profileUrl}#profile`,
        url: profileUrl,
        inLanguage: locale === "tr" ? "tr-TR" : "en-US",
        name: locale === "tr"
          ? "İbrahim Can Erdoğan — Yazılım Mühendisi & Kurucu"
          : "İbrahim Can Erdoğan — Software Engineer & Founder",
        mainEntity: { "@id": `${SITE_URL}/#person` },
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "İbrahim Can Erdoğan",
        alternateName: "Ibrahim Can Erdogan",
        url: SITE_URL,
        image: `${SITE_URL}/logo.jpg`,
        jobTitle: "Founder & Software Engineer",
        description: locale === "tr"
          ? "Yazılım mühendisi, ürün geliştirici, teknik eğitmen ve Akhisar Dijital kurucusu."
          : "Software engineer, product builder, technical educator and founder of Akhisar Dijital.",
        worksFor: { "@id": "https://akhisardijital.com/#organization" },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Balıkesir Üniversitesi",
          url: "https://www.balikesir.edu.tr/",
        },
        homeLocation: { "@type": "Country", name: "Türkiye" },
        knowsAbout: [
          "Software Engineering",
          "Kotlin",
          "Android",
          "Jetpack Compose",
          "Next.js",
          "TypeScript",
          "Product Development",
          "Technical Education",
        ],
        sameAs: [
          "https://github.com/ibrahimcanerdogan",
          "https://www.linkedin.com/in/ibrahimcanerdogan/",
          "https://www.youtube.com/@ibrahimcanerdogan",
          "https://medium.com/@ibrahimcanerdogan",
          "https://www.udemy.com/user/ibrahim-can-erdogan/",
        ],
      },
      {
        "@type": "Organization",
        "@id": "https://akhisardijital.com/#organization",
        name: "Akhisar Dijital",
        url: "https://akhisardijital.com/",
        foundingDate: "2026-04",
        description: locale === "tr"
          ? "Akhisar merkezli yazılım, dijital ürün geliştirme ve teknoloji hizmetleri şirketi."
          : "Software, digital product development and technology services company based in Akhisar, Türkiye.",
        founder: { "@id": `${SITE_URL}/#person` },
      },
    ],
  } as const;
}
