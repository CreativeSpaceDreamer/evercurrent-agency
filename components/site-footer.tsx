import Link from "next/link";

const footerLinks = {
  Services: [
    { href: "/services/email", label: "Email Lifecycle" },
    { href: "/services/sms", label: "SMS Programs" },
    { href: "/services/push", label: "Push & In-app" },
    { href: "/services/paid", label: "Paid Retention" }
  ],
  Company: [
    { href: "/about", label: "About" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/resources", label: "Resources" }
  ],
  Legal: [
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" }
  ]
} as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-slate bg-paper">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 md:grid-cols-[2fr,1fr,1fr,1fr]">
        <div className="max-w-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-accent">Evercurrent.agency</p>
          <p className="mt-3 text-3xl font-semibold text-ink">
            Relationship-first lifecycle marketing.
          </p>
          <p className="mt-4 text-sm text-ink-2">
            We design retention systems that feel like relationship rituals—not campaigns. Every touch respects context, consent, and conversion.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary text-sm">
              Book strategy session
            </Link>
            <Link href="/audit" className="btn-secondary text-sm">
              Get lifecycle audit
            </Link>
          </div>
        </div>
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">{title}</h3>
            <ul className="mt-4 space-y-3 text-sm text-ink">
              {links.map((link) => (
                <li key={link.href}>
                  <Link className="transition hover:text-accent" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-slate bg-slate py-6">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-6 text-sm text-ink-2">
          <span>© {new Date().getFullYear()} Evercurrent.agency. All rights reserved.</span>
          <span>Made with care for lifecycle leaders.</span>
        </div>
      </div>
    </footer>
  );
}
