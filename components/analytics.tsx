import Script from "next/script";

const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
const PLAUSIBLE_SCRIPT_SRC = process.env.NEXT_PUBLIC_PLAUSIBLE_SCRIPT_SRC ?? "https://plausible.io/js/script.outbound-links.js";

export function AnalyticsScripts() {
  if (!PLAUSIBLE_DOMAIN) {
    return null;
  }

  return (
    <>
      <Script src={PLAUSIBLE_SCRIPT_SRC} data-domain={PLAUSIBLE_DOMAIN} strategy="lazyOnload" />
      <Script id="plausible-events" strategy="lazyOnload">
        {`
          window.plausible = window.plausible || function() {
            (window.plausible.q = window.plausible.q || []).push(arguments);
          };
        `}
      </Script>
    </>
  );
}
