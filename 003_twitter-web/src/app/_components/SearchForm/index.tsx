import clsx from "clsx";
import { IconSearch } from "../Icon";

export const SearchForm = () => {
  return (
    <div
      className={clsx(
        "group",
        "flex flex-row items-center justify-start gap-2 w-full",
        "p-2 rounded-full border border-gray-700",
        "has-focus:outline-2 has-focus:outline-sky-500",
      )}
    >
      <IconSearch size={14} />
      <input
        placeholder="検索"
        className={clsx("placeholder:text-white flex-1 outline-none")}
      />
    </div>
  );
};
