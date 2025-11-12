"use client"

import { LayoutDashboard, Menu, X } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useState } from "react"

const Header = () => {
  const [open, setOpen] = useState(false)

  const menuList = [
    { id: 1, label: "Features", path: "/#features" },
    { id: 2, label: "Testimonials", path: "/#testimonials" },
    { id: 3, label: "Pricing", path: "/pricing" },
  ]

  return (
    <div className="backdrop-blur-lg w-full z-40 top-0 left-0 fixed">
      <div className="flex justify-between items-center py-3 md:py-4 bg-transparent w-[90%] md:w-[75%] mx-auto">
        {/* Logo */}
        <Link href={"/"} className="flex gap-3 items-center">
          <LayoutDashboard className="text-primary" />
          <p className="text-xl font-bold">DesignMind</p>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-5 items-center">
          {menuList.map((menu) => (
            <Link
              href={menu.path}
              key={menu.id}
              className="capitalize text-foreground/80 hover:text-primary transition"
            >
              {menu.label}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex gap-3 items-center">
          <Link href="/login" className="font-medium text-foreground/70">
            Login
          </Link>
          <Button size="lg">Get Started Free</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground hover:text-primary"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80%] sm:w-[60%] px-4">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <LayoutDashboard className="text-primary" />
                  <span className="text-lg font-semibold">DesignMind</span>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col mt-6 space-y-4">
                {menuList.map((menu) => (
                  <Link
                    key={menu.id}
                    href={menu.path}
                    onClick={() => setOpen(false)}
                    className="text-lg text-foreground/80 hover:text-primary transition"
                  >
                    {menu.label}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col mt-8 gap-3">
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="text-foreground/70 font-medium"
                >
                  Login
                </Link>
                <Button size="lg" onClick={() => setOpen(false)}>
                  Get Started Free
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  )
}

export default Header
