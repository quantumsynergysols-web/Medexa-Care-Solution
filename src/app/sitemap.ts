import type { MetadataRoute } from "next";
import { PAGES, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(PAGES).map((page) => ({
    url: `${SITE_URL}${page.route === "/" ? "" : page.route}`,
    changeFrequency: "monthly",
    priority: page.route === "/" ? 1 : page.route.split("/").length > 2 ? 0.7 : 0.8,
  }));
}
