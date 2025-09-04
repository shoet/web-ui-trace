import clsx from "clsx";
import Image from "next/image";
import { ComponentProps, CSSProperties } from "react";

type Props = {
  imageSrc: string;
  size?: number;
} & ComponentProps<"div">;

export const Avatar = (props: Props) => {
  const { size = 40, imageSrc, className, ...rest } = props;
  return (
    <div
      style={{ "--size": `${size}px` } as CSSProperties}
      className={clsx(
        "relative w-[var(--size)] h-[var(--size)] rounded-full",
        className,
      )}
      {...rest}
    >
      <Image
        src={imageSrc}
        alt="avatar"
        fill
        className={clsx("object-contain object-center rounded-full")}
      />
    </div>
  );
};
