import DashboardSidebar from "@/components/layout/dashboard/dashboard-sidebar";
import { ReactNode, useState } from "react"

export const useSidebar = () => {
  const [content, setContent] = useState<ReactNode>(<DashboardSidebar />);

  const sidebarContent = (ct: ReactNode) => {
    setContent(ct);
  };
  
  return { content, sidebarContent };
};