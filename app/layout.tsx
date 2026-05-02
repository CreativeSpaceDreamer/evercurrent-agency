import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AnalyticsScripts } from "@/components/analytics";
import GoogleAnalyticsWrapper from "@/components/google-analytics-wrapper";
import { Suspense } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lifecycleinbox.com"),
  title: {
    default: "Lifecycle Inbox | E-commerce Email & SMS Retention Systems",
    template: "%s | Lifecycle Inbox"
  },
  description:
    "Lifecycle Inbox builds strategy-led email and SMS retention systems for growing e-commerce brands using Klaviyo and Omnisend. Drive customer loyalty and lifetime value.",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"]
  },
  openGraph: {
    title: "Lifecycle Inbox | E-commerce Email & SMS Retention Systems",
    description:
      "Senior-led lifecycle strategy, flows, campaigns, SMS, and optimization for growing e-commerce brands. Maximize customer lifetime value.",
    url: "https://lifecycleinbox.com",
    siteName: "Lifecycle Inbox",
    images: [
      {
        url: "/evercurrent_icon_wave_circle_primary_512.png",
        width: 512,
        height: 512,
        alt: "Lifecycle Inbox wave-circle logo"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Lifecycle Inbox | E-commerce Email & SMS Retention Systems",
    description:
      "Senior-led lifecycle strategy, flows, campaigns, SMS, and optimization for growing e-commerce brands. Maximize customer lifetime value.",
    images: ["/evercurrent_icon_wave_circle_primary_512.png"]
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable} suppressHydrationWarning>
      <head>
        {/* Google Analytics 4 Global Site Tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-5357V8MKYZ"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-5357V8MKYZ', { page_path: window.location.pathname });
            `,
          }}
        />
        {/* Microsoft Clarity Tracking */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "wgxpqgabnb");
            `,
          }}
        />
      </head>
      <body className="bg-paper text-ink antialiased">
        <SiteHeader />
        <main className="min-h-[calc(100vh-18rem)]">{children}</main>
        <SiteFooter />
        <AnalyticsScripts />
        {/* Google Analytics 4 SPA pageview tracking */}
        <Suspense fallback={null}>
          <GoogleAnalyticsWrapper />
        </Suspense>
      </body>
    </html>
  );
}
