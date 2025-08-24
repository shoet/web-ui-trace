import type { Meta, StoryObj } from "@storybook/react";
import {
  SectionTitle,
  SectionTitleAboutYou,
  SectionTitleAccountSettings,
  SectionTitleChangePassword,
  SectionTitleEmail,
  SectionTitleTwoFactorAuth,
} from ".";
import { IconUser } from "@/components/Icon";

export default {
  title: "SectionTitle",
  component: SectionTitle,
} as Meta<typeof SectionTitle>;

type Story = StoryObj<typeof SectionTitle>;

export const Default: Story = {
  args: {
    title: "Account settings",
    icon: <IconUser />,
  },
};

export const AcccountSettings = () => <SectionTitleAccountSettings />;
export const AboutYou = () => <SectionTitleAboutYou />;
export const Email = () => <SectionTitleEmail />;
export const ChangePassword = () => <SectionTitleChangePassword />;
export const TwoFactorAuth = () => <SectionTitleTwoFactorAuth />;
