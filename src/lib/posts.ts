import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";

// Posts are Markdown files in src/content/posts. Add a file and it appears on /writing at the next build.
const POSTS_DIR = path.join(process.cwd(), "src/content/posts");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  minutes: number;
  cover?: string;
};

function read(slug: string) {
  const raw = fs.readFileSync(path.join(POSTS_DIR, `${slug}.md`), "utf8");
  const [, head, body] = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/) ?? [];
  const fields: Record<string, unknown> = {};
  for (const line of head.split("\n")) {
    const colon = line.indexOf(":");
    fields[line.slice(0, colon)] = JSON.parse(line.slice(colon + 1));
  }
  return { meta: { slug, ...fields } as PostMeta, body };
}

export function getPosts(): PostMeta[] {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => read(file.replace(/\.md$/, "")).meta)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string) {
  const { meta, body } = read(slug);
  return { meta, html: marked.parse(body, { async: false }) };
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
}
