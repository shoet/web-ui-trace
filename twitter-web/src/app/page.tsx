import { LoadingTweetCard, TweetCardContainer } from "./_components/TweetCard";
import { PostForm } from "./_components/PostForm";
import clsx from "clsx";
import { Suspense } from "react";

type Tweet = {
  postId: string;
};

const getTimeline = async (userId: string): Promise<Tweet[]> => {
  return [
    { postId: "post1" },
    { postId: "post2" },
    { postId: "post3" },
    { postId: "post4" },
    { postId: "post5" },
  ];
};

export default async function Home() {
  const tweets = await getTimeline("shoet");
  return (
    <div
      className={clsx(
        "border-x border-x-gray-700 h-dvh overflow-auto scrollbar-hidden",
      )}
    >
      <PostForm />
      <div className={clsx("min-w-0 border-t border-t-gray-700")}>
        {tweets.map((t, idx) => (
          <Suspense key={t.postId} fallback={<LoadingTweetCard />}>
            <TweetCardContainer
              className={clsx(
                idx !== tweets.length - 1 && "border-b border-b-gray-700",
              )}
              tweetId={t.postId}
            />
          </Suspense>
        ))}
      </div>
    </div>
  );
}
