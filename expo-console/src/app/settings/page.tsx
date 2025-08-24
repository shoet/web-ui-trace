import clsx from "clsx";
import { AccountSettings } from "./_components/AccountSettings";
import { AboutYou } from "./_components/AboutYou";

export default function SettingPage() {
  return (
    <div className={clsx("flex flex-col gap-3 p-10")}>
      <div className={clsx("flex flex-col gap-10")}>
        <div>User settings</div>
        <AccountSettings />
        <AboutYou />
        <div> Email </div>
        <div> Change Password </div>
        <div>Enable two-factor authentication</div>
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
