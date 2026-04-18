import Image from "next/image"; // trigger redeploy (testimonial image refresh)

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
          <div className="w-full px-4 lg:px-[325px] flex flex-col gap-8">
            {/* First row: Desktop and Mobile images */}
            <Image
              src="/images/hero/trueresults.png"
              alt="Results and testimonials"
              width={1658}
              height={768}
              className="hidden sm:block rounded-3xl w-full h-auto"
              priority
            />
            <Image
              src="/images/hero/resultsmobile.png"
              alt="Results and testimonials (mobile)"
              width={900}
              height={900}
              className="block sm:hidden rounded-3xl w-full h-auto"
              priority
            />
            {/* Second row: Desktop and Mobile images */}
            <Image
              src="/images/hero/resultsdesktop2.png"
              alt="Results and testimonials 2"
              width={1658}
              height={768}
              className="hidden sm:block rounded-3xl w-full h-auto"
            />
            <Image
              src="/images/hero/resultsmobile2.png"
              alt="Results and testimonials 2 (mobile)"
              width={900}
              height={900}
              className="block sm:hidden rounded-3xl w-full h-auto"
            />
            {/* Third row: Desktop and Mobile images */}
            <Image
              src="/images/hero/resultsdesktop3.png"
              alt="Results and testimonials 3"
              width={1658}
              height={768}
              className="hidden sm:block rounded-3xl w-full h-auto"
            />
            <Image
              src="/images/hero/resultsmobile3.png"
              alt="Results and testimonials 3 (mobile)"
              width={900}
              height={900}
              className="block sm:hidden rounded-3xl w-full h-auto"
            />

            {/* Testimonial carousel */}
            <div className="w-full mt-4">
              <div className="flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-300 py-2">
                {[1,2,3,4].map((n) => (
                  <Image
                    key={n}
                    src={`/images/hero/testimonialhero${n}.png`}
                    alt={`Testimonial card ${n}`}
                    width={400}
                    height={500}
                    className="rounded-2xl flex-shrink-0 w-[320px] h-auto sm:w-[400px]"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
