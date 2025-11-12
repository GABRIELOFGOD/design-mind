import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LayoutDashboardIcon, ReceiptIcon, SettingsIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardSidebar = () => {
  const pathName = usePathname();
  
  const navContent = [
    {
      id: 1,
      label: "Projects",
      path: "/dashboard",
      icon: LayoutDashboardIcon
    },
    {
      id: 2,
      label: "Billing",
      path: "/dashboard/billing",
      icon: ReceiptIcon
    },
    {
      id: 3,
      label: "Settings",
      path: "/dashboard/settings",
      icon: SettingsIcon
    }
  ];
  
  return (
    <div>
      <div className="flex flex-col gap-3 px-5 py-5">
        {navContent.map(({ id, path, label, icon: Icon }) => (
          <Link
            key={id}
            href={path}
            className={cn("py-2 px-4 flex gap-2 rounded-md font-medium", path === pathName && "text-primary bg-primary/20")}
          >
            <Icon size={18} className="my-auto" />
            <p>{label}</p>
          </Link>
        ))}
      </div>

      <div className="border-t mb-auto flex p-5">
        <div className="bg-border rounded-md p-5 flex flex-col text-center justify-center items-center w-full">
          <p className="font-bold text-lg">Upgrade to Pro</p>
          <p className="text-gray-600 ">Unlock powerful new features.</p>
          <Button
            size={"lg"}
            className="w-full mt-5 cursor-pointer"
          >
            Upgrade Now
          </Button>
        </div>
      </div>
    </div>
  )
}
export default DashboardSidebar;