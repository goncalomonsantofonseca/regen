import Image from "next/image";

import { archivo, inter } from "@/src/lib/fonts";

const partners = [
  {
    id: "partner-aboboda",
    name: "SimboloAboboda",
    logo: "/SimboloAboboda.png",
  },
  {
    id: "partner-fp",
    name: "Simbolo FP",
    logo: "/Simbolo_FP.png",
    className: "h-28 sm:h-32",
  },
  {
    id: "partner-iq",
    name: "Simbolo IQ",
    logo: "/Simbolo_IQ.png",
  },
];

const trackPartners = Array.from({ length: 4 }, (_, groupIndex) =>
  partners.map((partner) => ({
    ...partner,
    id: `${partner.id}-${groupIndex}`,
  })),
).flat();

function PartnerTrack() {
  return (
    <div className="flex shrink-0 items-center">
      {trackPartners.map((partner, index) => (
        <div key={partner.id} className="flex shrink-0 items-center">
          {index > 0 ? (
            <span
              className="h-9 w-[2px] rounded-full bg-[#0F806C]/70 shadow-[0_0_6px_rgba(15,128,108,0.22)] sm:h-11"
              aria-hidden="true"
            />
          ) : null}
          <div className="flex h-24 items-center justify-center px-6 sm:h-28 sm:px-8">
            <Image
              src={partner.logo}
              alt={partner.name}
              width={180}
              height={90}
              className={`w-auto object-contain opacity-88 ${
                partner.className ?? "h-14 sm:h-16"
              }`}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export function PartnersCarouselSection() {
  return (
    <section className="overflow-hidden bg-black px-4 py-14 text-white sm:px-6 sm:py-16 lg:px-10">
      <div className="mx-auto w-full max-w-[1480px]">
        <h2
          className={`${archivo.className} mb-8 text-center text-4xl font-black italic uppercase tracking-[-0.04em] text-white sm:mb-10 sm:text-5xl`}
        >
          Partners
        </h2>
      </div>

      <div className="relative left-1/2 w-screen -translate-x-1/2">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-black to-transparent sm:w-20 lg:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-black to-transparent sm:w-20 lg:w-28" />

        <div className="partners-marquee flex w-max items-center">
          <PartnerTrack />
          <PartnerTrack />
          <PartnerTrack />
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
