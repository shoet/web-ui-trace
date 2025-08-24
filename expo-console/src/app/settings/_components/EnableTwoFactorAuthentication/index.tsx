import clsx from "clsx";
import { ComponentWithBorder } from "../ComponentWithBorder";
import { SectionTitleTwoFactorAuth } from "../SectionTitle";
import { PrimaryButton } from "../PrimaryButton";
import { IconArrowRight } from "@/components/Icon";

export const EnableTwoFactorAuthentication = () => {
  return (
    <ComponentWithBorder id="two-factor-authentication">
      <div className={clsx("flex flex-row justify-between items-center gap-3")}>
        <div className={clsx("flex flex-col justify-start")}>
          <SectionTitleTwoFactorAuth />
          <div className="text-text-description">
            Two-factor authentication increases the security of your account by
            requiring a one-time password in addition to your password to log
            in.
          </div>
        </div>
        <PrimaryButton text="Start" icon={<IconArrowRight size={14} />} />
      </div>
    </ComponentWithBorder>
  );
};
