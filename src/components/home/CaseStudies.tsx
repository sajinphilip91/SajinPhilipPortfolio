"use client";

import { useState } from "react";
import { caseStudies } from "@/content/home";
import { ArrowCircle } from "@/components/Logo";
import styles from "./CaseStudies.module.css";

export function CaseStudies() {
  const [index, setIndex] = useState(0);
  const c = caseStudies[index];

  return (
    <section id="work" aria-label="Case studies" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.side}>
          <p className={`eyebrow ${styles.label}`}>Case studies</p>
          <h2 className={styles.title}>The problems I solve make people’s lives happier and more joyful</h2>
          <ol className={styles.list}>
            {caseStudies.map((item, i) => (
              <li key={item.title}>
                <button
                  type="button"
                  aria-pressed={i === index}
                  onClick={() => setIndex(i)}
                  className={`${styles.item} ${i === index ? styles.itemActive : ""}`}
                >
                  <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
                  <span className={styles.itemText}>
                    <span className={styles.itemTitle}>{item.title}</span>
                    <span className={styles.itemIndustry}>{item.industry}</span>
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </div>

        <article key={c.title} className={styles.detail} aria-live="polite">
          <div className={styles.cover} style={{ background: c.tone }}>
            {c.cover ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={c.cover} alt={`${c.title} case study cover`} className={styles.coverImage} />
            ) : (
              <span className={styles.coverNote}>Cover image coming soon</span>
            )}
            {c.badge && <span className={styles.badge}>{c.badge}</span>}
          </div>
          <h3 className={styles.caseTitle}>{c.title}</h3>
          <p className={styles.problem}>{c.problem}</p>
          <dl className={styles.facts}>
            {c.facts.map((f) => (
              <div key={f.label} className={styles.fact}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
          <a href={c.href} className="arrow-link">
            {c.cta}
            <ArrowCircle />
          </a>
        </article>
      </div>
    </section>
  );
}
