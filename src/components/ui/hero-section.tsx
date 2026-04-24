"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

import { archivo, inter } from "@/src/lib/fonts";

const phases = [
  {
    id: "1",
    title: "PREPARATION",
    videoSrc: "/SportsPreparaion.mp4",
  },
  {
    id: "2",
    title: "EXERTION",
    videoSrc: "/SportsExertion.mp4",
  },
  {
    id: "3",
    title: "RECOVERY",
    videoSrc: "/SportsRecovery.mp4",
  },
] as const;

const instagramPostUrl =
  "https://www.instagram.com/p/DXXXcvMjqIv/?igsh=bTNucWYxeGlpc3Vx";

export function HeroSection() {
  const [activePhase, setActivePhase] = useState(0);
  const [animationSeed, setAnimationSeed] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  const PHASE_DURATION_MS = 5000;

  useEffect(() => {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }

    if (activePhase >= phases.length - 1) {
      return;
    }

    timeoutRef.current = window.setTimeout(() => {
      setActivePhase((current) => {
        if (current >= phases.length - 1) {
          return current;
        }

        return current + 1;
      });
      setAnimationSeed((current) => current + 1);
    }, PHASE_DURATION_MS);

    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [activePhase]);

  const handlePhaseSelect = (index: number) => {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }

    setActivePhase(index);
    setAnimationSeed((current) => current + 1);
  };

  return (
    <>
      <section className="relative overflow-hidden bg-black text-white">
        <div className="relative mx-auto flex w-full max-w-[1800px] flex-col px-0 pb-4 pt-0 sm:pb-6">
          <header className="flex items-center justify-between">
            <div className="px-6 pt-6 sm:px-8 lg:px-12">
              <span
                className={`${archivo.className} text-2xl font-black italic tracking-[0.3em] text-white sm:text-3xl`}
              >
                REGEN
              </span>
            </div>

            <div className="px-6 pt-6 sm:px-8 lg:px-12">
              <a
                href="#products"
                className={`${inter.className} inline-flex min-h-11 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-transform duration-300 hover:scale-[1.02]`}
              >
                Our Products
              </a>
            </div>
          </header>

          <div className="relative flex items-start pt-4 sm:pt-6">
            <div className="relative w-full">
              <div className="absolute left-0 top-0 z-20 px-4 pt-10 sm:px-8 sm:pt-16 lg:px-12 lg:pt-20">
                <div className="flex gap-3 sm:gap-5">
                  <div className="flex flex-col items-center">
                    {phases.map((phase, index) => {
                      const isActive = index === activePhase;

                      return (
                        <div
                          key={phase.id}
                          className="flex flex-col items-center"
                        >
                          <button
                            type="button"
                            onClick={() => handlePhaseSelect(index)}
                            aria-label={`Go to ${phase.title}`}
                            className={`flex h-9 w-9 items-center justify-center rounded-full border text-sm font-semibold transition-all duration-500 sm:h-12 sm:w-12 sm:text-base ${
                              isActive
                                ? "border-[#0F806C] bg-[#0F806C] text-white shadow-[0_0_40px_rgba(15,128,108,0.45)]"
                                : "border-white/25 bg-transparent text-white/80"
                            } ${inter.className}`}
                          >
                            {phase.id}
                          </button>
                          {index < phases.length - 1 ? (
                            <div className="relative h-10 w-[2px] overflow-hidden bg-white/20 sm:h-16 lg:h-20">
                              {index === activePhase &&
                              activePhase < phases.length - 1 ? (
                                <div
                                  key={`${activePhase}-${animationSeed}`}
                                  className="animate-stepper-grow absolute left-0 top-0 h-full w-full bg-[#0F806C]"
                                  style={{
                                    animationDuration: `${PHASE_DURATION_MS}ms`,
                                  }}
                                />
                              ) : null}
                            </div>
                          ) : null}
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex flex-col justify-between py-0.5 sm:py-1">
                    {phases.map((phase, index) => {
                      const isActive = index === activePhase;

                      return (
                        <div
                          key={phase.id}
                          className="flex min-h-9 items-center sm:min-h-12"
                        >
                          <span
                            className={`${archivo.className} max-w-[8.5rem] text-[0.68rem] font-black italic tracking-[0.18em] transition-colors duration-500 sm:max-w-none sm:text-base sm:tracking-[0.22em] lg:text-lg ${
                              isActive ? "text-white" : "text-white/55"
                            }`}
                          >
                            {phase.title}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <article className="w-full">
                <div className="relative aspect-[16/11] w-full overflow-hidden border-y border-white/10 bg-zinc-950 shadow-[0_30px_120px_rgba(0,0,0,0.55)] sm:aspect-[16/8] lg:aspect-[5/1.2]">
                  {phases.map((phase, index) => (
                    <video
                      key={phase.id}
                      className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                        index === activePhase
                          ? "scale-100 opacity-100"
                          : "scale-[1.03] opacity-0"
                      }`}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload={index === 0 ? "auto" : "metadata"}
                    >
                      <source src={phase.videoSrc} type="video/mp4" />
                    </video>
                  ))}

                  <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.84)_0%,rgba(0,0,0,0.62)_26%,rgba(0,0,0,0.3)_52%,rgba(0,0,0,0.2)_100%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_center,rgba(15,128,108,0.22),transparent_28%)]" />
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-black px-6 pb-20 pt-8 text-white sm:px-8 sm:pt-10 lg:px-12 lg:pb-28 lg:pt-12">
        <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
          <div className="relative z-10 flex h-full items-start">
            <div className="max-w-5xl">
              <h1
                className={`${archivo.className} max-w-5xl text-5xl font-black italic uppercase leading-[0.92] tracking-[-0.04em] text-white sm:text-6xl lg:text-8xl`}
              >
                NEVER GET TIRED OF{" "}
                <span className="text-[#0F806C]">FEELING GOOD</span>
              </h1>
              <p
                className={`${inter.className} mt-10 max-w-[38rem] text-sm font-medium uppercase tracking-[0.14em] text-white/68 sm:mt-12 sm:text-base lg:max-w-[44rem]`}
              >
                YOUR BODY CARRY THE WORK WE CARRY THE RECOVERY
              </p>
            </div>
          </div>

          <aside className="relative z-10">
            <a
              href={instagramPostUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${inter.className} mb-4 inline-flex min-h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-black transition-transform duration-300 hover:scale-[1.02]`}
            >
              Learn More About Recovery
            </a>

            <div className="overflow-hidden rounded-[20px]">
              <blockquote
                className="instagram-media !m-0 !min-w-0 !max-w-full !rounded-[20px]"
                data-instgrm-permalink={instagramPostUrl}
                data-instgrm-version="14"
              >
                <a
                  href={instagramPostUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${inter.className} text-sm text-white/70`}
                >
                  View this post on Instagram
                </a>
              </blockquote>
            </div>
          </aside>
        </div>
      </section>

      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
      />
    </>
  );
}
