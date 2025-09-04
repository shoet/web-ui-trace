import clsx from "clsx";
import { IconEllipsis } from "../Icon";
import { Avatar } from "../Avatar";
import { ComponentProps } from "react";

export const Profile = (props: ComponentProps<"button">) => {
  const { className, ...rest } = props;
  return (
    <button
      className={clsx(
        "flex flex-row items-center justify-between cursor-pointer hover:bg-gray-800 rounded-full w-full p-4",
        className,
      )}
      {...rest}
    >
      <div className={clsx("flex flex-row items-center justify-start gap-3")}>
        <Avatar
          imageSrc="/avatar_image.png"
          className={clsx("cursor-pointer")}
        />
        <div className={clsx("flex flex-col items-start justify-evenly")}>
          <div className={clsx("text-sm font-bold")}>shoetsu</div>
          <div className={clsx("text-md text-gray-500")}>@shoetsu</div>
        </div>
      </div>
      <IconEllipsis />
    </button>
  );
};
