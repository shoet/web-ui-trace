import clsx from "clsx";
import { AccountSettings } from "./_components/AccountSettings";
import { AboutYou } from "./_components/AboutYou";
import { Email } from "./_components/Eamil";
import { ChangePassword } from "./_components/ChangePassword";
import { EnableTwoFactorAuthentication } from "./_components/EnableTwoFactorAuthentication";

export default function SettingPage() {
  return (
    <div className={clsx("flex flex-col gap-3 p-6")}>
      <div className={clsx("flex flex-col gap-10")}>
        <div className="text-2xl font-bold">User settings</div>
        <AccountSettings />
        <AboutYou />
        <Email />
        <ChangePassword />
        <EnableTwoFactorAuthentication />
        <div>Connections</div>
        <div>Security activity</div>
        <div>Convert your account into an organization</div>
        <div>Rename account</div>
        <div>Log out of other sessions</div>
      </div>
      <div>
        <div>Danger zon</div>
        <div>Delete your account</div>
      </div>
    </div>
  );
}
