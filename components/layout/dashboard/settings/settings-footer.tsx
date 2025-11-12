import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const SettingsFooter = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t py-4">
      <div className="w-full justify-between items-center md:w-[80%] mx-auto">
        <div className="justify-end w-full flex gap-5">
          <Button
            variant={"outline"}
            size={"lg"}
            className="text-lg"
          >
            Cancel
          </Button>
          <Button
            size={"lg"}
            className="text-lg"
          >
            <Check className="my-auto" size={15} />
            <p className="my-auto">Save Changes</p>
          </Button>
        </div>
      </div>
    </div>
  )
}
export default SettingsFooter;