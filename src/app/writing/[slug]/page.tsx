import type { Metadata } from "next";
import { PostPage } from "@/components/writing/PostPage";
import { getPost, getPosts } from "@/lib/posts";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const { meta } = getPost(slug);
  return { title: meta.title, description: meta.excerpt };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <PostPage slug={slug} />;
}
