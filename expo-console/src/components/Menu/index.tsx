import clsx from "clsx";
import Link from "next/link";
import { ComponentProps, ReactNode } from "react";

type MenuItemLink = {
  type: "link";
  href: string;
  text: string;
  icon?: ReactNode;
};

type MenuItemComponent = {
  type: "component";
  component: ReactNode;
};

export type MenuItem = (MenuItemLink | MenuItemComponent) & { id: string };

const MenuItemRow = (props: ComponentProps<"div">) => {
  const { children, className, ...rest } = props;
  return (
    <div className={clsx("px-6 py-3 hover:bg-blue-950", className)} {...rest}>
      {children}
    </div>
  );
};

const MenuItemRowLink = (props: {
  item: MenuItemLink;
  highlight?: boolean;
}) => {
  const { item, highlight } = props;
  return (
    <MenuItemRow className={clsx(highlight && "bg-sky-950 text-sky-300")}>
      <div className={clsx("flex flex-row items-center justify-start gap-2")}>
        {item.icon && item.icon}
        <Link href={item.href} className="text-sm w-full">
          {item.text}
        </Link>
      </div>
    </MenuItemRow>
  );
};

const MenuItemRowComponent = (props: { item: MenuItemComponent }) => {
  const { item } = props;
  return <MenuItemRow>{item.component}</MenuItemRow>;
};

type Props = {
  items: MenuItem[];
  activeMenuId?: string;
};

export const Menu = (props: Props) => {
  const { items, activeMenuId } = props;
  return (
    <div className={clsx("flex flex-col justify-start")}>
      {items.map((item, idx) =>
        item.type === "link" ? (
          <MenuItemRowLink
            item={item}
            key={idx}
            highlight={item.id == activeMenuId}
          />
        ) : item.type === "component" ? (
          <MenuItemRowComponent item={item} key={idx} />
        ) : null,
      )}
    </div>
  );
};
