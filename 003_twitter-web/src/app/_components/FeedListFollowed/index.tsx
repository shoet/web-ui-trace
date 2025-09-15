import { Suspense } from "react";
import { LoadingTweetCard, TweetCardContainer } from "../TweetCard";
import clsx from "clsx";
import { FeedType } from "@/types";

type Tweet = {
  postId: string;
};

const getTimeline = async (
  userId: string,
  type: "recoomend" | "followed",
): Promise<Tweet[]> => {
  return [
    { postId: `post1 ${type}` },
    { postId: `post2 ${type}` },
    { postId: `post3 ${type}` },
    { postId: `post4 ${type}` },
    { postId: `post5 ${type}` },
  ];
};

export const FeedList = async (props: {
  userId: string;
  feedType: FeedType;
}) => {
  const { userId, feedType } = props;
  const tweets = await getTimeline(userId, feedType);

  return tweets.map((t, idx) => (
    <Suspense key={t.postId} fallback={<LoadingTweetCard />}>
      <TweetCardContainer
        className={clsx(
          idx !== tweets.length - 1 && "border-b border-b-gray-700",
        )}
        tweetId={t.postId}
      />
    </Suspense>
  ));
};
