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
          <ol className={styles.stages}>
            {approach.stages.map((s, i) => (
              <li key={s.name} className={styles.stage}>
                <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className={styles.name}>{s.name}</h3>
                  <ul className={styles.items}>
                    {s.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
          <div className={styles.governance}>
            <div>
              <h3 className={styles.governanceTitle}>{approach.governance.title}</h3>
              <p className={styles.governanceLine}>{approach.governance.line}</p>
            </div>
            <ul className={styles.governanceItems}>
              {approach.governance.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
