import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AnalyticsScripts } from "@/components/analytics";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  metadataBase: new URL("https://evercurrent.agency"),
  title: {
    default: "Evercurrent.agency | Relationship-first lifecycle marketing",
    template: "%s | Evercurrent.agency"
  },
  description: "Evercurrent.agency builds retention programs that make customers feel known, valued, and eager for what comes next.",
  openGraph: {
    title: "Evercurrent.agency",
    description: "Relationship-first lifecycle marketing for modern retention teams.",
    url: "https://evercurrent.agency",
    siteName: "Evercurrent.agency",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Evercurrent.agency",
    description: "Relationship-first lifecycle marketing."
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="bg-slate text-ink antialiased">
        <SiteHeader />
        <main className="min-h-[calc(100vh-18rem)]">{children}</main>
        <SiteFooter />
        <AnalyticsScripts />
        <Analytics />
      </body>
    </html>
  );
}
