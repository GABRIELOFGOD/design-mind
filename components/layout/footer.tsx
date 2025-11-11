import { company, products, socials, support } from "@/data/footer";
import { LayoutDashboard } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  
  return (
    <div className="w-full flex flex-col gap-10">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 text-white gap-5 md:gap-20 justify-between">
        <div className="flex flex-col gap-5">
          <div className="flex gap-3 my-auto">
            <LayoutDashboard className="my-auto text-primary" />
            <p className="text-xl font-bold my-auto">DesignMind</p>
          </div>
          <p className="text-white/80 text-lg">AI-powered product architecture and design generation for modern development teams.</p>
          <div className="flex gap-2">
            {socials.map((social) => (
              <Link
                key={social.id}
                href={social.link}
              >
                <Image
                  src={social.icon}
                  alt={social.link}
                  width={20}
                  height={20}
                  color="#e2e2e2"
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5 text-lg">
          <p className="font-bold">Product</p>
          <div className="flex gap-2 flex flex-col">
            {products.map((itm) => (
              <Link
                key={itm.id}
                href={itm.path}
                className="text-gray-500"
              >{itm.label}</Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5 text-lg">
          <p className="font-bold">Product</p>
          <div className="flex gap-2 flex flex-col">
            {company.map((itm) => (
              <Link
                key={itm.id}
                href={itm.path}
                className="text-gray-500"
              >{itm.label}</Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5 text-lg">
          <p className="font-bold">Product</p>
          <div className="flex gap-2 flex flex-col">
            {support.map((itm) => (
              <Link
                key={itm.id}
                href={itm.path}
                className="text-gray-500"
              >{itm.label}</Link>
            ))}
          </div>
        </div>
        {/* <div className="flex flex-col gap-5"></div>
        <div className="flex flex-col gap-5"></div> */}
      </div>

      <div className="w-full h-[1px] bg-gray-500" />

      <div className="text- w-full">
        <p className="text-center text-gray-500 text-lg">
          &copy; {new Date().getFullYear()} DesignMind. All rights reserved.
        </p>
      </div>
      
    </div>
  )
}
export default Footer;