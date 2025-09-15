import clsx from "clsx";
import { SearchForm } from "../SearchForm";
import { InviteSubscribe } from "../InviteSubscribe";
import { TodaysNews } from "../TodaysNews";

export const RightMenu = () => {
  return (
    <div
      className={clsx(
        "flex flex-col gap-6 border-t border-t-gray-700 mt-3 pt-3",
      )}
    >
      <SearchForm />
      <InviteSubscribe />
      <TodaysNews />
    </div>
  );
};
