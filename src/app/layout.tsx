import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f7f4" },
    { media: "(prefers-color-scheme: dark)", color: "#090a0b" },
  ],
};

const inter = Inter({ subsets: ["latin"] });
const SITE_URL = "https://ibrahimcanerdogan.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "İbrahim Can Erdoğan — Portfolio",
  title: {
    default: "İbrahim Can Erdoğan | Software Engineer · Founder",
    template: "%s | İbrahim Can Erdoğan",
  },
  description:
    "Software engineer, product builder and founder of Akhisar Dijital. Mobile and web product development, Android/Kotlin, Next.js, technical education and open-source work.",
  keywords: [
    "İbrahim Can Erdoğan",
    "Ibrahim Can Erdogan",
    "Software Engineer",
    "Software Developer",
    "Founder",
    "Akhisar Dijital",
    "Product Engineer",
    "Product Development",
    "Mobile App Development",
    "Web Development",
    "Android Developer",
    "Kotlin Developer",
    "Jetpack Compose",
    "Next.js Developer",
    "TypeScript",
    "Clean Architecture",
    "MVVM",
    "CI/CD",
    "Technical Education",
    "Udemy Instructor",
    "YouTube Developer",
    "Open Source",
    "Türkiye Software Engineer",
    "Akhisar Software",
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
    title: "İbrahim Can Erdoğan | Software Engineer · Founder",
    description:
      "Software engineering, digital product development, entrepreneurship, technical education and open-source work.",
    siteName: "İbrahim Can Erdoğan — Portfolio",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "İbrahim Can Erdoğan — Software Engineer and Founder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "İbrahim Can Erdoğan | Software Engineer · Founder",
    description:
      "Software engineering, product development, entrepreneurship, technical education and open source.",
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
  image: SITE_URL + "/logo.jpg",
  jobTitle: "Software Engineer & Founder",
  description:
    "Software engineer, product builder, technical educator and founder of Akhisar Dijital.",
  knowsAbout: [
    "Software engineering",
    "Product development",
    "Android software development",
    "Kotlin",
    "Java",
    "Jetpack Compose",
    "Mobile application development",
    "Next.js",
    "TypeScript",
    "Web development",
    "Clean architecture",
    "CI/CD",
    "Technical education",
    "Entrepreneurship",
  ],
  affiliation: {
    "@type": "Organization",
    name: "Akhisar Dijital",
    url: "https://akhisardijital.com/",
  },
  address: {
    "@type": "PostalAddress",
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
