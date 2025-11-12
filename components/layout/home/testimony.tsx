import { testimonies } from "@/data/testimonies";
import TestimonyCard from "./testimony-card";

const HomeTestimony = () => {
  return (
    <div id="testimonials" className="w-full bg-[#f9fafb] py-10 md:py-20 flex ">
      <div className="flex w-[90%] md:w-[75%] mx-auto justify-center items-center flex-col">
        <p className="text-center w-full text-lg font-medium text-foreground/60">Trusted by product teams at the world&apos;s best companies</p>

        <div className="mt-10 w-full flex flex-col md:flex-row gap-5 mx-auto justify-center">
          {testimonies.map((testimony) => (
            <TestimonyCard
              key={testimony.id}
              testimony={testimony}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
export default HomeTestimony;