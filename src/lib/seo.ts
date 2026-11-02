import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { leadershipHero } from "@/content/leadership";
import { site } from "@/content/home";

export const SITE_URL = "https://www.sajinphilip.com";
const DEFAULT_SHARE = "/media/hero-poster.jpg";
const PERSON_ID = `${SITE_URL}/#person`;

/** Social apps handle JPEGs best, so a cover shares as its copy in /media/share when there is one. */
export function shareImage(cover?: string) {
  if (!cover) return DEFAULT_SHARE;
  if (cover.endsWith(".jpg")) return cover;
  const copy = `/media/share/${path.basename(cover, path.extname(cover))}.jpg`;
  return fs.existsSync(path.join(process.cwd(), "public", copy)) ? copy : DEFAULT_SHARE;
}

type PageMeta = {
  title?: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
};

export function pageMeta({ title, description, path: url, image, type = "website" }: PageMeta): Metadata {
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      siteName: site.name,
      url,
      title: title ? `${title} — ${site.name}` : undefined,
      description,
      images: [shareImage(image)],
    },
  };
}

export const personData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": PERSON_ID,
  name: site.name,
  url: SITE_URL,
  image: `${SITE_URL}${leadershipHero.portrait}`,
  jobTitle: "Design leader",
  description:
    "Design leader with 15+ years and 120M+ users behind him. Building digital products and services with AI and agents.",
  email: `mailto:${site.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressCountry: "IN" },
  knowsAbout: ["Product design", "UX design", "Design leadership", "AI products", "Agentic AI"],
  sameAs: Object.values(site.social),
};

export const websiteData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: site.name,
  publisher: { "@id": PERSON_ID },
};

type ArticleData = { type: "BlogPosting" | "Article"; title: string; description: string; path: string; image?: string; date?: string };

export function articleData({ type, title, description, path: url, image, date }: ArticleData) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    headline: title,
    description,
    url: `${SITE_URL}${url}`,
    mainEntityOfPage: `${SITE_URL}${url}`,
    image: `${SITE_URL}${shareImage(image)}`,
    author: { "@id": PERSON_ID, "@type": "Person", name: site.name },
    ...(date ? { datePublished: date } : {}),
  };
}
