import { closing, site } from "@/content/home";
import styles from "./Closing.module.css";

const socials = [
  { title: "LinkedIn", href: site.social.linkedin },
  { title: "Dribbble", href: site.social.dribbble },
  { title: "Instagram", href: site.social.instagram },
  { title: "ADPList", href: site.social.adplist },
];

export function Closing() {
  return (
    <section id="closing" aria-label="Leadership and contact" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{closing.title}</h2>
        <div className={styles.split}>
          {closing.split.map((s) => (
            <div key={s.label} className={styles.part} style={{ flexGrow: s.value }}>
              <span className={styles.value}>{s.value}%</span>
              <span className={styles.label}>{s.label}</span>
            </div>
          ))}
        </div>
        <div className={styles.about}>
          <p className={styles.body}>{closing.body}</p>
          <ul className={styles.links}>
            {closing.links.map((l) => (
              <li key={l.title}>
                <a href={l.href}>
                  {l.title} <span aria-hidden="true">→</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <footer className={styles.footer}>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <ul className={styles.socials}>
            {socials.map((l) => (
              <li key={l.title}>
                <a href={l.href} target="_blank" rel="noopener noreferrer">
                  {l.title}
                </a>
              </li>
            ))}
          </ul>
          <p>© {new Date().getFullYear()} {site.name}</p>
        </footer>
      </div>
    </section>
  );
}
