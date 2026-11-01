"use client";

import { useEffect, useState } from "react";
import { SiteHeader, type HeaderTheme } from "@/components/home/SiteHeader";

/** Just below the header: the section here decides the header colour. */
const PROBE = 80;

/** Header for normally scrolling pages. White sections mark themselves with data-light. */
export function PageHeader() {
  const [theme, setTheme] = useState<HeaderTheme>("dark");

  useEffect(() => {
    const update = () => {
      const onLight = [...document.querySelectorAll("[data-light]")].some((el) => {
        const r = el.getBoundingClientRect();
        return r.top <= PROBE && r.bottom > PROBE;
      });
      setTheme(onLight ? "light" : "dark");
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return <SiteHeader theme={theme} solid />;
}
