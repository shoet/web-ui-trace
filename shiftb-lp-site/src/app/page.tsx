import clsx from "clsx";
import { Carousel } from "./_components/Carousel";

export default function Home() {
  return (
    <div>
      <div className={clsx("bg-[url(/background/corporate_1.jpg)]")}>
        <div className={clsx("h-dvh w-full p-4 flex justify-center")}>
          <div className={clsx("flex-1", "grid grid-cols-2 gap-4")}>
            <div>
              <div className={clsx("relative h-[50px]")}>
                <div
                  className={clsx(
                    "absolute top-0 -left-[100px] translate-y-[10px] z-0",
                    'before:content-[""] h-[30px] w-full bg-yellow-300',
                  )}
                ></div>
                <div className={clsx("absolute top-0 text-xl font-bold")}>
                  Webエンジニア特化型スクール
                </div>
              </div>
              <div className={clsx("mt-4")}>
                <span className={clsx("text-3xl font-bold")}>
                  <span className={clsx("text-3xl text-blue-500 font-bold")}>
                    完全個別指導
                  </span>
                  体制
                </span>
                <br />
                <span className={clsx("text-3xl font-bold")}>
                  <span className={clsx("text-3xl text-blue-500 font-bold")}>
                    モダンなスキルが身につく
                  </span>
                </span>
                <br />
                <span className={clsx("text-3xl font-bold")}>
                  着実にスキルを身に着けよう
                </span>
              </div>
            </div>
            <div>
              <Carousel />
            </div>
          </div>
        </div>
      </div>
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
