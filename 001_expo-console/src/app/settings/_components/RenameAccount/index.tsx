import { ComponentProps } from "react";
import { ComponentWithBorder } from "../ComponentWithBorder";
import clsx from "clsx";
import { PrimaryButton } from "@/components/Button";
import { IconArrowRight } from "@/components/Icon";
import { SectionTitleRenameAccount } from "../SectionTitle";

export const RenameAccount = (props: ComponentProps<"div">) => {
  const { ...rest } = props;
  return (
    <ComponentWithBorder {...rest}>
      <div className={clsx("flex flex-row items-center justify-between gap-2")}>
        <div>
          <SectionTitleRenameAccount />
          <div className={clsx("text-text-description")}>
            Renaming your account will change your account's username.
          </div>
        </div>
        <PrimaryButton text="Start" icon={<IconArrowRight size={14} />} />
      </div>
    </ComponentWithBorder>
  );
};
