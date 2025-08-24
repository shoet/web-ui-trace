import clsx from "clsx";
import { PropsWithChildren, ReactNode } from "react";

type Props = {
  footerComponent?: ReactNode;
} & PropsWithChildren;

export const ComponentWithBorder = (props: Props) => {
  const { footerComponent, children } = props;
  return (
    <div className={clsx("border border-gray-500 rounded-xl")}>
      <div className={clsx("p-5")}>{children}</div>
      {footerComponent && (
        <div className={clsx("w-full p-3 bg-gray-800 rounded-b-xl")}>
          {footerComponent}
        </div>
      )}
    </div>
  );
};
