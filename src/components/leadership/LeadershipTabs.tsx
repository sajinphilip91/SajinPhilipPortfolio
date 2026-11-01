"use client";

import Link from "next/link";
import { useRef, useState, type KeyboardEvent } from "react";
import {
  designer,
  humanAi,
  impact,
  leadershipTabs as tabs,
  mentorship,
  philosophy,
  principles,
  teams,
} from "@/content/leadership";
import { ArrowCircle } from "@/components/Logo";
import styles from "./Leadership.module.css";

function LeadershipPanel() {
  return (
    <>
      <p className={`eyebrow ${styles.kickerPaper}`}>{philosophy.kicker}</p>
      <h2 className={styles.statementQuote}>{philosophy.quote}</h2>
      <p className={styles.lead}>{philosophy.body}</p>

      <div className={styles.block}>
        <p className={`eyebrow ${styles.kickerPaper}`}>{principles.kicker}</p>
        <h3 className={styles.title}>{principles.title}</h3>
        <p className={styles.lead}>{principles.body}</p>
        <div className={styles.grid4}>
          {principles.items.map((item) => (
            <article key={item.title} className={styles.card}>
              <h4 className={styles.cardTitle}>{item.title}</h4>
              <p className={styles.cardBody}>{item.body}</p>
            </article>
          ))}
        </div>
      </div>

    </>
  );
}

function ImpactPanel() {
  return (
    <>
      <h2 className={styles.title}>{impact.title}</h2>
      <p className={styles.lead}>{impact.body}</p>
      <div className={styles.grid3}>
        {impact.items.map((item) => (
          <article key={item.title} className={styles.card}>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardBody}>{item.body}</p>
          </article>
        ))}
      </div>
    </>
  );
}

function AiPanel() {
  return (
    <>
      <h2 className={styles.title}>{humanAi.title}</h2>
      <p className={styles.lead}>{humanAi.body}</p>
      <div className={styles.grid3}>
        {humanAi.items.map((item) => (
          <article key={item.title} className={styles.card}>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardBody}>{item.body}</p>
          </article>
        ))}
      </div>
      <p className={styles.closing}>{humanAi.closing}</p>
      <div className={styles.linkRow}>
        <Link href={humanAi.link.href} className="arrow-link">
          {humanAi.link.title}
          <ArrowCircle />
        </Link>
      </div>
    </>
  );
}

function DesignerPanel() {
  return (
    <div className={styles.split}>
      <div>
        <h2 className={styles.title}>{designer.title}</h2>
        {designer.body.map((p) => (
          <p key={p} className={styles.lead}>
            {p}
          </p>
        ))}
        <div className={styles.linkRow}>
          <a href={designer.link.href} className="arrow-link">
            {designer.link.title}
            <ArrowCircle />
          </a>
        </div>
      </div>
      <div className={styles.splitBar}>
        {designer.split.map((s) => (
          <div key={s.label} className={styles.figure}>
            <span className={styles.figureValue}>{s.value}</span>
            <span aria-hidden="true" className={styles.figureBar} />
            <span className={styles.figureLabel}>{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MentorshipPanel() {
  return (
    <>
      <h2 className={styles.title}>{mentorship.title}</h2>
      <p className={styles.lead}>{mentorship.body}</p>
      <div className={styles.linkRow}>
        {mentorship.links.map((l) => (
          <a key={l.title} href={l.href} className="arrow-link">
            {l.title}
            <ArrowCircle />
          </a>
        ))}
      </div>
    </>
  );
}

const PANELS = [LeadershipPanel, ImpactPanel, AiPanel, DesignerPanel, MentorshipPanel];

export function LeadershipTabs() {
  const [index, setIndex] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const Panel = PANELS[index];

  const select = (next: number) => {
    setIndex(next);
    tabRefs.current[next]?.scrollIntoView({ block: "nearest", inline: "center" });
    // Once the bar is stuck, a new panel starts from its top rather than mid-page.
    const bar = barRef.current;
    const panel = panelRef.current;
    if (bar && panel) {
      const headerH = parseFloat(getComputedStyle(bar).top);
      const barBox = bar.getBoundingClientRect();
      const panelTop = panel.getBoundingClientRect().top;
      if (barBox.top <= headerH && panelTop < barBox.bottom) window.scrollBy(0, panelTop - barBox.bottom);
    }
  };

  const onKeyDown = (e: KeyboardEvent) => {
    const last = tabs.length - 1;
    const next =
      e.key === "ArrowRight" ? (index === last ? 0 : index + 1)
      : e.key === "ArrowLeft" ? (index === 0 ? last : index - 1)
      : e.key === "Home" ? 0
      : e.key === "End" ? last
      : null;
    if (next === null) return;
    e.preventDefault();
    select(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section data-light aria-label="Leadership profile" className={styles.tabbed}>
      <div className={`${styles.inner} ${styles.teams}`}>
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
      <div ref={barRef} className={styles.tabBar}>
        <div role="tablist" aria-label="Leadership profile" onKeyDown={onKeyDown} className={styles.tabRow}>
          {tabs.map((label, i) => (
            <button
              key={label}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`tab-${i}`}
              aria-selected={i === index}
              aria-controls={`panel-${i}`}
              tabIndex={i === index ? 0 : -1}
              onClick={() => select(i)}
              className={i === index ? styles.tabActive : styles.tab}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <div
        key={index}
        ref={panelRef}
        role="tabpanel"
        id={`panel-${index}`}
        aria-labelledby={`tab-${index}`}
        className={`${styles.inner} ${styles.panel}`}
      >
        <Panel />
      </div>
    </section>
  );
}
