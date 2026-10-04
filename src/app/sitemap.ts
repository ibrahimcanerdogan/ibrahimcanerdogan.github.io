import type { MetadataRoute } from "next";
import { routeFor, SECTIONS, SITE_URL, slugToSection } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-05T00:00:00.000Z");
  return (["tr", "en"] as const).flatMap((locale) => [undefined, ...SECTIONS].map((slug) => ({
    url: `${SITE_URL}${routeFor(locale, slugToSection(slug))}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: slug ? 0.8 : 1,
  })));
}
