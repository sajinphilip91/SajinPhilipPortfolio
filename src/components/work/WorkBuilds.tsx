"use client";

import { useRef } from "react";
import { BuildsIntro } from "@/components/home/Builds";
import { workBuilds, type Build } from "@/content/home";
import styles from "./Work.module.css";

export function WorkBuilds({ items = workBuilds }: { items?: Build[] }) {
  const gridRef = useRef<HTMLElement>(null);

  return (
    <div className={styles.stage}>
      <div className={styles.pinned}>
        <BuildsIntro onShowcase={() => gridRef.current?.scrollIntoView({ behavior: "smooth" })} />
      </div>
      <section ref={gridRef} aria-label="AI builds" className={styles.bento}>
        {items.map((b) => (
          <article key={b.name} className={styles.tile} style={{ background: b.tone }}>
            {b.image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={b.image} alt={`${b.name}: ${b.headline}`} className={styles.tileImage} />
            )}
            <div aria-hidden="true" className={styles.tileScrim} />
            <div className={styles.tileCopy}>
              <p className={styles.tileMeta}>{b.meta}</p>
              <h3 className={styles.tileName}>{b.name}</h3>
              <p className={styles.tileLine}>{b.headline}</p>
              {b.primary && (
                <p className={styles.tileLinks}>
                  <a href={b.primary.href}>{b.primary.label}</a>
                  {b.secondary && <a href={b.secondary.href}>{b.secondary.label}</a>}
                </p>
              )}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
