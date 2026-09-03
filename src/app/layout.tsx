import type { Metadata } from "next";
import { IBM_Plex_Mono, Oswald, Public_Sans } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-big-shoulders",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Sahas Kamble — Systems Builder",
  description:
    "TypeScript-first full stack developer building production systems — POS billing, GPS tracking, gaming session platforms.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${publicSans.variable} ${ibmPlexMono.variable}`}
    >
      <body className="min-h-screen bg-sheet text-ink font-body antialiased">
        {children}
      </body>
    </html>
  );
}
