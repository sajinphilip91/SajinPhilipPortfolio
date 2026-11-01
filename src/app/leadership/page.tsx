import type { Metadata } from "next";
import { LeadershipPage } from "@/components/leadership/LeadershipPage";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "Sajin Philip's leadership profile: building design teams from zero, shaping design culture and leading with empathy, impact and AI.",
};

export default function Page() {
  return <LeadershipPage />;
}
