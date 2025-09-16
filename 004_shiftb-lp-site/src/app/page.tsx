import clsx from "clsx";
import {
  Carousel,
  CarouselContinues,
  CarouselWithCenterZoom,
} from "./_components/Carousel";
import { ClientScrollFramerMotion } from "./_components/ClientMotionScroller";
import { PriceTable } from "./_components/PriceTable";
import { FreeApplyButton, FreeApplyText } from "./_components/FreeApplyButton";
import { Header } from "./_components/Header";
import { IntroductionCarousel } from "./_components/IntroductionCarousel";

export default function Home() {
  return (
    <div className={clsx("bg-[url(/background/corporate_1.jpg)] bg-no-repeat")}>
      <Header className={clsx("h-[100px] top-0 left-0 sticky z-[9999]")} />
      <div>
        <div
          className={clsx(
            "w-full p-4 flex justify-center max-w-[1440px] mx-auto",
          )}
        >
          <div className={clsx("flex-1 px-[100px]", "grid grid-cols-2 gap-4")}>
            <div>
              <div className={clsx("mx-auto  pl-6")}>
                {/*スタッキングコンテキストを作る*/}
                <div className={clsx("relative z-[1]")}>
                  <div className={clsx("text-xl font-bold")}>
                    React, Next.js 特化型Webエンジニア養成スクール
                  </div>
                  <div
                    style={{
                      clipPath: "polygon(0 0, 100% 0, 98% 100%, 0 100%)",
                    }}
                    className={clsx(
                      "absolute top-[20px] right-0 z-[-1] -translate-y-1/3 bg-yellow-300 h-[30px] w-[100vw] pl-[50vw]",
                    )}
                  ></div>
                </div>
              </div>
              <div
                className={clsx(
                  "mt-[100px]",
                  "flex flex-col items-start gap-2",
                  "break-words min-w-0",
                )}
              >
                <span className={clsx("text-3xl font-bold")}>
                  <span className={clsx("text-5xl text-blue-500 font-bold")}>
                    完全個別指導
                  </span>
                  体制
                </span>
                <br />
                <span className={clsx("text-3xl font-bold")}>
                  <span className={clsx("text-5xl text-blue-500 font-bold")}>
                    モダンなスキルが身につく
                  </span>
                </span>
                <br />
                <span className={clsx("text-3xl font-bold")}>
                  着実にスキルを身に着けよう
                </span>
              </div>
            </div>
            <div className={clsx("flex flex-col items-center gap-4")}>
              <h1 className={clsx("text-2xl font-bold")}>
                こんなアプリが作れるようになる！
              </h1>
              <IntroductionCarousel />
            </div>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "py-4",
          "bg-white flex flex-col justify-center items-center w-full gap-4",
        )}
      >
        <FreeApplyText />
        <button className={clsx("hover:scale-105 transition-all")}>
          <FreeApplyButton />
        </button>
      </div>
      <div className={clsx("bg-white")}>
        <PriceTable className={clsx("max-w-[1000px] mx-auto")} />
      </div>
      <ClientScrollFramerMotion>
        <div className={clsx("h-[300px] w-full bg-blue-400")}>hoge</div>
      </ClientScrollFramerMotion>
      <ClientScrollFramerMotion>
        <div className={clsx("h-[300px] w-full bg-green-300")}>hoge</div>
      </ClientScrollFramerMotion>
      <ClientScrollFramerMotion>
        <div className={clsx("h-[300px] w-full bg-purple-300")}>hoge</div>
      </ClientScrollFramerMotion>
      <div className="bg-linear-to-r/srgb from-indigo-500 to-teal-400 h-[500px]">
        <div
          className={clsx("grid grid-cols-2 gap-4", "max-w-[1200px] flex-1")}
        >
          <div className={clsx("w-full bg-white p-4 rounded-xl shadow-md")}>
            モダンな技術を使った
            <br />
            オリジナルアプリ開発で
            <br />
            本当の実践力を身に着けよう
            <br />
          </div>
          <div className={clsx("w-full bg-white p-4 rounded-xl shadow-md")}>
            カルーセル
          </div>
        </div>
      </div>
    </div>
  );
}
