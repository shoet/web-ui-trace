import clsx from "clsx";
import { ComponentProps, ReactNode } from "react";

type Props = {
  footerComponent?: ReactNode;
} & ComponentProps<"div">;

export const ComponentWithBorder = (props: Props) => {
  const { footerComponent, children, ...rest } = props;
  return (
    <div className={clsx("border border-gray-500 rounded-xl")} {...rest}>
      <div className={clsx("p-5")}>{children}</div>
      {footerComponent && (
        <div className={clsx("w-full p-3 bg-gray-800 rounded-b-xl")}>
          {footerComponent}
        </div>
      )}
    </div>
  );
};
