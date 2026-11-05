// Homepage Built with AI section.
// Version 1: the full-screen slider. Version 2: a bento grid whose placement changes on every visit.
// The A/B test is paused: everyone gets version 2. ?builds=1 still shows version 1 for that visit only.

export type BuildsVersion = 1 | 2;

export function readBuildsVersion(): BuildsVersion {
  try {
    return new URLSearchParams(window.location.search).get("builds") === "1" ? 1 : 2;
  } catch {
    return 2;
  }
}

const VISITS_KEY = "builds-visits";

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
