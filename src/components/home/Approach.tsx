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
          <ol className={styles.phases}>
            {approach.phases.map((p, i) => (
              <li key={p.name} className={styles.phase}>
                <span className={styles.num} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className={styles.name}>{p.name}</h3>
                  <p className={styles.line}>{p.line}</p>
                  <ul className={styles.steps}>
                    {p.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ul>
                  <p className={styles.ai}>
                    <span className={styles.aiTag}>AI</span>
                    {p.ai}
                  </p>
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
