import { learning } from "@/content/leadership";
import styles from "./Leadership.module.css";

export function Learning() {
  return (
    <section aria-labelledby="learning-title" className={styles.learning}>
      <div className={styles.inner}>
        <div className={styles.learningBox}>
          <div className={styles.learningHead}>
            <div>
              <h2 id="learning-title" className={styles.title}>
                {learning.title}
              </h2>
              <p className={styles.lead}>{learning.body}</p>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={learning.badge.src} alt={learning.badge.alt} className={styles.learningBadge} />
          </div>
          <ul className={styles.learningGrid}>
            {learning.items.map((l) => (
              <li key={l.title}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={l.logo} alt={l.logoAlt} className={styles.learningLogo} />
                <h3 className={styles.learningTitle}>{l.title}</h3>
                {l.from && <p className={styles.learningFrom}>{l.from}</p>}
                <p className={styles.learningYear}>{l.year}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
