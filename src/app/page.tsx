import type { Metadata } from "next";
import PortfolioApp from "@/components/PortfolioApp";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata("tr");
export default function Home() { return <PortfolioApp initialSection="hero" locale="tr" />; }
