import DashboardContainer from "@/components/layout/dashboard/dashboard-container";
import ProfileForm from "@/components/layout/dashboard/settings/profile-form";
import SettingsFooter from "@/components/layout/dashboard/settings/settings-footer";
import SectionHeader from "@/components/layout/section-header";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";

const Settings = () => {
  return (
    <div className="flex flex-col gap-10 h-full overflow-y-auto mb-20 md:pb-52">
      <div
        className="md:p-10 p-5 bg-white border-b flex justify-between"
      >
        <SectionHeader
          title="Settings"
          sub="Manage your account preferences and configurations"
          className="text-start"
        />

        <Button
          variant={"outline"}
          size={"lg"}
          className="text-foreground/90 flex gap-3 my-auto cursor-pointer"
        >
          <DownloadIcon />
          <p>Export Data</p>
        </Button>
      </div>

      {/* =================== PROFILE SETTINGS ===================== */}
      <DashboardContainer>
        <ProfileForm />
      </DashboardContainer>
      {/* =================== PROFILE SETTINGS ===================== */}




      {/* ================= SETTINGS FOOTER ============== */}
      <SettingsFooter />
      {/* ================= SETTINGS FOOTER ============== */}
      
    </div>
  )
}
export default Settings;