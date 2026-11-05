"use client";

import { useEffect } from "react";

/** Same-site hosts: links to these stay in the current tab. */
const OWN_HOSTS = ["sajinphilip.com", "www.sajinphilip.com"];

function isExternal(a: HTMLAnchorElement) {
  if (a.protocol !== "http:" && a.protocol !== "https:") return false;
  return a.host !== window.location.host && !OWN_HOSTS.includes(a.hostname);
}

function openInNewTab(a: HTMLAnchorElement) {
  if (a.target || !isExternal(a)) return;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
}

/**
 * Every link that leaves the site opens in a new tab, so visitors keep their place here.
 * Covers links in components and in Markdown posts alike, including ones added after load.
 */
export function ExternalLinks() {
  useEffect(() => {
    const markAll = (root: ParentNode) => root.querySelectorAll<HTMLAnchorElement>("a[href]").forEach(openInNewTab);
    markAll(document);

    const observer = new MutationObserver((changes) => {
      for (const change of changes) {
        change.addedNodes.forEach((node) => {
          if (node instanceof HTMLAnchorElement) openInNewTab(node);
          else if (node instanceof Element) markAll(node);
        });
        if (change.type === "attributes" && change.target instanceof HTMLAnchorElement) openInNewTab(change.target);
      }
    });
    observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["href"] });

    // A last check at click time, in case a link changed after it was marked.
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a[href]");
      if (a instanceof HTMLAnchorElement) openInNewTab(a);
    };
    document.addEventListener("click", onClick, true);

    return () => {
      observer.disconnect();
      document.removeEventListener("click", onClick, true);
    };
  }, []);

  return null;
}
