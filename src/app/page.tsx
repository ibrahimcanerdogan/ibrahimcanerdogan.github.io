import type { Metadata } from "next";
import PortfolioApp from "@/components/PortfolioApp";
import { createEntityGraph, createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata("tr");

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(createEntityGraph("tr")) }}
      />
      <PortfolioApp initialSection="hero" locale="tr" />
    </>
  );
}
