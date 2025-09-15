import clsx from "clsx";
import {
  Carousel,
  CarouselContinues,
  CarouselWithCenterZoom,
} from "./_components/Carousel";
export default function Home() {
  return (
    <div>
      <div className={clsx("bg-[url(/background/corporate_1.jpg)]")}>
        <div
          className={clsx(
            "h-dvh w-full p-4 flex justify-center max-w-[1440px] mx-auto",
          )}
        >
          <div className={clsx("flex-1", "grid grid-cols-2 gap-4")}>
            <div>
              <div className={clsx("mx-auto max-w-[375px] pl-6")}>
                <div
                  className={clsx(
                    "relative z-0 inline whitespace-pre text-sm font-medium leading-[20.27px] md:whitespace-normal md:text-xl",
                  )}
                >
                  <div className={clsx("text-xl font-bold")}>
                    Webエンジニア特化型スクール
                  </div>
                  <div
                    className={clsx(
                      "absolute z-[20]  ml-[-1000px] h-5 w-[50vw] translate-y-[calc(-40%-1px)] rounded-br-sm bg-yellow-300 pl-[calc(1000px+49.5vw)]",
                      " after:absolute after:right-[-13px] after:top-0 after:h-5 after:w-[14px] after:bg-yellow-300 after:content-[''] ",
                      "after:[clip-path:polygon(0_0,100%_0,0_100%)] md:ml-[-500%] md:h-8 md:w-[50vw] md:pl-[calc(50 z-00%+108%)] md:after:right-[-22.7px] md:after:h-8 md:after:w-6",
                      // "absolute top-0 z-[-2]",
                      // 'after:content-[""] h-[30px] w-full bg-yellow-300',
                    )}
                  ></div>{" "}
                </div>{" "}
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
              <CarouselContinues />
              <CarouselWithCenterZoom />
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
