"use client";
import clsx from "clsx";
import { IconDot, IconMenuVertical } from "../Icons";
import { PopupMenu } from "../PopupMenu";
import { useState } from "react";

export const PopupMenuButton = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <button
      className={clsx(
        "relative z-[1]",
        "w-[30px] h-[30px]",
        "flex justify-center items-center",
        "rounded-md hover:bg-gray-200 cursor-pointer",
      )}
      onMouseOver={() => setShowPopup(true)}
      onMouseOut={() => setShowPopup(false)}
    >
      <IconDot
        className={clsx(
          "absolute top-0 right-0",
          "translate-x-[4px] translate-y-[-4px]",
        )}
        size={25}
        strokeWidth={4}
        color={"var(--color-red-500)"}
      />
      <IconMenuVertical size={20} />
      {showPopup && (
        <div
          className={clsx("absolute bottom-0 right-0 translate-y-[100%]")}
          dir="rtl" // 右側始まりに置きたいので反転
        >
          <PopupMenu
            className={clsx(
              "w-auto shadow-md rounded-md whitespace-nowrap bg-white", // absoluteに置くとw-fullが効かないのでw-auto
            )}
            dir="ltr" // 中身は通常通りにしたいのでまた反転
          />
        </div>
      )}
    </button>
  );
};
