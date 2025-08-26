import {
  IconAtSign,
  IconConnect,
  IconIdCard,
  IconLock,
  IconLogOut,
  IconMail,
  IconSecurity,
  IconUser,
  IconUsers,
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

export const SectionTitleSecurityActivity = () => (
  <SectionTitle
    title="Security activity"
    icon={<IconSecurity color={"var(--color-gray-400)"} size={20} />}
  />
);

export const SectionTitleConvertYourAccountIntoAnOrganization = () => (
  <SectionTitle
    title="Convert your account into an organization"
    icon={<IconUsers color={"var(--color-gray-400)"} size={20} />}
  />
);

export const SectionTitleRenameAccount = () => (
  <SectionTitle
    title="Rename account"
    icon={<IconAtSign color={"var(--color-gray-400)"} size={20} />}
  />
);

export const SectionTitleLogOut = () => (
  <SectionTitle
    title="Log out of other sessions"
    icon={<IconLogOut color={"var(--color-gray-400)"} size={20} />}
  />
);
