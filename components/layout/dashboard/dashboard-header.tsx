import { SidebarTrigger } from "@/components/ui/sidebar";
import { BellDotIcon, User2 } from "lucide-react";

const DashboardHeader = () => {
  return (
    <div className="flex gap-5 border-b w-full py-2 px-5">
      <SidebarTrigger className="my-auto" />
      <div className="w-full flex justify-between py-2">
        <div className="my-auto">
          <p className="text-2xl font-bold truncate">Good morning GABRIELOFGOD!</p>
          <p className="text-gray-400 text-lg">Let&apos;s build something amazing today.</p>
        </div>

        <div className="flex my-auto gap-5">
          <BellDotIcon className="my-auto cursor-pointer" />
          <div className="rounded-full my-auto h-10 w-10 border flex justify-center items-center cursor-pointer">
            <User2 size={25} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default DashboardHeader;