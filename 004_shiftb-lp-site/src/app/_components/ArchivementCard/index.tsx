import Image from "next/image";
import { CSSProperties } from "react";
import { ArrowBigDown, CirclePlus, Bookmark } from "lucide-react";
import clsx from "clsx";

const AvatarImage = (props: { size: number; src: string }) => {
  return (
    <div
      style={
        {
          "--size": `${props.size}px`,
        } as CSSProperties
      }
      className={clsx(
        "relative w-[var(--size)] h-[var(--size)] rounded-full overflow-hidden",
      )}
    >
      <Image
        src={props.src}
        alt="avatar"
        fill
        className={clsx("object-cover object-center")}
      />
    </div>
  );
};

export const ArchivementCard = () => {
  return (
    <div
      className={clsx(
        "border-5 border-blue-500 rounded-md",
        "p-6 flex flex-col items-center gap-8",
        "relative z-1",
      )}
    >
      <Bookmark
        fill="var(--color-blue-500)"
        strokeWidth={0}
        size={80}
        className={clsx("absolute top-[-30px] left-[-10px] z-2")}
      />
      <div className={clsx("flex flex-row items-center justify-center gap-8")}>
        <div className={clsx("flex flex-col items-center gap-4")}>
          <AvatarImage src="/avatar_image.png" size={100} />
          <div className={clsx("flex flex-col items-center")}>
            <div className={clsx("text-xl font-bold")}>XXXさん</div>
            <div className={clsx("mt-2")}>(会社員・男性)</div>
          </div>
        </div>
        <div className={clsx("flex flex-col items-center gap-4")}>
          <div>
            プログラミング学習は独学のみ。実務経験なしで就職できるか心配。。
          </div>
          <ArrowBigDown
            size={50}
            fill="var(--color-blue-500)"
            strokeWidth={0}
          />
          <div
            className={clsx(
              "font-bold text-base",
              "underline decoration-solid decoration-[9px] decoration-yellow-500 underline-offset-[-3px] [text-decoration-skip-ink:none]",
            )}
          >
            未経験から6ヶ月でNext.js習得！念願のスタートアップに転職成功し、年収も200万円アップ！
          </div>
        </div>
      </div>
      <button className={clsx("inline-flex items-center gap-2")}>
        <span className={clsx("text-xl font-bold text-blue-500")}>
          もっと詳しく
        </span>
        <CirclePlus
          className={clsx("inline")}
          size={30}
          color={"var(--color-blue-500)"}
        />
      </button>
    </div>
  );
};
