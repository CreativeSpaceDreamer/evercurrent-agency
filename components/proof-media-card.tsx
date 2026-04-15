import Image from "next/image";

type ProofMediaCardProps = {
  label: string;
  title: string;
  caption: string;
  src?: string;
  alt?: string;
  mediaHeightClassName?: string;
  className?: string;
  titleClassName?: string;
  captionClassName?: string;
  todoNote?: string;
};

function cn(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function ProofMediaCard({
  label,
  title,
  caption,
  src,
  alt,
  mediaHeightClassName = "h-56",
  className,
  titleClassName,
  captionClassName,
  todoNote
}: ProofMediaCardProps) {
  return (
    <article className={cn("premium-panel p-5", className)}>
      <p className="proof-note text-accent">{label}</p>
      <h3 className={cn("mt-3 text-2xl font-semibold text-ink", titleClassName)}>{title}</h3>
      <div className={cn("proof-frame relative mt-4", mediaHeightClassName)}>
        {src ? (
          <Image src={src} alt={alt ?? title} fill sizes="(max-width: 768px) 100vw, 42vw" className="object-cover object-top" />
        ) : (
          <div className="flex h-full items-center justify-center bg-slate/50 p-6 text-center text-sm text-ink-2">
            <span>Asset placeholder</span>
          </div>
        )}
      </div>
      <p className={cn("mt-4 text-sm text-ink-2", captionClassName)}>{caption}</p>
      {todoNote && <p className="mt-3 text-xs text-ink-2">TODO: {todoNote}</p>}
    </article>
  );
}
