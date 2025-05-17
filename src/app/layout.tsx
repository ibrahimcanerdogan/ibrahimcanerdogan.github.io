import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ibrahimcanerdogan.github.io"),
  title: "İbrahim Can Erdoğan | Senior Android Engineer",
  description: "Senior Android Engineer with 4+ years of experience in Kotlin, Java, and Jetpack Compose. Expert in mobile app development, clean architecture, and modern Android technologies.",
  keywords: [
    "İbrahim Can Erdoğan",
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
    "Android Security"
  ],
  authors: [{ name: "İbrahim Can Erdoğan" }],
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
    url: "https://ibrahimcanerdogan.github.io",
    title: "İbrahim Can Erdoğan | Senior Android Engineer",
    description: "Senior Android Engineer with 4+ years of experience in Kotlin, Java, and Jetpack Compose. Expert in mobile app development, clean architecture, and modern Android technologies.",
    siteName: "İbrahim Can Erdoğan Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "İbrahim Can Erdoğan - Senior Android Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "İbrahim Can Erdoğan | Senior Android Engineer",
    description: "Senior Android Engineer with 4+ years of experience in Kotlin, Java, and Jetpack Compose. Expert in mobile app development, clean architecture, and modern Android technologies.",
    images: ["/og-image.jpg"],
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
    canonical: "https://ibrahimcanerdogan.github.io",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
