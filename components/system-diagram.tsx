type SystemDiagramProps = {
  className?: string;
};

const NODES = ["Storefront", "Signup", "Flows", "Campaigns", "SMS", "Repeat Purchase"];

function cn(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function SystemDiagram({ className }: SystemDiagramProps) {
  return (
    <div className={cn("premium-panel p-5", className)}>
      <p className="proof-note text-accent">Retention System Diagram</p>
      <div className="mt-4 overflow-x-auto pb-1">
        <div className="flex min-w-max items-center gap-2">
          {NODES.map((node, index) => (
            <div key={node} className="flex items-center gap-2">
              <div className="rounded-full border border-stroke bg-slate/35 px-4 py-2 text-sm font-medium text-ink">
                {node}
              </div>
              {index < NODES.length - 1 && <span className="text-sm text-ink-2">→</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

