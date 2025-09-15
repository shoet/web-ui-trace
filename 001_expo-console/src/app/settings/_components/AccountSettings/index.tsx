import clsx from "clsx";
import { ComponentWithBorder } from "../ComponentWithBorder";
import { PrimaryButton } from "@/components/Button";
import { IconArrowRight } from "@/components/Icon";
import { ComponentProps } from "react";

type Props = {} & ComponentProps<"div">;
export const AccountSettings = (props: Props) => {
  return (
    <ComponentWithBorder>
      <div className={clsx("flex flex-row items-center justify-between")}>
        <div className={clsx("flex flex-col justify-start")}>
          <div className={clsx("text-xl font-semibold")}>Account settings</div>
          <div className={clsx("text-md text-text-description")}>
            Configure credentials, secrets, and more in account settings.
          </div>
        </div>
        <div>
          <PrimaryButton
            text="Account Settings"
            icon={<IconArrowRight size={14} />}
          />
        </div>
      </div>
    </ComponentWithBorder>
  );
};
