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
        className="mx-auto flex w-full max-w-6xl items-center justify-between gap-2 px-2 sm:px-6"
        style={{ minHeight: '72px', height: '88px', maxHeight: '88px' }}
      >
        <Link
          href="/#home"
          className="flex items-center"
          aria-label="Lifecycle Inbox home"
          style={{ minWidth: '220px', flexShrink: 0 }}
        >
          <Image
            src="/lifecycle-inbox-logo.png"
            alt="Lifecycle Inbox Logo"
            width={600}
            height={132}
            priority
            className="object-contain select-none h-[28px] sm:h-[36px] lg:h-[44px] w-auto"
            style={{ lineHeight: 1, display: 'block' }}
          />
        </Link>
        <nav className="hidden items-center gap-4 md:flex" aria-label="Page sections">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] sm:text-xs font-semibold text-ink transition hover:text-accent"
              style={{ letterSpacing: '0.01em' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="https://www.lifecycleinbox.com/contact#strategy-call"
          className="btn-primary shrink-0 px-2 py-1.5 text-[10px] sm:px-5 sm:py-3 sm:text-xs"
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
