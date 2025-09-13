import clsx from "clsx";
import { IconClose } from "../Icon";
import Image from "next/image";

type News = {
  title: string;
  description: string;
  imageUrl: string;
};

export const TodaysNews = () => {
  const news: News[] = [
    {
      title: "title1",
      description: "description".repeat(10),
      imageUrl: "/avatar_image.png",
    },
    {
      title: "title2",
      description: "description".repeat(10),
      imageUrl: "/avatar_image.png",
    },
    {
      title: "title3",
      description: "description".repeat(10),
      imageUrl: "/avatar_image.png",
    },
  ];
  return (
    <div className={clsx("p-4 border border-gray-700 rounded-xl min-w-0")}>
      <div className={clsx("flex flex-row items-center justify-between")}>
        <div className={clsx("text-xl font-bold")}>本日のニュース</div>
        <IconClose />
      </div>
      <div className={clsx("mt-4", "flex flex-col gap-3")}>
        {news.map((n) => (
          <div
            key={n.title}
            className={clsx(
              "flex flex-row items-start justify-start w-full gap-3",
            )}
          >
            <div
              className={clsx(
                "relative w-[50px] h-[50px] rounded-xl overflow-hidden",
              )}
            >
              <Image
                className={clsx("object-center object-cover")}
                src={n.imageUrl}
                fill
                alt={n.title}
              />
            </div>
            <div className={clsx("break-words min-w-0 flex-1")}>
              <div className={clsx("text-md font-bold")}>{n.title}</div>
              <div>{n.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
