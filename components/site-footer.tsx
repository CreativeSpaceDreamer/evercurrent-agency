import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-espresso text-paper">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[240px,1fr] items-start">
          <div className="flex items-start">
            <div className="max-w-[220px]">
              <p className="text-2xl font-semibold text-paper">Lifecycle Inbox</p>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-semibold text-paper mb-3">
                Join The DTC Insights Newsletter
              </h2>
              <p className="text-sm leading-7 text-stroke max-w-2xl">
                Sign up to our mailing list below and be the first to know about new updates. Don&apos;t worry, we hate spam too.
              </p>
              <form className="mt-6 flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="flex-1 min-w-0 px-4 py-3 bg-paper text-ink rounded-lg border border-stroke focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button type="submit" className="btn-primary whitespace-nowrap px-5 py-3">
                  Learn From Us
                </button>
              </form>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.35em] text-stroke mb-5">Links</h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="#testimonials" className="text-sm text-paper hover:text-accent-2 transition-colors">
                      Testimonial
                    </Link>
                  </li>
                  <li>
                    <Link href="#results" className="text-sm text-paper hover:text-accent-2 transition-colors">
                      Results
                    </Link>
                  </li>
                  <li>
                    <Link href="#email-designs" className="text-sm text-paper hover:text-accent-2 transition-colors">
                      Email Designs
                    </Link>
                  </li>
                  <li>
                    <Link href="#trainings" className="text-sm text-paper hover:text-accent-2 transition-colors">
                      Trainings
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.35em] text-stroke mb-5">Socials</h4>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="https://www.youtube.com/@LifecycleInbox"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-sm text-paper hover:text-accent-2 transition-colors"
                    >
                      YouTube
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/lifecycleinboxofficial/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-sm text-paper hover:text-accent-2 transition-colors"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/feed/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-sm text-paper hover:text-accent-2 transition-colors"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://x.com/lifecycleinbox"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-sm text-paper hover:text-accent-2 transition-colors"
                    >
                      X
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
