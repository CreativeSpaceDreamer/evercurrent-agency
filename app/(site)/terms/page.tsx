export default function TermsPage() {
  return (
    <div className="bg-slate">
      <section className="bg-paper">
        <div className="mx-auto w-full max-w-4xl px-6 py-20">
          <p className="section-eyebrow">Legal</p>
          <h1 className="mt-4 text-4xl font-semibold text-ink">Terms of Service</h1>
          <p className="mt-6 text-sm text-ink-2">
            Updated: {new Date().getFullYear()}.
          </p>
          <div className="mt-8 space-y-6 text-sm leading-7 text-ink">
            <section>
              <h2 className="text-lg font-semibold text-ink">1. Acceptance</h2>
              <p className="mt-2">
                By accessing Evercurrent.agency or engaging our services, you agree to these terms. If you represent an organization, you warrant that you have authority to bind it.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-ink">2. Services</h2>
              <p className="mt-2">
                Scope, deliverables, and payment terms are defined in Statements of Work (SOW) or Master Service Agreements (MSA). Conflicts between these terms and an executed SOW will favor the SOW.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-ink">3. Client obligations</h2>
              <ul className="mt-2 list-disc space-y-2 pl-5">
                <li>Provide timely access to data, tools, and stakeholders.</li>
                <li>Ensure provided materials comply with applicable laws.</li>
                <li>Pay invoices according to agreed schedules.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-ink">4. Confidentiality</h2>
              <p className="mt-2">
                Both parties agree to keep confidential information private and use it solely to fulfil the engagement. Mutual NDAs may supplement this obligation.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-ink">5. Intellectual property</h2>
              <p className="mt-2">
                Upon full payment, work product created for you is assigned to your organization. Internal frameworks and know-how remain Evercurrent.agency’s IP.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-ink">6. Limitation of liability</h2>
              <p className="mt-2">
                To the maximum extent permitted by law, neither party is liable for indirect, incidental, or consequential damages. Aggregate liability is limited to fees paid in the past three months.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-ink">7. Governing law</h2>
              <p className="mt-2">
                These terms are governed by the laws of California, USA. Disputes will be resolved in San Francisco County.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-ink">8. Contact</h2>
              <p className="mt-2">
                Legal notices: <a href="mailto:legal@evercurrent.agency" className="underline">legal@evercurrent.agency</a>.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

