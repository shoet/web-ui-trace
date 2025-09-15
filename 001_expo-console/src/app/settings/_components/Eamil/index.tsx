import clsx from "clsx";
import { TextInput } from "@/components/TextInput";
import { ComponentWithBorder } from "../ComponentWithBorder";
import { PrimaryButton } from "@/components/Button";
import { SectionTitleEmail } from "../SectionTitle";
import { Badge } from "../Badge";
import { ComponentProps } from "react";

const Footer = () => {
  return (
    <div className={clsx("flex flex-row items-center justify-end w-full")}>
      <PrimaryButton text="Save Email" disabled />
    </div>
  );
};

export const Email = (props: ComponentProps<"div">) => {
  const { ...rest } = props;
  return (
    <ComponentWithBorder footerComponent={<Footer />} {...rest}>
      <div className={clsx("flex flex-col justify-start gap-2")}>
        <SectionTitleEmail />
        <div className={clsx("text-sm text-text-description")}>
          Keep your email address up-to-date in case you need to recover your
          account.
        </div>
        <div className={clsx("flex flex-col justify-start gap-4")}>
          <TextInput value={"test@example.com"} />
          <Badge variant="success" text="Your email is verified" />
        </div>
      </div>
    </ComponentWithBorder>
  );
};
