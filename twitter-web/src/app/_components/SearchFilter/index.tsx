"use client";
import clsx from "clsx";
import Link from "next/link";
import { RadioWithLabel } from "../RaioWithLabel";
import { useState } from "react";

type SearchTypeAccount = "all" | "followed";
type SearchTypePlace = "all" | "near";

export const SearchFilterPresentor = () => {
  const [radioAccount, setRadioAccount] = useState<SearchTypeAccount>("all");
  const [radioPlace, setRadioPlace] = useState<SearchTypePlace>("all");
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
                  checked={radioAccount === "all"}
                  onChange={(e) =>
                    setRadioAccount(e.target.value as SearchTypeAccount)
                  }
                />
                <RadioWithLabel
                  label="フォローしているアカウント"
                  name="account"
                  value="followed"
                  checked={radioAccount === "followed"}
                  onChange={(e) =>
                    setRadioAccount(e.target.value as SearchTypeAccount)
                  }
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
                    checked={radioPlace === "all"}
                    onChange={(e) =>
                      setRadioPlace(e.target.value as SearchTypePlace)
                    }
                  />
                  <RadioWithLabel
                    label="近くの場所"
                    name="place"
                    value="near"
                    checked={radioPlace === "near"}
                    onChange={(e) =>
                      setRadioPlace(e.target.value as SearchTypePlace)
                    }
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
