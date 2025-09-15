import clsx from "clsx";
import { IconBell, IconSearch, IconSun } from "../Icon";
import { PrimaryButton } from "../Button";
import { AvatarIcon } from "../AvatarIcon";
import { Logo } from "../Logo";

export const Header = () => {
  return (
    <header className={clsx("bg-base h-[60px] w-full flex-col content-center")}>
      <div className={clsx("mx-auto max-w-[1200px] px-[40px]")}>
        <div className={clsx("flex flex-row items-center justify-between")}>
          <Logo />
          <div
            className={clsx("flex flex-row items-center justify-center gap-6")}
          >
            <div
              className={clsx("flex flex-row items-center justify-start gap-3")}
            >
              <IconSun
                className={clsx(
                  "text-gray-400 hover:text-gray-700 cursor-pointer",
                )}
              />
              <IconSearch
                className={clsx(
                  "text-gray-400 hover:text-gray-700 cursor-pointer",
                )}
              />
              <IconBell
                className={clsx(
                  "text-gray-400 hover:text-gray-700 cursor-pointer",
                )}
              />
            </div>
            <AvatarIcon size={40} className={clsx("cursor-pointer")} />
            <PrimaryButton text="投稿する" />
          </div>
        </div>
      </div>
    </header>
  );
};
