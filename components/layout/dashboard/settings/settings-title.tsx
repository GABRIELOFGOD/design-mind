import { LucideIcon } from "lucide-react";

const SettingsTitle = ({ icon: Icon, title }: {
  icon: LucideIcon;
  title: string;
}) => {
  return (
    <div className="flex gap-3">
      <Icon size={20} className="text-primary my-auto" />
      <p className="text-2xl font-bold">{title}</p>
    </div>
  )
}
export default SettingsTitle;