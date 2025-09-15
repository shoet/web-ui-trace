import clsx from "clsx";
import { ComponentProps } from "react";

const TableTH = (props: ComponentProps<"th">) => {
  const { children, className, ...rest } = props;
  return (
    <th className={clsx("p-4", className)} {...rest}>
      {children}
    </th>
  );
};

const TableTD = (props: ComponentProps<"td">) => {
  const { children, className, ...rest } = props;
  return (
    <td className={clsx("p-4", className)} {...rest}>
      {children}
    </td>
  );
};

export const PriceTable = (props: ComponentProps<"table">) => {
  const { className, ...rest } = props;
  return (
    <table
      className={clsx(
        "table-fixed border-separate border-spacing-0.5 p-1",
        className,
      )}
      {...rest}
    >
      <thead>
        <tr>
          <th className={clsx("w-1/7")}></th>
          <TableTH
            className={clsx("w-2/7 bg-blue-500 text-white rounded-t-md")}
          >
            当社
          </TableTH>
          <TableTH
            className={clsx("w-2/7 bg-gray-500 text-white rounded-t-md")}
          >
            他社A
          </TableTH>
          <TableTH
            className={clsx("w-2/7 bg-gray-500 text-white rounded-t-md")}
          >
            他社B
          </TableTH>
        </tr>
      </thead>
      <tbody>
        <tr className={clsx("bg-gray-200")}>
          <TableTH>習得できる技術</TableTH>
          <TableTD className={clsx("text-xl font-bold text-blue-500")}>
            TypeScript, React, Next.js
          </TableTD>
          <TableTD>Ruby on Rails</TableTD>
          <TableTD>Ruby on Rails</TableTD>
        </tr>
        <tr>
          <TableTH>コードレビュー</TableTH>
          <TableTD className={clsx("text-xl font-bold text-blue-500")}>
            あり
          </TableTD>
          <TableTD>なし</TableTD>
          <TableTD>なし</TableTD>
        </tr>
        <tr className={clsx("bg-gray-200")}>
          <TableTH>課題</TableTH>
          <TableTD className={clsx("text-xl font-bold text-blue-500")}>
            あり
          </TableTD>
          <TableTD>なし</TableTD>
          <TableTD>なし</TableTD>
        </tr>
        <tr>
          <TableTH>サポート期間</TableTH>
          <TableTD className={clsx("text-xl font-bold text-blue-500")}>
            無期限
          </TableTD>
          <TableTD>9ヶ月</TableTD>
          <TableTD>6ヶ月</TableTD>
        </tr>
      </tbody>
    </table>
  );
};
