import SectionContainer from "@/components/ui/section-container";
import PricingPricing from "@/components/layout/pricing/pricing";
import Payment from "@/components/layout/pricing/payment";
import FAQ from "@/components/layout/pricing/faq";
import SectionHeader from "@/components/layout/section-header";
import { Button } from "@/components/ui/button";

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
      <SectionContainer>
        <div className="flex flex-col gap-5 items-center justify-center">
          <SectionHeader
            title="Ready to build your next product?"
            sub="Join thousands of developers and designers who trust DesignMind to accelerate their product development process."
          />

          <div className="flex gap-5 mx-auto mt-5">
            <Button
              size={"lg"}
              className="h-12 text-lg"
            >
              Start Free Trial
            </Button>
            <Button
              variant={"outline"}
              size={"lg"}
              className="h-12 text-lg"
            >
              View Demo
            </Button>
          </div>
        </div>
      </SectionContainer>
    </div>
  )
}
export default Pricing;