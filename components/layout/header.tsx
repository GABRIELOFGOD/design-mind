import { LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const Header = () => {
  const menuList = [
    {
      id: 1,
      label: "Features",
      path: "/features"
    },
    {
      id: 2,
      label: "Testimonials",
      path: "/testimonials"
    },
    {
      id: 3,
      label: "Pricing",
      path: "/pricing"
    }
  ]
  
  return (
    <div className="backdrop-blur-lg w-full z-40 top-0 left-0 fixed">
      <div className="flex justify-between gap-5 py-3 md:py-4 bg-transparent w-[90%] md:w-[75%] mx-auto">
        <div className="flex gap-3 my-auto">
          <LayoutDashboard className="my-auto text-primary" />
          <p className="text-xl font-bold my-auto">DesignMind</p>
        </div>

        <div className="flex gap-5 flex-col md:flex-row my-auto">
          {menuList.map((menu) => (
            <Link
              href={menu.path}
              className="capitalize my-auto"
              key={menu.id}
            >
              {menu.label}
            </Link>
          ))}
        </div>

          <div className="flex gap-3 my-auto">
            <Link href={"/login"} className="my-auto font-medium text-foreground/70">Login</Link>
            <Button size={'lg'}>Get Started Free</Button>
          </div>
      </div>
    </div>
  )
}
export default Header;