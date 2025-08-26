import clsx from "clsx";
import { ComponentWithBorder } from "../ComponentWithBorder";
import { SectionTitleSecurityActivity } from "../SectionTitle";
import { PrimaryButton } from "@/components/Button";
import { IconArrowRight } from "@/components/Icon";
import { ComponentProps } from "react";

export const SecurityActivity = (props: ComponentProps<"div">) => {
  const { ...rest } = props;
  return (
    <ComponentWithBorder {...rest}>
      <div className={clsx("flex flex-row items-center justify-between gap-2")}>
        <div>
          <SectionTitleSecurityActivity />
          <div className={clsx("text-text-description")}>
            Security activity includes data about actions taken on your user.
          </div>
        </div>
        <PrimaryButton text="Start" icon={<IconArrowRight size={14} />} />
      </div>
    </ComponentWithBorder>
  );
};
