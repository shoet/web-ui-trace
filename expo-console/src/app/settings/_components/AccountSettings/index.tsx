import clsx from "clsx";
import { ComponentWithBorder } from "../ComponentWithBorder";
import { PrimaryButton } from "../PrimaryButton";

type Props = {};
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
          <PrimaryButton text="Account Settings" />
        </div>
      </div>
    </ComponentWithBorder>
  );
};
