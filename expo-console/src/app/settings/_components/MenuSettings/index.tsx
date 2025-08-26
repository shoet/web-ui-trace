"use client";
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
import { useIntersectionObserver } from "@/components/IntersectionObserverContext";
import { Menu, MenuItem } from "@/components/Menu";
import clsx from "clsx";

export const MenuSettings = () => {
  const menuItems: MenuItem[] = [
    {
      type: "link",
      id: "about-you",
      text: "About you",
      href: "#about-you",
      icon: <IconUser size={20} color={"var(--color-gray-400)"} />,
    },
    {
      type: "link",
      id: "email",
      text: "Email",
      href: "#email",
      icon: <IconMail size={20} color={"var(--color-gray-400)"} />,
    },
    {
      type: "link",
      id: "change-password",
      text: "Change password",
      href: "#change-password",
      icon: <IconLock size={20} color={"var(--color-gray-400)"} />,
    },
    {
      type: "link",
      id: "two-factor-authentication",
      text: "Two-factor authentication",
      href: "#two-factor-authentication",
      icon: <IconSecurity size={20} color={"var(--color-gray-400)"} />,
    },
    {
      type: "link",
      id: "connections",
      text: "Connections",
      href: "#connections",
      icon: <IconConnect size={20} color={"var(--color-gray-400)"} />,
    },
    {
      type: "link",
      id: "security-activity",
      text: "Security acitivity",
      href: "#security-activity",
      icon: <IconSecurity size={20} color={"var(--color-gray-400)"} />,
    },
    {
      type: "link",
      id: "convert-to-organization",
      text: "Convert to organization",
      href: "#convert-to-organization",
      icon: <IconUsers size={20} color={"var(--color-gray-400)"} />,
    },
    {
      type: "link",
      id: "rename-account",
      text: "Rename account",
      href: "#rename-account",
      icon: <IconAtSign size={20} color={"var(--color-gray-400)"} />,
    },
    {
      type: "link",
      id: "log-out-of-session",
      text: "Log out of session",
      href: "#log-out-of-session",
      icon: <IconLogOut size={20} color={"var(--color-gray-400)"} />,
    },
  ];

  const menuItemsDanger: MenuItem[] = [
    {
      type: "link",
      id: "delete-account",
      text: "Delete account",
      href: "",
      icon: <IconTrash size={20} color={"var(--color-gray-400)"} />,
    },
  ];

  const { activeElementId } = useIntersectionObserver();

  return (
    <div className={clsx("flex flex-col")}>
      <div>
        <div className={clsx("text-gray-500 px-6 py-1 text-sm")}>Settings</div>
        <Menu items={menuItems} activeMenuId={activeElementId} />
      </div>
      <div>
        <div className={clsx("text-md text-gray-500 px-6 py-1 ")}>
          Danger zone
        </div>
        <Menu items={menuItemsDanger} activeMenuId={activeElementId} />
      </div>
    </div>
  );
};
