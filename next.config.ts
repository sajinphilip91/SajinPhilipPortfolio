import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Repeat visits reuse images and video instead of checking each file with the server.
  async headers() {
    return [
      {
        source: "/media/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" }],
      },
    ];
  },
  // Keep old Wix URLs working after the switch so existing links and search rankings survive.
  async redirects() {
    return [
      { source: "/about", destination: "/leadership", permanent: true },
      { source: "/copy-of-work-3", destination: "/work", permanent: true },
      { source: "/blog", destination: "/writing", permanent: true },
      { source: "/uxai", destination: "/writing", permanent: true },
      { source: "/post/:slug", destination: "/writing/:slug", permanent: true },
      { source: "/agenticai", destination: "/for-agents", permanent: true },
      { source: "/ai", destination: "/for-agents", permanent: true },
      { source: "/yoyo-case-study", destination: "/work/yoyo-test", permanent: true },
      { source: "/depression-aid", destination: "/work/depression-aid", permanent: true },
      { source: "/whatsapp-poll", destination: "/work/whatsapp-poll", permanent: true },
      { source: "/tcs-smarthome", destination: "/work/home-automation", permanent: true },
      { source: "/dropshipping", destination: "/work/dropshipping", permanent: true },
    ];
  },
};

export default nextConfig;
