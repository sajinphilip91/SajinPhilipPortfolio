import { approach } from "@/content/home";
import styles from "./Approach.module.css";

function isExternal(href: string) {
  return href.startsWith("http");
}

export function Approach() {
  return (
    <section id="approach" aria-label="How I work" className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 className={styles.title}>{approach.title}</h2>
          <p className={styles.sub}>{approach.sub}</p>
        </header>

        <div className={styles.grid}>
          {approach.columns.map((col) => (
            <div key={col.label} className={styles.card}>
              <p className={`eyebrow ${styles.cardLabel}`}>{col.label}</p>
              <h3 className={styles.cardTitle}>{col.title}</h3>
              <p className={styles.cardBody}>{col.body}</p>
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

          <div className={`${styles.card} ${styles.cardLight}`}>
            <p className={`eyebrow ${styles.cardLabel}`}>{approach.leadership.label}</p>
            <h3 className={styles.cardTitle}>{approach.leadership.title}</h3>
            <div className={styles.split}>
              {approach.leadership.split.map((s) => (
                <div key={s.label} className={styles.splitItem}>
                  <span className={styles.splitValue}>{s.value}</span>
                  <span className={styles.splitLabel}>{s.label}</span>
                </div>
              ))}
            </div>
            <p className={styles.cardBodyLight}>{approach.leadership.body}</p>
            <ul className={`${styles.links} ${styles.linksLight}`}>
              {approach.leadership.links.map((l) => (
                <li key={l.title}>
                  <a
                    href={l.href}
                    {...(isExternal(l.href) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    <span className={styles.linkTitle}>{l.title}</span>
                    <span aria-hidden="true">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
