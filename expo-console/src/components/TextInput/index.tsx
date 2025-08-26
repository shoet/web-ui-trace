"use client";
import { IconEye, IconEyeOff } from "@/components/Icon";
import clsx from "clsx";
import { ComponentProps, useCallback, useState } from "react";

type Props = {} & ComponentProps<"input">;

export const TextInput = (props: Props) => {
  const { ...rest } = props;
  const isPassword = rest.type === "password";

  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const openPassword = useCallback(() => {
    return rest.type === "password" && showPassword;
  }, [rest.type, showPassword]);

  return (
    <div
      className={clsx(
        "p-2 flex flex-row items-center justify-between w-full",
        "border border-border rounded-md ",
        isFocus && "outline-solid outline-3 outline-blue-300",
      )}
    >
      <input
        {...rest}
        type={openPassword() ? "text" : "password"}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        className={clsx("outline-none w-full")}
      />
      {isPassword && (
        <button
          className={clsx(
            "p-2 rounded-md hover:bg-gray-800 outline-none border-none",
          )}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <IconEyeOff size={20} color={"var(--color-gray-500)"} />
          ) : (
            <IconEye size={20} color={"var(--color-gray-500)"} />
          )}
        </button>
      )}
    </div>
  );
};
