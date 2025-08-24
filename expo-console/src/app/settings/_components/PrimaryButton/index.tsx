import clsx from "clsx";
import { ComponentProps, ReactNode } from "react";

type Props = {
  text: string;
  icon?: ReactNode;
} & ComponentProps<"button">;

export const PrimaryButton = (props: Props) => {
  const { text, icon, ...rest } = props;
  return (
    <button
      className={clsx(
        "flex flex-row items-center justify-center px-4 py-2 rounded-md text-white bg-sky-800 cursor-pointer hover:bg-sky-900 disabled:bg-sky-950 disabled:cursor-default gap-2",
      )}
      {...rest}
    >
      <div>{text}</div>
      {icon && icon}
    </button>
  );
};
