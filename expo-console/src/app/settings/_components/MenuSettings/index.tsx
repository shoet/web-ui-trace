import {
  IconAtSign,
  IconConnect,
  IconLock,
  IconLogOut,
  IconMail,
  IconSecurity,
  IconTrash,
  IconUser,
  IconUsers,
} from "@/components/Icon";
import clsx from "clsx";
import Link from "next/link";
import { PropsWithChildren, ReactNode } from "react";

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

type MenuItem = MenuItemLink | MenuItemComponent;

type Props = {
  items: MenuItem[];
};

const MenuItemRow = (props: {} & PropsWithChildren) => {
  const { children } = props;
  return <div className={clsx("px-6 py-3 hover:bg-blue-950")}>{children}</div>;
};

const MenuItemRowLink = (props: { item: MenuItemLink }) => {
  const { item } = props;
  return (
    <MenuItemRow>
      <div className={clsx("flex flex-row items-center justify-start gap-2")}>
        {item.icon && item.icon}
        <Link href={item.href} className="text-sm">
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

const Menu = (props: Props) => {
  const { items } = props;
  return (
    <div className={clsx("flex flex-col justify-start")}>
      {items.map((item) =>
        item.type === "link" ? (
          <MenuItemRowLink item={item} />
        ) : item.type === "component" ? (
          <MenuItemRowComponent item={item} />
        ) : null,
      )}
    </div>
  );
};

export const MenuSettings = () => {
  const menuItems: MenuItem[] = [
    {
      type: "link",
      text: "About you",
      href: "",
      icon: <IconUser size={20} color={"var(--color-gray-400)"} />,
    },
    {
      type: "link",
      text: "Email",
      href: "",
      icon: <IconMail size={20} color={"var(--color-gray-400)"} />,
    },
    {
      type: "link",
      text: "Change password",
      href: "",
      icon: <IconLock size={20} color={"var(--color-gray-400)"} />,
    },
    {
      type: "link",
      text: "Two-factor authentication",
      href: "",
      icon: <IconSecurity size={20} color={"var(--color-gray-400)"} />,
    },
    {
      type: "link",
      text: "Connections",
      href: "",
      icon: <IconConnect size={20} color={"var(--color-gray-400)"} />,
    },
    {
      type: "link",
      text: "Security acitivity",
      href: "",
      icon: <IconSecurity size={20} color={"var(--color-gray-400)"} />,
    },
    {
      type: "link",
      text: "Convert to organization",
      href: "",
      icon: <IconUsers size={20} color={"var(--color-gray-400)"} />,
    },
    {
      type: "link",
      text: "Rename account",
      href: "",
      icon: <IconAtSign size={20} color={"var(--color-gray-400)"} />,
    },
    {
      type: "link",
      text: "Log out of sessiont",
      href: "",
      icon: <IconLogOut size={20} color={"var(--color-gray-400)"} />,
    },
  ];

  const menuItemsDanger: MenuItem[] = [
    {
      type: "link",
      text: "Delete account",
      href: "",
      icon: <IconTrash size={20} color={"var(--color-gray-400)"} />,
    },
  ];

  return (
    <div className={clsx("flex flex-col")}>
      <div>
        <div className={clsx("text-gray-500 px-6 py-1 text-sm")}>Settings</div>
        <Menu items={menuItems} />
      </div>
      <div>
        <div className={clsx("text-md text-gray-500 px-6 py-1 ")}>
          Danger zone
        </div>
        <Menu items={menuItemsDanger} />
      </div>
    </div>
  );
};
