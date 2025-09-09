import clsx from "clsx";
import { Avatar } from "../Avatar";
import { IconEllipsis, IconHeart, IconUpload } from "../Icon";
import { ComponentProps, ReactNode } from "react";
import Image from "next/image";

type Props = {
  tweetId: string;
};

type Tweet = {
  username: string;
  userId: string;
  repostByUserId?: string;
  images?: string[];
};

async function getTweet(tweetId: string): Promise<Tweet> {
  return {
    username: "username",
    userId: "userid",
    images: [],
  };
}

export const TweetCardContainer = async (
  props: Props & ComponentProps<"div">,
) => {
  const { tweetId, className, ...rest } = props;

  await new Promise((res) => setTimeout(res, 1000));
  const tweet = await getTweet(tweetId);

  return <TweetCard className={clsx(className)} tweet={tweet} {...rest} />;
};

export const LoadingTweetCard = () => {
  return (
    <div
      className={clsx("h-[200px] flex flex-row items-center justify-center")}
    >
      Loading tweet ...
    </div>
  );
};

export const TweetCard = (props: { tweet: Tweet } & ComponentProps<"div">) => {
  const { tweet, className, ...rest } = props;
  const { userId, username, images } = tweet;
  return (
    <div
      className={clsx(
        "flex flex-row items-start justify-between p-4 gap-2",
        className,
      )}
      {...rest}
    >
      <Avatar imageSrc="/avatar_image.png" size={40} />
      <div className={clsx("flex-1 min-w-0")}>
        <div className={clsx("flex flex-row items-center justify-between")}>
          <div
            className={clsx("flex flex-row items-center justify-start gap-2")}
          >
            <div className={clsx("text-xl font-bold")}>{username}</div>
            <div className={clsx("text-sm text-gray-600 font-bold")}>
              @{userId}
            </div>
            <div className={clsx("text-gray-600 text-sm")}>10時間</div>
          </div>
          <IconEllipsis size={20} className={clsx("text-gray-600")} />
        </div>
        {images && images.length > 0 && (
          <div
            className={clsx(
              "mt-4",
              "rounded-xl grid grid-cols-2 overflow-hidden gap-0.5",
            )}
          >
            {images.map((i, idx) => (
              <div
                className={clsx(
                  "relative h-full overflow-hidden min-h-[200px]",
                  idx + 1 === images.length && (idx + 1) % 2 && "col-span-2",
                )}
              >
                <Image
                  src={i}
                  alt={`image-${idx}`}
                  fill
                  className={clsx("object-cover object-center")}
                />
              </div>
            ))}
          </div>
        )}
        <div className={clsx("break-words")}>
          tweettweettweettweettweettweettweettweettweettweettweettweettweettweettweettweettweettweettweettweettweettweettweettweettweettweettweettweettweettweettweettweettweettweettweettweet
        </div>
        <div
          className={clsx(
            "py-2",
            "flex flex-row items-center justify-between text-gray-500",
          )}
        >
          <IconWithCountButton
            icon={<IconHeart size={12} />}
            count={10}
            className={clsx("hover:text-blue-300")}
          />
          <IconWithCountButton
            icon={<IconHeart size={12} />}
            count={10}
            className={clsx("hover:text-green-600")}
          />
          <IconWithCountButton
            icon={<IconHeart size={12} />}
            count={10}
            className={clsx("hover:text-pink-500")}
          />
          <IconWithCountButton
            icon={<IconHeart size={12} />}
            count={10}
            className={clsx("hover:text-blue-300")}
          />
          <div
            className={clsx("flex flex-row items-center justify-center gap-2")}
          >
            <IconHeart size={14} className={clsx("hover:text-blue-300")} />
            <IconUpload size={14} className={clsx("hover:text-blue-300")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const IconWithCountButton = (
  props: {
    icon: ReactNode;
    count: number;
  } & ComponentProps<"button">,
) => {
  const { icon, count, className, ...rest } = props;
  return (
    <button
      className={clsx(
        "flex flex-row items-center justify-center cursor-pointer hover:text-blue-500",
        className,
      )}
      {...rest}
    >
      {icon}
      <div>{count}</div>
    </button>
  );
};
