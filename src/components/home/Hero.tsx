"use client";

import { useEffect, useRef } from "react";
import { hero } from "@/content/home";
import styles from "./Hero.module.css";

export function Hero() {
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

      <ComingSoon className={styles.comingSoon} />

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
      </div>
    </section>
  );
}

function ComingSoon({ className, lazy = false }: { className: string; lazy?: boolean }) {
  return (
    <figure className={className}>
      <a href={hero.comingSoon.href} target="_blank" rel="noopener noreferrer" className={styles.comingSoonLink}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={hero.comingSoon.image}
          alt={`${hero.comingSoon.alt} Opens the LinkedIn post in a new tab.`}
          width={1200}
          height={1502}
          loading={lazy ? "lazy" : undefined}
        />
        <span className={styles.comingSoonLabel}>{hero.comingSoon.label}</span>
      </a>
    </figure>
  );
}

/** Phones: the robot gets its own section straight after the banner. Desktop shows it inside the hero. */
export function ComingSoonSection() {
  return (
    <section id="robot" aria-label="Coming soon" className={styles.robotSection}>
      <ComingSoon className={styles.robotFigure} lazy />
    </section>
  );
}
