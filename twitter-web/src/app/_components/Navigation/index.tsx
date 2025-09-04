import clsx from "clsx";
import { ReactNode } from "react";
import {
  IconBell,
  IconBookmark,
  IconGrok,
  IconHome,
  IconMail,
  IconMore,
  IconSearch,
  IconThunder,
  IconUser,
  IconUsers,
  IconX,
} from "../Icon";
import Link from "next/link";

export const Navigation = () => {
  return (
    <nav className={clsx("flex flex-col w-full gap-3")}>
      <NavigationItem icon={<IconHome />} text="ホーム" />
      <NavigationItem icon={<IconSearch />} text="話題を検索" />
      <NavigationItem icon={<IconBell />} text="通知" />
      <NavigationItem icon={<IconMail />} text="メッセージ" />
      <NavigationItem icon={<IconGrok />} text="Grok" />
      <NavigationItem icon={<IconBookmark />} text="ブックマーク" />
      <NavigationItem icon={<IconUsers />} text="コミュニティ" />
      <NavigationItem icon={<IconX />} text="プレミアム" />
      <NavigationItem icon={<IconThunder />} text="認証済み組織" />
      <NavigationItem icon={<IconUser />} text="プロフィール" />
      <NavigationItem icon={<IconMore />} text="もっと見る" />
    </nav>
  );
};

type NavigationItemProps = {
  icon: ReactNode;
  text: string;
};
const NavigationItem = (props: NavigationItemProps) => {
  const { icon, text } = props;
  return (
    <Link
      href={""}
      className={clsx(
        "flex flex-row items-center justify-start gap-6 p-2",
        "hover:bg-foreground/5 cursor-pointer bg-background rounded-full",
      )}
    >
      {icon}
      <div className={clsx("text-xl font-bold")}>{text}</div>
    </Link>
  );
};
