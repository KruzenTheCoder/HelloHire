import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";

export const metadata: Metadata = {
  title: {
    default: "HelloHire — Hire Smarter. Hire South Africa.",
    template: "%s | HelloHire",
  },
  description:
    "HelloHire connects global companies with elite, pre-vetted South African professionals — ready to perform, built for remote, priced for growth. Build your dream remote team from South Africa.",
  keywords: [
    "South African talent",
    "remote staffing",
    "hire South Africa",
    "remote developers",
    "virtual assistants",
    "offshore talent",
    "remote hiring",
    "South African remote workers",
    "hire remote team",
    "global staffing solutions",
    "pre-vetted talent",
    "BPO South Africa",
  ],
  authors: [{ name: "HelloHire" }],
  creator: "HelloHire",
  metadataBase: new URL("https://hellohire.co.za"),
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://hellohire.co.za",
    siteName: "HelloHire",
    title: "HelloHire — Hire Smarter. Hire South Africa.",
    description:
      "Connect with elite South African professionals for your global team. Pre-vetted, remote-ready, and competitively priced. 150+ successful placements across 12+ countries.",
  },
  twitter: {
    card: "summary_large_image",
    title: "HelloHire — Hire Smarter. Hire South Africa.",
    description:
      "Connect with elite South African professionals for your global team. Pre-vetted, remote-ready, and competitively priced.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&f[]=satoshi@300,400,500,700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="preconnect"
          href="https://api.fontshare.com"
          crossOrigin="anonymous"
        />
      </head>
      <body suppressHydrationWarning>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <CustomCursor />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
