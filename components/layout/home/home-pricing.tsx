import { homePricing } from "@/data/pricing";
import SectionHeader from "../section-header";
import PricingCard from "../pricing-card";

const HommePricing = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <SectionHeader
        title="Simple, Transparent Pricing"
        sub="Choose a plan that scales with your needs. Start for free."
      />

      {/* ================== PRICING SECTION ===================== */}
      <div className="justify-center items-center grid grid-cols-1 md:grid-cols-3 w-full mt-10 gap-10 md:mt-20">
        {homePricing.map((price) => (
          <PricingCard
            key={price.id}
            pricing={price}
          />
        ))}
      </div>
      {/* ================== PRICING SECTION ===================== */}
    </div>
  )
}
export default HommePricing;