import type { Metadata } from "next";
import { CasePage } from "@/components/work/CasePage";
import { getCase, getCaseSlugs } from "@/lib/work";

export const dynamicParams = false;

export function generateStaticParams() {
  return getCaseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const { meta } = getCase(slug);
  return { title: meta.title, description: meta.subtitle };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <CasePage slug={slug} />;
}
