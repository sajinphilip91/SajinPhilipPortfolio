"use client";

import { useEffect, useRef, type MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menu, menuQuote, site } from "@/content/home";
import { Logo } from "@/components/Logo";
import styles from "./SiteHeader.module.css";

export type HeaderTheme = "clear" | "light" | "dark";
export type NavTarget = "top" | "work";

type Props = {
  /** "clear" sits over full-bleed media; "light" and "dark" match the section underneath. */
  theme: HeaderTheme;
  /** Fill the bar with the section colour. Off while a page slides under it. */
  solid: boolean;
  /** Homepage only: move within the page instead of following the link. */
  onNavigate?: (target: NavTarget) => void;
};

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
      <path d="M4 9h3.6v11H4zM5.8 3.5a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2zM10 9h3.4v1.5h.1c.5-.9 1.7-1.8 3.4-1.8 3.6 0 4.3 2.3 4.3 5.4V20h-3.6v-5.2c0-1.3 0-2.9-1.8-2.9s-2.1 1.4-2.1 2.8V20H10z" />
    </svg>
  );
}

export function SiteHeader({ theme, solid, onNavigate }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();

  const open = () => {
    dialogRef.current?.showModal();
    document.documentElement.dataset.menu = "open";
  };
  const close = () => dialogRef.current?.close();

  useEffect(() => {
    return () => {
      delete document.documentElement.dataset.menu;
    };
  }, []);

  const follow = (e: MouseEvent, target?: NavTarget) => {
    close();
    if (target && onNavigate) {
      e.preventDefault();
      onNavigate(target);
    }
  };

  return (
    <header className={`${styles.header} ${styles[theme]} ${solid ? styles.solid : ""}`}>
      <Link href="/" className={styles.logo} aria-label={`${site.name}, home`} onClick={(e) => follow(e, "top")}>
        <Logo />
      </Link>
      <button type="button" className={styles.menuButton} aria-label="Open menu" aria-haspopup="dialog" onClick={open}>
        <span aria-hidden="true" className={styles.bars} />
      </button>

      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-label="Menu"
        onClose={() => delete document.documentElement.dataset.menu}
      >
        <div className={styles.dialogBar}>
          <Link href="/" className={styles.logo} aria-label={`${site.name}, home`} onClick={(e) => follow(e, "top")}>
            <Logo />
          </Link>
          <button type="button" className={styles.menuButton} aria-label="Close menu" onClick={close}>
            <span aria-hidden="true" className={styles.cross} />
          </button>
        </div>
        <div className={styles.dialogBody}>
          <nav aria-label="Primary" className={styles.menu}>
            <ul>
              {menu.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    aria-current={pathname === item.href ? "page" : undefined}
                    onClick={(e) => follow(e, item.target)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.aside}>
            <figure className={styles.quote}>
              <span aria-hidden="true" className={styles.quoteMark}>
                “
              </span>
              <blockquote>{menuQuote.text}</blockquote>
              <figcaption>— {menuQuote.by}</figcaption>
            </figure>
            <div className={styles.socials}>
              <a href={site.social.instagram} aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href={site.social.linkedin} aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      </dialog>
    </header>
  );
}
