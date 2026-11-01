"use client";

import { useEffect } from "react";

/** Post embeds are our own files, so each iframe can grow to its content at any screen width. */
export function FitEmbeds({ rootId }: { rootId: string }) {
  useEffect(() => {
    const frames = [...document.querySelectorAll<HTMLIFrameElement>(`#${rootId} iframe[src^="/media/"]`)];
    const fit = (frame: HTMLIFrameElement) => {
      const content = frame.contentDocument?.documentElement;
      if (content && content.scrollHeight > 0) frame.style.height = `${content.scrollHeight}px`;
    };
    const onLoad = (e: Event) => fit(e.currentTarget as HTMLIFrameElement);
    frames.forEach((frame) => {
      frame.addEventListener("load", onLoad);
      if (frame.contentDocument?.readyState === "complete") fit(frame);
    });
    return () => frames.forEach((frame) => frame.removeEventListener("load", onLoad));
  }, [rootId]);

  return null;
}
