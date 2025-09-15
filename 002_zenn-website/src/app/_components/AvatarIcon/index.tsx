import clsx from "clsx";
import Image from "next/image";
import { ComponentProps, CSSProperties } from "react";

type Props = {
  size: number;
} & ComponentProps<"button">;

export const AvatarIcon = (props: Props) => {
  const { size = 40, className, ...rest } = props;
  return (
    <button
      style={{ "--size": `${size}px` } as CSSProperties}
      className={clsx("h-[var(--size)] w-[var(--size)] relative", className)}
      {...rest}
    >
      <Image
        className={clsx("object-fit object-center rounded-full")}
        src="/avatar_image.png"
        alt="avatar"
        fill
      />
    </button>
  );
};
