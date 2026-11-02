import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/leadership/PageHeader";
import { formatDate, getPost } from "@/lib/posts";
import { articleData } from "@/lib/seo";
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
      <JsonLd
        data={articleData({
          type: "BlogPosting",
          title: meta.title,
          description: meta.excerpt,
          path: `/writing/${slug}`,
          image: meta.cover,
          date: meta.date,
        })}
      />
    </>
  );
}
