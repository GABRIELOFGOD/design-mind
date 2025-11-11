import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const SectionContainer = ({
  children, className, blueBackground
}: {
  className?: string;
  blueBackground?: boolean;
  children: ReactNode;
}) => {
  return (
    <div className={cn("w-full py-10 md:py-20", className, blueBackground && "bg-[#f9fafb]")}>
      <div className="w-[90%] md:w-[75%] mx-auto">
        {children}
      </div>
    </div>
  )
}
export default SectionContainer;