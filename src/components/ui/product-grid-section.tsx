import Image from "next/image";

import { archivo, inter } from "@/src/lib/fonts";

type Product = {
  name: string;
  price: string;
  status: "available" | "coming-soon";
  tag?: string;
  imageSrc?: string;
};

const products: readonly Product[] = [
  {
    name: "Regen Compression Boots",
    price: "EUR 378,00",
    tag: "First edition",
    status: "available",
    imageSrc: "/imagem_12.jpg",
  },
  {
    name: "Socks",
    price: "EUR 21,00",
    status: "coming-soon",
  },
  {
    name: "Core Roller",
    price: "EUR 24,00",
    status: "coming-soon",
  },
] as const;

const particles = [
  { left: "8%", size: 18, delay: "0s", duration: "11.5s", opacity: 0.22 },
  { left: "22%", size: 14, delay: "1.2s", duration: "9.8s", opacity: 0.16 },
  { left: "34%", size: 20, delay: "2.6s", duration: "12.8s", opacity: 0.2 },
  { left: "48%", size: 16, delay: "0.8s", duration: "10.4s", opacity: 0.18 },
  { left: "63%", size: 12, delay: "3.4s", duration: "8.9s", opacity: 0.14 },
  { left: "76%", size: 19, delay: "1.8s", duration: "11.1s", opacity: 0.21 },
  { left: "88%", size: 15, delay: "4.2s", duration: "10.7s", opacity: 0.17 },
];

function EnergyParticles() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] overflow-hidden rounded-b-[24px]">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(15,128,108,0.06)_52%,rgba(15,128,108,0.14)_100%)]" />
      {particles.map((particle, index) => (
        <span
          key={`${particle.left}-${index}`}
          className="energy-particle absolute bottom-[-8%]"
          style={{
            left: particle.left,
            ["--particle-delay" as string]: particle.delay,
            ["--particle-duration" as string]: particle.duration,
            ["--particle-drift" as string]: `${(index % 3) - 1}rem`,
          }}
        >
          <Image
            src="/Seta.Png"
            alt=""
            aria-hidden="true"
            width={particle.size * 3}
            height={particle.size * 3}
            className="energy-particle-image block"
            style={{
              ["--particle-base-opacity" as string]: `${particle.opacity + 0.1}`,
            }}
          />
        </span>
      ))}
    </div>
  );
}

function ProductArtwork({
  name,
  status,
  tag,
  imageSrc,
}: {
  name: string;
  status: Product["status"];
  tag?: string;
  imageSrc?: string;
}) {
  if (status === "coming-soon") {
    return (
      <div className="relative flex h-full min-h-[320px] items-end justify-start overflow-hidden rounded-[24px] bg-[radial-gradient(circle_at_top,#f7f7f7,white_60%)] px-5 pb-6 pt-8 sm:min-h-[380px]">
        <EnergyParticles />
        <div className="relative z-10">
          <span
            className={`${inter.className} mb-3 inline-flex rounded-full border border-zinc-200 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-zinc-500`}
          >
            Coming soon
          </span>
          <div className="space-y-1 text-[2.4rem] font-black uppercase italic leading-[0.88] tracking-[-0.05em] text-zinc-200 sm:text-[3rem]">
            <p className={archivo.className}>Coming</p>
            <p className={archivo.className}>Soon</p>
          </div>
          <p
            className={`${inter.className} mt-3 max-w-[14rem] text-sm leading-6 text-zinc-400`}
          >
            {name} is loading into the next REGEN drop.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex h-full min-h-[320px] items-end overflow-hidden rounded-[24px] bg-[radial-gradient(circle_at_top,#f7f7f7,white_56%)] sm:min-h-[380px]">
      <EnergyParticles />
      {tag ? (
        <span
          className={`${inter.className} absolute left-5 top-5 z-20 inline-flex rounded-full border border-zinc-200 bg-white/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-zinc-700`}
        >
          {tag}
        </span>
      ) : null}

      <div className="relative z-10 h-full min-h-[320px] w-full sm:min-h-[380px]">
        <Image
          src={imageSrc ?? "/imagem_12.jpg"}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-contain object-bottom px-2 pt-8 sm:px-3 sm:pt-10"
        />
      </div>
    </div>
  );
}

export function ProductGridSection() {
  return (
    <section
      id="products"
      className="bg-black px-4 py-18 text-white sm:px-6 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1480px]">
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p
              className={`${inter.className} mb-3 text-xs font-semibold uppercase tracking-[0.34em] text-white/55`}
            >
              Product Grid
            </p>
            <h2
              className={`${archivo.className} text-4xl font-black italic uppercase leading-[0.92] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl`}
            >
              Recovery Gear Built For High Output
            </h2>
          </div>
          <p
            className={`${inter.className} max-w-lg text-sm leading-6 text-white/72 sm:text-base`}
          >
            Compression, recovery, and preparation tools designed to keep the
            body moving at full energy.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="group [--energy-speed:1.45] [--particle-scale-multiplier:1] [--particle-opacity-multiplier:1] hover:[--energy-speed:0.72] hover:[--particle-scale-multiplier:1.28] hover:[--particle-opacity-multiplier:1.45] rounded-[30px] border border-zinc-200 bg-white p-3 shadow-[0_8px_24px_rgba(0,0,0,0.03)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_48px_rgba(15,128,108,0.08)] sm:p-4"
            >
              <div className="relative">
                <ProductArtwork
                  name={product.name}
                  status={product.status}
                  tag={product.tag}
                  imageSrc={product.imageSrc}
                />
              </div>

              <div className="px-2 pb-2 pt-4">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <h3
                      className={`${archivo.className} text-xl font-black italic leading-tight text-black`}
                    >
                      {product.name}
                    </h3>
                    <p
                      className={`${inter.className} mt-2 text-base font-semibold text-zinc-900`}
                    >
                      {product.price}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className={`${inter.className} inline-flex min-h-11 items-center justify-center rounded-full border border-zinc-300 bg-white px-5 text-sm font-semibold text-black transition-colors duration-300 hover:border-zinc-900`}
                >
                  View more
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
