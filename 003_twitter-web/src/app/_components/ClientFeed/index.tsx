"use client";

import clsx from "clsx";
import { FeedTab } from "../FeedTab";
import { PostForm } from "../PostForm";
import { ReactNode, useState } from "react";
import { FeedType } from "@/types";

type FeedItem = {
  type: FeedType;
  component: ReactNode;
};
type Props = {
  feedRecoomend: FeedItem & { type: "recoomend" };
  feedFollowed: FeedItem & { type: "followed" };
};

export const ClientFeed = (props: Props) => {
  const { feedRecoomend, feedFollowed } = props;
  const [currentFeedType, setCurrentFeedType] = useState<FeedType>("recoomend");

  return (
    <div className={clsx("h-dvh")}>
      <FeedTab
        feedType={currentFeedType}
        onChangeTab={(feedType) => setCurrentFeedType(feedType)}
      />
      <div className={clsx("overflow-auto scrollbar-hidden")}>
        <PostForm />
        <div className={clsx("min-w-0 border-t border-t-gray-700")}>
          {currentFeedType === "recoomend"
            ? feedRecoomend.component
            : feedFollowed.component}
        </div>
      </div>
    </div>
  );
};
