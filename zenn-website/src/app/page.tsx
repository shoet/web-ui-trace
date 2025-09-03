import clsx from "clsx";
import { ArticleHeader } from "./_components/ArticleHeader";

export default function Home() {
  return (
    <div className={clsx("bg-base-outer h-[150px]")}>
      <ArticleHeader />
    </div>
  );
}
