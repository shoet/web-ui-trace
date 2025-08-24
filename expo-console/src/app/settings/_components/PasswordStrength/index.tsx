import clsx from "clsx";
import { CSSProperties } from "react";

export type PasswordStrength = "ok" | "warn" | "alert" | "none";

const StrengthColors: Record<PasswordStrength, string> = {
  ok: "--color-green-500",
  warn: "--color-yellow-500",
  alert: "--color-red-500",
  none: "--color-gray-700",
};

type Level = "level1" | "level2" | "level3";
type LevelStyle = Record<PasswordStrength, Record<Level, string>>;

export const PasswordStrength = (props: {
  passwordStrength: PasswordStrength;
}) => {
  const { passwordStrength = "none" } = props;
  const levelStyle: LevelStyle = {
    none: {
      level1: StrengthColors["none"],
      level2: StrengthColors["none"],
      level3: StrengthColors["none"],
    },
    alert: {
      level1: StrengthColors["alert"],
      level2: StrengthColors["none"],
      level3: StrengthColors["none"],
    },
    warn: {
      level1: StrengthColors["warn"],
      level2: StrengthColors["warn"],
      level3: StrengthColors["none"],
    },
    ok: {
      level1: StrengthColors["ok"],
      level2: StrengthColors["ok"],
      level3: StrengthColors["ok"],
    },
  };

  return (
    <div
      style={
        {
          "--bg-level-1": `var(${levelStyle[passwordStrength].level1})`,
          "--bg-level-2": `var(${levelStyle[passwordStrength].level2})`,
          "--bg-level-3": `var(${levelStyle[passwordStrength].level3})`,
        } as CSSProperties
      }
      className={clsx("inline-flex items-center gap-3")}
    >
      <div className={clsx("text-text-description")}>Password strength</div>
      <div className={clsx("inline-flex items-center gap-0.5 h-2")}>
        <div
          className={clsx("w-7 h-full bg-[var(--bg-level-1)] rounded-l-full")}
        >
          {" "}
        </div>
        <div className={clsx("w-7 h-full bg-[var(--bg-level-2)]")}> </div>
        <div
          className={clsx("w-7 h-full bg-[var(--bg-level-3)] rounded-r-full")}
        >
          {" "}
        </div>
      </div>
    </div>
  );
};
