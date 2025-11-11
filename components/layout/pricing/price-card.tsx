import { Button } from "@/components/ui/button";
import PricingFeatureTicker from "@/components/ui/pricing-feature-ticker";
import { cn } from "@/lib/utils";
import { PricingType } from "@/types";

const PriceCard = ({ pricing } : { pricing: PricingType }) => {
  return (
    <div className={cn("p-6 rounded-2xl border w-full md:w-[90%] flex flex-col gap-3 relative", pricing.isActive ? "border-primary scale-105 shadow-lg" : "border-border shadow")}>
      <p className="font-medium text-primary text-lg">{pricing.type}</p>
      <div>
        {pricing.price && (<div className="flex">
          <p className="text-4xl font-bold">{pricing.isMoney ? "$" : ""}{pricing.price}</p>
          {pricing.time && (<sub className="text-lg text-foreground/70 font-medium">/{pricing.time}</sub>)}
        </div>)}
        <p className="text-lg text-foreground/70 mt-2">{pricing.desc}</p>
      </div>

      <div className="flex flex-col gap-3 mt-5">
        {pricing.features.map((ft, i) => (
          <PricingFeatureTicker
            key={i}
            ticker={ft}
          />
        ))}
      </div>

      <div className="mt-10">
        <Button
          // onClick={pricing.button.action}
          size={"lg"}
          className="w-full h-12 text-lg font-medium cursor-pointer"
          variant={pricing.isActive ? "default" : "secondary"}
        >
          {pricing.button.text}
        </Button>
      </div>

      {pricing.isActive && (
        <div className="left-0 w-full text-white flex font-medium top-[-10px] absolute">
          <p className="bg-primary px-4 mx-auto rounded-full">{pricing.isActive}</p>
        </div>
      )}
      
    </div>
  )
}
export default PriceCard;