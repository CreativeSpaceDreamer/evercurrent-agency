"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

type CalendlyInlineProps = {
  url: string;
  height?: number;
};

export function CalendlyInline({ url, height = 760 }: CalendlyInlineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const markLoaded = () => {
      setLoaded(true);
      container.classList.remove("animate-pulse", "bg-slate/40");
    };

    if (container.querySelector("iframe")) {
      markLoaded();
      return;
    }

    const observer = new MutationObserver(() => {
      if (container.querySelector("iframe")) {
        markLoaded();
        observer.disconnect();
      }
    });

    observer.observe(container, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <p className={`text-xs font-semibold uppercase tracking-[0.35em] text-ink-2 ${loaded ? "hidden" : ""}`}>
        Loading scheduler...
      </p>
      <div className="overflow-hidden rounded-2xl border border-stroke bg-paper">
        <div
          ref={containerRef}
          className={`calendly-inline-widget w-full ${loaded ? "" : "animate-pulse bg-slate/40"}`}
          data-url={url}
          style={{ minWidth: "320px", height: `${height}px` }}
        />
      </div>
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
    </>
  );
}

