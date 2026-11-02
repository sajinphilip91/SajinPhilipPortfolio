"use client";

import { useEffect, useRef, useState } from "react";
import { builds, buildsIntro } from "@/content/home";
import { ArrowCircle } from "@/components/Logo";
import styles from "./Builds.module.css";

const SLIDE_SECONDS = 8;

type Props = {
  /** "paged": desktop full-page mode, intro is an overlay. "flow": normal scrolling, intro is its own block. */
  mode: "paged" | "flow";
  /** Paged mode: is this section on screen. */
  active?: boolean;
  /** Paged mode: is the intro overlay showing. */
  introVisible?: boolean;
  onShowcase?: () => void;
};

export function Builds({ mode, active = false, introVisible = false, onShowcase }: Props) {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const [stopped, setStopped] = useState(false);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef(0);

  // In flow mode, only run the slider while the section is on screen.
  useEffect(() => {
    if (mode !== "flow" || !sectionRef.current) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.5 });
    io.observe(sectionRef.current);
    return () => io.disconnect();
  }, [mode]);

  const running = (mode === "paged" ? active && !introVisible : inView) && !paused && !stopped;

  useEffect(() => {
    if (!running) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const t = setInterval(() => {
      // Advance outside any state updater: React runs updaters twice in dev, which skipped a slide.
      const next = progressRef.current + 0.1 / SLIDE_SECONDS;
      if (next >= 1) {
        progressRef.current = 0;
        setProgress(0);
        setIndex((i) => (i + 1) % builds.length);
      } else {
        progressRef.current = next;
        setProgress(next);
      }
    }, 100);
    return () => clearInterval(t);
  }, [running]);

  const pick = (i: number) => {
    setIndex(i);
    progressRef.current = 0;
    setProgress(0);
    setStopped(true);
  };

  const b = builds[index];

  return (
    <>
      {mode === "flow" && (
        <div className={styles.flowIntro}>
          <BuildsIntro onShowcase={() => sectionRef.current?.scrollIntoView({ behavior: "smooth" })} />
        </div>
      )}

      <section
        ref={sectionRef}
        id="builds"
        aria-label="AI builds"
        className={styles.builds}
      >
        {builds.map((item, i) => (
          <div
            key={item.name}
            aria-hidden="true"
            className={styles.bg}
            style={{ background: item.tone, opacity: i === index ? 1 : 0 }}
          >
            {item.image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={item.image} alt={`${item.name}: ${item.headline}`} className={styles.bgImage} loading={mode === "flow" ? "lazy" : undefined} />
            )}
          </div>
        ))}
        <div aria-hidden="true" className={b.image ? styles.scrimImage : styles.scrimPlain} />

        <div className={styles.inner}>
          <p className={`eyebrow ${styles.label}`}>Built with AI</p>
          <div className={styles.stage}>
            <div key={b.name} className={styles.copy}>
              <p className={styles.question}>{b.question}</p>
              <h2 className={styles.headline}>{b.headline}</h2>
              <p className={styles.body}>{b.body}</p>
              <div className={styles.actions}>
                {b.primary && (
                  <a href={b.primary.href} className={styles.primary}>
                    {b.primary.label}
                  </a>
                )}
                {b.secondary && (
                  <a href={b.secondary.href} className={styles.secondary}>
                    {b.secondary.label}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Only the tabs pause it: the section fills the screen, so the pointer is always over it. */}
        <nav
          aria-label="Choose a build"
          className={styles.tabs}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className={styles.tabRow}>
            {builds.map((item, i) => (
              <button
                key={item.name}
                type="button"
                aria-pressed={i === index}
                onClick={() => pick(i)}
                className={styles.tab}
                style={{ opacity: i === index ? 1 : 0.62 }}
              >
                <span aria-hidden="true" className={styles.track} />
                <span
                  aria-hidden="true"
                  className={styles.bar}
                  style={{ transform: `scaleX(${i === index ? (stopped ? 1 : progress) : 0})` }}
                />
                <span className={styles.tabMeta}>
                  {String(i + 1).padStart(2, "0")} · {item.meta}
                </span>
                <span className={styles.tabName}>{item.name}</span>
              </button>
            ))}
          </div>
        </nav>

        {mode === "paged" && (
          <div
            aria-hidden={!introVisible}
            className={styles.overlay}
            // Blur is inline because the CSS build drops backdrop-filter from the module.
            style={{
              opacity: introVisible ? 1 : 0,
              pointerEvents: introVisible ? "auto" : "none",
              backdropFilter: "blur(32px)",
              WebkitBackdropFilter: "blur(32px)",
            }}
          >
            <IntroCopy shift={introVisible ? 0 : -40} />
            <button type="button" className={`arrow-link ${styles.overlayCta}`} onClick={onShowcase} tabIndex={introVisible ? 0 : -1}>
              See the builds
              <ArrowCircle direction="down" />
            </button>
          </div>
        )}
      </section>
    </>
  );
}

function IntroCopy({ shift = 0 }: { shift?: number }) {
  return (
    <div className={styles.introCopy} style={{ transform: `translateY(${shift}px)` }}>
      <p className={`eyebrow ${styles.introKicker}`}>{buildsIntro.kicker}</p>
      <h2 className={styles.introTitle}>{buildsIntro.title}</h2>
      <p className={styles.introSub}>{buildsIntro.sub}</p>
    </div>
  );
}

export function BuildsIntro({ onShowcase }: { onShowcase: () => void }) {
  return (
    <section aria-label="Built with AI" className={styles.introBlock}>
      <IntroCopy />
      <button type="button" className={`arrow-link ${styles.overlayCta}`} onClick={onShowcase}>
        See the builds
        <ArrowCircle direction="down" />
      </button>
    </section>
  );
}
