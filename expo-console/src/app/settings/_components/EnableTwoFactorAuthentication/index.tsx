import clsx from "clsx";
import { ComponentWithBorder } from "../ComponentWithBorder";
import { SectionTitleTwoFactorAuth } from "../SectionTitle";
import { PrimaryButton } from "@/components/Button";
import { IconArrowRight } from "@/components/Icon";
import { ComponentProps } from "react";

export const EnableTwoFactorAuthentication = (props: ComponentProps<"div">) => {
  const { ...rest } = props;
  return (
    <ComponentWithBorder {...rest}>
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
