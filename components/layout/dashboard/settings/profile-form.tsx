import { User2, UserRound } from "lucide-react";
import SettingsTitle from "./settings-title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ProfileForm = () => {
  return (
    <div className="flex gap-5 flex-col">
      <SettingsTitle title="Profile Settings" icon={User2} />

      <div className="flex flex-col md:flex-row gap-5">
        <div className="border rounded-full h-16 w-16 flex  justify-center items-center">
          <UserRound />
        </div>
        <div className="flex gap-5 my-auto">
          <Button size={"lg"}>Change Photo</Button>

          <Button variant={"outline"} size={"lg"}>
            Remove
          </Button>
        </div>
      </div>

      <div className="flex gap-5 flex-col w-full mt-5">
        <div className="flex gap-5 flex-col md:flex-row w-full">
          <div className="flex flex-col gap-2 w-full">
            <label className="font-semibold">First Name</label>
            <Input className="h-12 text-lg" placeholder="Alex" />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label className="font-semibold">Last Name</label>
            <Input className="h-12 text-lg" placeholder="Johnson" />
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label className="font-semibold">Email Address</label>
          <Input
            className="h-12 text-lg"
            placeholder="alex.johnson@example.com"
          />
        </div>

        <div className="flex gap-5 flex-col md:flex-row w-full">
          <div className="flex flex-col gap-2 w-full">
            <label className="font-semibold">Company</label>
            <Input className="h-12 text-lg" placeholder="Design Studio Co." />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label className="font-semibold">Job title</label>
            <Input className="h-12 text-lg" placeholder="Johnson" />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label className="font-semibold">Bio</label>
          <Textarea className="w-full h-[200px]"></Textarea>
        </div>
      </div>
    </div>
  );
};
export default ProfileForm;
