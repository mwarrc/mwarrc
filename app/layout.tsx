import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import InteractiveGrid from "../components/InteractiveGrid";
import CustomCursor from "../components/CustomCursor";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mwariri Clinton",
  description: "A vibrant brutalist material portfolio showcasing selected projects by mwarrc",
  keywords: ["developer", "portfolio", "projects", "github", "brutalist"],
  authors: [{ name: "Mwariri Clinton", url: "https://github.com/mwarrc" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Mwariri Clinton",
    description: "Portfolio showcasing selected projects by mwarrc",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable}`}>
      <body className="min-h-screen flex flex-col relative">
        <InteractiveGrid />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
