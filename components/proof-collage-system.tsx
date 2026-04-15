import Image from "next/image";

type ProofCollageItem = {
  label: string;
  title: string;
  src?: string;
  alt?: string;
  todoNote?: string;
};

type ProofCollageSystemProps = {
  items: ProofCollageItem[];
};

const LAYOUT_CLASSES = [
  "md:col-span-2 h-72 md:h-[30rem]",
  "h-60",
  "h-60",
  "h-60",
  "h-60"
];

export function ProofCollageSystem({ items }: ProofCollageSystemProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.slice(0, 5).map((item, index) => (
        <article key={item.title} className={`premium-panel p-4 ${LAYOUT_CLASSES[index] ?? "h-44"}`}>
          <p className="proof-note text-accent">{item.label}</p>
          <h3 className="mt-2 text-base font-semibold text-ink">{item.title}</h3>
          <div className="proof-frame relative mt-3 h-[calc(100%-4.2rem)]">
            {item.src ? (
              <Image src={item.src} alt={item.alt ?? item.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-top" />
            ) : (
              <div className="flex h-full items-center justify-center bg-slate/40 p-4 text-center text-sm text-ink-2">
                <span>{item.todoNote ?? "Asset placeholder"}</span>
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
