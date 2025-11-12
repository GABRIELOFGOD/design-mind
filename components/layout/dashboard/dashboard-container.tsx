import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const DashboardContainer = ({
  children, className, blueBackground
}: {
  className?: string;
  blueBackground?: boolean;
  children: ReactNode;
}) => {
  return (
    <div className={cn("w-full flex justify-center items-center", className, blueBackground && "bg-[#f9fafb]")}>
      <div className="rounded-xl border w-full md:w-[80%] mx-auto bg-white p-2 md:p-6">
        {children}
      </div>
    </div>
  )
}
export default DashboardContainer;