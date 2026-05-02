"use client";

import { useEffect, useState } from "react";

import { archivo, inter } from "@/src/lib/fonts";

const points = [
  {
    title: "Reduced pain response",
    body: "Running compression socks can reduce perceived soreness during and after high-output sessions.",
  },
  {
    title: "Faster training recovery",
    body: "Targeted pressure helps your venous return, improving the speed of post-run metabolic clearance.",
  },
  {
    title: "Lower injury risk",
    body: "More stable lower-leg support can reduce fatigue-related instability over longer distances.",
  },
  {
    title: "Better circulation cycle",
    body: "By compressing calf and ankle veins, blood returns faster to the heart, supporting oxygen refresh and toxin clearance.",
  },
] as const;

export function SocksFlow() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = window.setInterval(() => {
      setActive((prev) => (prev + 1) % points.length);
    }, 2400);
    return () => window.clearInterval(t);
  }, []);

  return (
    <section className="w-full bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <div className="lg:hidden">
        <div className="relative overflow-hidden rounded-[28px] border border-zinc-200 bg-[radial-gradient(circle_at_50%_0%,#f2fbf8_0%,#ffffff_55%)] p-4">
          <div className="mx-auto h-[380px] w-[164px]">
            <SocksLegSvg mobile />
          </div>
          <div className="pointer-events-none absolute inset-x-3 bottom-3 p-1">
            <h4 className={`${archivo.className} text-xl font-black italic uppercase text-zinc-950`}>
              {points[active]?.title}
            </h4>
            <p className={`${inter.className} mt-2 text-sm leading-6 text-zinc-800`}>
              {points[active]?.body}
            </p>
          </div>
        </div>
      </div>

      <div className="hidden gap-8 lg:grid lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="space-y-3">
          {points.map((point, index) => (
            <article
              key={point.title}
              className={`rounded-2xl border px-4 py-4 transition-all sm:px-5 ${
                active === index
                  ? "border-[#0F806C]/40 bg-[#0F806C]/[0.06]"
                  : "border-zinc-200 bg-white"
              }`}
            >
              <h4 className={`${archivo.className} text-xl font-black italic uppercase text-zinc-950`}>
                {point.title}
              </h4>
              <p className={`${inter.className} mt-2 text-sm leading-6 text-zinc-700`}>
                {point.body}
              </p>
            </article>
          ))}
        </div>
        <aside className="lg:sticky lg:top-6">
          <div className="rounded-[28px] border border-zinc-200 bg-[radial-gradient(circle_at_50%_0%,#f2fbf8_0%,#ffffff_55%)] p-5">
            <div className="mx-auto h-[420px] w-[180px]">
              <SocksLegSvg />
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function SocksLegSvg({ mobile = false }: { mobile?: boolean }) {
  const suffix = mobile ? "m" : "d";
  return (
    <svg viewBox="0 0 180 420" className="h-full w-full">
      <defs>
        <linearGradient id={`legFill-${suffix}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f6f7f8" />
          <stop offset="100%" stopColor="#e7eaec" />
        </linearGradient>
        <linearGradient id={`sockPressure-${suffix}`} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#11b7ff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#b5f0ff" stopOpacity="0.75" />
        </linearGradient>
      </defs>
      <line x1="90" y1="14" x2="90" y2="402" stroke="#c2c8cc" strokeWidth="1.2" />
      <path
        d="M92 28 C126 28 146 58 146 102 L146 246 C146 280 129 312 102 335 L80 354 C67 365 53 367 44 361 C38 357 35 349 35 339 L35 317 C35 297 45 278 63 266 L70 252 L70 108 C70 66 76 28 92 28Z"
        fill={`url(#legFill-${suffix})`}
        stroke="#d2d7dc"
        strokeWidth="1.3"
      />
      <rect
        x="74"
        y="178"
        width="66"
        height="118"
        rx="28"
        fill={`url(#sockPressure-${suffix})`}
        stroke="#79dfff"
        strokeWidth="1.2"
        style={{ filter: "drop-shadow(0 0 12px rgba(17,183,255,0.35))" }}
      />
      <path
        d="M52 325 C46 331 43 340 43 350 L43 356 C43 364 48 369 57 368 L84 361 C104 356 122 345 136 331 L124 327 C114 338 99 346 80 350 L64 353 C60 354 58 352 58 349 L58 345 C58 338 61 332 67 329 Z"
        fill={`url(#sockPressure-${suffix})`}
        stroke="#bfc8ce"
        strokeWidth="1.1"
      />
      <path
        d="M43 356 C48 365 56 370 70 367 L94 362 C114 357 132 347 145 334"
        fill="none"
        stroke="#b8c2c8"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
