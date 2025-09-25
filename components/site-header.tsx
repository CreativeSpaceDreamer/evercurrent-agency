"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
  { href: "/audit", label: "Lifecycle Audit" }
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate bg-paper/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-baseline gap-2" aria-label="Evercurrent.agency home">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-accent/10 text-sm font-bold uppercase text-ink">
            Us
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Evercurrent.agency</span>
            <span className="text-lg font-semibold text-ink">Relationship-first lifecycle marketing.</span>
          </div>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-semibold text-ink md:flex" aria-label="Primary">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative transition hover:text-accent ${active ? "text-accent" : ""}`}
              >
                {item.label}
                {active && <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-accent" />}
              </Link>
            );
          })}
          <Link href="/contact" className="btn-primary text-sm">
            Book strategy session
          </Link>
        </nav>
        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-full border border-ink/20 p-2 text-ink transition hover:border-ink hover:text-accent md:hidden"
        >
          <span className="sr-only">Toggle navigation</span>
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? (
              <path d="M6 6l12 12M18 6l-12 12" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>
      <div
        id="mobile-nav"
        className={`md:hidden ${open ? "max-h-screen border-b border-slate" : "max-h-0 overflow-hidden border-b-0"}`}
      >
        <nav className="flex flex-col gap-4 px-6 pb-6 pt-2 text-base font-medium text-ink" aria-label="Mobile">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition hover:text-accent ${active ? "text-accent" : ""}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <Link href="/contact" className="btn-primary" onClick={() => setOpen(false)}>
            Book strategy session
          </Link>
        </nav>
      </div>
    </header>
  );
}
