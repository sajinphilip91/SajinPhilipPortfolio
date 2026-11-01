import { ArrowCircle } from "@/components/Logo";
import { site } from "@/content/home";
import { leadershipHero as hero, teams } from "@/content/leadership";
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
                <p className={styles.lead}>{hero.body}</p>
                <div className={styles.linkRow}>
                  <a href={site.resume} download="Sajin-Philip-Resume.pdf" className="arrow-link">
                    Download Resume
                    <ArrowCircle />
                  </a>
                  <a href={site.social.linkedin} className="arrow-link">
                    LinkedIn Profile
                    <ArrowCircle />
                  </a>
                </div>
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

        <section aria-label="Design teams and companies" className={styles.teams}>
          <div className={styles.inner}>
            <h2 className={styles.title}>{teams.title}</h2>
            <p className={styles.lead}>{teams.body}</p>
            <ul className={styles.companies}>
              {teams.companies.map((c) => (
                <li key={c.name}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.logo} alt={c.name} className={styles.companyLogo} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <LeadershipTabs />

        <Testimonials />
      </main>
    </>
  );
}
