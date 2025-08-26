import clsx from "clsx";
import { AccountSettings } from "./_components/AccountSettings";
import { AboutYou } from "./_components/AboutYou";
import { Email } from "./_components/Eamil";
import { ChangePassword } from "./_components/ChangePassword";
import { EnableTwoFactorAuthentication } from "./_components/EnableTwoFactorAuthentication";
import { Connections } from "./_components/Connections";
import { IntersectionObserverContainer } from "@/components/IntersectionObserverContext";
import { SecurityActivity } from "./_components/SecurityActivity";
import { ConvertYourAccountIntoAnOrganization } from "./_components/ConvertYourAccoutIntoAnOrganization";
import { RenameAccount } from "./_components/RenameAccount";
import { LogOutOfOtherSessions } from "./_components/LogOutOtherSessions";

export default function SettingPage() {
  const ids = [
    "about-you",
    "email",
    "change-password",
    "two-factor-authentication",
    "connections",
    "security-activity",
    "convert-to-organization",
    "rename-account",
    "log-out-of-session",
  ];

  return (
    <IntersectionObserverContainer ids={ids}>
      <div className={clsx("flex flex-col gap-3 p-6")}>
        <div className={clsx("flex flex-col gap-10 max-w-[1200px] mx-auto")}>
          <div className="text-2xl font-bold">User settings</div>
          <AccountSettings />
          <AboutYou id="about-you" />
          <Email id="email" />
          <ChangePassword id="change-password" />
          <EnableTwoFactorAuthentication id="two-factor-authentication" />
          <Connections id="connections" />
          <SecurityActivity id="security-activity" />
          <ConvertYourAccountIntoAnOrganization id="convert-to-organization" />
          <RenameAccount id="rename-account" />
          <LogOutOfOtherSessions id="log-out-of-session" />
        </div>
        <div>
          <div>Danger zon</div>
          <div>Delete your account</div>
        </div>
        <div className={clsx("h-[500px] w-full")}>space</div>
      </div>
    </IntersectionObserverContainer>
  );
}
