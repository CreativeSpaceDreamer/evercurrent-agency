import { ArrowDownRight, ArrowUpRight, Check } from "lucide-react";

export default function LifecycleInboxResultsCard() {
  const beforeMetrics = [
    { label: "Per recipient", value: "$0.31" },
    { label: "Campaigns", value: "$14,972.40" },
    { label: "Flows", value: "$28,235.83" },
    { label: "Email", value: "$43,208.23" },
    { label: "SMS", value: "$0.00" },
  ];

  const afterMetrics = [
    { label: "Per recipient", value: "$0.49" },
    { label: "Campaigns", value: "$41,788.56" },
    { label: "Flows", value: "$44,637.63" },
    { label: "Email", value: "$86,426.19" },
    { label: "SMS", value: "$0.00" },
  ];

  const bullets = [
    "Generating more revenue from owned channels",
    "27.4% in email attributed revenue",
    "11 flows covering the core customer journey",
  ];

  return (
    <div className="bg-[#070707] px-6 py-10 text-white">
      <div className="mx-auto max-w-[1706px]">
        <section className="relative overflow-hidden rounded-[44px] border border-white/8 bg-[radial-gradient(circle_at_76%_50%,rgba(113,42,20,0.34),transparent_34%),linear-gradient(90deg,#070809_0%,#0b0b0c_34%,#130d0b_72%,#1d0e09_100%)] shadow-[0_24px_90px_rgba(0,0,0,0.45)]">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_25%,transparent_75%,rgba(255,255,255,0.01))]" />

          <div className="relative grid min-h-[790px] grid-cols-[0.465fr_0.535fr] gap-0 px-[62px] py-[58px]">
            <div className="flex h-full flex-col pr-[48px]">
              <div>
                <h2 className="max-w-[640px] text-[66px] font-semibold leading-[1.02] tracking-[-0.055em] text-[#f4efe8]">
                  $43,218 Increase In Email Revenue
                </h2>

                <p className="mt-[28px] max-w-[640px] text-[29px] leading-[1.45] tracking-[-0.03em] text-[#b7afa6]">
                  A skincare brand approached us because retention was underperforming. We boosted their
                  email-attributed revenue from 17.9% to 27.4%, driving stronger performance from owned
                  channels.
                </p>
              </div>

              <div className="mt-[108px]">
                <h3 className="text-[64px] font-semibold leading-[1.02] tracking-[-0.055em] text-[#f4efe8]">
                  After Lifecycle Inbox:
                </h3>

                <div className="mt-[34px] space-y-[24px]">
                  {bullets.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-[18px]">
                      <div className="mt-[7px] flex h-[24px] w-[24px] shrink-0 items-center justify-center text-[#d55f3f]">
                        <Check className="h-[22px] w-[22px]" strokeWidth={2.4} />
                      </div>
                      <p className="text-[28px] leading-[1.38] tracking-[-0.03em] text-[#b7afa6]">{bullet}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-[56px]">
                <div className="inline-flex items-center rounded-full border border-[#3b3d40] bg-transparent px-[28px] py-[15px] text-[22px] font-medium leading-none tracking-[-0.03em] text-[#f1ece5]">
                  Results #1
                </div>
              </div>
            </div>

            <div className="flex h-full flex-col pl-[18px]">
              <div className="space-y-[38px]">
                <SnapshotCard
                  totalRevenue="$241,386.72"
                  attributedRevenue="$43,208.23"
                  attributedShare="17.9% of total"
                  totalChange="4%"
                  attributedChange="6%"
                  totalPositive={false}
                  attributedPositive={false}
                  metrics={beforeMetrics}
                />

                <SnapshotCard
                  totalRevenue="$315,423.88"
                  attributedRevenue="$86,426.19"
                  attributedShare="27.4% of total"
                  totalChange="12%"
                  attributedChange="84%"
                  totalPositive={true}
                  attributedPositive={true}
                  metrics={afterMetrics}
                />
              </div>

              <div className="mt-[54px] grid grid-cols-2 gap-[30px] px-[2px]">
                <BottomKpi label="List Growth" value="+58%" />
                <BottomKpi label="Campaign Revenue" value="+179%" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

type Metric = {
  label: string;
  value: string;
};

function SnapshotCard({
  totalRevenue,
  attributedRevenue,
  attributedShare,
  totalChange,
  attributedChange,
  totalPositive,
  attributedPositive,
  metrics,
}: {
  totalRevenue: string;
  attributedRevenue: string;
  attributedShare: string;
  totalChange: string;
  attributedChange: string;
  totalPositive: boolean;
  attributedPositive: boolean;
  metrics: Metric[];
}) {
  return (
    <div className="overflow-hidden rounded-[18px] border border-[#d8d8d8] bg-[#f3f3f3] text-[#323232] shadow-[0_1px_0_rgba(255,255,255,0.55)_inset]">
      <div className="grid grid-cols-2 border-b border-[#d9d9d9]">
        <MetricPanel
          label="Total revenue"
          value={totalRevenue}
          change={totalChange}
          positive={totalPositive}
          addDivider
        />
        <MetricPanel
          label={`Attributed revenue (${attributedShare})`}
          value={attributedRevenue}
          change={attributedChange}
          positive={attributedPositive}
        />
      </div>

      <div className="px-[14px] pt-[20px] pb-[12px]">
        <div className="text-[13px] font-semibold leading-none tracking-[-0.02em] text-[#3d3d3d]">
          Attributed revenue
        </div>

        <div className="mt-[16px] grid grid-cols-5 gap-0">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={index === 0 ? "pr-[16px]" : "border-l border-[#dfdfdf] pl-[16px]"}
            >
              <div className="flex items-center gap-[5px] text-[11px] font-semibold leading-none tracking-[-0.02em] text-[#666666]">
                <MiniIcon kind={metric.label} />
                <span>{metric.label}</span>
              </div>
              <div className="mt-[10px] text-[13px] font-semibold leading-none tracking-[-0.02em] text-[#4f4f4f]">
                {metric.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MetricPanel({
  label,
  value,
  change,
  positive,
  addDivider = false,
}: {
  label: string;
  value: string;
  change: string;
  positive: boolean;
  addDivider?: boolean;
}) {
  return (
    <div className={`px-[18px] pt-[12px] pb-[14px] ${addDivider ? "border-r border-[#d9d9d9]" : ""}`}>
      <div className="text-[14px] font-semibold leading-none tracking-[-0.02em] text-[#5f5f5f]">{value}</div>
      <div className="mt-[10px] text-[12px] font-semibold leading-none tracking-[-0.01em] text-[#666666]">{label}</div>
      <div
        className={`mt-[12px] inline-flex items-center gap-[5px] rounded-full px-[7px] py-[4px] text-[11px] font-semibold leading-none ${
          positive ? "bg-[#edf5ee] text-[#7dae82]" : "bg-[#f6ece9] text-[#d09582]"
        }`}
      >
        {positive ? <ArrowUpRight className="h-[11px] w-[11px]" /> : <ArrowDownRight className="h-[11px] w-[11px]" />}
        <span>{change}</span>
        <span className="font-semibold text-[#6f6f6f]">vs. previous period</span>
      </div>
    </div>
  );
}

function MiniIcon({ kind }: { kind: string }) {
  if (kind === "Per recipient") {
    return (
      <svg viewBox="0 0 24 24" className="h-[13px] w-[13px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    );
  }

  if (kind === "Campaigns") {
    return (
      <svg viewBox="0 0 24 24" className="h-[13px] w-[13px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 20 18-8L3 4v6l13 2-13 2v6Z" />
      </svg>
    );
  }

  if (kind === "Flows") {
    return (
      <svg viewBox="0 0 24 24" className="h-[13px] w-[13px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="12" cy="18" r="3" />
        <path d="M8.7 7.5 10.8 15" />
        <path d="M15.3 7.5 13.2 15" />
      </svg>
    );
  }

  if (kind === "Email") {
    return (
      <svg viewBox="0 0 24 24" className="h-[13px] w-[13px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-[13px] w-[13px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12h8" />
      <path d="M12 8v8" />
    </svg>
  );
}

function BottomKpi({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[28px] font-normal leading-none tracking-[-0.04em] text-[#f2ece4]">{label}</div>
      <div className="mt-[26px] text-[84px] font-light leading-[0.9] tracking-[-0.07em] text-[#d8d0c7]">
        {value}
      </div>
    </div>
  );
}