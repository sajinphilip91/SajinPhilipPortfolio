import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowCircle } from "@/components/Logo";
import { PageHeader } from "@/components/leadership/PageHeader";
import { getCase, getNextCase } from "@/lib/work";
import styles from "./Case.module.css";

export function CasePage({ slug }: { slug: string }) {
  const { meta, cover, html } = getCase(slug);
  const next = getNextCase(slug);
  return (
    <>
      <PageHeader />
      <main>
        <section aria-label="Case study summary" className={styles.hero}>
          <div className={styles.inner}>
            <Link href="/#work" className={styles.back}>
              All work
            </Link>
            {cover && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={cover} alt="" className={styles.cover} />
            )}
            <h1 className={styles.title}>{meta.title}</h1>
            <p className={styles.subtitle}>{meta.subtitle}</p>
            <dl className={styles.facts}>
              {meta.facts.map((f) => (
                <div key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
        <section data-light aria-label="Case study" className={styles.paper}>
          <article
            className={`${styles.inner} ${styles.body}`}
            style={meta.accent ? ({ "--accent": meta.accent } as CSSProperties) : undefined}
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <div className={styles.inner}>
            <Link href={next.href} className={`arrow-link ${styles.next}`}>
              Next: {next.title}
              <ArrowCircle />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
