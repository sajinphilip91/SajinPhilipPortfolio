import { WritingList } from "@/components/writing/WritingList";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Write",
  description: "Sajin Philip's thoughts, ideas and stories on UX, AI and design.",
  path: "/writing",
});

export default function Page() {
  return <WritingList />;
}
