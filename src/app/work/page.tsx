import type { Metadata } from "next";
import { WorkPage } from "@/components/work/WorkPage";

export const metadata: Metadata = {
  title: "Work",
  description: "Case studies and AI-built products by Sajin Philip, from research to launch.",
};

export default function Page() {
  return <WorkPage />;
}
