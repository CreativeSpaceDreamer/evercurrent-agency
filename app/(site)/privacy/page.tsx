export default function PrivacyPage() {
  return (
    <div className="bg-slate">
      <section className="bg-paper">
        <div className="mx-auto w-full max-w-4xl px-6 py-20">
          <p className="section-eyebrow">Legal</p>
          <h1 className="mt-4 text-4xl font-semibold text-ink">Privacy Policy</h1>
          <p className="mt-6 text-sm text-ink-2">
            Updated: {new Date().getFullYear()}.
          </p>
          <div className="mt-8 space-y-6 text-sm leading-7 text-ink">
            <section>
              <h2 className="text-lg font-semibold text-ink">1. Overview</h2>
              <p className="mt-2">
                Evercurrent.agency (“we”, “our”, “us”) provides lifecycle marketing services. This policy explains how we collect, use, and safeguard personal information when you visit our website or engage our services.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-ink">2. Data we collect</h2>
              <ul className="mt-2 list-disc space-y-2 pl-5">
                <li>Contact details submitted via forms (name, email, company, notes).</li>
                <li>Analytics data captured via Plausible (non-identifying usage metrics).</li>
                <li>Client data shared during engagements, stored according to our agreements.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-ink">3. How we use data</h2>
              <ul className="mt-2 list-disc space-y-2 pl-5">
                <li>Respond to inquiries, schedule sessions, and deliver audits.</li>
                <li>Improve our website and service offerings.</li>
                <li>Fulfil contractual obligations with clients.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-ink">4. Sharing</h2>
              <p className="mt-2">
                We do not sell personal data. We may share information with vetted service providers (e.g., analytics, CRM, automation) bound by confidentiality agreements, or as required by law.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-ink">5. Security</h2>
              <p className="mt-2">
                We implement technical and organizational measures to protect personal data. Access is limited to authorized team members.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-ink">6. Your rights</h2>
              <p className="mt-2">
                You may request access, correction, or deletion of your personal information. Contact <a href="mailto:privacy@evercurrent.agency" className="underline">privacy@evercurrent.agency</a> to exercise these rights.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-ink">7. Contact</h2>
              <p className="mt-2">
                Questions? Email <a href="mailto:privacy@evercurrent.agency" className="underline">privacy@evercurrent.agency</a>.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

