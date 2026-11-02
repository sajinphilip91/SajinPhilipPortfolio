import { LeadershipPage } from "@/components/leadership/LeadershipPage";
import { pageMeta } from "@/lib/seo";
import { leadershipHero } from "@/content/leadership";

export const metadata = pageMeta({
  title: "Leadership",
  description:
    "Sajin Philip's leadership profile: building design teams from zero, shaping design culture and leading with empathy, impact and AI.",
  path: "/leadership",
  image: leadershipHero.portrait,
});

export default function Page() {
  return <LeadershipPage />;
}
