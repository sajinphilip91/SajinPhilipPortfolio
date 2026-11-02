import Script from "next/script";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { CookieChoice } from "@/components/CookieChoice";

const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;

/** Vercel counts visits. Clarity shows how people read, once its project ID is set in Vercel. */
export function Analytics() {
  return (
    <>
      <VercelAnalytics />
      {CLARITY_ID && (
        <>
          {/* Before hydration, so the consent choice and chapter tracking always find window.clarity.
              Real domain only: Vercel's deployment links would fill Clarity with automated visits.
              The tag itself waits for the page to finish: a slow Clarity server once held Chrome's spinner for 30s. */}
          <Script id="clarity-init" strategy="beforeInteractive">
            {`if(["sajinphilip.com","www.sajinphilip.com"].indexOf(location.hostname)>-1)(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};function s(){t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)}if(l.readyState==="complete")s();else c.addEventListener("load",s)})(window,document,"clarity","script",${JSON.stringify(CLARITY_ID)});`}
          </Script>
          <CookieChoice />
        </>
      )}
    </>
  );
}
