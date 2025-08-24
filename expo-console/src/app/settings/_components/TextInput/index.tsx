import clsx from "clsx";
import { ComponentProps } from "react";

type Props = {} & ComponentProps<"input">;

export const TextInput = (props: Props) => {
  const { ...rest } = props;
  return (
    <input
      type="text"
      className={clsx("p-4 border border-gray-500 rounded-md w-full")}
      {...rest}
    />
  );
};
