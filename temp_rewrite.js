const fs = require('fs');
const path = require('path');
const filePath = path.join('c:', 'Users', 'pedro', 'OneDrive', 'Desktop', 'Lifecycle Inbox', 'lifecycleinbox', 'components', 'lifecycle-inbox-results-card.tsx');
const content = `import { Check } from "lucide-react";

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
    <div className="bg-[#0a0806] px-6 py-16 text-white md:px-10 md:py-20">
      <div className="mx-auto max-w-[1400px]">
        <section className="relative overflow-hidden rounded-[48px] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.1),transparent_25%),linear-gradient(180deg,#4a2415_0%,#1f0d06_100%)] shadow-[0_40px_120px_rgba(0,0,0,0.55)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_40%)]" />
          <div className="relative grid gap-8 px-8 py-10 lg:grid-cols-[0.48fr_0.52fr] lg:px-12 lg:py-12">
            <div className="flex h-full flex-col justify-between">
              <div>
                <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-[#f1e9dc]">
                  Results #1
                </span>
                <h2 className="mt-8 max-w-[520px] text-[36px] font-semibold leading-[1.02] tracking-[-0.04em] text-[#f4efe8] md:text-[44px] lg:text-[48px]">
                  $43,218 Increase In Email Revenue
                </h2>
                <p className="mt-6 max-w-[480px] text-[15px] leading-[1.7] text-[#d8c8b5] md:text-[16px] lg:text-[17px]">
                  A skincare brand approached us because retention was underperforming. We boosted their
                  email-attributed revenue from 17.9% to 27.4%, driving stronger performance from owned
                  channels.
                </p>
              </div>

              <div className="mt-10">
                <h3 className="text-[22px] font-semibold tracking-[-0.04em] text-[#f4efe8] md:text-[24px]">
                  After Lifecycle Inbox:
                </h3>
                <div className="mt-4 space-y-3">
                  {bullets.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-3">
                      <div className="mt-[5px] h-[10px] w-[10px] rounded-full bg-[#d55f3f]" />
                      <p className="text-[14px] leading-[1.5] text-[#d8c8b5] md:text-[15px]">{bullet}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[30px] border border-white/10 bg-white/5 p-6">
                  <div className="text-[12px] uppercase tracking-[0.24em] text-[#e7d8c5]/80">
                    Before Lifecycle Inbox
                  </div>
                  <div className="mt-4 text-[34px] font-semibold text-[#f4efe8] md:text-[38px]">
                    $43,208.23
                  </div>
                  <div className="mt-2 text-[13px] text-[#d8c8b5]">
                    17.9% of total
                  </div>
                  <div className="mt-5 space-y-3 text-[11px] text-[#d8c8b5]">
                    {beforeMetrics.map((metric) => (
                      <div key={metric.label} className="flex items-center justify-between gap-4">
                        <span>{metric.label}</span>
                        <span>{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[30px] border border-white/10 bg-[#ffffff0f] p-6">
                  <div className="text-[12px] uppercase tracking-[0.24em] text-[#e7d8c5]/80">
                    After Lifecycle Inbox
                  </div>
                  <div className="mt-4 text-[34px] font-semibold text-[#f4efe8] md:text-[38px]">
                    $86,426.19
                  </div>
                  <div className="mt-2 text-[13px] text-[#d8c8b5]">
                    27.4% of total
                  </div>
                  <div className="mt-5 space-y-3 text-[11px] text-[#d8c8b5]">
                    {afterMetrics.map((metric) => (
                      <div key={metric.label} className="flex items-center justify-between gap-4">
                        <span>{metric.label}</span>
                        <span>{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[28px] border border-white/10 bg-white/5 px-6 py-5">
                  <div className="text-[12px] uppercase tracking-[0.22em] text-[#e7d8c5]/80">List Growth</div>
                  <div className="mt-3 text-[44px] font-semibold text-[#f4efe8]">+58%</div>
                </div>
                <div className="rounded-[28px] border border-white/10 bg-white/5 px-6 py-5">
                  <div className="text-[12px] uppercase tracking-[0.22em] text-[#e7d8c5]/80">Campaign Revenue</div>
                  <div className="mt-3 text-[44px] font-semibold text-[#f4efe8]">+179%</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
`;
fs.writeFileSync(filePath, content, 'utf8');
console.log('wrote', filePath);
