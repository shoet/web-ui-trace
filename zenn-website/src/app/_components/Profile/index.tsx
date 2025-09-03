import clsx from "clsx";
import { AvatarIcon } from "../AvatarIcon";
import { IconBell } from "../Icon";
import { PrimaryButton } from "../Button";

export const Profile = () => {
  return (
    <div className={clsx("flex flex-col items-start gap-4 bg-base p-6")}>
      <div className={clsx("flex flex-row items-center justify-start gap-4")}>
        <AvatarIcon size={60} />
        <div>
          <div className={clsx("font-bold text-xl")}>shoet</div>
          <div
            className={clsx(
              "flex flex-row items-center justify-start gap-2 mt-2",
            )}
          >
            <div
              className={clsx(
                "px-4 py-1 rounded-full border border-gray-200",
                "font-bold text-sm",
              )}
            >
              フォロー
            </div>
            <IconBell size={20} className={clsx("text-gray-500")} />
            <IconBell size={20} className={clsx("text-gray-500")} />
          </div>
        </div>
      </div>
      <div className={clsx("text-sm")}>エンジニアです。</div>
      <div className={clsx("flex flex-col items-center gap-3 w-full")}>
        <PrimaryButton
          text="バッジを送る"
          className={clsx("w-full !p-3 text-md font-bold")}
        />
        <div className={clsx("text-gray-500 text-sm")}>バッジを送るとは →</div>
      </div>
    </div>
  );
};
