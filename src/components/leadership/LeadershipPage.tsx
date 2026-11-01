import { leadershipHero as hero } from "@/content/leadership";
import { LeadershipTabs } from "./LeadershipTabs";
import { PageHeader } from "./PageHeader";
import { Testimonials } from "./Testimonials";
import styles from "./Leadership.module.css";

export function LeadershipPage() {
  return (
    <>
      <PageHeader />
      <main>
        <section aria-label="Introduction" className={styles.hero}>
          <div className={styles.inner}>
            <div className={styles.heroGrid}>
              <div>
                <p className={`eyebrow ${styles.kickerNight}`}>{hero.kicker}</p>
                <h1 className={styles.heroTitle}>{hero.title}</h1>
                <p className={styles.lead} style={{ color: "var(--on-night-muted)" }}>
                  {hero.body}
                </p>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={hero.portrait} alt={hero.portraitAlt} className={styles.portrait} />
            </div>
            <dl className={styles.stats}>
              {hero.stats.map((s) => (
                <div key={s.label} className={styles.stat}>
                  <dt>{s.label}</dt>
                  <dd>{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <LeadershipTabs />

        <Testimonials />
      </main>
    </>
  );
}
