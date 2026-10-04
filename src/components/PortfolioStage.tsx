"use client";

import { Space_Grotesk } from "next/font/google";
import { useLanguage } from "@/contexts/LanguageContext";
import type { SectionId } from "@/components/SectionNav/SectionNav";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const EMAIL = "ibrahimcanerdogan@outlook.com";

const PROJECTS = [
  {
    titleKey: "projects.compose.title",
    descriptionKey: "projects.compose.description",
    href: "https://github.com/ibrahimcanerdogan/Awesome-Jetpack-Compose-App-Samples",
    tags: ["Kotlin", "Compose", "Material 3"],
  },
  {
    titleKey: "projects.mlkit.title",
    descriptionKey: "projects.mlkit.description",
    href: "https://github.com/ibrahimcanerdogan/Google-MLKit-Android-Apps",
    tags: ["Kotlin", "ML Kit", "CameraX"],
  },
  {
    titleKey: "projects.boruto.title",
    descriptionKey: "projects.boruto.description",
    href: "https://github.com/ibrahimcanerdogan/JetBorutoKtorServerApp",
    tags: ["Kotlin", "Ktor", "Full stack"],
  },
] as const;

const MORE_PROJECTS = [
  {
    titleKey: "projects.ecotrack.title",
    href: "https://ibrahimcanerdogan.github.io/ecotrack",
  },
  {
    titleKey: "projects.calculator.title",
    href: "https://ibrahimcanerdogan.github.io/NextCalculator",
  },
] as const;

const SOCIALS = [
  ["GitHub", "https://github.com/ibrahimcanerdogan"],
  ["LinkedIn", "https://www.linkedin.com/in/ibrahimcanerdogan/"],
  ["YouTube", "https://www.youtube.com/@ibrahimcanerdogan"],
  ["Medium", "https://medium.com/@ibrahimcanerdogan"],
  ["Udemy", "https://www.udemy.com/user/ibrahim-can-erdogan/"],
] as const;

type Props = {
  activeSection: SectionId;
  isDarkTheme: boolean;
  onNavigate: (section: SectionId) => void;
};

type ShellProps = {
  eyebrow: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  isDarkTheme: boolean;
};

function ScreenShell({ eyebrow, title, description, children, isDarkTheme }: ShellProps) {
  return (
    <section className="screen-enter flex h-full min-h-0 w-full flex-col">
      <header className="mb-4 shrink-0 sm:mb-6">
        <p className={"text-[10px] font-semibold uppercase tracking-[0.24em] sm:text-xs " + (isDarkTheme ? "text-emerald-400/90" : "text-emerald-700")}>
          {eyebrow}
        </p>
        <h2 className={display.className + " mt-1.5 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl lg:text-4xl " + (isDarkTheme ? "text-white" : "text-zinc-950")}>
          {title}
        </h2>
        {description ? (
          <p className={"mt-2 max-w-3xl text-xs leading-relaxed sm:text-sm lg:text-base " + (isDarkTheme ? "text-zinc-400" : "text-zinc-600")}>
            {description}
          </p>
        ) : null}
      </header>
      <div className="min-h-0 flex-1">{children}</div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M8 7h9v9" />
    </svg>
  );
}

export default function PortfolioStage({ activeSection, isDarkTheme, onNavigate }: Props) {
  const { t, language } = useLanguage();

  const c = language === "tr"
    ? {
        selectedWork: "Seçilmiş çalışmalar",
        expertise: "Uzmanlık",
        expertiseTitle: "Mühendislik & ürün",
        expertiseDescription: "Tek bir teknoloji başlığından çok, ürünü uçtan uca çıkarabilen bir mühendislik yaklaşımı.",
        teaching: "Eğitim & topluluk",
        teachingTitle: "Öğretiyor, üretiyor, paylaşıyorum",
        teachingDescription: "Üretim deneyimini eğitim içeriklerine, örneklere ve açık kaynak çalışmalarına dönüştürüyorum.",
        contactTitle: "Birlikte bir şey geliştirelim",
        contactDescription: "Ürün, yazılım, teknik danışmanlık veya iş birliği fırsatları için iletişime geçebilirsiniz.",
        currentFocus: "Şu an",
        founder: "Kurucu & Software Engineer",
        founderDescription: "Nisan 2026'da kurduğum Akhisar Dijital ile yazılım, dijital ürün ve iş geliştirmeyi tek çatı altında yürütüyorum.",
        build: "Ne geliştiriyorum",
        engineering: "Software Engineering",
        products: "Mobile & Web Products",
        business: "Entrepreneurship",
        education: "Technical Education",
        years: "yıl+ deneyim",
        students: "öğrenci+",
        projects: "seçilmiş proje",
        current: "güncel girişim",
        viewWork: "Çalışmaları gör",
        contact: "İletişim",
        visit: "Siteyi aç",
        timeline: "Kariyer çizgisi",
        workTitle: "Seçilmiş ürün & projeler",
        workDescription: "Kod deposu listesinden çok, farklı problem alanlarında nasıl ürün geliştirdiğimi gösteren seçilmiş işler.",
        moreWork: "Diğer çalışmalar",
        mobileEngineering: "Mobile Engineering",
        mobileEngineeringText: "Kotlin, Jetpack Compose, Android architecture, performans ve ürün kalitesi.",
        webProduct: "Web & Product",
        webProductText: "Next.js, TypeScript ve ürün odaklı web deneyimleri.",
        architecture: "Architecture",
        architectureText: "Clean Architecture, MVVM, state management ve sürdürülebilir kod tabanları.",
        quality: "Quality",
        qualityText: "Test, release hardening, güvenlik ve production readiness.",
        delivery: "Delivery",
        deliveryText: "CI/CD, GitHub workflows, Vercel ve release süreçleri.",
        founderMindset: "Founder mindset",
        founderMindsetText: "Teknik kararları kullanıcı, operasyon ve iş değeriyle birlikte ele alma.",
        udemy: "Udemy",
        udemyText: "Android, Jetpack Compose ve ML Kit odaklı yapılandırılmış eğitimler.",
        youtube: "YouTube",
        youtubeText: "Kotlin, Compose ve gerçek dünya entegrasyonlarını anlatan teknik videolar.",
        openChannel: "Kanalı aç",
        openProfile: "Profili aç",
        credentials: "Yeterlilikler",
        credentialsTitle: "Sertifikalar & sürekli öğrenme",
        credentialsDescription: "Resmî programlar ve teknik uzmanlığı destekleyen eğitimler.",
        available: "İş birliklerine açığım",
        akhisarDigital: "Akhisar Dijital",
        downloadCv: "CV indir",
        previous: "Önceki deneyimler",
      }
    : {
        selectedWork: "Selected work",
        expertise: "Expertise",
        expertiseTitle: "Engineering & product",
        expertiseDescription: "A product-minded engineering approach that goes beyond a single platform or framework.",
        teaching: "Teaching & community",
        teachingTitle: "Build, teach, share",
        teachingDescription: "I turn production experience into courses, technical videos, examples, and open-source work.",
        contactTitle: "Let's build something useful",
        contactDescription: "Reach out for product, software, technical consulting, or collaboration opportunities.",
        currentFocus: "Current",
        founder: "Founder & Software Engineer",
        founderDescription: "I founded Akhisar Dijital in April 2026 to bring software, digital product development, and business building under one roof.",
        build: "What I build",
        engineering: "Software Engineering",
        products: "Mobile & Web Products",
        business: "Entrepreneurship",
        education: "Technical Education",
        years: "years+ experience",
        students: "students+",
        projects: "selected projects",
        current: "current venture",
        viewWork: "View work",
        contact: "Contact",
        visit: "Visit site",
        timeline: "Career timeline",
        workTitle: "Selected products & projects",
        workDescription: "A focused set of work that shows how I approach different product and engineering problems.",
        moreWork: "More work",
        mobileEngineering: "Mobile Engineering",
        mobileEngineeringText: "Kotlin, Jetpack Compose, Android architecture, performance, and product quality.",
        webProduct: "Web & Product",
        webProductText: "Next.js, TypeScript, and product-focused web experiences.",
        architecture: "Architecture",
        architectureText: "Clean Architecture, MVVM, state management, and maintainable codebases.",
        quality: "Quality",
        qualityText: "Testing, release hardening, security, and production readiness.",
        delivery: "Delivery",
        deliveryText: "CI/CD, GitHub workflows, Vercel, and release operations.",
        founderMindset: "Founder mindset",
        founderMindsetText: "Balancing technical decisions with user needs, operations, and business value.",
        udemy: "Udemy",
        udemyText: "Structured learning around Android, Jetpack Compose, and ML Kit.",
        youtube: "YouTube",
        youtubeText: "Technical videos on Kotlin, Compose, and real-world integrations.",
        openChannel: "Open channel",
        openProfile: "Open profile",
        credentials: "Credentials",
        credentialsTitle: "Certifications & continuous learning",
        credentialsDescription: "Formal programs and learning that support hands-on engineering experience.",
        available: "Open to collaborations",
        akhisarDigital: "Akhisar Dijital",
        downloadCv: "Download CV",
        previous: "Previous experience",
      };

  const card = isDarkTheme
    ? "border-white/[0.08] bg-white/[0.035]"
    : "border-zinc-200/80 bg-white/75";
  const cardHover = isDarkTheme
    ? "hover:border-emerald-400/25 hover:bg-white/[0.055]"
    : "hover:border-emerald-300 hover:bg-white";
  const muted = isDarkTheme ? "text-zinc-400" : "text-zinc-600";
  const body = isDarkTheme ? "text-zinc-300" : "text-zinc-700";
  const title = isDarkTheme ? "text-white" : "text-zinc-950";
  const chip = isDarkTheme
    ? "border-white/10 bg-white/[0.05] text-zinc-300"
    : "border-zinc-200 bg-zinc-50 text-zinc-700";
  const accentCard = isDarkTheme
    ? "border-emerald-400/20 bg-emerald-400/[0.07]"
    : "border-emerald-200 bg-emerald-50/80";

  if (activeSection === "hero") {
    return (
      <section className="screen-enter flex h-full min-h-0 items-center">
        <div className="grid w-full gap-5 lg:grid-cols-12 lg:gap-8">
          <div className="flex min-w-0 flex-col justify-center lg:col-span-7">
            <p className={"text-[10px] font-semibold uppercase tracking-[0.24em] sm:text-xs " + (isDarkTheme ? "text-emerald-400/90" : "text-emerald-700")}>
              {t("hero.eyebrow")}
            </p>
            <h1 className={display.className + " mt-3 text-[2.6rem] font-semibold leading-[0.95] tracking-[-0.065em] sm:text-5xl lg:text-6xl xl:text-7xl " + title}>
              {t("hero.title")}
            </h1>
            <p className={"mt-4 text-base font-medium sm:text-xl " + (isDarkTheme ? "text-zinc-200" : "text-zinc-800")}>
              {t("hero.subtitle")}
            </p>
            <p className={"mt-4 max-w-2xl text-sm leading-6 sm:text-base sm:leading-7 " + muted}>
              {t("hero.intro")}
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <button
                type="button"
                onClick={() => onNavigate("projects")}
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-400"
              >
                {c.viewWork}
                <ArrowIcon />
              </button>
              <button
                type="button"
                onClick={() => onNavigate("contact")}
                className={"inline-flex items-center rounded-xl border px-4 py-2.5 text-sm font-semibold transition " + card + " " + cardHover + " " + title}
              >
                {c.contact}
              </button>
              <a
                href="/source/cv-ibrahim-can-erdogan.pdf"
                download
                className={"inline-flex items-center rounded-xl border px-4 py-2.5 text-sm font-semibold transition " + card + " " + cardHover + " " + title}
              >
                {c.downloadCv}
              </a>
            </div>

            <div className="mt-6 grid max-w-2xl grid-cols-4 gap-2 sm:mt-8 sm:gap-3">
              {[
                ["5+", c.years],
                ["11K+", c.students],
                ["10+", c.projects],
                ["2026", c.current],
              ].map(([value, label]) => (
                <div key={label} className={"rounded-xl border px-2.5 py-3 sm:px-4 " + card}>
                  <p className={display.className + " text-lg font-semibold sm:text-2xl " + title}>{value}</p>
                  <p className={"mt-0.5 text-[9px] leading-tight sm:text-[11px] " + muted}>{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden min-w-0 lg:col-span-5 lg:flex lg:items-center">
            <div className={"w-full rounded-3xl border p-6 xl:p-8 " + accentCard}>
              <div className="flex items-center justify-between gap-4">
                <p className={"text-[10px] font-semibold uppercase tracking-[0.2em] " + (isDarkTheme ? "text-emerald-300" : "text-emerald-800")}>
                  {c.currentFocus}
                </p>
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.75)]" />
              </div>
              <p className={display.className + " mt-5 text-2xl font-semibold tracking-tight " + title}>{c.akhisarDigital}</p>
              <p className={"mt-1 text-sm font-medium " + (isDarkTheme ? "text-emerald-300" : "text-emerald-800")}>{c.founder}</p>
              <p className={"mt-4 text-sm leading-6 " + body}>{c.founderDescription}</p>
              <a
                href="https://akhisardijital.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={"mt-6 inline-flex items-center gap-2 text-sm font-semibold " + (isDarkTheme ? "text-emerald-300" : "text-emerald-800")}
              >
                {c.visit}
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (activeSection === "about") {
    return (
      <ScreenShell eyebrow={t("about.eyebrow")} title={t("about.title")} description={t("about.highlight")} isDarkTheme={isDarkTheme}>
        <div className="grid h-full min-h-0 gap-4 lg:grid-cols-12 lg:gap-5">
          <div className={"flex min-h-0 flex-col justify-between rounded-2xl border p-5 sm:p-6 lg:col-span-7 " + card}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
              <p className={"text-sm leading-6 " + body}>{t("about.description1")}</p>
              <p className={"text-sm leading-6 " + body}>{t("about.description2")}</p>
            </div>
            <div className={"mt-5 border-t pt-4 " + (isDarkTheme ? "border-white/[0.08]" : "border-zinc-200")}>
              <p className={"text-sm leading-6 " + muted}>{t("about.freelance")}</p>
            </div>
          </div>
          <div className="grid min-h-0 grid-cols-2 gap-3 lg:col-span-5">
            {[c.engineering, c.products, c.business, c.education].map((item, index) => (
              <div key={item} className={"flex min-h-0 flex-col justify-between rounded-2xl border p-4 " + (index === 2 ? accentCard : card)}>
                <span className={"text-[10px] font-semibold uppercase tracking-[0.18em] " + muted}>0{index + 1}</span>
                <p className={display.className + " mt-6 text-base font-semibold leading-tight sm:text-lg " + title}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </ScreenShell>
    );
  }

  if (activeSection === "experience") {
    const items = [
      {
        date: t("experience.akhisarDijital.date"),
        role: c.founder,
        company: "Akhisar Dijital",
        description: t("experience.akhisarDijital.summary"),
        current: true,
      },
      {
        date: t("experience.ebebek.current.date"),
        role: "Android Software Specialist",
        company: "ebebek",
        description: t("experience.summary.ebebek-android"),
      },
      {
        date: language === "tr" ? "Şubat 2022 - Nisan 2023" : "February 2022 - April 2023",
        role: language === "tr" ? "Android Developer" : "Android Developer",
        company: "Logo Yazılım",
        description: t("experience.summary.logo-android"),
      },
      {
        date: language === "tr" ? "2021 - 2022" : "2021 - 2022",
        role: c.previous,
        company: "Yapı Kredi · QNB · ebebek IT",
        description: language === "tr"
          ? "Bankacılık, IT ve ürün ekiplerini tanıdığım staj ve gelişim programları."
          : "Internships and development programs across banking, IT, and product teams.",
      },
    ];

    return (
      <ScreenShell eyebrow={t("experience.eyebrow")} title={t("experience.title")} description={t("experience.roadmapSubtitle")} isDarkTheme={isDarkTheme}>
        <div className="grid h-full min-h-0 gap-3 sm:grid-cols-2 lg:gap-4">
          {items.map((item, index) => (
            <article key={item.company} className={"relative flex min-h-0 flex-col rounded-2xl border p-4 sm:p-5 " + (item.current ? accentCard : card)}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className={"text-[10px] font-semibold uppercase tracking-[0.16em] " + (item.current ? (isDarkTheme ? "text-emerald-300" : "text-emerald-800") : muted)}>
                    {item.date}
                  </p>
                  <h3 className={display.className + " mt-2 text-base font-semibold sm:text-lg " + title}>{item.role}</h3>
                  <p className={"mt-0.5 text-xs font-medium sm:text-sm " + (isDarkTheme ? "text-emerald-300/90" : "text-emerald-800")}>{item.company}</p>
                </div>
                <span className={"text-xs font-semibold tabular-nums " + muted}>0{index + 1}</span>
              </div>
              <p className={"mt-3 line-clamp-3 text-xs leading-5 sm:text-sm sm:leading-6 " + body}>{item.description}</p>
            </article>
          ))}
        </div>
      </ScreenShell>
    );
  }

  if (activeSection === "projects") {
    return (
      <ScreenShell eyebrow={c.selectedWork} title={c.workTitle} description={c.workDescription} isDarkTheme={isDarkTheme}>
        <div className="flex h-full min-h-0 flex-col">
          <div className="grid min-h-0 flex-1 gap-3 sm:grid-cols-3 lg:gap-4">
            {PROJECTS.map((project, index) => (
              <a
                key={project.titleKey}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className={"group flex min-h-0 flex-col rounded-2xl border p-4 transition sm:p-5 " + card + " " + cardHover + (index > 0 ? " max-sm:hidden" : "")}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className={"text-[10px] font-semibold uppercase tracking-[0.16em] " + muted}>0{index + 1}</span>
                  <ArrowIcon />
                </div>
                <h3 className={display.className + " mt-4 text-base font-semibold leading-tight sm:text-lg " + title}>{t(project.titleKey)}</h3>
                <p className={"mt-3 line-clamp-4 text-xs leading-5 sm:text-sm sm:leading-6 " + body}>{t(project.descriptionKey)}</p>
                <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className={"rounded-full border px-2 py-1 text-[9px] font-medium sm:text-[10px] " + chip}>{tag}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
          <div className={"mt-3 flex shrink-0 flex-wrap items-center gap-2 border-t pt-3 " + (isDarkTheme ? "border-white/[0.07]" : "border-zinc-200")}>
            <span className={"mr-1 text-[10px] font-semibold uppercase tracking-[0.16em] " + muted}>{c.moreWork}</span>
            {MORE_PROJECTS.map((project) => (
              <a key={project.titleKey} href={project.href} target="_blank" rel="noopener noreferrer" className={"inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition " + card + " " + cardHover + " " + title}>
                {t(project.titleKey)}
                <ArrowIcon />
              </a>
            ))}
          </div>
        </div>
      </ScreenShell>
    );
  }

  if (activeSection === "expertise") {
    const expertise = [
      [c.mobileEngineering, c.mobileEngineeringText, "Kotlin · Compose · Android"],
      [c.webProduct, c.webProductText, "Next.js · TypeScript"],
      [c.architecture, c.architectureText, "Clean · MVVM · State"],
      [c.quality, c.qualityText, "Tests · Security · Release"],
      [c.delivery, c.deliveryText, "CI/CD · GitHub · Vercel"],
      [c.founderMindset, c.founderMindsetText, "Product · Operations · Business"],
    ];

    return (
      <ScreenShell eyebrow={c.expertise} title={c.expertiseTitle} description={c.expertiseDescription} isDarkTheme={isDarkTheme}>
        <div className="grid h-full min-h-0 grid-cols-2 gap-2.5 sm:grid-cols-3 lg:gap-4">
          {expertise.map(([name, text, stack], index) => (
            <article key={name} className={"flex min-h-0 flex-col rounded-2xl border p-3.5 sm:p-5 " + (index === 5 ? accentCard : card)}>
              <span className={"text-[9px] font-semibold uppercase tracking-[0.15em] " + muted}>0{index + 1}</span>
              <h3 className={display.className + " mt-2 text-sm font-semibold sm:text-base lg:text-lg " + title}>{name}</h3>
              <p className={"mt-2 line-clamp-3 text-[11px] leading-4 sm:text-xs sm:leading-5 " + body}>{text}</p>
              <p className={"mt-auto pt-3 text-[9px] font-medium sm:text-[10px] " + (isDarkTheme ? "text-emerald-300/80" : "text-emerald-800")}>{stack}</p>
            </article>
          ))}
        </div>
      </ScreenShell>
    );
  }

  if (activeSection === "teaching") {
    return (
      <ScreenShell eyebrow={c.teaching} title={c.teachingTitle} description={c.teachingDescription} isDarkTheme={isDarkTheme}>
        <div className="grid h-full min-h-0 gap-3 sm:grid-cols-2 lg:gap-4">
          <article className={"flex min-h-0 flex-col rounded-2xl border p-5 sm:p-6 " + accentCard}>
            <div className="flex items-center justify-between gap-4">
              <p className={"text-[10px] font-semibold uppercase tracking-[0.18em] " + (isDarkTheme ? "text-emerald-300" : "text-emerald-800")}>{c.udemy}</p>
              <span className={display.className + " text-xl font-semibold sm:text-2xl " + title}>11K+</span>
            </div>
            <h3 className={display.className + " mt-4 text-lg font-semibold sm:text-2xl " + title}>{t("courses.compose.title")}</h3>
            <p className={"mt-3 line-clamp-3 text-xs leading-5 sm:text-sm sm:leading-6 " + body}>{c.udemyText}</p>
            <a href="https://www.udemy.com/user/ibrahim-can-erdogan/" target="_blank" rel="noopener noreferrer" className={"mt-auto inline-flex items-center gap-2 pt-4 text-sm font-semibold " + (isDarkTheme ? "text-emerald-300" : "text-emerald-800")}>
              {c.openProfile}
              <ArrowIcon />
            </a>
          </article>
          <article className={"flex min-h-0 flex-col rounded-2xl border p-5 sm:p-6 " + card}>
            <div className="flex items-center justify-between gap-4">
              <p className={"text-[10px] font-semibold uppercase tracking-[0.18em] " + muted}>{c.youtube}</p>
              <span className={"rounded-full border px-2.5 py-1 text-[10px] font-medium " + chip}>Kotlin · Compose</span>
            </div>
            <h3 className={display.className + " mt-4 text-lg font-semibold sm:text-2xl " + title}>{t("youtube.title")}</h3>
            <p className={"mt-3 line-clamp-3 text-xs leading-5 sm:text-sm sm:leading-6 " + body}>{c.youtubeText}</p>
            <div className={"mt-4 space-y-2 border-t pt-3 " + (isDarkTheme ? "border-white/[0.07]" : "border-zinc-200")}>
              {[t("youtube.video1.title"), t("youtube.video2.title"), t("youtube.video3.title")].map((video) => (
                <p key={video} className={"truncate text-[11px] sm:text-xs " + muted}>• {video}</p>
              ))}
            </div>
            <a href="https://www.youtube.com/@ibrahimcanerdogan" target="_blank" rel="noopener noreferrer" className={"mt-auto inline-flex items-center gap-2 pt-4 text-sm font-semibold " + (isDarkTheme ? "text-emerald-300" : "text-emerald-800")}>
              {c.openChannel}
              <ArrowIcon />
            </a>
          </article>
        </div>
      </ScreenShell>
    );
  }

  if (activeSection === "certificates") {
    const certs = [
      [t("certificates.meta.title"), t("certificates.meta.company"), t("certificates.meta.date")],
      [t("certificates.neo.title"), t("certificates.neo.company"), t("certificates.neo.date")],
      [t("certificates.udemy.title"), t("certificates.udemy.company"), t("certificates.udemy.date")],
    ];

    return (
      <ScreenShell eyebrow={c.credentials} title={c.credentialsTitle} description={c.credentialsDescription} isDarkTheme={isDarkTheme}>
        <div className="grid h-full min-h-0 gap-3 sm:grid-cols-3 lg:gap-4">
          {certs.map(([name, issuer, date], index) => (
            <article key={name} className={"flex min-h-0 flex-col rounded-2xl border p-4 sm:p-5 " + (index === 0 ? accentCard : card)}>
              <span className={"text-[10px] font-semibold uppercase tracking-[0.16em] " + muted}>0{index + 1}</span>
              <h3 className={display.className + " mt-4 text-base font-semibold leading-snug sm:text-lg " + title}>{name}</h3>
              <p className={"mt-2 text-xs font-semibold " + (isDarkTheme ? "text-emerald-300/90" : "text-emerald-800")}>{issuer}</p>
              <p className={"mt-auto pt-4 text-xs " + muted}>{date}</p>
            </article>
          ))}
        </div>
      </ScreenShell>
    );
  }

  return (
    <ScreenShell eyebrow={t("footer.eyebrow")} title={c.contactTitle} description={c.contactDescription} isDarkTheme={isDarkTheme}>
      <div className="grid h-full min-h-0 gap-4 lg:grid-cols-12">
        <div className={"flex min-h-0 flex-col justify-between rounded-2xl border p-5 sm:p-6 lg:col-span-7 " + accentCard}>
          <div>
            <p className={"text-[10px] font-semibold uppercase tracking-[0.18em] " + (isDarkTheme ? "text-emerald-300" : "text-emerald-800")}>{c.available}</p>
            <a href={"mailto:" + EMAIL} className={display.className + " mt-3 block break-all text-xl font-semibold tracking-tight sm:text-2xl lg:text-3xl " + title}>
              {EMAIL}
            </a>
            <p className={"mt-4 max-w-xl text-sm leading-6 " + body}>{t("footer.subtitle")}</p>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <a href={"mailto:" + EMAIL} className="rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-400">
              {c.contact}
            </a>
            <a href="https://akhisardijital.com/" target="_blank" rel="noopener noreferrer" className={"inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition " + card + " " + cardHover + " " + title}>
              {c.akhisarDigital}
              <ArrowIcon />
            </a>
          </div>
        </div>
        <div className="grid min-h-0 grid-cols-2 gap-2.5 lg:col-span-5">
          {SOCIALS.map(([label, href]) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={"group flex min-h-0 items-end justify-between rounded-2xl border p-4 transition " + card + " " + cardHover}>
              <span className={display.className + " text-sm font-semibold sm:text-base " + title}>{label}</span>
              <ArrowIcon />
            </a>
          ))}
          <div className={"flex min-h-0 items-end rounded-2xl border p-4 " + card}>
            <span className={"text-xs " + muted}>{t("footer.location")}</span>
          </div>
        </div>
      </div>
    </ScreenShell>
  );
}
