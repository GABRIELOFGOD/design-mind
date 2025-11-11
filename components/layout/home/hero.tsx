import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-screen w-full justify-center items-center bg-[#f9fafb]">
      <div className="w-[90%] md:w-[75%] mx-auto h-full justify-center items-center flex">
        <div className="h-fit w-full grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 justify-between items-center">
          <div className="w-full h-full justify-center items-start flex flex-col gap-5">
            <p className="text-3xl md:text-6xl font-bold">Design your app from a single prompt.</p>
            <p className="text-lg font-medium text-foreground/70">Go from idea to full-stack application architecture and high-fidelity UI in minutes. Let AI be your co-founder.</p>
            <div className="flex gap-5 justify-start mt-5">
              <Button
                size={"lg"}
                className="h-14 cursor-pointer"
              >
                <p className="my-auto font-medium text-lg">Start Building</p>
                <ArrowRightIcon className="my-auto" />
              </Button>
              <Button
                size={"lg"}
                className="h-14 cursor-pointer"
                variant={"secondary"}
              >
                <p className="my-auto font-medium text-lg">Watch demo</p>
              </Button>
            </div>
          </div>

          <div className="w-full h-full relative bg-white p-4 rounded-lg overflow-hidden border border-border/50 animate-bounce shadow duration-700">
            <Image
              src={"/images/hero.png"}
              alt="hero image"
              fill
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Hero;