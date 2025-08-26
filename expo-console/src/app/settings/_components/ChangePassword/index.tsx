"use client";
import clsx from "clsx";
import { SectionTitleChangePassword } from "../SectionTitle";
import { ComponentWithBorder } from "../ComponentWithBorder";
import { TextInput } from "@/components/TextInput";
import { ComponentProps, useEffect, useState } from "react";
import { PasswordStrength } from "../PasswordStrength";
import { PrimaryButton } from "@/components/Button";

const Footer = () => {
  return (
    <div className={clsx("w-full flex flex-row items-center justify-end")}>
      <PrimaryButton text="Change" />
    </div>
  );
};

export const ChangePassword = (props: ComponentProps<"div">) => {
  const { ...rest } = props;
  const [password, setPassword] = useState<string>();

  const alertMatch = /^(?=.*?[a-z])(?=.*?[A-Z])/;
  const warnMatch = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])/;
  const okMatch =
    /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[:-@-`{-~\(\)\[\]*#])/;

  const [passwordStrength, setPasswordStrength] =
    useState<PasswordStrength>("none");

  useEffect(() => {
    if (!password) {
      setPasswordStrength("none");
      return;
    }
    if (password.length < 8) {
      setPasswordStrength("alert");
      return;
    }
    if (password?.match(okMatch)) {
      setPasswordStrength("ok");
      return;
    }
    if (password?.match(warnMatch)) {
      setPasswordStrength("warn");
      return;
    }
    if (password?.match(alertMatch)) {
      setPasswordStrength("alert");
      return;
    }
    setPasswordStrength("alert");
  }, [password]);

  return (
    <ComponentWithBorder footerComponent={<Footer />} {...rest}>
      <div className={clsx("flex flex-col justify-start gap-2")}>
        <SectionTitleChangePassword />
        <div className={clsx("flex flex-col gap-2 justify-start")}>
          <div className={clsx("font-normal text-sm")}>New password</div>
          <TextInput
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <PasswordStrength passwordStrength={passwordStrength} />
        </div>
        <div className={clsx("flex flex-col gap-2 justify-start")}>
          <div className={clsx("font-normal text-sm")}>Confirm password</div>
          <TextInput type="password" />
        </div>
      </div>
    </ComponentWithBorder>
  );
};
