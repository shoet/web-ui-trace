import clsx from "clsx";
import { Avatar } from "../Avatar";
import {
  IconCalendar,
  IconEarth,
  IconGrok,
  IconImage,
  IconSmile,
  IconTodo,
} from "../Icon";
import { PrimaryButton } from "../Button";
import { useState } from "react";

export const PostForm = () => {
  const [tweet, setTweet] = useState<string>();
  return (
    <div
      className={clsx("flex flex-row items-start justify-between gap-2 p-4")}
    >
      <Avatar imageSrc="/avatar_image.png" size={50} />
      <div className={clsx("flex flex-col gap-2 flex-1")}>
        <textarea
          value={tweet}
          onChange={(e) => setTweet(e.target.value)}
          placeholder="いまどうしてる？"
          className={clsx(
            "field-sizing-content py-2 resize-none outline-none text-xl",
            "placeholder:text-gray-700",
          )}
        />
        <div
          className={clsx("text-blue-500 font-bold flex flex-row items-center")}
        >
          <IconEarth size={16} />
          <div className="ml-1">全員が返信できます</div>
        </div>
        <div
          className={clsx(
            "border-t border-t-gray-700 mt-2 pt-3",
            "flex flex-row items-center justify-between text-blue-500",
          )}
        >
          <div className={clsx("flex flex-start items-center gap-3")}>
            <IconImage />
            <IconGrok />
            <IconTodo />
            <IconTodo />
            <IconSmile />
            <IconCalendar />
          </div>
          <PrimaryButton
            disabled={!tweet}
            text="ポストする"
            className="px-6 py-2.5 disabled:brightness-50"
          />
        </div>
      </div>
    </div>
  );
};
