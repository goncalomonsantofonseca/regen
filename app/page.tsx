import { EnergyProgressDivider } from "@/src/components/ui/energy-progress-divider";
import { HeroSection } from "@/src/components/ui/hero-section";
import { PartnersCarouselSection } from "@/src/components/ui/partners-carousel-section";
import { ProductGridSection } from "@/src/components/ui/product-grid-section";
import { SiteFooter } from "@/src/components/ui/site-footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <EnergyProgressDivider />
      <ProductGridSection />
      <PartnersCarouselSection />
      <SiteFooter />
    </>
  );
}
