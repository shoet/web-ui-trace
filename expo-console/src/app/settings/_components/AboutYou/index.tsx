import clsx from "clsx";
import { ComponentWithBorder } from "../ComponentWithBorder";
import { IconUser } from "@/components/Icon";
import { PrimaryButton } from "../PrimaryButton";

const Footer = () => {
  return (
    <div className={clsx("flex flex-row items-center justify-end")}>
      <PrimaryButton text="Save" />
    </div>
  );
};

export const AboutYou = () => {
  return (
    <ComponentWithBorder footerComponent={<Footer />}>
      <div className={clsx("flex flex-col gap-2")}>
        <div className={clsx("flex flex-row items-center justify-start gap-2")}>
          <IconUser size={20} color={"var(--color-gray-400)"} />
          <div className={clsx("text-xl font-semibold")}>About you</div>
        </div>
        <div className={clsx("flex flex-row items-center gap-2")}>
          <div>avatar</div>
          <div className={clsx("text-md")}>
            If you have <a href="https://gravatar.com/">Gravatar </a> set for
            test@example.com it will be displayed in absence of uploaded avatar.
            You can upload and remove your own avatar to EAS.
          </div>
        </div>
        <div className={clsx("grid grid-cols-2 gap-4")}>
          <div className={clsx("flex flex-col justify-start gap-2")}>
            <div className={clsx("text-bold text-md")}>First name</div>
            <input
              type="text"
              className={clsx("p-4 border border-border rounded-md")}
            />
          </div>
          <div className={clsx("flex flex-col justify-start gap-2")}>
            <div className={clsx("text-bold text-md")}>Last name</div>
            <input
              type="text"
              className={clsx("p-4 border border-border rounded-md")}
            />
          </div>
        </div>
      </div>
    </ComponentWithBorder>
  );
};
