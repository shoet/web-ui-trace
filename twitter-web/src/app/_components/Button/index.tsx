import clsx from "clsx";
import { ComponentProps } from "react";

type Props = {
  text: string;
} & ComponentProps<"button">;

export const PrimaryButton = (props: Props) => {
  const { text, className, ...rest } = props;

  return (
    <button
      className={clsx(
        "px-6 py-1 text-md font-bold text-background bg-foreground rounded-full",
        " hover:brightness-90 cursor-pointer",
        className,
      )}
      {...rest}
    >
      {text}
    </button>
  );
};
