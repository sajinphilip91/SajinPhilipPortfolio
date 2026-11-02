import { WorkPage } from "@/components/work/WorkPage";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Work",
  description: "Case studies and AI-built products by Sajin Philip, from research to launch.",
  path: "/work",
  image: "/media/covers/depression-aid.webp",
});

export default function Page() {
  return <WorkPage />;
}
