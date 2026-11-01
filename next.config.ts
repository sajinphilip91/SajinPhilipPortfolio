import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
