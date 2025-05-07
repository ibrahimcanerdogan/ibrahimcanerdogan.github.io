import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "İbrahim Can Erdoğan | Android Engineer",
  description: "Android Yazılım Geliştirici ve Teknoloji Tutkunu",
  icons: {
    icon: [
      {
        url: "/logo.jpg",
        type: "image/jpeg",
      },
    ],
    shortcut: ["/logo.jpg"],
    apple: [
      {
        url: "/logo.jpg",
        type: "image/jpeg",
      },
    ],
  },
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
    "İbrahim Can Erdoğan"
  ],
  authors: [{ name: "İbrahim Can Erdoğan" }],
  creator: "İbrahim Can Erdoğan",
  publisher: "İbrahim Can Erdoğan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://icanerdogan.github.io"),
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://icanerdogan.github.io",
    title: "İbrahim Can Erdoğan | Android Engineer",
    description: "Android Yazılım Geliştirme uzmanı İbrahim Can Erdoğan'ın kişisel portfolyo sitesi. Kotlin ve Java ile modern Android uygulamaları geliştirme deneyimi.",
    siteName: "İbrahim Can Erdoğan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "İbrahim Can Erdoğan | Android Engineer",
    description: "Android Yazılım Geliştirme uzmanı İbrahim Can Erdoğan'ın kişisel portfolyo sitesi.",
    creator: "@icanerdogan",
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.className} bg-black text-white`}>{children}</body>
    </html>
  );
}
