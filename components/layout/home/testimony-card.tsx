import { TestimonyType } from "@/types";
import { User } from "lucide-react";

const TestimonyCard = ({ testimony }: { testimony: TestimonyType }) => {
  return (
    <div className="w-full md:w-[30%] bg-white border border-border/50 rounded-2xl p-6 shadow-md">
      <p className="text-lg text-foreground/80">&ldquo;{testimony.testimony}&ldquo;</p>
      <div className="mt-5 flex gap-5">
        <div className="rounded-full overflow-hidden my-auto h-12 w-12 flex justify-center items-center border border-border/60 bg-border">
          <User size={25} />
        </div>
        <div className="flex flex-col my-auto">
          <p className="text-lg font-bold">{testimony.name}</p>
          <p className="text-sm text-foreground/60">{testimony.role}</p>
        </div>
      </div>
    </div>
  )
}
export default TestimonyCard;