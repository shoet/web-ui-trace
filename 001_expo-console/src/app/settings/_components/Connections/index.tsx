import clsx from "clsx";
import { SectionTitleConnection } from "../SectionTitle";
import { IconArrowUpRight, IconDiscord, IconGitHub } from "@/components/Icon";
import { DangerButton, SecondaryButton } from "@/components/Button";
import { ComponentProps } from "react";

export const Connections = (props: ComponentProps<"div">) => {
  const { ...rest } = props;
  return (
    <div className={clsx("border border-border rounded-xl")} {...rest}>
      <div className={clsx("flex flex-col justify-start")}>
        <div className={clsx("border-b border-b-border p-5")}>
          <SectionTitleConnection />
          <div className={clsx("text-text-description")}>
            Link your account with third party services.
          </div>
        </div>
        <div
          className={clsx(
            "border-b border-b-border p-5",
            "flex flex-row items-center justify-between",
          )}
        >
          <div
            className={clsx("flex flex-row items-center gap-3 justify-start")}
          >
            <IconDiscord className="h-[16px]" color={"var(--color-gray-500)"} />
            <span>
              {"Discord - "}
              <span className={clsx("text-text-description")}>
                Not connected
              </span>
            </span>
          </div>
          <SecondaryButton
            text="Connect"
            icon={<IconArrowUpRight size={14} />}
          />
        </div>
        <div
          className={clsx("p-5", "flex flex-row items-center justify-between")}
        >
          <div
            className={clsx("flex flex-row items-center gap-3 justify-start")}
          >
            <IconGitHub className="h-[16px]" color={"var(--color-gray-500)"} />
            <span>
              {"GitHub - "}
              <span className={clsx("text-text-description")}>
                Connected as xxx
              </span>
            </span>
          </div>
          <DangerButton text="Disconnect" />
        </div>
      </div>
    </div>
  );
};
