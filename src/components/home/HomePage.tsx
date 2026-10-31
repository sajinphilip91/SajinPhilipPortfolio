"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Hero } from "./Hero";
import { Builds } from "./Builds";
import { CaseStudies } from "./CaseStudies";
import { Approach } from "./Approach";
import styles from "./HomePage.module.css";

/**
 * Steps of the desktop full-page experience. "intro" and "builds" share one screen:
 * the intro is an overlay that lifts on the next scroll.
 */
const STEPS = ["hero", "intro", "builds", "work", "approach"] as const;
const STEP_SCREEN = [0, 1, 1, 2, 3];
const SCREENS = [
  { label: "Introduction", step: 0 },
  { label: "AI builds", step: 1 },
  { label: "Case studies", step: 3 },
  { label: "How I work", step: 4 },
];
const LIGHT_SCREENS = new Set([2]);
const PAGED_QUERY = "(min-width: 901px) and (min-height: 640px)";
const LOCK_MS = 1000;

export function HomePage() {
  const [paged, setPaged] = useState(false);
  const [step, setStep] = useState(0);
  const lockUntil = useRef(0);
  const touchY = useRef<number | null>(null);

  // Full-page scrolling only on large screens; phones and small windows scroll normally.
  useEffect(() => {
    const mq = window.matchMedia(PAGED_QUERY);
    const update = () => setPaged(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const goTo = useCallback((next: number) => {
    const n = Math.max(0, Math.min(STEPS.length - 1, next));
    setStep((cur) => {
      if (n === cur) return cur;
      lockUntil.current = Date.now() + LOCK_MS;
      return n;
    });
  }, []);

  const go = useCallback(
    (dir: 1 | -1) => {
      if (Date.now() < lockUntil.current) {
        // Swallow trackpad momentum: keep the lock alive while events keep coming.
        lockUntil.current = Math.max(lockUntil.current, Date.now() + 150);
        return;
      }
      setStep((cur) => {
        const n = Math.max(0, Math.min(STEPS.length - 1, cur + dir));
        if (n !== cur) lockUntil.current = Date.now() + LOCK_MS;
        return n;
      });
    },
    [],
  );

  useEffect(() => {
    if (!paged) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (Math.abs(e.deltaY) < 12) return;
      go(e.deltaY > 0 ? 1 : -1);
    };
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      if (t && (t.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(t.tagName))) return;
      if (["ArrowDown", "PageDown"].includes(e.key) || (e.key === " " && !e.shiftKey)) {
        e.preventDefault();
        go(1);
      } else if (["ArrowUp", "PageUp"].includes(e.key) || (e.key === " " && e.shiftKey)) {
        e.preventDefault();
        go(-1);
      } else if (e.key === "Home") {
        goTo(0);
      } else if (e.key === "End") {
        goTo(STEPS.length - 1);
      }
    };
    const onTouchStart = (e: TouchEvent) => {
      touchY.current = e.touches[0]?.clientY ?? null;
    };
    const onTouchEnd = (e: TouchEvent) => {
      if (touchY.current === null) return;
      const d = touchY.current - (e.changedTouches[0]?.clientY ?? touchY.current);
      touchY.current = null;
      if (Math.abs(d) > 50) go(d > 0 ? 1 : -1);
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKey);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [paged, go, goTo]);

  const navigate = (target: "builds" | "work" | "approach") => {
    if (paged) {
      goTo(target === "builds" ? 1 : target === "work" ? 3 : 4);
    } else {
      document.getElementById(target === "builds" ? "builds-intro" : target)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const screen = STEP_SCREEN[step];
  const onLight = LIGHT_SCREENS.has(screen);

  return (
    <main className={paged ? styles.paged : styles.flow}>
      <div
        className={styles.track}
        style={paged ? { transform: `translateY(${-100 * screen}svh)` } : undefined}
      >
        <Hero onNavigate={navigate} />
        <div id="builds-intro" />
        <Builds
          mode={paged ? "paged" : "flow"}
          active={paged && screen === 1}
          introVisible={paged && step === 1}
          onShowcase={() => goTo(2)}
        />
        <CaseStudies />
        <Approach />
      </div>

      {paged && (
        <nav aria-label="Sections" className={styles.dots}>
          {SCREENS.map((s, i) => (
            <button
              key={s.label}
              type="button"
              aria-label={s.label}
              aria-current={i === screen ? "true" : undefined}
              onClick={() => goTo(s.step)}
              className={styles.dot}
            >
              <span
                aria-hidden="true"
                style={{
                  width: i === screen ? 28 : 12,
                  background: onLight
                    ? i === screen
                      ? "#111111"
                      : "rgba(17,17,17,0.35)"
                    : i === screen
                      ? "#ffffff"
                      : "rgba(255,255,255,0.45)",
                }}
              />
            </button>
          ))}
        </nav>
      )}
    </main>
  );
}
