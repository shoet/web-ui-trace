import clsx from "clsx";
import Link from "next/link";
import { ComponentProps, PropsWithChildren, ReactNode, useState } from "react";
import { IconArrowRight } from "../Icons";
import { ToggleSwitch } from "../ToggleSwitch";

const itemStyle =
  "px-4 py-2 w-full font-bold text-sm hover:bg-gray-100 flex flex-row items-center justify-start";

const MenuLink = (props: { href: string } & PropsWithChildren) => {
  return (
    <Link className={clsx(itemStyle)} href={props.href}>
      {props.children}
    </Link>
  );
};

const Section = (props: ComponentProps<"div">) => {
  return (
    <div
      className={clsx(
        "w-full flex flex-col justify-start items-start",
        props.className,
      )}
    >
      {props.children}
    </div>
  );
};

export const PopupMenu = (props: ComponentProps<"div">) => {
  const { className, ...rest } = props;

  const [showDisplayMode, setShowDisplayMode] = useState(false);
  const [showAutoPlayMode, setShowAutoPlayMode] = useState(false);

  return (
    <div
      className={clsx(
        "flex flex-col items-start",
        "py-2 rounded-md",
        "divide-y divide-gray-300",
        className,
      )}
      {...rest}
    >
      <Section className={clsx("pb-2")}>
        <MenuLink href="/">お知らせ</MenuLink>
        <MenuLink href="/">よくある質問</MenuLink>
      </Section>
      <Section className={clsx("py-2")}>
        <div
          className={clsx(
            "relative w-full",
            "flex flex-row items-center justify-start",
            itemStyle,
          )}
          onMouseOver={() => setShowDisplayMode(true)}
          onMouseOut={() => setShowDisplayMode(false)}
        >
          <span>ダークモード設定</span>
          <IconArrowRight />
          <div
            className={clsx(
              !showDisplayMode && "hidden",
              "absolute top-0 left-0 translate-x-[-100%] bg-white",
              "py-2 rounded-md overflow-hidden shadow-md",
            )}
          >
            <div className={clsx(itemStyle)}>ライトモード</div>
            <div className={clsx(itemStyle)}>ダークモード</div>
            <div className={clsx(itemStyle)}>デバイスの設定に合わせる</div>
          </div>
        </div>
        <div
          className={clsx(
            "relative w-full",
            "flex flex-row items-center justify-start",
            itemStyle,
          )}
          onMouseOver={() => setShowAutoPlayMode(true)}
          onMouseOut={() => setShowAutoPlayMode(false)}
        >
          <span>自動再生設定</span>
          <IconArrowRight />
          <div
            className={clsx(
              !showAutoPlayMode && "hidden",
              "absolute top-0 left-0 translate-x-[-100%] bg-white",
              "py-2 rounded-md overflow-hidden shadow-md",
            )}
          >
            <div
              className={clsx(
                "flex flex-col justify-start [&>div]:px-4 [&>div]:py-2 font-bold text-sm",
              )}
            >
              <div className={clsx("w-full")}>自動再生設定</div>
              <div className={clsx("flex flex-row justify-start")}>
                <ToggleSwitch initialValue={false} />
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section className={clsx("pt-2")}>
        <MenuLink href="/">TVerアプリ</MenuLink>
        <MenuLink href="/">テレビアプリ</MenuLink>
        <MenuLink href="/">利用規約</MenuLink>
        <MenuLink href="/">プライバリー管理</MenuLink>
        <MenuLink href="/">プライバシーポリシー</MenuLink>
        <MenuLink href="/">プライバシーガイド</MenuLink>
        <MenuLink href="/">利用者情報の外部送信</MenuLink>
      </Section>
    </div>
  );
};
