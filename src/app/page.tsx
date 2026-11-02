import { HomePage } from "@/components/home/HomePage";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  description:
    "Design leader with 15+ years and 120M+ users behind him. Building digital products and services with AI and agents.",
  path: "/",
});

export default function Page() {
  return <HomePage />;
}
