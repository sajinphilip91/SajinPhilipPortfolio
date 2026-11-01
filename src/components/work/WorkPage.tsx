import Link from "next/link";
import { ArrowCircle } from "@/components/Logo";
import { PageHeader } from "@/components/leadership/PageHeader";
import { caseStudies, workPage } from "@/content/home";
import { WorkBuilds } from "./WorkBuilds";
import styles from "./Work.module.css";

export function WorkPage() {
  return (
    <>
      <PageHeader />
      <main>
        <section aria-label="Introduction" className={styles.hero}>
          <div className={styles.inner}>
            <p className={`eyebrow ${styles.kicker}`}>{workPage.kicker}</p>
            <h1 className={styles.title}>{workPage.title}</h1>
          </div>
        </section>
        <section data-light aria-label="Case studies" className={styles.paper}>
          <ol className={`${styles.inner} ${styles.grid}`}>
            {caseStudies.map((c) => (
              <li key={c.title}>
                <Link href={c.href} className={styles.card}>
                  <span className={styles.frame}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={c.cover} alt="" className={styles.cover} />
                  </span>
                  <span>
                    <span className={styles.industry}>{c.industry}</span>
                    <span className={styles.name}>{c.title}</span>
                    <span className={styles.problem}>{c.problem}</span>
                    <span className={`arrow-link ${styles.cta}`}>
                      {workPage.cta}
                      <ArrowCircle />
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </section>
        <WorkBuilds />
      </main>
    </>
  );
}
