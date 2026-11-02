import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/posts";
import { SITE_URL } from "@/lib/seo";
import { getCaseSlugs } from "@/lib/work";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/work", "/leadership", "/writing", "/for-agents"].map((path) => ({ url: `${SITE_URL}${path}` }));
  const cases = getCaseSlugs().map((slug) => ({ url: `${SITE_URL}/work/${slug}` }));
  const posts = getPosts().map(({ slug, date }) => ({ url: `${SITE_URL}/writing/${slug}`, lastModified: date }));
  return [...pages, ...cases, ...posts];
}
