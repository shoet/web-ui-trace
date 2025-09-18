import clsx from "clsx";
import { ReactNode } from "react";

type LargeProps = {
  type: "large";
  title: string;
  icon: ReactNode;
  active?: boolean;
  disabled?: boolean;
};

type SmallProps = {
  type: "small";
  title: string;
  active?: boolean;
  disabled?: boolean;
};

type Props = LargeProps | SmallProps;

export const SideMenuItem = (props: Props) => {
  const { type, title, active, disabled } = props;
  return (
    <div
      className={clsx(
        "w-full relative",
        disabled ? "cursor-default" : "cursor-pointer",
      )}
    >
      <div
        className={clsx(
          active &&
            'before:absolute before:content-[""] before:h-[calc(100%-2px)] before:w-[5px] top-[1px] left-0 before:bg-sky-400',
        )}
      >
        <div
          className={clsx(
            type === "large" ? "h-[60px]" : "h-[40px]",
            "ml-2",
            "flex flex-row items-center justify-start gap-4  px-4 py-2",
            "outline-cyan-700",
            "hover:bg-gray-300 rounded-xl",
          )}
        >
          {type === "large" && (
            <div className={clsx(disabled ? "text-gray-400" : "text-black")}>
              {props.icon}
            </div>
          )}
          <span
            className={clsx(
              "font-bold",
              type === "large" ? "text-base" : "text-sm",
              disabled ? "text-gray-400" : "text-black",
            )}
          >
            {title}
          </span>
        </div>
      </div>
    </div>
  );
};
