"use client";

import {
  Sidebar
} from "@/components/ui/sidebar";
import { useSidebar } from "@/hooks/use-sidebar";
import { LayoutDashboard } from "lucide-react";

export function AppSidebar() {
  const { content } = useSidebar();
  
  return (
    <Sidebar className="bg-white">
      <div className="flex gap-3 p-5 border-b ">
        <LayoutDashboard className=" text-primary mt-auto" />
        <p className="text-xl font-bold my-auto">DesignMind</p>
      </div>
      {content}
    </Sidebar>
  )
}