import type { Metadata } from "next";
import { WritingList } from "@/components/writing/WritingList";

export const metadata: Metadata = {
  title: "Write",
  description: "Sajin Philip's thoughts, ideas and stories on UX, AI and design.",
};

export default function Page() {
  return <WritingList />;
}
