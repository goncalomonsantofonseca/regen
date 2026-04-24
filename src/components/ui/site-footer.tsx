import type { ReactNode } from "react";
import Image from "next/image";

import { inter } from "@/src/lib/fonts";

const footerParticles = [
  { left: "4%", size: 26, delay: "0s", duration: "18s", opacity: 0.08 },
  { left: "8%", size: 20, delay: "1.2s", duration: "16s", opacity: 0.06 },
  { left: "12%", size: 22, delay: "2.4s", duration: "21s", opacity: 0.06 },
  { left: "16%", size: 18, delay: "5.1s", duration: "17s", opacity: 0.05 },
  { left: "21%", size: 28, delay: "4.8s", duration: "19s", opacity: 0.09 },
  { left: "24%", size: 16, delay: "2.1s", duration: "15s", opacity: 0.05 },
  { left: "27%", size: 18, delay: "1s", duration: "16s", opacity: 0.05 },
  { left: "33%", size: 20, delay: "1.4s", duration: "17s", opacity: 0.07 },
  { left: "36%", size: 17, delay: "3.3s", duration: "15s", opacity: 0.05 },
  { left: "39%", size: 24, delay: "7s", duration: "20s", opacity: 0.06 },
  { left: "45%", size: 24, delay: "6.2s", duration: "20s", opacity: 0.08 },
  { left: "48%", size: 18, delay: "0.7s", duration: "16s", opacity: 0.05 },
  { left: "51%", size: 19, delay: "2.8s", duration: "17s", opacity: 0.05 },
  { left: "57%", size: 30, delay: "3.1s", duration: "22s", opacity: 0.09 },
  { left: "60%", size: 16, delay: "4.9s", duration: "15s", opacity: 0.05 },
  { left: "63%", size: 21, delay: "4.1s", duration: "18s", opacity: 0.06 },
  { left: "69%", size: 18, delay: "5.4s", duration: "18s", opacity: 0.06 },
  { left: "72%", size: 20, delay: "2.7s", duration: "16s", opacity: 0.06 },
  { left: "75%", size: 26, delay: "1.6s", duration: "21s", opacity: 0.08 },
  { left: "80%", size: 26, delay: "2s", duration: "20s", opacity: 0.08 },
  { left: "83%", size: 17, delay: "5.6s", duration: "15s", opacity: 0.05 },
  { left: "86%", size: 20, delay: "6s", duration: "17s", opacity: 0.06 },
  { left: "91%", size: 22, delay: "7.2s", duration: "19s", opacity: 0.07 },
  { left: "94%", size: 16, delay: "1.9s", duration: "15s", opacity: 0.05 },
  { left: "96%", size: 18, delay: "3.6s", duration: "16s", opacity: 0.05 },
];

function FooterSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="text-center">
      <h3
        className={`${inter.className} text-[0.72rem] font-black uppercase tracking-[0.28em] text-white/85`}
      >
        {title}
      </h3>
      <div
        className={`${inter.className} mt-5 space-y-3 text-sm leading-6 text-white/62`}
      >
        {children}
      </div>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="block transition hover:text-white">
      {children}
    </a>
  );
}

function SocialIcon({
  label,
  href,
  children,
}: {
  label: string;
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white/82 transition hover:text-white"
    >
      {children}
    </a>
  );
}

function FooterEnergyBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(15,128,108,0.05),transparent_38%),linear-gradient(180deg,rgba(15,128,108,0.015),transparent_32%,rgba(15,128,108,0.04)_100%)]" />
      {footerParticles.map((particle, index) => (
        <span
          key={`${particle.left}-${index}`}
          className="energy-particle absolute bottom-[-5%]"
          style={{
            left: particle.left,
            ["--particle-delay" as string]: particle.delay,
            ["--particle-duration" as string]: particle.duration,
            ["--particle-drift" as string]: `${((index % 5) - 2) * 0.8}rem`,
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
              ["--particle-base-opacity" as string]: `${particle.opacity}`,
            }}
          />
        </span>
      ))}
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-[#050505] pb-8 pt-28 [--energy-speed:1.15] [--particle-scale-multiplier:1] [--particle-opacity-multiplier:1.22]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='0.9'/%3E%3C/svg%3E\")",
        }}
      />
      <FooterEnergyBackground />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-8">
        <div className="relative flex flex-col items-center">
          <div className="relative -mt-[9rem] flex h-[13rem] w-full items-center justify-center sm:-mt-[10rem] sm:h-[15rem]">
            <div className="absolute left-1/2 top-1/2 h-px w-full max-w-[44rem] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-white/24 to-transparent" />
            <Image
              src="/Regen_Logo.png"
              alt="REGEN logo"
              width={1696}
              height={2176}
              className="relative z-10 h-72 w-auto object-contain drop-shadow-[0_12px_30px_rgba(0,0,0,0.32)] sm:h-[22rem]"
            />
          </div>

          <p
            className={`${inter.className} mt-4 text-center text-xs font-semibold uppercase tracking-[0.3em] text-white/64`}
          >
            REGEN across every channel
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <SocialIcon label="Instagram" href="https://www.instagram.com/">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.2"
                  cy="6.8"
                  r="0.9"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </SocialIcon>
            <SocialIcon label="YouTube" href="https://www.youtube.com/">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M21.3 7.2a2.7 2.7 0 0 0-1.9-1.9C17.7 4.8 12 4.8 12 4.8s-5.7 0-7.4.5A2.7 2.7 0 0 0 2.7 7.2 28.6 28.6 0 0 0 2.2 12c0 1.6.2 3.2.5 4.8a2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.4.5 7.4.5s5.7 0 7.4-.5a2.7 2.7 0 0 0 1.9-1.9c.3-1.6.5-3.2.5-4.8s-.2-3.2-.5-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
              </svg>
            </SocialIcon>
            <SocialIcon label="TikTok" href="https://www.tiktok.com/">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M14.7 3c.2 1.7 1.2 3.2 2.8 4.1 1 .6 2 .9 3.2.9v3.1a9 9 0 0 1-3.3-.6v5.6a6 6 0 1 1-6-6c.3 0 .5 0 .8.1v3.1a2.8 2.8 0 1 0 2.5 2.8V3h3Z" />
              </svg>
            </SocialIcon>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FooterSection title="Shop">
            <FooterLink href="#products">Compression Boots</FooterLink>
            <FooterLink href="#products">Socks</FooterLink>
            <FooterLink href="#products">Core Roller</FooterLink>
          </FooterSection>

          <FooterSection title="Support">
            <FooterLink href="#shipping">Shipping & Returns</FooterLink>
            <FooterLink href="#faq">FAQ</FooterLink>
            <FooterLink href="#privacy">Privacy Policy</FooterLink>
          </FooterSection>

          <FooterSection title="Contact">
            <a
              href="mailto:hello@regen-performance.com"
              className="block transition hover:text-white"
            >
              hello@regen-performance.com
            </a>
            <a
              href="tel:+351910000000"
              className="block transition hover:text-white"
            >
              +351 910 000 000
            </a>
            <p>Lisbon, Portugal</p>
          </FooterSection>
        </div>

        <div
          className={`${inter.className} mt-10 flex flex-col gap-5 border-t border-white/10 pt-5 text-xs leading-6 text-white/42 lg:flex-row lg:items-center lg:justify-between`}
        >
          <p>Copyright (c) 2026 REGEN. All rights reserved.</p>

          <div className="flex w-full flex-wrap items-center gap-3 self-start lg:w-auto lg:flex-nowrap lg:self-auto">
            <span className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-white/38">
              Powered by recovery
            </span>
            <div className="flex h-[3.2rem] min-w-[8rem] items-center justify-center overflow-hidden rounded-[1.2rem] bg-white px-[1rem] shadow-[0_12px_26px_rgba(0,0,0,0.16)]">
              <Image
                src="/Regen_Logo.png"
                alt="REGEN symbol"
                width={72}
                height={72}
                className="h-[2.2rem] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
