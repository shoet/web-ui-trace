import clsx from "clsx";
import { SearchFilterPresentor } from "../SearchFilter";

export const RightMenu = () => {
  return (
    <div
      className={clsx(
        "flex flex-col gap-6 border-t border-t-gray-700 mt-3 pt-3",
      )}
    >
      <SearchFilterPresentor />
    </div>
  );
};
