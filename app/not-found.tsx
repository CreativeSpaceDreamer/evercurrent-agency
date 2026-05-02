import { Suspense } from "react";

export default function NotFound() {
  return (
    <Suspense fallback={null}>
      <div className="bg-slate min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-ink mb-4">404 – Page Not Found</h1>
        <p className="text-ink-2 mb-8">Sorry, the page you are looking for does not exist.</p>
        <a href="/" className="btn-primary">Go Home</a>
      </div>
    </Suspense>
  );
}
