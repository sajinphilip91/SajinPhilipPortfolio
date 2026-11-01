"use client";

import { useState } from "react";
import { testimonials } from "@/content/leadership";
import { ArrowCircle } from "@/components/Logo";
import styles from "./Leadership.module.css";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = testimonials.items[index];

  return (
    <section aria-label={testimonials.title} className={styles.night}>
      <div className={`${styles.inner} ${styles.testimonials}`}>
        <div>
          <p className={`eyebrow ${styles.kickerNight}`}>{testimonials.kicker}</p>
          <h2 className={styles.title}>{testimonials.title}</h2>
          <ul className={styles.people}>
            {testimonials.items.map((item, i) => (
              <li key={item.name}>
                <button
                  type="button"
                  aria-pressed={i === index}
                  onClick={() => setIndex(i)}
                  className={i === index ? styles.personActive : styles.person}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <figure key={t.name} className={styles.quoteBlock}>
          <blockquote className={styles.quote}>
            {t.quote.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </blockquote>
          <figcaption className={styles.quoteBy}>
            <span>{t.name}</span>
            <a href={t.href} className="arrow-link">
              {t.linkLabel}
              <ArrowCircle />
            </a>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
