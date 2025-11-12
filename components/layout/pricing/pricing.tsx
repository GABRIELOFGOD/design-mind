"use client";

import { PricingPrices } from "@/data/pricing";
import { cn } from "@/lib/utils";
import { useState } from "react";
import PriceCard from "./price-card";

const Pricing = () => {
  const [pricing, setPricing] = useState<"monthly" | "annually">("monthly");
  // const [priceList, setPriceList] = useState<PricingType[]>([]);

  // useEffect(() => {
  //   setPriceList(homePricing);
  // }, [pricing]);

  return (
    <div className="flex flex-col gap-10 md:gap-20 justify-center items-center">
      <div className="flex gap-3 bg-white border border-border rounded-lg p-2">
        <div onClick={() => setPricing("monthly")} className={cn("cursor-pointer font-medium px-6 text-gray-500 py-2 rounded-lg bg-transparent my-auto", pricing === "monthly" && "bg-primary text-white")}>Monthly</div>
        <div onClick={() => setPricing("annually")} className={cn("cursor-pointer font-medium px-6 text-gray-500 py-2 rounded-lg bg-transparent my-auto", pricing === "annually" && "bg-primary text-white")}>Yearly</div>
        <div className="rounded-full bg-green-500/20 md:text-sm text-xs h-fit w-fit my-auto px-4 text-green-800 py-1 font-medium">{pricing === "monthly" ? "Save 15%" : "Save 20%"}</div>
      </div>

      <div className="justify-center items-center grid grid-cols-1 md:grid-cols-3 w-full mt-10 gap-10 md:mt-20">
        {PricingPrices.map((price) => (
          <PriceCard key={price.id} pricing={price} />
        ))}
      </div>
    </div>
  );
}
export default Pricing;