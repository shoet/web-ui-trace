import clsx from "clsx";

export const InviteSubscribe = () => {
  return (
    <div
      className={clsx(
        "p-4 flex flex-col items-start gap-3 border border-gray-700 rounded-xl",
      )}
    >
      <div className={clsx("text-xl font-bold")}>
        プレミアムにサブスクライブ
      </div>
      <div>
        サブスクライブして新機能を利用しましょう。資格を満たしている場合、収益配分を受け取れます。
      </div>
      <div className={clsx("flex flex-row items-center justify-start")}>
        <button
          className={clsx(
            "px-4 py-2 bg-sky-600 text-white text-md font-bold rounded-full",
          )}
        >
          サブスクライブする
        </button>
      </div>
    </div>
  );
};
