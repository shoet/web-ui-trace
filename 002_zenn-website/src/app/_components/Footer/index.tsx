import clsx from "clsx";
import { Logo } from "../Logo";

export const Footer = () => {
  return (
    <footer className={clsx("bg-base pt-[48px]")}>
      <div className={clsx("mx-auto max-w-[1200px] flex flex-col px-[40px]")}>
        <div className={clsx("flex flex-row justify-start gap-4")}>
          <div className={clsx("flex flex-col items-start w-[220px]")}>
            <Logo />
            <div className={clsx("text-gray-600 text-sm mt-2")}>
              エンジニアのための
              <br />
              情報共有コミュニティ
            </div>
          </div>
          <div className={clsx("grid grid-cols-2 sm:grid-cols-4 flex-1")}>
            <div className={clsx("flex flex-col justify-start")}>
              <div className={clsx("font-bold")}>About</div>
              <a>Zennについて</a>
              <a>運営会社</a>
              <a>お知らせ・リリース</a>
              <a>イベント</a>
            </div>
            <div className={clsx("flex flex-col justify-start")}>
              <div className={clsx("font-bold")}>About</div>
              <a>Zennについて</a>
              <a>運営会社</a>
              <a>お知らせ・リリース</a>
              <a>イベント</a>
            </div>
            <div className={clsx("flex flex-col justify-start")}>
              <div className={clsx("font-bold")}>About</div>
              <a>Zennについて</a>
              <a>運営会社</a>
              <a>お知らせ・リリース</a>
              <a>イベント</a>
            </div>
            <div className={clsx("flex flex-col justify-start")}>
              <div className={clsx("font-bold")}>About</div>
              <a>Zennについて</a>
              <a>運営会社</a>
              <a>お知らせ・リリース</a>
              <a>イベント</a>
            </div>
          </div>
        </div>
        <div
          className={clsx(
            "mt-[2.2rem] pt-[1.5rem] px-0 pb-[1.5rem]",
            "flex flex-row items-center justify-center border-t border-t-gray-300",
          )}
        >
          logo
        </div>
      </div>
    </footer>
  );
};
