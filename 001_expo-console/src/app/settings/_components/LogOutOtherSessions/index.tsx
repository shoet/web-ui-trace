import { ComponentProps } from "react";
import { ComponentWithBorder } from "../ComponentWithBorder";
import clsx from "clsx";
import { DangerButton } from "@/components/Button";
import { SectionTitleLogOut } from "../SectionTitle";

type Props = {};

const Footer = () => {
  return (
    <div className={clsx("w-full flex flex-row justify-end items-center")}>
      <DangerButton text="Log Out of Other Sessions" />
    </div>
  );
};

export const LogOutOfOtherSessions = (props: ComponentProps<"div">) => {
  const { ...rest } = props;
  return (
    <ComponentWithBorder footerComponent={<Footer />} {...rest}>
      <SectionTitleLogOut />
      <div className={clsx("text-text-description")}>
        Clear all your active user sessions. This will log you out of all other
        devices and browsers, except this one.
      </div>
    </ComponentWithBorder>
  );
};
