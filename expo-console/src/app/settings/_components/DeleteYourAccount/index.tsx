import { ComponentProps } from "react";
import { ComponentWithBorder } from "../ComponentWithBorder";
import clsx from "clsx";
import { SectionTitleDeleteYourAccount } from "../SectionTitle";
import { IconArrowRight, IconInfo } from "@/components/Icon";
import { PrimaryButton } from "@/components/Button";

export const DeleteYourAccount = (props: ComponentProps<"div">) => {
  const { className, ...rest } = props;
  return (
    <ComponentWithBorder className={clsx(className)} {...rest}>
      <div className={clsx("flex flex-row items-center justify-between gap-2")}>
        <div>
          <SectionTitleDeleteYourAccount />
          <div className={clsx("text-text-description")}>
            Delete your personal account, projects, and activity.
          </div>
        </div>
        <PrimaryButton text="Start" icon={<IconArrowRight size={14} />} />
      </div>
      <div
        className={clsx(
          "mt-4",
          "border border-border p-4 bg-gray-950 rounded-xl",
        )}
      >
        <div
          className={clsx("flex flex-row items-center justify-start gap-2 ")}
        >
          <IconInfo size={14} />
          Tip
        </div>
        <div>
          Do you want to let someone else inherit your account? You can do so by{" "}
          <a
            className={clsx("text-blue-300 hover:text-blue-400 cursor-pointer")}
          >
            converting it to an organization.
          </a>
        </div>
      </div>
    </ComponentWithBorder>
  );
};
