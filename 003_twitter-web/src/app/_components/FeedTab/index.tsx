import { FeedType } from "@/types";
import clsx from "clsx";
import { ComponentProps, useEffect, useState } from "react";

const TabButton = (
  props: { text: string; isSelected: boolean } & ComponentProps<"button">,
) => {
  const { text, isSelected, className, ...rest } = props;
  return (
    <button
      className={clsx("flex flex-row items-center justify-center")}
      {...rest}
    >
      <div
        className={clsx(
          "h-full flex flex-row items-center justify-center",
          "text-md",
          isSelected ? "font-bold" : "text-gray-500",
          "relative",
        )}
      >
        {text}
        {isSelected && (
          <div
            className={clsx(
              'absolute bottom-0 left-0 w-full after:content-[""] bg-sky-500 h-1 rounded-full',
            )}
          ></div>
        )}
      </div>
    </button>
  );
};

export const FeedTab = (props: {
  feedType: FeedType;
  onChangeTab?: (feedType: FeedType) => void;
}) => {
  const { onChangeTab, feedType } = props;
  const [currentTab, setCurrentTab] = useState<FeedType>(feedType);

  useEffect(() => {
    onChangeTab?.(currentTab);
  }, [currentTab, onChangeTab]);

  return (
    <div className={clsx("grid grid-cols-2 h-[50px] justify-center")}>
      <TabButton
        onClick={() => setCurrentTab("recoomend")}
        isSelected={currentTab === "recoomend"}
        text="おすすめ"
      />
      <TabButton
        onClick={() => setCurrentTab("followed")}
        isSelected={currentTab === "followed"}
        text="フォロー中"
      />
    </div>
  );
};
