import type { Metadata } from "next";
import { PostPage } from "@/components/writing/PostPage";
import { getPost, getPosts } from "@/lib/posts";
import { pageMeta } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const { meta } = getPost(slug);
  return pageMeta({ title: meta.title, description: meta.excerpt, path: `/writing/${slug}`, image: meta.cover, type: "article" });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <PostPage slug={slug} />;
}
