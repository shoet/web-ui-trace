import { ComponentProps } from "react";
import { ComponentWithBorder } from "../ComponentWithBorder";
import clsx from "clsx";
import { PrimaryButton } from "@/components/Button";
import { IconArrowRight } from "@/components/Icon";
import { SectionTitleConvertYourAccountIntoAnOrganization } from "../SectionTitle";

export const ConvertYourAccountIntoAnOrganization = (
  props: ComponentProps<"div">,
) => {
  const { ...rest } = props;
  return (
    <ComponentWithBorder {...rest}>
      <div className={clsx("flex flex-row items-center justify-between gap-2")}>
        <div>
          <SectionTitleConvertYourAccountIntoAnOrganization />
          <div className={clsx("text-text-description")}>
            Converting your personal user account into an organization account
            will rename your current user and make you an owner on the
            organization account.
          </div>
        </div>
        <PrimaryButton text="Start" icon={<IconArrowRight size={14} />} />
      </div>
    </ComponentWithBorder>
  );
};
