"use client";

import { useEffect, useRef, type MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menu, site } from "@/content/home";
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
      </dialog>
    </header>
  );
}
