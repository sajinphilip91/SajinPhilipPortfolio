// The visitor's cookie choice, kept in their own browser. Clarity treats consent as valid for 9 months.
const KEY = "cookie-choice";
const NINE_MONTHS_MS = 274 * 24 * 60 * 60 * 1000;

export type CookieChoice = "allow" | "decline";

export function readChoice(): CookieChoice | null {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY) ?? "null") as { choice: CookieChoice; at: number } | null;
    return saved && Date.now() - saved.at < NINE_MONTHS_MS ? saved.choice : null;
  } catch {
    return null;
  }
}

export function saveChoice(choice: CookieChoice) {
  try {
    localStorage.setItem(KEY, JSON.stringify({ choice, at: Date.now() }));
  } catch {
    // Private windows can block storage: the bar simply asks again next visit.
  }
}

/** Ads are always denied: this site only uses Clarity to see how pages are read. */
export function tellClarity(choice: CookieChoice | null) {
  window.clarity?.("consentv2", {
    ad_Storage: "denied",
    analytics_Storage: choice === "allow" ? "granted" : "denied",
  });
}

export const OPEN_COOKIE_SETTINGS = "open-cookie-settings";
