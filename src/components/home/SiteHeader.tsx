"use client";

import type { MouseEvent } from "react";
import { site } from "@/content/home";
import { Logo } from "@/components/Logo";
import styles from "./SiteHeader.module.css";

export type HeaderTheme = "clear" | "light" | "dark";
export type NavTarget = "top" | "builds" | "work" | "approach";

type Props = {
  /** "clear" sits over full-bleed media; "light" and "dark" match the section underneath. */
  theme: HeaderTheme;
  /** Fill the bar with the section colour. Off while a page slides under it. */
  solid: boolean;
  onNavigate: (target: NavTarget) => void;
};

export function SiteHeader({ theme, solid, onNavigate }: Props) {
  const goHome = (e: MouseEvent) => {
    e.preventDefault();
    onNavigate("top");
  };

  return (
    <header className={`${styles.header} ${styles[theme]} ${solid ? styles.solid : ""}`}>
      <a href="#top" className={styles.logo} aria-label={`${site.name}, home`} onClick={goHome}>
        <Logo />
      </a>
      <nav aria-label="Primary" className={styles.nav}>
        <button type="button" onClick={() => onNavigate("builds")}>Builds</button>
        <button type="button" onClick={() => onNavigate("work")}>Work</button>
        <button type="button" onClick={() => onNavigate("approach")}>Approach</button>
        <a href={site.resume}>Resume</a>
      </nav>
    </header>
  );
}
