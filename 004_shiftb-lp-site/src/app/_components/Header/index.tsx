import clsx from "clsx";
import Link from "next/link";
import { ComponentProps } from "react";

export const Header = (props: ComponentProps<"header">) => {
  const { className, ...rest } = props;
  return (
    <header
      className={clsx(
        "flex flex-row items-center justify-center py-4 w-full backdrop-blur-xl",
        className,
      )}
      {...rest}
    >
      <div
        className={clsx(
          "max-w-[1400px] flex flex-row items-center justify-between flex-1 backdrop-opacity-80",
        )}
      >
        <div className={clsx("text-2xl font-bold")}>Logo</div>
        <nav className={clsx("flex flex-row items-center gap-14")}>
          <ul className={clsx("flex flex-row items-center justify-end gap-8")}>
            <li>
              <Link href="/" className={clsx("text-md font-bold text-black")}>
                受講生の実績
              </Link>
            </li>
            <li>
              <Link href="/" className={clsx("text-md font-bold text-black")}>
                受講生の実績
              </Link>
            </li>
            <li>
              <Link href="/" className={clsx("text-md font-bold text-black")}>
                受講生の実績
              </Link>
            </li>
            <li>
              <Link href="/" className={clsx("text-md font-bold text-black")}>
                受講生の実績
              </Link>
            </li>
            <li>
              <Link href="/" className={clsx("text-md font-bold text-black")}>
                受講生の実績
              </Link>
            </li>
          </ul>
          <button
            className={clsx(
              "px-4 py-3 text-white bg-black border-2 border-black font-bold text-md rounded-xl",
              "cursor-pointer hover:bg-white hover:text-black",
            )}
          >
            受講生ログイン
          </button>
        </nav>
      </div>
    </header>
  );
};
