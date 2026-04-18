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
        style={{ minHeight: '64px', height: '72px', maxHeight: '88px' }}
      >
        <Link
          href="/#home"
          className="flex items-center"
          aria-label="Lifecycle Inbox home"
          style={{ minWidth: '180px', flexShrink: 0 }}
        >
          <Image
            src="/lifecycle-inbox-logo.png"
            alt="Lifecycle Inbox Logo"
            width={400}
            height={88}
            priority
            className="object-contain select-none"
            style={{
              height: '28px',
              maxHeight: '44px',
              width: 'auto',
              lineHeight: 1,
              display: 'block',
            }}
            sizes="(max-width: 639px) 120px, (max-width: 1023px) 180px, 320px"
          />
          <style jsx global>{`
            @media (min-width: 640px) {
              .lifecycle-logo {
                height: 36px !important;
                max-height: 36px !important;
              }
            }
            @media (min-width: 1024px) {
              .lifecycle-logo {
                height: 44px !important;
                max-height: 44px !important;
              }
            }
          `}</style>
        </Link>
        <nav className="hidden items-center gap-5 md:flex" aria-label="Page sections">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs sm:text-sm font-semibold text-ink transition hover:text-accent"
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
