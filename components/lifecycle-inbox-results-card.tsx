import Image from "next/image"; // trigger redeploy

export default function LifecycleInboxResultsCard() {
  return (
    <div className="bg-[#0a0806] px-6 py-16 text-white md:px-10 md:py-20">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold uppercase tracking-[0.28em] text-white md:text-4xl">
            Results & Testimonials
          </h2>
        </div>
        <div className="flex justify-center">
          <div className="w-full px-4 lg:px-[325px]">
            <Image
              src="/images/hero/trueresults.png"
              alt="Results and testimonials"
              width={1658}
              height={768}
              className="rounded-3xl w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
