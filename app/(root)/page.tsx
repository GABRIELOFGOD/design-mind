import Features from "@/components/layout/home/features";
import Hero from "@/components/layout/home/hero";
import HommePricing from "@/components/layout/home/home-pricing";
import HomeTestimony from "@/components/layout/home/testimony";
import SectionContainer from "@/components/ui/section-container";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <HomeTestimony />
      <SectionContainer>
        <HommePricing />
      </SectionContainer>
    </div>
  );
}
