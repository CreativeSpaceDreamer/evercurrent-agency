import Image from "next/image";

type ShowcaseImage = {
  src: string;
  alt: string;
  label: string;
};

type EmailShowcaseStackProps = {
  featured: ShowcaseImage;
  supporting: ShowcaseImage[];
};

export function EmailShowcaseStack({ featured, supporting }: EmailShowcaseStackProps) {
  return (
    <div className="premium-panel overflow-hidden p-6 md:p-10">
      <div className="grid gap-8 md:hidden">
        <div className="proof-frame">
          <Image
            src={featured.src}
            alt={featured.alt}
            width={1200}
            height={1800}
            className="h-[30rem] w-full object-cover object-top"
            sizes="100vw"
          />
          <p className="px-4 py-3 text-xs font-semibold text-ink">{featured.label}</p>
        </div>
        {supporting.slice(0, 2).map((item) => (
          <div key={item.src} className="proof-frame">
            <Image
              src={item.src}
              alt={item.alt}
              width={1200}
              height={1800}
              className="h-64 w-full object-cover object-top"
              sizes="100vw"
            />
            <p className="px-4 py-3 text-xs text-ink-2">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="relative hidden h-[620px] md:block">
        {supporting.slice(0, 2).map((item, index) => (
          <div
            key={item.src}
            className={`proof-frame absolute w-[40%] shadow-lift ${
              index === 0 ? "left-[4%] top-12 rotate-[-4deg]" : "right-[4%] top-16 rotate-[4deg]"
            }`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={1200}
              height={1800}
              className="h-[24rem] w-full object-cover object-top"
              sizes="(max-width: 1280px) 34vw, 420px"
            />
            <p className="px-4 py-3 text-xs text-ink-2">{item.label}</p>
          </div>
        ))}

        <div className="proof-frame absolute left-1/2 top-[52%] z-20 w-[48%] -translate-x-1/2 -translate-y-1/2 shadow-lift">
          <Image
            src={featured.src}
            alt={featured.alt}
            width={1200}
            height={1800}
            className="h-[31rem] w-full object-cover object-top"
            sizes="(max-width: 1280px) 42vw, 520px"
          />
          <p className="px-4 py-3 text-xs font-semibold text-ink">{featured.label}</p>
        </div>
      </div>
    </div>
  );
}
