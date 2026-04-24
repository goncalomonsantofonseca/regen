"use client";

import { useEffect, useState } from "react";

import { inter } from "@/src/lib/fonts";

function getHourProgress(now: Date) {
  const secondsIntoHour =
    now.getMinutes() * 60 + now.getSeconds() + now.getMilliseconds() / 1000;
  const progress = secondsIntoHour / 3600;

  return {
    progress,
  };
}

export function EnergyProgressDivider() {
  const [timeState, setTimeState] = useState({ progress: 0 });

  useEffect(() => {
    const syncNow = window.setTimeout(() => {
      setTimeState(getHourProgress(new Date()));
    }, 0);

    const interval = window.setInterval(() => {
      setTimeState(getHourProgress(new Date()));
    }, 1000);

    return () => {
      window.clearTimeout(syncNow);
      window.clearInterval(interval);
    };
  }, []);

  return (
    <section className="bg-black px-4 py-6 sm:px-6 sm:py-8 lg:px-10">
      <div className="mx-auto w-full max-w-[1480px]">
        <div className="mb-3 flex items-center justify-between gap-4">
          <p
            className={`${inter.className} text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-[#0F806C] sm:text-xs`}
          >
            Energy Loading
          </p>
          <p
            className={`${inter.className} text-[0.68rem] uppercase tracking-[0.24em] text-white/45 sm:text-xs`}
          >
            Get full recovery with REGEN
          </p>
        </div>

        <div className="relative h-[6px] overflow-hidden rounded-full bg-white/10">
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-[#0F806C] shadow-[0_0_18px_rgba(15,128,108,0.7)] transition-[width] duration-700 ease-linear"
            style={{ width: `${Math.min(timeState.progress * 100, 100)}%` }}
          />
          <div
            className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[#0F806C] shadow-[0_0_20px_rgba(15,128,108,0.85)] transition-[left] duration-700 ease-linear"
            style={{ left: `calc(${Math.min(timeState.progress * 100, 100)}% - 6px)` }}
          />
        </div>
      </div>
    </section>
  );
}
