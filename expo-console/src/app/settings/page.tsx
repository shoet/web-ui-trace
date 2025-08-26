import clsx from "clsx";
import { AccountSettings } from "./_components/AccountSettings";
import { AboutYou } from "./_components/AboutYou";
import { Email } from "./_components/Eamil";
import { ChangePassword } from "./_components/ChangePassword";
import { EnableTwoFactorAuthentication } from "./_components/EnableTwoFactorAuthentication";
import { Connections } from "./_components/Connections";
import { IntersectionObserverContainer } from "@/components/IntersectionObserverContext";

export default function SettingPage() {
  return (
    <IntersectionObserverContainer>
      <div className={clsx("flex flex-col gap-3 p-6")}>
        <div className={clsx("flex flex-col gap-10 max-w-[1200px] mx-auto")}>
          <div className="text-2xl font-bold">User settings</div>
          <AccountSettings />
          <AboutYou id="about-you" />
          <Email id="email" />
          <ChangePassword id="change-password" />
          <EnableTwoFactorAuthentication id="two-factor-authentication" />
          <Connections id="connections" />
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
    </IntersectionObserverContainer>
  );
}
