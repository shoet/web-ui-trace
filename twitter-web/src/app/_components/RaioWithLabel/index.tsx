import clsx from "clsx";
import { ComponentProps } from "react";
import { IconCheck } from "../Icon";

type Props = {
  label: string;
} & Omit<ComponentProps<"input">, "type">;

export const RadioWithLabel = (props: Props) => {
  const { label, checked, ...rest } = props;
  return (
    <label
      className={clsx("flex flex-row items-center justify-between w-full")}
    >
      {label}
      <input
        className={clsx("opacity-0 absolute peer")}
        type="radio"
        {...rest}
        checked
      />
      <div
        className={clsx(
          "w-[20px] h-[20px] rounded-full flex items-center justify-center peer-focus:outline-2 peer-focus:outline-blue-300 outline-offset-6",
          checked ? "bg-blue-500 text-white" : "border-2 border-gray-500",
        )}
      >
        {checked && <IconCheck strokeWidth={2} size={14} />}
      </div>
    </label>
  );
};
