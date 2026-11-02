import { PageHeader } from "@/components/leadership/PageHeader";
import { pageMeta } from "@/lib/seo";
import { site } from "@/content/home";
import styles from "./Privacy.module.css";

export const metadata = pageMeta({
  title: "Privacy",
  description: "How sajinphilip.com measures visits.",
  path: "/privacy",
});

export default function Page() {
  return (
    <>
      <PageHeader />
      <main className={styles.page}>
        <h1>Privacy</h1>
        <p>
          This site uses Vercel Analytics to count visits, and Microsoft Clarity to show how pages are read, through
          scroll maps, heatmaps and session recordings. I use this only to improve the site.
        </p>
        <p>
          Microsoft may use cookies to do this. Questions? Write to <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </main>
    </>
  );
}
