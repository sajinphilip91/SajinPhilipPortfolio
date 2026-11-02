"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    clarity?: (command: string, ...args: (string | Record<string, string>)[]) => void;
  }
}

/** Tells Clarity how far someone read: one event per chapter reached, plus one at the end. */
export function ChapterTracker({ slug }: { slug: string }) {
  useEffect(() => {
    const body = document.querySelector("[data-case-body]");
    const end = document.querySelector("[data-case-end]");
    if (!body) return;
    const chapters = [...body.querySelectorAll("h2")].filter((h) => /^\d+\./.test(h.textContent ?? ""));
    window.clarity?.("set", "case_study", slug);

    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        io.unobserve(e.target);
        const name = e.target === end ? "finished" : e.target.textContent;
        window.clarity?.("event", `${slug}: ${name}`);
      }
    });
    chapters.forEach((h) => io.observe(h));
    if (end) io.observe(end);
    return () => io.disconnect();
  }, [slug]);

  return null;
}
