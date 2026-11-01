import Link from "next/link";
import { ArrowCircle } from "@/components/Logo";
import { writing } from "@/content/home";
import styles from "./Writing.module.css";

function isExternal(href: string) {
  return href.startsWith("http");
}

export function Writing() {
  return (
    <section id="writing" aria-label="My writing" className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <div>
            <p className={`eyebrow ${styles.kicker}`}>{writing.kicker}</p>
            <h2 className={styles.title}>{writing.title}</h2>
          </div>
          <div>
            <p className={styles.sub}>{writing.sub}</p>
            <Link href={writing.more.href} className="arrow-link">
              {writing.more.title}
              <ArrowCircle />
            </Link>
          </div>
        </header>
        <div className={styles.columns}>
          {writing.columns.map((col) => (
            <div key={col.label}>
              <p className={`eyebrow ${styles.label}`}>{col.label}</p>
              <ul className={styles.links}>
                {col.links.map((l) => (
                  <li key={l.title}>
                    <a
                      href={l.href}
                      {...(isExternal(l.href) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      <span className={styles.linkText}>
                        <span className={styles.linkTitle}>{l.title}</span>
                        {l.body && <span className={styles.linkBody}>{l.body}</span>}
                      </span>
                      <span aria-hidden="true">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
