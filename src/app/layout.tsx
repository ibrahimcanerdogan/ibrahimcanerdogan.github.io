import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "İbrahim Can Erdoğan | Android Engineer",
  description: "Android Yazılım Geliştirme uzmanı İbrahim Can Erdoğan'ın kişisel portfolyo sitesi. Kotlin ve Java ile modern Android uygulamaları geliştirme deneyimi.",
  applicationName: "İbrahim Can Erdoğan Portfolio",
  authors: [{ name: "İbrahim Can Erdoğan", url: "https://icanerdogan.github.io" }],
  generator: "Next.js",
  keywords: [
    "Android Developer",
    "Kotlin",
    "Java",
    "Android Engineer",
    "Mobile Development",
    "Android SDK",
    "Jetpack Compose",
    "MVVM",
    "Clean Architecture",
    "İbrahim Can Erdoğan",
    "Android Yazılım Geliştirici",
    "Android Uygulama Geliştirme",
    "Android Programlama",
    "Android Eğitmeni",
    "Udemy Eğitmeni"
  ],
  referrer: "origin-when-cross-origin",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" }
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: [
      { url: "/logo.jpg", type: "image/jpeg" },
      { url: "/logo.jpg", sizes: "32x32", type: "image/jpeg" },
      { url: "/logo.jpg", sizes: "16x16", type: "image/jpeg" },
    ],
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
  manifest: "/manifest.json",
  metadataBase: new URL("https://icanerdogan.github.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://icanerdogan.github.io",
    title: "İbrahim Can Erdoğan | Android Engineer",
    description: "Android Yazılım Geliştirme uzmanı İbrahim Can Erdoğan'ın kişisel portfolyo sitesi. Kotlin ve Java ile modern Android uygulamaları geliştirme deneyimi.",
    siteName: "İbrahim Can Erdoğan Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "İbrahim Can Erdoğan Portfolio",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "İbrahim Can Erdoğan | Android Engineer",
    description: "Android Yazılım Geliştirme uzmanı İbrahim Can Erdoğan'ın kişisel portfolyo sitesi.",
    creator: "@icanerdogan",
    images: ["/twitter-image.jpg"],
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
    google: "google-site-verification-code", // Google Search Console doğrulama kodunuzu buraya ekleyin
    yandex: "yandex-verification-code", // Yandex Webmaster doğrulama kodunuzu buraya ekleyin
  },
  category: "technology",
  classification: "portfolio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className={`${inter.className} bg-black text-white`}>{children}</body>
    </html>
  );
}
