"use client";

import { usePathname } from "next/navigation";
import { Footer } from "./Footer";

/** The homepage is full-page, so its last screen carries the footer instead. */
export function SiteFooter() {
  return usePathname() === "/" ? null : <Footer />;
}
