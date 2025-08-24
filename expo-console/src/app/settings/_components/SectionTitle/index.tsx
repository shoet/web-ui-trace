import {
  IconConnect,
  IconIdCard,
  IconLock,
  IconMail,
  IconUser,
} from "@/components/Icon";
import clsx from "clsx";
import { ReactNode } from "react";

type Props = {
  title: string;
  icon?: ReactNode;
};

export const SectionTitle = (props: Props) => {
  const { title, icon } = props;
  return (
    <div className={clsx("flex flex-row items-center justify-start gap-2")}>
      {icon && icon}
      <div className={clsx("text-xl font-semibold")}>{title}</div>
    </div>
  );
};

export const SectionTitleAccountSettings = () => (
  <SectionTitle title="Account settings" />
);

export const SectionTitleAboutYou = () => (
  <SectionTitle
    title="About you"
    icon={<IconUser color={"var(--color-gray-400)"} size={20} />}
  />
);

export const SectionTitleEmail = () => (
  <SectionTitle
    title="Email"
    icon={<IconMail color={"var(--color-gray-400)"} size={20} />}
  />
);

export const SectionTitleChangePassword = () => (
  <SectionTitle
    title="Change password"
    icon={<IconLock color={"var(--color-gray-400)"} size={20} />}
  />
);

export const SectionTitleTwoFactorAuth = () => (
  <SectionTitle
    title="Enable two-factor authentication"
    icon={<IconIdCard color={"var(--color-gray-400)"} size={20} />}
  />
);

export const SectionTitleConnection = () => (
  <SectionTitle
    title="Connections"
    icon={<IconConnect color={"var(--color-gray-400)"} size={20} />}
  />
);
