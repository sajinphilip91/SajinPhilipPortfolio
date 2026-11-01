import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";
import { caseStudies } from "@/content/home";
import { readMarkdown } from "./posts";

// Case studies are Markdown files in src/content/work, named after their /work/ URL.
const WORK_DIR = path.join(process.cwd(), "src/content/work");

type CaseMeta = {
  slug: string;
  title: string;
  subtitle: string;
  accent?: string;
  facts: { label: string; value: string }[];
};

export const getCaseSlugs = () =>
  fs
    .readdirSync(WORK_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));

export function getCase(slug: string) {
  const { meta, body } = readMarkdown<CaseMeta>(WORK_DIR, slug);
  const cover = caseStudies.find((c) => c.href === `/work/${slug}`)?.cover;
  return { meta, cover, html: marked.parse(body, { async: false }) };
}

/** The next case study in homepage order, wrapping round. */
export function getNextCase(slug: string) {
  const built = caseStudies.filter((c) => c.href.startsWith("/work/"));
  const here = built.findIndex((c) => c.href === `/work/${slug}`);
  return built[(here + 1) % built.length];
}
