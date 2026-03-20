import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#030712" },
  ],
};

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = "https://ibrahimcanerdogan.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "İbrahim Can Erdoğan — Portfolio",
  title: {
    default:
      "İbrahim Can Erdoğan | Senior Android Engineer · Freelance Mobile & Web",
    template: "%s | İbrahim Can Erdoğan",
  },
  description:
    "Kıdemli Android mühendisi: Kotlin, Jetpack Compose, temiz mimari. Ana uzmanlık Android; freelance cross-platform mobil uygulama ve Next.js ile modern web projeleri. İstanbul — uzaktan uyumlu.",
  keywords: [
    "İbrahim Can Erdoğan",
    "Ibrahim Can Erdogan",
    "Android Developer",
    "Senior Android Engineer",
    "Kotlin Developer",
    "Jetpack Compose",
    "Mobile App Development",
    "Android Development",
    "Clean Architecture",
    "MVVM Architecture",
    "Android Software Specialist",
    "ebebek",
    "Logo Yazılım",
    "Android Clean Architecture",
    "Android Jetpack",
    "Android UI Development",
    "Android App Development",
    "Kotlin Programming",
    "Android Best Practices",
    "Android Performance",
    "Android Security",
    "Android Geliştirme",
    "Android Yazılım Uzmanı",
    "Kıdemli Android Geliştirici",
    "Mobil Uygulama Geliştirme",
    "Android Uygulama Geliştirme",
    "Kotlin Programlama",
    "Android Temiz Mimari",
    "Android UI Tasarımı",
    "Android Performans Optimizasyonu",
    "Android Güvenlik",
    "Android Jetpack Bileşenleri",
    "Freelance Android developer",
    "Freelance Android",
    "Freelance mobile developer",
    "Freelance yazılım geliştirici",
    "Freelance mobil uygulama geliştirici",
    "Cross-platform mobile development",
    "Cross-platform mobil uygulama",
    "Cross-platform app developer",
    "Next.js developer",
    "Next.js freelance",
    "Web development",
    "Modern web development",
    "React Next.js portfolio",
    "Hire Android developer Turkey",
    "İstanbul Android developer",
    "Remote Android developer",
    "Kotlin freelancer",
    "Mobile and web developer",
  ],
  authors: [{ name: "İbrahim Can Erdoğan", url: SITE_URL }],
  creator: "İbrahim Can Erdoğan",
  publisher: "İbrahim Can Erdoğan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    alternateLocale: ["en_US"],
    url: SITE_URL,
    title:
      "İbrahim Can Erdoğan | Android Engineer — Freelance Cross-Platform Mobile & Web",
    description:
      "Production Android (Kotlin, Compose). Freelance: cross-platform mobile apps + fast Next.js websites. Open for project-based work.",
    siteName: "İbrahim Can Erdoğan — Android & Freelance Portfolio",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "İbrahim Can Erdoğan — Senior Android Engineer, freelance mobile & web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "İbrahim Can Erdoğan | Android Engineer — Freelance Mobile & Web",
    description:
      "Senior Android (Kotlin, Jetpack Compose). Freelance cross-platform mobile + Next.js web. Istanbul · Remote-friendly.",
    images: ["/logo.jpg"],
    creator: "@ibrahimcanerdogan",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "-BSNn58JC2hy9JHjNxthuO8RHwLD6Ii0_Lz5eeqTE9M",
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-US": SITE_URL,
      "tr-TR": SITE_URL,
      "x-default": SITE_URL,
    },
  },
  icons: {
    icon: [{ url: "/logo.jpg", type: "image/jpeg", sizes: "any" }],
    apple: [{ url: "/logo.jpg", type: "image/jpeg" }],
  },
  manifest: "/site.webmanifest",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "İbrahim Can Erdoğan",
  alternateName: ["Ibrahim Can Erdogan", "İbrahim Can Erdoğan"],
  url: SITE_URL,
  image: `${SITE_URL}/logo.jpg`,
  jobTitle: "Senior Android Engineer",
  description:
    "Senior Android engineer focused on Kotlin and Jetpack Compose. Offers freelance development for cross-platform mobile applications and modern websites using Next.js.",
  knowsAbout: [
    "Android software development",
    "Kotlin",
    "Java",
    "Jetpack Compose",
    "Mobile application development",
    "Cross-platform mobile development",
    "Next.js",
    "Web development",
    "Clean architecture",
    "Freelance software engineering",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Istanbul",
    addressCountry: "TR",
  },
  sameAs: [
    "https://github.com/ibrahimcanerdogan",
    "https://www.linkedin.com/in/ibrahimcanerdogan/",
    "https://www.youtube.com/@ibrahimcanerdogan",
    "https://medium.com/@ibrahimcanerdogan",
    "https://www.udemy.com/user/ibrahim-can-erdogan/",
  ],
} as const;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
