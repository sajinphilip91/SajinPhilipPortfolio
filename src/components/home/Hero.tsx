"use client";

import { useEffect, useRef } from "react";
import { hero, site } from "@/content/home";
import { Logo } from "@/components/Logo";
import styles from "./Hero.module.css";

type Props = { onNavigate: (target: "builds" | "work" | "approach") => void };

export function Hero({ onNavigate }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      if (reduce.matches) v.pause();
      else v.play().catch(() => {});
    };
    apply();
    reduce.addEventListener("change", apply);
    return () => reduce.removeEventListener("change", apply);
  }, []);

  return (
    <section id="top" className={styles.hero} aria-label="Introduction">
      <video
        ref={videoRef}
        className={styles.media}
        src="/media/hero-loop.mp4"
        poster="/media/hero-poster.jpg"
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
        aria-hidden="true"
      />
      <div className={styles.scrimSide} aria-hidden="true" />
      <div className={styles.scrimBottom} aria-hidden="true" />

      <header className={styles.header}>
        <a href="#top" className={styles.logo} aria-label={`${site.name}, home`}>
          <Logo />
        </a>
        <nav aria-label="Primary" className={styles.nav}>
          <button type="button" onClick={() => onNavigate("builds")}>Builds</button>
          <button type="button" onClick={() => onNavigate("work")}>Work</button>
          <button type="button" onClick={() => onNavigate("approach")}>Approach</button>
          <a href={site.resume}>Resume</a>
        </nav>
      </header>

      <div className={styles.content}>
        <h1 className={styles.title}>
          {hero.title[0]}
          <br />
          {hero.title[1]}
        </h1>
        <div className={styles.detailRow}>
          <p className={styles.sub}>
            {hero.sub[0]}
            <br />
            {hero.sub[1]}
          </p>
          <dl className={styles.stats}>
            {hero.stats.map((s) => (
              <div key={s.label} className={styles.stat}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <button type="button" className={`arrow-link ${styles.scrollCue}`} onClick={() => onNavigate("builds")}>
          Scroll down
        </button>
      </div>
    </section>
  );
}
