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
      className={clsx("px-4 py-2 rounded-md text-white bg-sky-800")}
      {...rest}
    >
      <div>{text}</div>
      {icon}
    </button>
  );
};
