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

export const metadata: Metadata = {
  title: "Andrey Krylov — Product Designer",
  description:
    "Designing systems, human-computer interactions, and product experiences.",
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
