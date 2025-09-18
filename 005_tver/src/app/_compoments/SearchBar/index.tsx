"use client";
import clsx from "clsx";
import { ComponentProps, useRef, useState } from "react";
import { IconSearch, IconX } from "../Icons";

export const SearchBar = (
  props: { inputProps?: ComponentProps<"input"> } & ComponentProps<"div">,
) => {
  const { className, inputProps, ...rest } = props;

  const [value, setValue] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className={clsx(
        "flex flex-row items-center justify-between gap-2",
        "bg-gray-100 hover:bg-white rounded-md border border-gray-200",
        "p-2",
        className,
      )}
      {...rest}
    >
      <IconSearch className={clsx("w-[18px] h-[18px] text-gray-400")} />
      <input
        type="text"
        ref={inputRef}
        className={clsx("flex-1 border-none outline-none")}
        placeholder="番組名、出演者を検索"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...inputProps}
      />
      {value && (
        <button
          className={clsx(
            "w-[16px] h-[16px] bg-gray-400 rounded-full",
            "flex justify-center items-center",
            "cursor-pointer",
          )}
          onClick={() => {
            setValue("");
            inputRef.current?.focus();
          }}
        >
          <IconX size={10} color="var(--color-white)" />
        </button>
      )}
    </div>
  );
};
