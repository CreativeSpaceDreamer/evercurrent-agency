import Link from "next/link";

type WorkWithUsFormProps = {
  title?: string;
  description?: string;
  submitLabel?: string;
};

export function WorkWithUsForm({
  title = "Audit intake retired",
  description = "All new inquiries now run through the strategy call form so submissions are handled in one place.",
  submitLabel = "Book a strategy call"
}: WorkWithUsFormProps) {
  return (
    <div className="card flex w-full flex-col gap-5">
      <div>
        <h2 className="section-title text-ink">{title}</h2>
        <p className="section-subtitle text-base">{description}</p>
      </div>
      <Link href="https://www.lifecycleinbox.com/contact#strategy-call" className="btn-primary w-full sm:w-auto">
        {submitLabel}
      </Link>
    </div>
  );
}
