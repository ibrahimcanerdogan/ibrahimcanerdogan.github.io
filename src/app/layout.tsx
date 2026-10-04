import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { entityGraph, SITE_URL } from "@/lib/seo";

export const viewport: Viewport = {
  width: "device-width", initialScale: 1, viewportFit: "cover",
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "#f7f7f4" }, { media: "(prefers-color-scheme: dark)", color: "#090a0b" }],
};

const inter = Inter({ subsets: ["latin", "latin-ext"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "İbrahim Can Erdoğan — Portfolio",
  title: "İbrahim Can Erdoğan | Yazılım Mühendisi · Kurucu",
  description: "Yazılım mühendisi, ürün geliştirici, teknik eğitmen ve Akhisar Dijital kurucusu İbrahim Can Erdoğan'ın portföyü.",
  keywords: ["İbrahim Can Erdoğan", "Software Engineer", "Akhisar Dijital", "Kotlin", "Android", "Next.js", "Product Development", "Technical Education"],
  authors: [{ name: "İbrahim Can Erdoğan", url: SITE_URL }], creator: "İbrahim Can Erdoğan", publisher: "İbrahim Can Erdoğan",
  formatDetection: { email: false, address: false, telephone: false },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
  verification: { google: "-BSNn58JC2hy9JHjNxthuO8RHwLD6Ii0_Lz5eeqTE9M" },
  icons: { icon: [{ url: "/icon-192.png", type: "image/png", sizes: "192x192" }], apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }] },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(entityGraph) }} />
        {children}
      </body>
    </html>
  );
}
