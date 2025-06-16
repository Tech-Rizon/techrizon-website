import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TechRizon - Tech + Horizon | Declaring the Future of Innovation",
  description:
    "Pioneering cybersecurity solutions and innovative ventures that shape tomorrow's digital landscape. From advanced threat protection to cutting-edge technology initiatives.",
  keywords:
    "TechRizon, cybersecurity, innovation, managed security services, SD-WAN, Honeypot, HiveRizon, EduGuide, startup grants, FoundersMint, Corevitalis, wellness, threat detection, VAPT, MSSP, AI education, Collin Ambani Anjeo",
  metadataBase: new URL("https://www.techrizon.com"),
  openGraph: {
    title: "TechRizon | Declaring the Future of Innovation",
    description:
      "Explore HiveRizon, EduGuide, FoundersMint®, and Corevitalis – our ventures built to protect, empower, and accelerate innovation.",
    url: "https://www.techrizon.com",
    siteName: "TechRizon",
    images: [
      {
        url: "/assets/og-banner.png",
        width: 1200,
        height: 630,
        alt: "TechRizon Banner",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@TechRizonHQ",
    creator: "@collin_anjeo",
    title: "TechRizon | Declaring the Future of Innovation",
    description:
      "Explore HiveRizon, EduGuide, FoundersMint®, and Corevitalis – our ventures built to protect, empower, and accelerate innovation.",
    images: ["/assets/og-banner.png"],
  },
  authors: [
    { name: "Collin Ambani Anjeo", url: "https://www.linkedin.com/in/ambanicollin/" },
    { name: "TechRizon Team" },
  ],
  creator: "Collin Ambani Anjeo",
  publisher: "TechRizon",
  icons: {
    icon: "/assets/logos/favicon-32x32.png",
    shortcut: "/assets/logos/favicon-32x32.png",
    apple: "/assets/logos/favicon-64x64.png",
  },
  category: "Technology",
  generator: "Next.js",
  applicationName: "TechRizon Web Portal",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      data-theme="dark"
      prefix="og: http://ogp.me/ns#"
    >
      <body
        suppressHydrationWarning
        className="antialiased bg-brand-charcoal text-brand-silver selection:bg-brand-gold selection:text-brand-charcoal"
      >
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-brand-gold text-brand-charcoal px-4 py-2 rounded-md z-50">
          Skip to main content
        </a>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
