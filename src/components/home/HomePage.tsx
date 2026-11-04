"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { SiteHeader, type HeaderTheme, type NavTarget } from "./SiteHeader";
import { Hero } from "./Hero";
import { Builds } from "./Builds";
import { CaseStudies } from "./CaseStudies";
import { Approach } from "./Approach";
import { Writing } from "./Writing";
import { Closing } from "./Closing";
import { WorkBuilds } from "@/components/work/WorkBuilds";
import { builds } from "@/content/home";
import styles from "./HomePage.module.css";

/**
 * Steps of the desktop full-page experience. "intro" and "builds" share one screen:
 * the intro is an overlay that lifts on the next scroll.
 */
const STEPS = ["hero", "intro", "builds", "work", "approach", "writing", "closing"] as const;
const STEP_SCREEN = [0, 1, 1, 2, 3, 4, 5];
const SCREENS = [
  { label: "Introduction", step: 0 },
  { label: "AI builds", step: 1 },
  { label: "Case studies", step: 3 },
  { label: "How I work", step: 4 },
  { label: "Writing", step: 5 },
  { label: "Leadership and contact", step: 6 },
];
const PAGED_QUERY = "(min-width: 901px) and (min-height: 640px)";
const LOCK_MS = 900;
/** A pause this long between wheel events means a new gesture, not trackpad momentum. */
const GESTURE_GAP_MS = 140;
const MIN_WHEEL = 12;
/** A swipe ramps up, peaks and fades: only a jump after it has faded this far is a second swipe. */
const FADED = 0.5;
const SCROLL_ROOM = 48;
/** Just below the header: in normal scrolling, the section here decides the header colour. */
const FLOW_PROBE = 80;
/** Height of the menu text: while a page slides, it changes colour as the section edge crosses it. */
const PAGED_PROBE = 38;
const SLIDE_MS = 1100;
const SCREEN_IDS = ["top", "builds", "work", "approach", "writing", "closing"];

function themeAt(y: number): HeaderTheme {
  const covers = (id: string) => {
    const r = document.getElementById(id)?.getBoundingClientRect();
    return !!r && r.top <= y && r.bottom > y;
  };
  if (covers("top")) return "clear";
  return covers("work") || covers("writing") ? "light" : "dark";
}

/** On short windows a screen can be taller than the viewport; it scrolls before the page moves on. */
function scrollsInside(step: number, dir: 1 | -1) {
  const el = document.getElementById(SCREEN_IDS[STEP_SCREEN[step]]);
  // A few clipped pixels must not swallow a scroll, or the page seems stuck.
  if (!el || el.scrollHeight <= el.clientHeight + SCROLL_ROOM) return null;
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
  const wheel = useRef({ time: 0, size: 0, peak: 0, total: 0, dir: 0, fired: false });
  const queued = useRef<number | undefined>(undefined);
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
    clearTimeout(queued.current);
    const n = Math.max(0, Math.min(STEPS.length - 1, next));
    setStep((cur) => {
      if (n === cur) return cur;
      lockUntil.current = Date.now() + LOCK_MS;
      return n;
    });
  }, []);

  const go = useCallback(
    (dir: 1 | -1) => {
      if (Date.now() < lockUntil.current) return;
      setStep((cur) => {
        const n = Math.max(0, Math.min(STEPS.length - 1, cur + dir));
        if (n !== cur) lockUntil.current = Date.now() + LOCK_MS;
        return n;
      });
    },
    [],
  );

  /** A scroll made while a page is still sliding runs when the slide ends, so it is never lost. */
  const goOrQueue = useCallback(
    (dir: 1 | -1) => {
      clearTimeout(queued.current);
      const wait = lockUntil.current - Date.now();
      if (wait > 0) queued.current = window.setTimeout(() => go(dir), wait);
      else go(dir);
    },
    [go],
  );

  useEffect(() => {
    if (!paged) return;
    const menuOpen = () => document.documentElement.dataset.menu === "open";
    const onWheel = (e: WheelEvent) => {
      if (menuOpen()) return;
      if (scrollsInside(stepRef.current, e.deltaY > 0 ? 1 : -1)) {
        lockUntil.current = Date.now() + 200;
        return;
      }
      e.preventDefault();
      // One swipe is one move: a new one needs a pause, a reversal, or a push after the last has faded.
      const now = Date.now();
      const size = Math.abs(e.deltaY);
      const dir = e.deltaY > 0 ? 1 : -1;
      const last = wheel.current;
      const pushed = size > last.size * 1.6 && last.size < last.peak * FADED;
      const fresh = now - last.time > GESTURE_GAP_MS || dir !== last.dir || pushed;
      const gesture = fresh
        ? { peak: size, total: size, fired: false }
        : { peak: Math.max(last.peak, size), total: last.total + size, fired: last.fired };
      const fire = !gesture.fired && gesture.total >= MIN_WHEEL;
      wheel.current = { ...gesture, time: now, size, dir, fired: gesture.fired || fire };
      if (fire) goOrQueue(dir);
    };
    const onKey = (e: KeyboardEvent) => {
      if (menuOpen()) return;
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
      if (touchY.current === null || menuOpen()) return;
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
      clearTimeout(queued.current);
    };
  }, [paged, go, goOrQueue, goTo]);

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

  // Arriving from another page via the Work link.
  useEffect(() => {
    if (paged && window.location.hash === "#work") goTo(3);
  }, [paged, goTo]);

  const navigate = (target: NavTarget | "builds") => {
    if (paged) {
      goTo(target === "top" ? 0 : target === "builds" ? 1 : 3);
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
        <div className={styles.phoneBuilds}>
          <WorkBuilds items={builds} />
        </div>
        <CaseStudies />
        <Approach />
        <Writing />
        <Closing />
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
