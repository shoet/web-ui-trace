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
import { IconAlert, IconDanger } from "@/components/Icon";
import { DeleteYourAccount } from "./_components/DeleteYourAccount";

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
    "delete-account",
  ];

  return (
    <IntersectionObserverContainer ids={ids}>
      <div className={clsx("flex flex-col gap-3 p-6")}>
        <div
          className={clsx("flex flex-col gap-10 max-w-[1200px] mx-auto w-full")}
        >
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
        <div
          className={clsx(
            "mt-10",
            "flex flex-col max-w-[1200px] mx-auto  w-full",
          )}
        >
          <div className={clsx("flex flex-col")}>
            <div
              className={clsx(
                "text-xl font-bold flex flex-row items-center justify-start gap-2",
              )}
            >
              <IconDanger color={"var(--color-red-500)"} size={20} />
              Danger Zone
            </div>
            <div className={clsx("text-text-description")}>
              The actions below are permanent and irreversible.
            </div>
          </div>
          <DeleteYourAccount id="delete-account" className="mt-6" />
        </div>
      </div>
    </IntersectionObserverContainer>
  );
}
