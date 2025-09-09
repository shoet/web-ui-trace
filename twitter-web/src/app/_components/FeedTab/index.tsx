import { FeedType } from "@/types";
import clsx from "clsx";
import { useEffect, useState } from "react";

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
    <div className={clsx("grid grid-cols-2")}>
      <button onClick={() => setCurrentTab("recoomend")}>
        <span
          className={clsx(
            "text-xl font-bold",
            currentTab === "recoomend" && "border-b-3 border-b-blue-300",
          )}
        >
          おすすめ
        </span>
      </button>
      <button onClick={() => setCurrentTab("followed")}>
        <span
          className={clsx(
            "text-xl font-bold",
            currentTab === "followed" && "border-b-3 border-b-blue-300",
          )}
        >
          フォロー中
        </span>
      </button>
    </div>
  );
};
