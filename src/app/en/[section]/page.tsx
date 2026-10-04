import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PortfolioApp from "@/components/PortfolioApp";
import { createMetadata, SECTIONS, slugToSection, type SectionSlug } from "@/lib/seo";

export const dynamicParams = false;
export function generateStaticParams() { return SECTIONS.map((section) => ({ section })); }
export async function generateMetadata({ params }: { params: Promise<{ section: string }> }): Promise<Metadata> {
  const { section } = await params;
  if (!SECTIONS.includes(section as SectionSlug)) return {};
  return createMetadata("en", section as SectionSlug);
}
export default async function EnglishSectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  if (!SECTIONS.includes(section as SectionSlug)) notFound();
  return <PortfolioApp initialSection={slugToSection(section)} locale="en" />;
}
