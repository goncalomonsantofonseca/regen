"use client";

import Image from "next/image";
import { useState } from "react";

import { CompressionScroll } from "@/src/components/ui/compression-scroll";
import { RollerFlow } from "@/src/components/ui/roller-flow";
import { SocksFlow } from "@/src/components/ui/socks-flow";
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
    imageSrc: "/Boots_Example.png",
  },
  {
    name: "Socks",
    price: "EUR 21,00",
    status: "coming-soon",
    imageSrc: "/SocksExample.png",
  },
  {
    name: "Core Roller",
    price: "EUR 24,00",
    status: "coming-soon",
    imageSrc: "/RollerExample.png",
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
  alignLeft = false,
  transparentBackground = false,
  removeRadius = false,
}: {
  name: string;
  status: Product["status"];
  tag?: string;
  imageSrc?: string;
  alignLeft?: boolean;
  transparentBackground?: boolean;
  removeRadius?: boolean;
}) {
  if (status === "coming-soon") {
    return (
      <div
        className={`relative flex h-full min-h-[320px] items-end justify-start overflow-hidden ${removeRadius ? "rounded-none" : "rounded-[24px]"} sm:min-h-[380px] ${
          transparentBackground
            ? "bg-transparent"
            : "bg-[radial-gradient(circle_at_top,#f7f7f7,white_60%)]"
        }`}
      >
        {!transparentBackground ? <EnergyParticles /> : null}
        <span
          className={`${inter.className} absolute left-5 top-5 z-20 inline-flex rounded-full border border-zinc-200 bg-white/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-zinc-700`}
        >
          Coming soon
        </span>
        <div className="relative z-10 h-full min-h-[320px] w-full sm:min-h-[380px]">
          <Image
            src={imageSrc ?? "/imagem_12.jpg"}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className={`object-contain pt-8 sm:pt-10 ${
              alignLeft
                ? "object-center px-4 sm:px-6"
                : "object-bottom px-2 sm:px-3"
            }`}
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative flex h-full min-h-[320px] items-end overflow-hidden ${removeRadius ? "rounded-none" : "rounded-[24px]"} sm:min-h-[380px] ${
        transparentBackground
          ? "bg-transparent"
          : "bg-[radial-gradient(circle_at_top,#f7f7f7,white_56%)]"
      }`}
    >
      {!transparentBackground ? <EnergyParticles /> : null}
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
          className={`object-contain pt-8 sm:pt-10 ${
            alignLeft
              ? "object-center px-4 sm:px-6"
              : "object-bottom px-2 sm:px-3"
          }`}
        />
      </div>
    </div>
  );
}

export function ProductGridSection() {
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);
  const switchProduct = (name: string) => {
    setExpandedProduct(name);
  };
  const focusMode = expandedProduct !== null;
  const activeProduct =
    products.find((product) => product.name === expandedProduct) ?? products[0];
  const otherProducts = products.filter(
    (product) => product.name !== activeProduct.name,
  );

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
                  alignLeft={false}
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
                <div className="flex items-center justify-between gap-3">
                <button
                  type="button"
                  onPointerDown={() => switchProduct(product.name)}
                  onClick={() => switchProduct(product.name)}
                  className={`${inter.className} inline-flex min-h-11 items-center justify-center rounded-full border border-zinc-300 bg-white px-5 text-sm font-semibold text-black transition-colors duration-300 hover:border-zinc-900`}
                >
                  View more
                  </button>
                  <button
                    type="button"
                    className={`${inter.className} inline-flex min-h-11 items-center justify-center rounded-full border border-[#0F806C] bg-[#0F806C] px-5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#0b6a59] hover:border-[#0b6a59]`}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {focusMode ? (
        <div className="fixed inset-0 z-[120] bg-black/50 backdrop-blur-[2px] transition-opacity duration-300">
          <div className="h-full w-full p-3 sm:p-5 lg:p-8">
            <div className="relative h-full w-full overflow-y-auto rounded-[28px] border border-zinc-200 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.25)]">
              <button
                type="button"
                aria-label="Close expanded product"
                onClick={() => setExpandedProduct(null)}
                className="absolute right-4 top-4 z-30 inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 bg-white/95 text-zinc-900 transition-colors hover:border-[#0F806C] hover:text-[#0F806C]"
              >
                <span className="text-xl leading-none">×</span>
              </button>

              <div className="relative min-h-[34vh] w-full overflow-hidden bg-[radial-gradient(circle_at_top,#dff5f0_0%,#d1ece5_55%,#c5e3db_100%)]">
                <EnergyParticles />
                <div className="relative min-h-[34vh] w-full lg:w-[56%]">
                  <ProductArtwork
                    name={activeProduct.name}
                    status={activeProduct.status}
                    tag={activeProduct.tag}
                    imageSrc={activeProduct.imageSrc}
                    alignLeft
                    transparentBackground
                    removeRadius
                  />
                </div>

                <aside className="relative z-20 flex w-full flex-col gap-4 p-5 sm:p-7 lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-[44%] lg:p-8">
                  <div className="grid grid-cols-2 gap-2">
                    {otherProducts.map((product) => (
                      <button
                        key={product.name}
                        type="button"
                        onPointerDown={() => switchProduct(product.name)}
                        onClick={() => switchProduct(product.name)}
                        className="rounded-[12px] border border-zinc-300/90 bg-transparent p-3 text-left transition-colors hover:border-[#0F806C]"
                      >
                        <p
                          className={`${archivo.className} text-[0.72rem] font-black italic uppercase leading-tight text-zinc-900 sm:text-xs`}
                        >
                          {product.name}
                        </p>
                      </button>
                    ))}
                  </div>

                  <div className="mt-1 flex flex-1 flex-col justify-center">
                    <p
                      className={`${inter.className} text-xs font-semibold uppercase tracking-[0.28em] text-[#0F806C]`}
                    >
                      Product details
                    </p>
                    <h4
                      className={`${archivo.className} mt-3 text-4xl font-black italic uppercase leading-[0.92] tracking-[-0.03em] text-zinc-950 sm:text-5xl`}
                    >
                      {activeProduct.name}
                    </h4>
                    <p
                      className={`${inter.className} mt-4 text-xl font-semibold text-zinc-900`}
                    >
                      {activeProduct.price}
                    </p>
                    <p
                      className={`${inter.className} mt-6 max-w-xl text-base leading-7 text-zinc-700`}
                    >
                      {activeProduct.name === "Regen Compression Boots"
                        ? "Designed for pneumatic sequential recovery with controlled pressure from foot to thigh."
                        : activeProduct.name === "Socks"
                          ? "Recovery-ready socks with compression support for consistent circulation in training and cooldown."
                          : "Core roller built to reduce muscle tension, improve mobility, and accelerate post-session reset."}
                    </p>
                    <button
                      type="button"
                      className={`${inter.className} mt-8 inline-flex min-h-11 w-fit items-center justify-center rounded-full border border-zinc-400 px-6 text-sm font-semibold text-zinc-900 transition-colors hover:border-[#0F806C] hover:text-[#0F806C]`}
                    >
                      Buy now
                    </button>
                  </div>
                </aside>
              </div>

              {activeProduct.name === "Regen Compression Boots" ? <CompressionScroll /> : null}
              {activeProduct.name === "Socks" ? <SocksFlow /> : null}
              {activeProduct.name === "Core Roller" ? <RollerFlow /> : null}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
