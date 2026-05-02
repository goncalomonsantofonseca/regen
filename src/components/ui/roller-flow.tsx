"use client";

import { archivo, inter } from "@/src/lib/fonts";

export function RollerFlow() {
  return (
    <section className="w-full bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <div className="lg:hidden">
        <div className="relative overflow-hidden rounded-[28px] border border-zinc-200 bg-[radial-gradient(circle_at_50%_0%,#f2fbf8_0%,#ffffff_55%)] p-4">
          <div className="mx-auto flex h-[220px] w-full max-w-[260px] items-center justify-center">
            <RollerVisual />
          </div>
          <div className="pointer-events-none absolute inset-x-3 bottom-3 p-1">
            <h4 className={`${archivo.className} text-xl font-black italic uppercase text-zinc-950`}>
              Targeted Release Protocol
            </h4>
            <p className={`${inter.className} mt-2 text-sm leading-6 text-zinc-800`}>
              Slow rolling pressure across key zones to unload tension and improve mobility.
            </p>
          </div>
        </div>
      </div>

      <div className="hidden gap-8 lg:grid lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="rounded-2xl border border-zinc-200 bg-white px-5 py-5">
          <h4 className={`${archivo.className} text-2xl font-black italic uppercase text-zinc-950`}>
            Targeted Release Protocol
          </h4>
          <p className={`${inter.className} mt-3 text-base leading-7 text-zinc-700`}>
            Use controlled rolling pressure to reduce muscle tension and improve
            mobility after intense work. Focus on slow breathing, 30 to 60
            seconds per zone, and progressive pressure increase.
          </p>
          <p className={`${inter.className} mt-4 text-base leading-7 text-zinc-700`}>
            Ideal sequence: calves, hamstrings, glutes, thoracic region. Keep
            movement smooth and avoid sharp pain points.
          </p>
        </div>
        <aside className="rounded-[28px] border border-zinc-200 bg-[radial-gradient(circle_at_50%_0%,#f2fbf8_0%,#ffffff_55%)] p-6">
          <div className="mx-auto flex h-[220px] w-full max-w-[260px] items-center justify-center">
            <RollerVisual />
          </div>
        </aside>
      </div>
    </section>
  );
}

function RollerVisual() {
  return (
    <div className="relative h-[140px] w-[220px]">
      <div className="absolute bottom-3 left-1/2 h-[78px] w-[78px] -translate-x-1/2 rounded-full border border-zinc-300 bg-[radial-gradient(circle_at_35%_35%,#f7fffc_0%,#d4ebe4_58%,#b5d8ce_100%)] shadow-[0_8px_20px_rgba(15,128,108,0.15)]">
        <div className="absolute inset-[14px] rounded-full border border-[#0F806C]/40 bg-[conic-gradient(from_90deg,#0F806C,#79e5d2,#0F806C)] opacity-75" />
      </div>
      <div className="absolute bottom-[86px] left-1/2 h-[14px] w-[152px] -translate-x-1/2 overflow-hidden rounded-full bg-[#dfe8e5]">
        <div className="h-full w-[46%] rounded-full bg-[#8fd7c9] [animation:roller-glide_2s_ease-in-out_infinite]" />
      </div>
    </div>
  );
}
