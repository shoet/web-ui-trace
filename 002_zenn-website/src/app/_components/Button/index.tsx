import clsx from "clsx";
import { ComponentProps } from "react";

type ButtonProps = {
  text: string;
} & ComponentProps<"button">;

export const PrimaryButton = (props: ButtonProps) => {
  const { text, className, ...rest } = props;
  return (
    <button
      className={clsx(
        "bg-blue-400 text-white font-bold cursor-pointer hover:bg-blue-500 text-sm",
        "px-6 py-2 rounded-full",
        className,
      )}
      {...rest}
    >
      {text}
    </button>
  );
};
