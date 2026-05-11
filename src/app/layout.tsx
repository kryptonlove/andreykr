import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { AnimatedFavicon } from "@/components/AnimatedFavicon";
import { ThemeToggle } from "@/components/ThemeToggle";
import { GridToggle } from "@/components/GridToggle";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://andreykr.com";
const siteTitle = "Andrey Krylov — Product Designer";
const siteDescription =
  "Designing systems, human-computer interactions, and product experiences.";
const coverImage = "/cover.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: "Andrey Krylov",
    images: [
      {
        url: coverImage,
        width: 1200,
        height: 630,
        alt: "Andrey Krylov portfolio preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [coverImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ibmPlexSans.variable}>
      <body className={ibmPlexSans.className}>
        <AnimatedFavicon />
        <ThemeToggle />
        <GridToggle />
        {children}
      </body>
    </html>
  );
}
