import Image from "next/image";

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
  return (
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
          className={`${inter.className} inline-flex min-h-11 items-center justify-center rounded-full bg-[#0F806C] px-6 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.02] hover:bg-[#10917a]`}
        >
          Become a partner
        </button>
      </div>
    </section>
  );
}
