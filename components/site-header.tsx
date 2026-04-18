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
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-2 px-4 py-2 sm:gap-3 sm:px-6 sm:py-4">
        <Link href="/#home" className="flex items-center gap-2 sm:gap-3" aria-label="Lifecycle Inbox home">
          <Image
            src="/lifecycle-inbox-logo.png"
            alt="Lifecycle Inbox Logo"
            width={180}
            height={48}
            priority
            className="h-10 w-auto sm:h-12 object-contain"
          />
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Page sections">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-semibold text-ink transition hover:text-accent">
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="https://www.lifecycleinbox.com/contact#strategy-call"
          className="btn-primary shrink-0 px-3 py-1.5 text-[11px] sm:px-6 sm:py-3 sm:text-sm"
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
