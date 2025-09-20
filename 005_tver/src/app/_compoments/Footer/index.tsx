import clsx from "clsx";
import Link from "next/link";
import { IconInstagram, IconTwitter } from "../Icons";

export const Footer = () => {
  return (
    <footer className={clsx("p-8 bg-footer text-white")}>
      <div
        className={clsx(
          "flex flex-row items-stretch justify-center", // divide-xの高さを大きい方に合わせるためにstretchにする
          "divide-x divide-gray-400 *:not-first:pl-8 *:not-last:pr-8",
        )}
      >
        <div
          className={clsx("flex flex-row items-center justify-center gap-4")}
        >
          <IconTwitter size={40} />
          <IconInstagram size={40} />
        </div>
        <div className={clsx("flex flex-col gap-2")}>
          <div
            className={clsx("flex flex-row items-center justify-start gap-4")}
          >
            <Link href="/" className={clsx("text-sm font-bold text-white")}>
              よくある質問
            </Link>
            <Link href="/" className={clsx("text-sm font-bold text-white")}>
              TVerアプリ
            </Link>
            <Link href="/" className={clsx("text-sm font-bold text-white")}>
              テレビアプ
            </Link>
            <Link href="/" className={clsx("text-sm font-bold text-white")}>
              TVerリンク
            </Link>
          </div>
          <div
            className={clsx("flex flex-row items-center justify-start gap-4")}
          >
            <Link href="/" className={clsx("text-sm font-bold text-white")}>
              アンケート
            </Link>
            <Link href="/" className={clsx("text-sm font-bold text-white")}>
              ユーザー設定
            </Link>
            <Link href="/" className={clsx("text-sm font-bold text-white")}>
              利用規約
            </Link>
          </div>
          <div
            className={clsx("flex flex-row items-center justify-start gap-4")}
          >
            <Link href="/" className={clsx("text-sm font-bold text-white")}>
              プライバシーポリシー
            </Link>
            <Link href="/" className={clsx("text-sm font-bold text-white")}>
              プライバシーガイド
            </Link>
          </div>
          <div
            className={clsx("flex flex-row items-center justify-start gap-4")}
          >
            <Link href="/" className={clsx("text-sm font-bold text-white")}>
              利用者情報の外部送信
            </Link>
            <Link href="/" className={clsx("text-sm font-bold text-white")}>
              運営会社
            </Link>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "mt-4",
          "flex flex-row items-center justify-center text-sm text-gray-300",
        )}
      >
        TVer
      </div>
    </footer>
  );
};
