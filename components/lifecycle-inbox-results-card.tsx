
'use client';
import { useRef, useEffect } from 'react';
import Image from 'next/image';

export default function LifecycleInboxResultsCard() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const slides = [1, 2, 3, 4];
  const allSlides = [...slides, ...slides, ...slides];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const slideWidth = carousel.scrollWidth / allSlides.length * slides.length;
    carousel.scrollLeft = slideWidth;
    const handleScroll = () => {
      const maxScroll = slideWidth * 2;
      if (carousel.scrollLeft <= 0) {
        carousel.scrollLeft = slideWidth;
      } else if (carousel.scrollLeft >= maxScroll) {
        carousel.scrollLeft = slideWidth;
      }
    };
    carousel.addEventListener("scroll", handleScroll);
    return () => carousel.removeEventListener("scroll", handleScroll);
  }, [allSlides.length, slides.length]);

  return (
    <div className="bg-background px-6 py-16 text-ink md:px-10 md:py-20">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold uppercase tracking-[0.28em] text-ink md:text-4xl">
            Results & Testimonials
          </h2>
        </div>
        <div className="flex justify-center">
          <div className="w-full px-4 lg:px-[325px] flex flex-col gap-8">
            {/* Case Study 1 */}
            <Image
              src="/images/hero/result1.png"
              alt="Case Study 1 Results (desktop)"
              width={1658}
              height={768}
              className="hidden sm:block rounded-3xl w-full h-auto"
              priority
            />
            <Image
              src="/images/hero/result1-mobile.png"
              alt="Case Study 1 Results (mobile)"
              width={900}
              height={900}
              className="block sm:hidden rounded-3xl w-full h-auto"
              priority
            />
            {/* Case Study 2 */}
            <Image
              src="/images/hero/result2.png"
              alt="Case Study 2 Results (desktop)"
              width={1658}
              height={768}
              className="hidden sm:block rounded-3xl w-full h-auto"
            />
            <Image
              src="/images/hero/result2-mobile.png"
              alt="Case Study 2 Results (mobile)"
              width={900}
              height={900}
              className="block sm:hidden rounded-3xl w-full h-auto"
            />
            {/* Case Study 3 */}
            <Image
              src="/images/hero/result3.png"
              alt="Case Study 3 Results (desktop)"
              width={1658}
              height={768}
              className="hidden sm:block rounded-3xl w-full h-auto"
            />
            <Image
              src="/images/hero/result3-mobile.png"
              alt="Case Study 3 Results (mobile)"
              width={900}
              height={900}
              className="block sm:hidden rounded-3xl w-full h-auto"
            />
            {/* Case Study 4 */}
            <Image
              src="/images/hero/result4.png"
              alt="Case Study 4 Results (desktop)"
              width={1658}
              height={768}
              className="hidden sm:block rounded-3xl w-full h-auto"
            />
            <Image
              src="/images/hero/result4-mobile.png"
              alt="Case Study 4 Results (mobile)"
              width={900}
              height={900}
              className="block sm:hidden rounded-3xl w-full h-auto"
            />
            {/* Testimonial carousel (infinity scroll) */}
            <div className="w-full mt-4 relative">
              {/* Mobile scroll hint */}
              <div className="sm:hidden flex justify-center mb-2">
                <span className="text-xs text-stone">Swipe to see more →</span>
              </div>
              <div
                ref={carouselRef}
                className="flex gap-4 overflow-x-auto justify-center scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-300 py-2"
                style={{ scrollBehavior: "smooth" }}
              >
                {allSlides.map((n, i) => (
                  <Image
                    key={i}
                    src={`/images/hero/testimonialhero${n}.png`}
                    alt={`Testimonial card ${n}`}
                    width={400}
                    height={500}
                    className="rounded-2xl flex-shrink-0 w-[320px] max-w-lg h-auto sm:w-[400px] mx-auto"
                    draggable={false}
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
