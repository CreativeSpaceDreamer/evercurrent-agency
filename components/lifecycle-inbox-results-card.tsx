import Image from "next/image";

export default function LifecycleInboxResultsCard() {
  return (
    <div className="bg-[#0a0806] px-6 py-16 text-white md:px-10 md:py-20">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold uppercase tracking-[0.28em] text-white md:text-4xl">
            Results & Testimonials
          </h2>
        </div>

        <div className="overflow-hidden rounded-[40px] border border-white/10 bg-[#120a05] shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
          <div className="relative h-[320px] sm:h-[420px]">
            <Image
              src="/images/hero/test.png"
              alt="Results and testimonials"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
