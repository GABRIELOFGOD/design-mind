import SectionContainer from "@/components/ui/section-container";
import PricingPricing from "@/components/layout/pricing/pricing";
import Payment from "@/components/layout/pricing/payment";
import FAQ from "@/components/layout/pricing/faq";

const Pricing = () => {
  
  return (
    <div>
      <SectionContainer>
        <div className="flex flex-col gap-5 py-20">
          <p className="text-center text-4xl md:text-5xl font-bold">Choose Your Plan</p>
          <div className="text-xl font-medium text-gray-500 text-center md:w-[800px] mx-auto">Start building stunning product architectures and designs with AI-powered tools. Perfect for indie developers, designers, and agencies.</div>
        </div>
      </SectionContainer>

      <SectionContainer
        blueBackground={true}
        className="border-t-2"
      >
        <PricingPricing />
      </SectionContainer>
      <SectionContainer>
        <Payment />
      </SectionContainer>
      <SectionContainer
        blueBackground={true}
      >
        <FAQ />
      </SectionContainer>
    </div>
  )
}
export default Pricing;