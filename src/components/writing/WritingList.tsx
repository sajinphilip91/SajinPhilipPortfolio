import Link from "next/link";
import { PageHeader } from "@/components/leadership/PageHeader";
import { formatDate, getPosts } from "@/lib/posts";
import styles from "./Writing.module.css";

export function WritingList() {
  const posts = getPosts();
  return (
    <>
      <PageHeader />
      <main>
        <section aria-label="Introduction" className={styles.hero}>
          <div className={styles.inner}>
            <h1 className={styles.heroTitle}>My Thoughts, Ideas &amp; Stories</h1>
            <p className={styles.heroBody}>I write about anything that related to UX and beneficial for our planet</p>
          </div>
        </section>
        <section data-light aria-label="All posts" className={styles.paper}>
          <ul className={`${styles.inner} ${styles.list}`}>
            {posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/writing/${post.slug}`} className={styles.row}>
                  {post.cover ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={post.cover} alt={post.title} loading="lazy" className={styles.thumb} />
                  ) : (
                    <span aria-hidden="true" className={styles.thumb} />
                  )}
                  <span className={styles.rowText}>
                    <span className={styles.rowTitle}>{post.title}</span>
                    <span className={styles.rowExcerpt}>{post.excerpt}</span>
                    <span className={styles.rowMeta}>
                      {formatDate(post.date)} · {post.minutes} min read
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
