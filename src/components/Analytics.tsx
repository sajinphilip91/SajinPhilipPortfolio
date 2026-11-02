import Script from "next/script";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";

const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;

/** Vercel counts visits. Clarity shows how people read, once its project ID is set in Vercel. */
export function Analytics() {
  return (
    <>
      <VercelAnalytics />
      {CLARITY_ID && (
        <Script id="clarity-init" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script",${JSON.stringify(CLARITY_ID)});`}
        </Script>
      )}
    </>
  );
}
