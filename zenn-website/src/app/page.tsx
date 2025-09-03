import clsx from "clsx";
import { ArticleHeader } from "./_components/ArticleHeader";
import { Profile } from "./_components/Profile";
import { Article } from "./_components/Article";

export default function Home() {
  return (
    <div className={clsx("bg-base-outer pb-[4rem]")}>
      <ArticleHeader />
      <div className={clsx("max-w-[1200px] mx-auto px-[40px]")}>
        <div
          className={clsx(
            "flex flex-row items-start justify-between gap-[40px]",
          )}
        >
          <section className={clsx("flex-1")}>
            <div className={clsx("bg-base p-[40px]")}>
              <Article />
            </div>
          </section>
          <aside className={clsx("w-[300px]")}>
            <Profile />
            <div className={clsx("p-4 bg-base", "h-[600px] mt-[40px]")}>
              目次
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
