import clsx from "clsx";
import { useState } from "react";

export const ToggleSwitch = (props: {
  initialValue: boolean;
  onChangeToggle?: (value: boolean) => void;
}) => {
  const [value, setValue] = useState(props.initialValue);

  return (
    <button
      className={clsx(
        value ? "bg-blue-400" : "bg-gray-200",
        "relative rounded-full w-[50px] h-[30px]",
        "transition-colors delay-150 duration-100 ease-in-out",
        "cursor-pointer",
        "inset-shadow-xs inset-shadow-gray-200",
      )}
      onClick={() => {
        const newValue = !value;
        setValue(newValue);
        props.onChangeToggle?.(newValue);
      }}
    >
      <div
        className={clsx(
          "absolute top-0 left-0 h-[30px] w-[30px] p-1",
          "transition-transform delay-150 duration-100 ease-in-out",
          value ? "translate-x-[20px]" : "translate-x-0",
        )}
      >
        <div
          className={clsx("w-full h-full rounded-full bg-white shadow-sm")}
        />
      </div>
    </button>
  );
};
