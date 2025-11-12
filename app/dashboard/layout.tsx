import { ReactNode } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import DashboardHeader from "@/components/layout/dashboard/dashboard-header";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen! w-full overflow-hidden">
      <SidebarProvider className="bg-white">
        <AppSidebar />
        <main className="w-full bg-[#f9fafb] h-screen">
          <DashboardHeader />
          <div className="h-full">
            {children}
          </div>
        </main>
      </SidebarProvider>
    </div>
  )
}
export default DashboardLayout;