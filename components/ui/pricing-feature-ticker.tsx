import { CheckIcon, X } from "lucide-react";

const PricingFeatureTicker = ({ ticker }: { ticker: {
  label: string;
  isAvailable: boolean;
} }) => {
  return (
    <div className="flex gap-2">
      {ticker.isAvailable ? (<CheckIcon size={18} className="my-auto text-green-500" />) : (<X size={18} className="my-auto text-gray-500" />)}
      <p className="text-lg my-auto text-foreground/80">{ticker.label}</p>
    </div>
  )
}
export default PricingFeatureTicker;