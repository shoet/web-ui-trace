import clsx from "clsx";
import { ComponentWithBorder } from "../ComponentWithBorder";
import { PrimaryButton } from "../PrimaryButton";
import { TextInput } from "../TextInput";
import { SectionTitleAboutYou } from "../SectionTitle";

const Footer = () => {
  return (
    <div className={clsx("flex flex-row items-center justify-end")}>
      <PrimaryButton text="Save" />
    </div>
  );
};

export const AboutYou = () => {
  return (
    <ComponentWithBorder id="about-you" footerComponent={<Footer />}>
      <div className={clsx("flex flex-col gap-2")}>
        <SectionTitleAboutYou />
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
            <TextInput />
          </div>
          <div className={clsx("flex flex-col justify-start gap-2")}>
            <div className={clsx("text-bold text-md")}>Last name</div>
            <TextInput />
          </div>
        </div>
      </div>
    </ComponentWithBorder>
  );
};
