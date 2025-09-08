import clsx from "clsx";
import Link from "next/link";
import { RadioWithLabel } from "../RaioWithLabel";

export const SearchFilterPresentor = () => {
  return (
    <div>
      <div
        className={clsx(
          "p-3 border border-gray-700 rounded-xl font-bold text-xl",
        )}
      >
        検索フィルター
      </div>
      <div
        className={clsx(
          "mt-4 border border-gray-700 rounded-xl",
          "flex flex-col justify-between gap-3",
        )}
      >
        <div>
          <div className={clsx("p-4 flex flex-col gap-4")}>
            <div>
              <div className={clsx("font-bold")}>アカウント</div>
              <div className={clsx("mt-1", "flex flex-col gap-1")}>
                <RadioWithLabel
                  label="すべてのアカウント"
                  name="account"
                  value="all"
                  checked
                />
                <RadioWithLabel
                  label="フォローしているアカウント"
                  name="account"
                  value="followed"
                />
              </div>
            </div>
            <div>
              <div className={clsx("font-bold")}>場所</div>
              <div>
                <div className={clsx("mt-1", "flex flex-col gap-1")}>
                  <RadioWithLabel
                    label="すべての場所"
                    name="place"
                    value="all"
                    checked
                  />
                  <RadioWithLabel
                    label="近くの場所"
                    name="place"
                    value="near"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link
          href=""
          className={clsx(
            "text-blue-400 cursor-pointer w-full p-4 hover:bg-foreground/5",
          )}
        >
          高度な検索
        </Link>
      </div>
    </div>
  );
};
