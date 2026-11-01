import type { Metadata } from "next";
import { ForAgentsPage } from "@/components/agents/ForAgentsPage";

export const metadata: Metadata = {
  title: "For Agents",
  description: "The canonical, machine-readable profile of Sajin Philip for AI assistants and agents.",
};

export default function Page() {
  return <ForAgentsPage />;
}
