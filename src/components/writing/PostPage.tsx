import Link from "next/link";
import { PageHeader } from "@/components/leadership/PageHeader";
import { formatDate, getPost } from "@/lib/posts";
import { FitEmbeds } from "./FitEmbeds";
import styles from "./Writing.module.css";

export function PostPage({ slug }: { slug: string }) {
  const { meta, html } = getPost(slug);
  return (
    <>
      <PageHeader />
      <main>
        <section aria-label="Post title" className={styles.hero}>
          <div className={styles.prose}>
            <Link href="/writing" className={styles.back}>
              All posts
            </Link>
            <h1 className={styles.postTitle}>{meta.title}</h1>
            <p className={styles.postMeta}>
              {formatDate(meta.date)} · {meta.minutes} min read
            </p>
          </div>
        </section>
        <section data-light aria-label="Post" className={styles.paper}>
          <article id="post-body" className={`${styles.prose} ${styles.body}`} dangerouslySetInnerHTML={{ __html: html }} />
          <FitEmbeds rootId="post-body" />
        </section>
      </main>
    </>
  );
}
