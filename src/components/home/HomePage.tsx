"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { SiteHeader, type HeaderTheme, type NavTarget } from "./SiteHeader";
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
const PAGED_QUERY = "(min-width: 901px) and (min-height: 640px)";
const LOCK_MS = 1000;
const NAV_STEP: Record<NavTarget, number> = { top: 0, builds: 1, work: 3, approach: 4 };
/** Just below the header: in normal scrolling, the section here decides the header colour. */
const FLOW_PROBE = 80;
/** Height of the menu text: while a page slides, it changes colour as the section edge crosses it. */
const PAGED_PROBE = 38;
const SLIDE_MS = 1100;
const SCREEN_IDS = ["top", "builds", "work", "approach"];

function themeAt(y: number): HeaderTheme {
  const covers = (id: string) => {
    const r = document.getElementById(id)?.getBoundingClientRect();
    return !!r && r.top <= y && r.bottom > y;
  };
  if (covers("top")) return "clear";
  return covers("work") ? "light" : "dark";
}

/** On short windows a screen can be taller than the viewport; it scrolls before the page moves on. */
function scrollsInside(step: number, dir: 1 | -1) {
  const el = document.getElementById(SCREEN_IDS[STEP_SCREEN[step]]);
  if (!el || el.scrollHeight <= el.clientHeight + 1) return null;
  const room = dir > 0 ? el.scrollTop + el.clientHeight < el.scrollHeight - 1 : el.scrollTop > 0;
  return room ? el : null;
}

export function HomePage() {
  const [paged, setPaged] = useState(false);
  const [step, setStep] = useState(0);
  const [theme, setTheme] = useState<HeaderTheme>("clear");
  const [settled, setSettled] = useState(true);
  const [dotsLight, setDotsLight] = useState(false);
  const lockUntil = useRef(0);
  const touchY = useRef<number | null>(null);
  const stepRef = useRef(0);

  useEffect(() => {
    stepRef.current = step;
  }, [step]);

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
      if (scrollsInside(stepRef.current, e.deltaY > 0 ? 1 : -1)) {
        lockUntil.current = Date.now() + 200;
        return;
      }
      e.preventDefault();
      if (Math.abs(e.deltaY) < 12) return;
      go(e.deltaY > 0 ? 1 : -1);
    };
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      if (t && (t.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(t.tagName))) return;
      const down = ["ArrowDown", "PageDown"].includes(e.key) || (e.key === " " && !e.shiftKey);
      const up = ["ArrowUp", "PageUp"].includes(e.key) || (e.key === " " && e.shiftKey);
      if (down || up) {
        e.preventDefault();
        const dir = down ? 1 : -1;
        const inside = scrollsInside(stepRef.current, dir);
        if (inside) inside.scrollBy({ top: dir * inside.clientHeight * 0.8, behavior: "smooth" });
        else go(dir);
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
      if (Math.abs(d) > 50 && !scrollsInside(stepRef.current, d > 0 ? 1 : -1)) go(d > 0 ? 1 : -1);
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

  // In normal scrolling the header takes its colour from the section beneath it.
  useEffect(() => {
    if (paged) return;
    const update = () => setTheme(themeAt(FLOW_PROBE));
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [paged]);

  // While a page slides, follow it frame by frame so the menu changes with the page, not before it.
  useEffect(() => {
    if (!paged) return;
    const end = performance.now() + SLIDE_MS;
    let frame = 0;
    const tick = () => {
      setTheme(themeAt(PAGED_PROBE));
      setDotsLight(themeAt(window.innerHeight / 2) === "light");
      const sliding = performance.now() < end;
      setSettled(!sliding);
      if (sliding) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [paged, step]);

  const navigate = (target: NavTarget) => {
    if (paged) {
      goTo(NAV_STEP[target]);
    } else if (target === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(target === "builds" ? "builds-intro" : target)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const screen = STEP_SCREEN[step];
  const paintBar = !paged || settled;

  return (
    <main className={paged ? styles.paged : styles.flow}>
      <SiteHeader theme={theme === "dark" && screen === 1 ? "clear" : theme} solid={paintBar} onNavigate={navigate} />
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
                  background: dotsLight
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
