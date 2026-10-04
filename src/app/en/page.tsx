import type { Metadata } from "next";
import PortfolioApp from "@/components/PortfolioApp";
import { createEntityGraph, createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata("en");

export default function EnglishHome() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(createEntityGraph("en")) }}
      />
      <PortfolioApp initialSection="hero" locale="en" />
    </>
  );
}
