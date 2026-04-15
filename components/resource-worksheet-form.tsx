import Link from "next/link";

export function ResourceWorksheetForm() {
  return (
    <div className="mt-6 grid gap-4">
      <p className="text-sm text-ink-2">
        The worksheet request form has been retired. Use the strategy call form so every request goes through one
        intake path.
      </p>
      <Link href="https://www.lifecycleinbox.com/contact#strategy-call" className="btn-primary w-full sm:w-auto">
        Book a strategy call
      </Link>
    </div>
  );
}
