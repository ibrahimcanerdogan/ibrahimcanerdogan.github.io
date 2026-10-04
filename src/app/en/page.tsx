import type { Metadata } from "next";
import PortfolioApp from "@/components/PortfolioApp";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata("en");
export default function EnglishHome() { return <PortfolioApp initialSection="hero" locale="en" />; }
