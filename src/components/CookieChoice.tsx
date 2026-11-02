"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { OPEN_COOKIE_SETTINGS, readChoice, saveChoice, tellClarity, type CookieChoice as Choice } from "@/lib/cookieChoice";
import styles from "./CookieChoice.module.css";

export function CookieChoice() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const choice = readChoice();
    tellClarity(choice);
    // Runs after the page loads, so the server-rendered page and the first render always match.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!choice) setOpen(true);
    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_COOKIE_SETTINGS, reopen);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS, reopen);
  }, []);

  if (!open) return null;

  const choose = (choice: Choice) => {
    saveChoice(choice);
    tellClarity(choice);
    setOpen(false);
  };

  return (
    <aside aria-label="Cookie choice" className={styles.bar}>
      <p>
        This site uses cookies to understand how pages are read. <Link href="/privacy">Privacy</Link>
      </p>
      <div className={styles.actions}>
        <button type="button" onClick={() => choose("allow")}>
          Allow
        </button>
        <button type="button" onClick={() => choose("decline")}>
          Decline
        </button>
      </div>
    </aside>
  );
}

export function CookieSettingsLink() {
  return (
    <button type="button" className={styles.link} onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS))}>
      Cookie settings
    </button>
  );
}
