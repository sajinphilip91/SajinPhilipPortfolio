import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sajinphilip.com"),
  title: {
    default: "Sajin Philip — Design leader and builder",
    template: "%s — Sajin Philip",
  },
  description:
    "Design leader with 15+ years and 120M+ users behind him. Building digital products and services with AI and agents.",
  openGraph: {
    type: "website",
    siteName: "Sajin Philip",
    images: ["/media/hero-poster.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0e1316",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
