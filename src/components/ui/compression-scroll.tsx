"use client";

import { useEffect, useMemo, useState } from "react";

import { archivo, inter } from "@/src/lib/fonts";

type CompressionPhase = {
  id: number;
  title: string;
  text: string;
};

const PHASE_MS = 2600;

const phases: readonly CompressionPhase[] = [
  {
    id: 1,
    title: "Phase 1 · Foot",
    text: "Compression starts at the foot to activate return flow and prepare the recovery wave.",
  },
  {
    id: 2,
    title: "Phase 2 · Ankle & Calf",
    text: "Pressure rises to the mid-zone. The foot relaxes while the wave continues upward.",
  },
  {
    id: 3,
    title: "Phase 3 · Thigh",
    text: "Compression reaches the thigh to complete the sequential cycle with full control.",
  },
  {
    id: 4,
    title: "Phase 4 · Recovery",
    text: "The whole boot glows softly in green and cyan, signaling lightness and muscle reset.",
  },
] as const;

export function CompressionScroll() {
  const [activePhase, setActivePhase] = useState(1);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActivePhase((prev) => (prev >= phases.length ? 1 : prev + 1));
    }, PHASE_MS);
    return () => window.clearInterval(timer);
  }, []);

  const phaseIndex = useMemo(
    () => phases.findIndex((phase) => phase.id === activePhase),
    [activePhase],
  );

  return (
    <section className="w-full bg-white px-4 py-8 text-zinc-950 sm:px-6 sm:py-10 lg:px-8">
      <div className="lg:hidden">
        <div className="relative overflow-hidden rounded-[28px] border border-zinc-200 bg-[radial-gradient(circle_at_50%_0%,#f2fbf8_0%,#ffffff_55%)] p-4">
          <BootStateVisual activePhase={activePhase} compact />
          <div className="pointer-events-none absolute inset-x-3 bottom-3 p-1">
            <p
              className={`${inter.className} text-[11px] font-semibold uppercase tracking-[0.24em] text-[#0F806C]`}
            >
              Step {activePhase}
            </p>
            <h3
              className={`${archivo.className} mt-2 text-xl font-black italic uppercase leading-tight text-zinc-950`}
            >
              {phases[phaseIndex]?.title}
            </h3>
            <p className={`${inter.className} mt-2 text-sm leading-6 text-zinc-800`}>
              {phases[phaseIndex]?.text}
            </p>
          </div>
        </div>
      </div>

      <div className="hidden gap-8 lg:grid lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start">
        <div className="space-y-3">
          {phases.map((phase, index) => {
            const visible = index <= phaseIndex;
            const active = phase.id === activePhase;
            return (
              <article
                key={phase.id}
                className={`rounded-2xl border px-4 py-4 transition-all duration-500 sm:px-5 ${
                  active
                    ? "border-[#0F806C]/40 bg-[#0F806C]/[0.06]"
                    : "border-zinc-200 bg-white"
                } ${visible ? "opacity-100" : "opacity-35"}`}
              >
                <p
                  className={`${inter.className} text-[11px] font-semibold uppercase tracking-[0.24em] ${
                    active ? "text-[#0F806C]" : "text-zinc-500"
                  }`}
                >
                  Step {phase.id}
                </p>
                <h3
                  className={`${archivo.className} mt-2 text-xl font-black italic uppercase leading-tight sm:text-2xl`}
                >
                  {phase.title}
                </h3>
                <p
                  className={`${inter.className} mt-2 text-sm leading-6 text-zinc-700 sm:text-base`}
                >
                  {phase.text}
                </p>
              </article>
            );
          })}
        </div>

        <aside className="lg:sticky lg:top-6">
          <BootStateVisual activePhase={activePhase} />
        </aside>
      </div>
    </section>
  );
}

function BootStateVisual({
  activePhase,
  compact = false,
}: {
  activePhase: number;
  compact?: boolean;
}) {
  const idPrefix = compact ? "boot-m" : "boot-d";
  const bootShellId = `${idPrefix}-shell`;
  const phaseBlueId = `${idPrefix}-phase-blue`;
  const phaseBlueRadialId = `${idPrefix}-phase-blue-radial`;
  const phaseGreenId = `${idPrefix}-phase-green`;

  return (
    <div
      className={`${compact ? "rounded-[22px] border-0 bg-transparent p-1" : "rounded-[28px] border border-zinc-200 bg-[radial-gradient(circle_at_50%_0%,#f2fbf8_0%,#ffffff_55%)] p-5 sm:p-6"}`}
    >
      <div
        className={`relative mx-auto max-w-full ${compact ? "h-[380px] w-[190px]" : "h-[460px] w-[220px]"}`}
      >
        <svg viewBox="0 0 220 460" className="h-full w-full">
          <defs>
            <linearGradient id={bootShellId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f6f7f8" />
              <stop offset="100%" stopColor="#e7eaec" />
            </linearGradient>
            <linearGradient id={phaseBlueId} x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#12b9ff" stopOpacity="1" />
              <stop offset="100%" stopColor="#9fe9ff" stopOpacity="0.5" />
            </linearGradient>
            <radialGradient id={phaseBlueRadialId} cx="50%" cy="35%" r="75%">
              <stop offset="0%" stopColor="#c9f4ff" stopOpacity="0.9" />
              <stop offset="55%" stopColor="#45ceff" stopOpacity="0.92" />
              <stop offset="100%" stopColor="#0da8ea" stopOpacity="0.96" />
            </radialGradient>
            <linearGradient id={phaseGreenId} x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#0F806C" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#7af5e2" stopOpacity="0.24" />
            </linearGradient>
          </defs>

          <line x1="110" y1="18" x2="110" y2="442" stroke="#b7c2c9" strokeWidth="1.3" />

          <path
            d="M112 36 C156 36 184 74 184 126 L184 272 C184 322 160 369 122 399 L94 420 C80 430 66 431 56 425 C48 420 44 411 44 399 L44 378 C44 341 61 307 90 286 L74 134 C74 79 82 36 112 36Z"
            fill={`url(#${bootShellId})`}
            stroke="#d2d7dc"
            strokeWidth="1.5"
          />

          <Chamber y={90} h={86} active={activePhase === 3} tone="blue" blueId={phaseBlueRadialId} greenId={phaseGreenId} />
          <Chamber y={186} h={84} active={activePhase === 2} tone="blue" blueId={phaseBlueRadialId} greenId={phaseGreenId} />
          <Chamber y={280} h={72} active={activePhase === 1} tone="blue" blueId={phaseBlueRadialId} greenId={phaseGreenId} />
          <path
            d="M56 355 C49 362 45 372 45 383 L45 390 C45 398 51 404 60 403 L92 396 C116 390 137 376 152 358 L139 353 C128 367 111 377 90 382 L68 386 C63 387 60 385 60 381 L60 376 C60 368 63 362 69 358 Z"
            fill={activePhase === 1 ? `url(#${phaseBlueId})` : "#eef1f4"}
            stroke="#d2d7dc"
            strokeWidth="1.2"
          />
          <path
            d="M44 390 C50 400 60 404 76 401 L104 394 C127 388 146 376 160 361"
            fill="none"
            stroke="#b9c2c8"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M62 397 C67 393 73 391 80 390"
            fill="none"
            stroke="#c5cdd3"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <path
            d="M74 270 C84 274 94 276 106 276"
            fill="none"
            stroke="#c7d0d6"
            strokeWidth="1.2"
            strokeLinecap="round"
          />

          {activePhase === 2 ? (
            <g className="opacity-85">
              <UpArrow x={118} y={250} />
              <UpArrow x={126} y={220} delay="0.25s" />
              <UpArrow x={135} y={190} delay="0.5s" />
            </g>
          ) : null}

          {activePhase === 4 ? (
            <rect
              x="70"
              y="76"
              width="106"
              height="292"
              rx="50"
              fill={`url(#${phaseGreenId})`}
              className="animate-pulse"
            />
          ) : null}
        </svg>
      </div>
    </div>
  );
}

function Chamber({
  y,
  h,
  active,
  tone,
  blueId,
  greenId,
}: {
  y: number;
  h: number;
  active: boolean;
  tone: "blue" | "green";
  blueId: string;
  greenId: string;
}) {
  return (
    <rect
      x="84"
      y={y}
      width="92"
      height={h}
      rx="34"
      fill={
        active
          ? tone === "blue"
            ? `url(#${blueId})`
            : `url(#${greenId})`
          : "#edf1f4"
      }
      fillOpacity={active ? 1 : 1}
      stroke={active ? "#66d9ff" : "#d5dbe0"}
      strokeWidth="1.1"
      style={
        active
          ? {
              filter:
                "drop-shadow(0 0 16px rgba(18,185,255,0.56)) saturate(1.25) contrast(1.06)",
            }
          : undefined
      }
    />
  );
}

function UpArrow({
  x,
  y,
  delay,
}: {
  x: number;
  y: number;
  delay?: string;
}) {
  return (
    <path
      d={`M ${x} ${y} L ${x - 8} ${y + 10} M ${x} ${y} L ${x + 8} ${y + 10}`}
      stroke="#3acfff"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
      style={{
        animation: "compression-arrow-up 1.2s ease-in-out infinite",
        animationDelay: delay,
      }}
    />
  );
}
