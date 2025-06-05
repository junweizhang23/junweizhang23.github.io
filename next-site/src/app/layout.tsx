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
  title: "Dr. Junwei Zhang - Meta Smart Glass Engineer | IEEE Associate Editor | Stanford AI",
  description: "Dr. Junwei Zhang - Meta Smart Glass GenAI Multi-Modal Systems Engineer, IEEE T-CSVT Associate Editor, TGO Elite Tech Leader, Stanford CS Master Program. Pioneering smart glass technology, computer vision, and AI research with 155+ citations.",
  authors: [{ name: "Dr. Junwei Zhang" }],
  keywords: [
    "Junwei Zhang", "Meta smart glass", "GenAI multi-modal", "IEEE T-CSVT", "Associate Editor", 
    "Stanford AI", "computer vision", "smart glass technology", "multi-modal AI", "TGO", "鲲鹏会",
    "academic research", "publications", "h-index", "citations", "AR VR", "computational geometry",
    "parallel computing", "3D computer vision", "mesh parameterization", "optimal transport",
    "YouTube AI content", "Bilibili", "DoorDash", "Microsoft Azure", "Uber", "Stony Brook"
  ],
  openGraph: {
    title: "Dr. Junwei Zhang - Meta Smart Glass Engineer | IEEE Associate Editor",
    description: "Meta Smart Glass GenAI Multi-Modal Systems Engineer, IEEE T-CSVT Associate Editor, TGO Elite Tech Leader, Stanford CS Master Program",
    url: "https://junweizhang23.github.io",
    siteName: "Dr. Junwei Zhang - Academic & Professional Profile",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Junwei Zhang - Meta Smart Glass Engineer | IEEE Associate Editor",
    description: "Meta Smart Glass GenAI Engineer, IEEE T-CSVT Associate Editor, Stanford CS Master",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code-here",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Academic Icons for Google Scholar */}
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css"
        />
        
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
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Dr. Junwei Zhang",
              "jobTitle": "Smart Glass GenAI Multi-Modal Systems Engineer",
              "worksFor": {
                "@type": "Organization",
                "name": "Meta"
              },
              "alumniOf": [
                {
                  "@type": "CollegeOrUniversity", 
                  "name": "Stony Brook University",
                  "degree": "Ph.D."
                },
                {
                  "@type": "CollegeOrUniversity",
                  "name": "Stanford University", 
                  "degree": "Master of Science in Computer Science"
                }
              ],
              "memberOf": [
                {
                  "@type": "Organization",
                  "name": "IEEE",
                  "position": "Associate Editor, Transactions on Circuits and Systems for Video Technology"
                },
                {
                  "@type": "Organization", 
                  "name": "TGO (鲲鹏会)",
                  "position": "Elite Tech Leader"
                }
              ],
              "url": "https://junweizhang23.github.io",
              "sameAs": [
                "https://scholar.google.com/citations?user=FkAGB3MAAAAJ&hl=en",
                "https://www.linkedin.com/in/junweizhangcs/",
                "https://www.youtube.com/@junweizhang",
                "https://www.bilibili.com/video/BV1QfoGYgERZ/"
              ],
              "knowsAbout": [
                "Smart Glass Technology",
                "GenAI Multi-Modal Systems", 
                "Computer Vision",
                "Artificial Intelligence",
                "Computational Geometry",
                "Parallel Computing",
                "3D Computer Vision",
                "AR/VR Technology"
              ],
              "description": "Meta Smart Glass GenAI Multi-Modal Systems Engineer, IEEE T-CSVT Associate Editor, TGO Elite Tech Leader, Stanford CS Master Program. Pioneering smart glass technology and AI research with 155+ citations."
            })
          }}
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
