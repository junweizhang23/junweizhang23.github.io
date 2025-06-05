import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Junwei Zhang - Academic Profile",
  description: "Personal academic website showcasing research contributions, publications, and professional experience",
  authors: [{ name: "Junwei Zhang" }],
  keywords: ["academic", "research", "publications", "computer science", "engineering"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Giscus Comments */}
        <script 
          src="https://giscus.app/client.js"
          data-repo="junweizhang23/junweizhang23.github.io"
          data-repo-id="[REPO_ID]"
          data-category="General"
          data-category-id="[CATEGORY_ID]"
          data-mapping="pathname"
          data-strict="0"
          data-reactions-enabled="1"
          data-emit-metadata="0"
          data-input-position="top"
          data-theme="preferred_color_scheme"
          data-lang="en"
          crossOrigin="anonymous"
          async
        />
        
        {/* Visitor Analytics */}
        <script async src="https://api.countapi.xyz/hit/junweizhang23.github.io/visits" />
        
        {/* Optional: ClustrMaps for visitor geography */}
        <script 
          src="//clustrmaps.com/map_v2.js?d=YOUR_MAP_ID&cl=ffffff&w=300"
          async
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
