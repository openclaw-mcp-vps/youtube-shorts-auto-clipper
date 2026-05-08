import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShortClip AI — Auto-generate YouTube Shorts from Long Videos",
  description: "AI identifies viral moments in your long-form videos and auto-generates YouTube Shorts with captions and thumbnails. Built for creators with 10k+ subscribers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ccd45202-09e0-4076-8585-be5bb51904dd"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
