import clsx from "clsx";

export const ArticleHeader = () => {
  const now = new Date();
  return (
    <header className={clsx("py-[60px]")}>
      <div
        className={clsx(
          "max-w-[1280] mx-auto px-[40px]",
          "flex flex-col items-center",
        )}
      >
        <div className={clsx("text-7xl")}>📕</div>
        <h1 className={clsx("text-3xl font-bold mt-[20px]")}>タイトル</h1>
        <div className={clsx("mt-[20px] text-gray-500")}>
          <time dateTime={now.toISOString()}>
            {now.toLocaleDateString("ja-JP", { dateStyle: "medium" })}に公開
          </time>
        </div>
      </div>
    </header>
  );
};
