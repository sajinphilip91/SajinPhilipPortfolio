import { ForAgentsPage } from "@/components/agents/ForAgentsPage";
import { pageMeta } from "@/lib/seo";
import { leadershipHero } from "@/content/leadership";

export const metadata = pageMeta({
  title: "For Agents",
  description: "The canonical, machine-readable profile of Sajin Philip for AI assistants and agents.",
  path: "/for-agents",
  image: leadershipHero.portrait,
});

export default function Page() {
  return <ForAgentsPage />;
}
