import { IconAlert, IconCheck, IconInfo, IconWarn } from "@/components/Icon";
import clsx from "clsx";
import { CSSProperties, ReactNode } from "react";

type BadgeVariant = "success" | "info" | "warn" | "alert";

type Props = {
  variant: BadgeVariant;
  text: string;
};

type BadgeStyle = {
  color: string;
  backgroundColor: string;
  icon: ReactNode;
};

const BadgeStyles: Record<BadgeVariant, BadgeStyle> = {
  success: {
    color: "var(--color-green-500)",
    backgroundColor: "var(--color-green-950)",
    icon: <IconCheck size={15} color={"var(--color-green-500)"} />,
  },
  info: {
    color: "var(--color-sky-500)",
    backgroundColor: "var(--color-sky-950)",
    icon: <IconInfo size={15} color={"var(--color-sky-500)"} />,
  },
  warn: {
    color: "var(--color-yellow-500)",
    backgroundColor: "var(--color-yellow-950)",
    icon: <IconWarn size={15} color={"var(--color-yellow-500)"} />,
  },
  alert: {
    color: "var(--color-red-500)",
    backgroundColor: "var(--color-red-950)",
    icon: <IconAlert size={15} color={"var(--color-red-500)"} />,
  },
};

export const Badge = (props: Props) => {
  const { variant, text } = props;

  const style = BadgeStyles[variant];

  return (
    <div
      className={clsx(
        "bg-[var(--background-color)] rounded-full px-3 py-1 flex flex-row items-center justify-start w-fit gap-2",
      )}
      style={
        {
          "--color": style.color,
          "--background-color": style.backgroundColor,
        } as CSSProperties
      }
    >
      {style.icon}
      <div className={clsx("text-[var(--color)]")}>{text}</div>
    </div>
  );
};
