import { approach } from "@/content/home";
import styles from "./Approach.module.css";

export function Approach() {
  return (
    <section id="approach" aria-label="How I work" className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={`eyebrow ${styles.kicker}`}>{approach.kicker}</p>
          <h2 className={styles.title}>{approach.title}</h2>
          <p className={styles.sub}>{approach.sub}</p>
        </header>
        <div className={styles.process}>
          <p className={styles.governance}>
            <strong>{approach.governance.title}</strong>
            <span>{approach.governance.body}</span>
          </p>
          <ol className={styles.stages}>
            {approach.stages.map((s, i) => (
              <li key={s.name} className={styles.stage}>
                <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
                <span>
                  <span className={styles.name}>{s.name}</span>
                  <span className={styles.body}>{s.body}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
