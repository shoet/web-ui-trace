import clsx from "clsx";
import { IconX } from "../Icon";

export const Logo = () => {
  return (
    <div className={clsx("flex flex-row justify-start items-center w-full")}>
      <IconX size={30} />
    </div>
  );
};
