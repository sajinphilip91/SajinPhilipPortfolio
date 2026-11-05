// A/B test of the homepage Built with AI section.
// Version 1: the full-screen slider. Version 2: a bento grid whose large tile changes on every visit.
// Each visitor keeps one version (kept in their browser); ?builds=1 or ?builds=2 picks one and keeps it.

export type BuildsVersion = 1 | 2;

const VERSION_KEY = "builds-version";
const VISITS_KEY = "builds-visits";

export function readBuildsVersion(): BuildsVersion {
  try {
    const asked = new URLSearchParams(window.location.search).get("builds");
    if (asked === "1" || asked === "2") {
      localStorage.setItem(VERSION_KEY, asked);
      return Number(asked) as BuildsVersion;
    }
    const saved = localStorage.getItem(VERSION_KEY);
    if (saved === "1" || saved === "2") return Number(saved) as BuildsVersion;
    const picked: BuildsVersion = Math.random() < 0.5 ? 1 : 2;
    localStorage.setItem(VERSION_KEY, String(picked));
    return picked;
  } catch {
    // Storage blocked (some private windows): show the current design.
    return 1;
  }
}

/** How many times this visitor has opened the homepage before now; counts this visit. */
export function countVisit(): number {
  try {
    const seen = Number(localStorage.getItem(VISITS_KEY)) || 0;
    localStorage.setItem(VISITS_KEY, String(seen + 1));
    return seen;
  } catch {
    return 0;
  }
}

/** Tags the Clarity session so recordings and clicks can be filtered by version. */
export function tagBuildsVersion(version: BuildsVersion) {
  window.clarity?.("set", "builds_version", String(version));
}

/** `where`: "v1" or "v2" on desktop, "phone" on phones (not part of the test). */
export function trackBuildClick(where: "v1" | "v2" | "phone", name: string) {
  window.clarity?.("event", `builds_${where}_click`);
  window.clarity?.("event", `builds_${where}: ${name}`);
}
