"use client";

import Image from "next/image";
import { useState } from "react";

import { archivo, inter } from "@/src/lib/fonts";

type Partner = {
  id: string;
  name: string;
  logo: string;
  className?: string;
};

const partners: readonly Partner[] = [
  {
    id: "partner-aboboda",
    name: "SimboloAboboda",
    logo: "/SimboloAboboda.png",
    className: "h-10 sm:h-14 md:h-16",
  },
  {
    id: "partner-fp",
    name: "Simbolo FP",
    logo: "/Simbolo_FP.png",
    className: "h-24 sm:h-32 md:h-40",
  },
  {
    id: "partner-iq",
    name: "Simbolo IQ",
    logo: "/Simbolo_IQ.png",
    className: "h-10 sm:h-14 md:h-16",
  },
] as const;

const sequencePartners = Array.from({ length: 5 }, (_, repeatIndex) =>
  partners.map((partner) => ({
    ...partner,
    id: `${partner.id}-${repeatIndex}`,
  })),
).flat();

function PartnerPreload() {
  return (
    <div className="sr-only">
      {partners.map((partner) => (
        <Image
          key={partner.id}
          src={partner.logo}
          alt=""
          aria-hidden="true"
          width={240}
          height={120}
          priority
        />
      ))}
    </div>
  );
}

function PartnerSequence() {
  return (
    <div className="flex shrink-0 items-center">
      {sequencePartners.map((partner, index) => (
        <div
          key={partner.id}
          className="relative flex h-24 w-[10.5rem] shrink-0 items-center justify-center sm:h-28 sm:w-[13rem] md:h-32 md:w-[15.5rem]"
        >
          {index > 0 ? (
            <span
              className="absolute left-0 top-1/2 h-10 w-[2px] -translate-y-1/2 rounded-full bg-[#0F806C]/60 sm:h-12 md:h-14"
              aria-hidden="true"
            />
          ) : null}

          <div className="flex h-full w-full items-center justify-center px-5 sm:px-7 md:px-8">
            <Image
              src={partner.logo}
              alt={partner.name}
              width={220}
              height={120}
              sizes="(max-width: 640px) 140px, (max-width: 768px) 180px, 220px"
              className={`w-auto object-contain opacity-90 ${partner.className ?? ""}`}
              loading="eager"
            />
          </div>
        </div>
      ))}
      <div className="relative flex h-24 w-0 shrink-0 items-center sm:h-28 md:h-32">
        <span
          className="absolute left-0 top-1/2 h-10 w-[2px] -translate-y-1/2 rounded-full bg-[#0F806C]/60 sm:h-12 md:h-14"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

export function PartnersCarouselSection() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="overflow-hidden bg-black px-4 py-14 text-white sm:px-6 sm:py-16 lg:px-10">
        <PartnerPreload />

        <div className="mx-auto w-full max-w-[1480px]">
          <h2
            className={`${archivo.className} mb-8 text-center text-4xl font-black italic uppercase tracking-[-0.04em] text-white sm:mb-10 sm:text-5xl`}
          >
            Partners
          </h2>
        </div>

        <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-black via-black/85 to-transparent sm:w-16 lg:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-black via-black/85 to-transparent sm:w-16 lg:w-24" />

          <div className="partners-marquee flex w-max items-center">
            <PartnerSequence />
            <PartnerSequence />
          </div>
        </div>

        <div className="mx-auto mt-8 flex w-full max-w-[1480px] justify-center sm:mt-10">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className={`${inter.className} inline-flex min-h-11 items-center justify-center rounded-full bg-[#0F806C] px-6 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.02] hover:bg-[#10917a]`}
          >
            Become a partner
          </button>
        </div>
      </section>

      {open ? (
        <div className="fixed inset-0 z-[130] flex items-center justify-center bg-black/60 px-4 backdrop-blur-[2px]">
          <div className="relative w-full max-w-3xl rounded-[26px] border border-zinc-700 bg-[radial-gradient(circle_at_top,#18322f_0%,#0a1413_58%,#060a0a_100%)] p-5 text-white shadow-[0_24px_80px_rgba(0,0,0,0.45)] sm:p-7">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-500/90 text-lg text-white transition-colors hover:border-[#0F806C]"
              aria-label="Close partner form"
            >
              ×
            </button>

            <h3
              className={`${archivo.className} mb-5 text-3xl font-black italic uppercase leading-[0.95] sm:text-4xl`}
            >
              Become A Partner
            </h3>

            <form className="space-y-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="block">
                  <span className={`${inter.className} mb-2 block text-xs uppercase tracking-[0.2em] text-white/70`}>
                    Name
                  </span>
                  <input
                    type="text"
                    name="name"
                    className={`${inter.className} w-full rounded-xl border border-zinc-600 bg-black/25 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-[#0F806C]`}
                    placeholder="Your name"
                  />
                </label>

                <label className="block">
                  <span className={`${inter.className} mb-2 block text-xs uppercase tracking-[0.2em] text-white/70`}>
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    className={`${inter.className} w-full rounded-xl border border-zinc-600 bg-black/25 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-[#0F806C]`}
                    placeholder="you@email.com"
                  />
                </label>
              </div>

              <label className="block">
                <span className={`${inter.className} mb-2 block text-xs uppercase tracking-[0.2em] text-white/70`}>
                  Message
                </span>
                <textarea
                  name="message"
                  rows={5}
                  className={`${inter.className} w-full resize-none rounded-xl border border-zinc-600 bg-black/25 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-[#0F806C]`}
                  placeholder="Tell us about your partnership proposal..."
                />
              </label>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
