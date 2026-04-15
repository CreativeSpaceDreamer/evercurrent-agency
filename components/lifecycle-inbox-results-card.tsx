import { Check } from "lucide-react";

export default function LifecycleInboxResultsCard() {
  const bullets = [
    "100% increase in email attributed revenue",
    "27.4% of total revenue from email",
    "11 flows covering the core customer journey",
  ];

  return (
    <div className="bg-[#070707] px-6 py-16 text-white md:px-8 md:py-20">
      <div className="mx-auto max-w-[2000px]">
        <section className="relative overflow-hidden rounded-[60px] border border-white/8 bg-[radial-gradient(circle_at_76%_50%,rgba(113,42,20,0.34),transparent_34%),linear-gradient(90deg,#070809_0%,#0b0b0c_34%,#130d0b_72%,#1d0e09_100%)] shadow-[0_32px_120px_rgba(0,0,0,0.55)]">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_25%,transparent_75%,rgba(255,255,255,0.01))]" />

          <div className="relative grid min-h-[1200px] grid-cols-1 gap-0 px-[80px] py-[80px] lg:grid-cols-[0.48fr_0.52fr] lg:gap-0 lg:px-[100px] lg:py-[100px]">
            <div className="flex h-full flex-col pr-0 lg:pr-[60px]">
              <div>
                <h2 className="max-w-[800px] text-[80px] font-semibold leading-[1.02] tracking-[-0.055em] text-[#f4efe8] md:text-[100px] lg:text-[120px]">
                  $43,218 Increase In Email Revenue
                </h2>

                <p className="mt-[40px] max-w-[700px] text-[32px] leading-[1.45] tracking-[-0.03em] text-[#b7afa6] md:text-[36px] lg:text-[40px]">
                  A skincare brand approached us because retention was underperforming. We boosted their
                  email-attributed revenue from 17.9% to 27.4%, driving stronger performance from owned
                  channels.
                </p>
              </div>

              <div className="mt-[140px]">
                <h3 className="text-[72px] font-semibold leading-[1.02] tracking-[-0.055em] text-[#f4efe8] md:text-[80px] lg:text-[90px]">
                  After Lifecycle Inbox:
                </h3>

                <div className="mt-[50px] space-y-[32px]">
                  {bullets.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-[24px]">
                      <div className="mt-[10px] flex h-[32px] w-[32px] shrink-0 items-center justify-center text-[#d55f3f]">
                        <Check className="h-[28px] w-[28px]" strokeWidth={2.4} />
                      </div>
                      <p className="text-[32px] leading-[1.38] tracking-[-0.03em] text-[#b7afa6] md:text-[36px] lg:text-[40px]">{bullet}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-[80px]">
                <div className="inline-flex items-center rounded-full border border-[#3b3d40] bg-transparent px-[36px] py-[20px] text-[26px] font-medium leading-none tracking-[-0.03em] text-[#f1ece5] md:text-[28px]">
                  Results #1
                </div>
              </div>
            </div>

            <div className="mt-[80px] flex h-full flex-col pl-0 lg:mt-0 lg:pl-[30px]">
              <div className="space-y-[60px]">
                <div className="rounded-[24px] border border-[#d8d8d8] bg-[#f3f3f3] p-[40px] text-[#323232] shadow-[0_4px_0_rgba(255,255,255,0.55)_inset]">
                  <div className="text-center">
                    <div className="text-[48px] font-semibold leading-[1.1] tracking-[-0.03em] text-[#2d2d2d] lg:text-[56px]">
                      Before Lifecycle Inbox
                    </div>
                    <div className="mt-[20px] text-[32px] font-medium leading-[1.3] text-[#666666] lg:text-[36px]">
                      $43,208 in email revenue
                    </div>
                  </div>
                </div>

                <div className="rounded-[24px] border border-[#d8d8d8] bg-[#f3f3f3] p-[40px] text-[#323232] shadow-[0_4px_0_rgba(255,255,255,0.55)_inset]">
                  <div className="text-center">
                    <div className="text-[48px] font-semibold leading-[1.1] tracking-[-0.03em] text-[#2d2d2d] lg:text-[56px]">
                      After Lifecycle Inbox
                    </div>
                    <div className="mt-[20px] text-[32px] font-medium leading-[1.3] text-[#666666] lg:text-[36px]">
                      $86,426 in email revenue
                    </div>
                    <div className="mt-[16px] text-[24px] font-medium text-[#7dae82] lg:text-[28px]">
                      +$43,218 increase (100% growth)
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-[80px] grid grid-cols-2 gap-[40px] px-[4px]">
                <div className="text-center">
                  <div className="text-[40px] font-normal leading-none tracking-[-0.04em] text-[#f2ece4]">Email Revenue</div>
                  <div className="mt-[26px] text-[84px] font-light leading-[0.9] tracking-[-0.07em] text-[#d8d0c7]">
                    +100%
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-[40px] font-normal leading-none tracking-[-0.04em] text-[#f2ece4]">List Growth</div>
                  <div className="mt-[26px] text-[84px] font-light leading-[0.9] tracking-[-0.07em] text-[#d8d0c7]">
                    +58%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}