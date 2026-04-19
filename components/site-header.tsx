import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/#process", label: "Process" },
  { href: "/#design-proof", label: "Designs" },
  { href: "/#results", label: "Results" },
  { href: "/#faq", label: "FAQs" }
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur">
      <div
        className="mx-auto flex w-full max-w-6xl items-center justify-between gap-2 px-2 sm:px-6 h-[64px] sm:h-[80px] lg:h-[88px]"
      >
        <Link
          href="/#home"
          className="flex items-center"
          aria-label="Lifecycle Inbox home"
          style={{
            lineHeight: 1,
            padding: 0,
            margin: 0,
            maxWidth: 'none',
          }}
        >
          <span
            className="flex items-baseline whitespace-nowrap"
            style={{
              lineHeight: 1,
              padding: 0,
              margin: 0,
            }}
          >
            <span
              style={{
                fontFamily: 'Georgia,\'Times New Roman\',serif',
                fontWeight: 700,
                fontSize: '32px',
                letterSpacing: '-0.055em',
                color: '#111',
                lineHeight: 1,
                display: 'inline-block',
                margin: 0,
                padding: 0,
                transition: 'font-size 0.2s, margin-right 0.2s',
              }}
              className="sm:text-[52px] mr-[0.17em] sm:mr-[0.35em]"
            >
              Lifecycle
            </span>
            <span
              style={{
                fontFamily: 'Inter,system-ui,sans-serif',
                fontWeight: 300,
                fontSize: '27px',
                letterSpacing: '-0.06em',
                color: '#111',
                lineHeight: 1,
                display: 'inline-block',
                margin: 0,
                padding: 0,
                transition: 'font-size 0.2s',
              }}
              className="sm:text-[44px]"
            >
              Inbox
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-3 md:flex" aria-label="Page sections">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[10px] sm:text-xs font-semibold text-ink transition hover:text-accent"
              style={{ letterSpacing: '0.01em' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="https://www.lifecycleinbox.com/contact#strategy-call"
          className="btn-primary shrink-0 px-2 py-1.5 text-sm sm:px-4 sm:py-2.5 sm:text-xs"
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
