import Link from "next/link";
import { site } from "@/content/home";
import styles from "./Footer.module.css";

const socials = [
  { title: "LinkedIn", href: site.social.linkedin },
  { title: "Dribbble", href: site.social.dribbble },
  { title: "Instagram", href: site.social.instagram },
  { title: "ADPList", href: site.social.adplist },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <ul className={styles.contact}>
          <li>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </li>
          <li>
            <a href={`tel:${site.phone.replaceAll(" ", "")}`}>{site.phone}</a>
          </li>
        </ul>
        <ul className={styles.socials}>
          {socials.map((l) => (
            <li key={l.title}>
              <a href={l.href} target="_blank" rel="noopener noreferrer">
                {l.title}
              </a>
            </li>
          ))}
        </ul>
        <p>
          © {new Date().getFullYear()} {site.name} · <Link href="/privacy">Privacy</Link>
        </p>
      </div>
    </footer>
  );
}
