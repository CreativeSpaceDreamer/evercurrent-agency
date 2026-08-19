import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/guide", label: "Free Guide" },
  { href: "/#process", label: "Process" },
  { href: "/#design-proof", label: "Designs" },
  { href: "/#faq", label: "FAQs" }
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-2 px-2 sm:px-6 h-[64px] sm:h-[80px] lg:h-[88px]">
        <Link
          href="/#home"
          className="flex items-center h-full"
          aria-label="Lifecycle Inbox home"
        >
          <img
            src="/lifecycleinboxlogo.png"
            alt="Lifecycle Inbox logo"
            className="h-[32px] sm:h-[52px] w-auto max-w-[320px] sm:max-w-[480px] object-contain"
            style={{ display: 'block' }}
            loading="eager"
            decoding="async"
          />
        </Link>
        {/* Desktop Nav */}
        <nav className="hidden items-center gap-3 md:flex" aria-label="Page sections">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                link.label === "Free Guide"
                  ? "text-[10px] sm:text-xs font-semibold text-accent transition hover:text-accent-2 border border-accent rounded px-2 py-1 bg-accent/10 hover:bg-accent/20"
                  : "text-[10px] sm:text-xs font-semibold text-ink transition hover:text-accent"
              }
              style={{ letterSpacing: '0.01em' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        {/* Mobile Nav: Hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <details className="relative">
            <summary className="list-none cursor-pointer flex items-center px-2 py-1 rounded hover:bg-ink/5 focus:outline-none">
              <svg className="h-6 w-6 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </summary>
            <nav className="absolute right-0 mt-2 w-48 rounded-lg bg-paper shadow-lg border border-stroke z-50 flex flex-col py-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    link.label === "Free Guide"
                      ? "block px-4 py-2 text-accent font-semibold border border-accent rounded mb-1 bg-accent/10 hover:bg-accent/20"
                      : "block px-4 py-2 text-ink hover:text-accent"
                  }
                  style={{ letterSpacing: '0.01em' }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="https://www.lifecycleinbox.com/contact#strategy-call"
                className="block px-4 py-2 text-ink hover:text-accent"
                style={{ letterSpacing: '0.01em' }}
              >
                Book a Strategy Call
              </Link>
            </nav>
          </details>
        </div>
        {/* Book Call button (desktop) */}
        <Link
          href="https://www.lifecycleinbox.com/contact#strategy-call"
          className="btn-primary shrink-0 px-2 py-1.5 text-sm sm:px-4 sm:py-2.5 sm:text-xs hidden md:inline-flex"
        >
          <span className="sm:hidden">Book Call</span>
          <span className="hidden sm:inline">Book a Strategy Call</span>
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </div>
    </header>
  );
}
