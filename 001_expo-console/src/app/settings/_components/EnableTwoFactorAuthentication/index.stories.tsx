import type { Meta, StoryObj } from "@storybook/react";
import { EnableTwoFactorAuthentication } from ".";

export default {
  title: "settings/EnableTwoFactorAuthentication",
  component: EnableTwoFactorAuthentication,
} as Meta<typeof EnableTwoFactorAuthentication>;

type Story = StoryObj<typeof EnableTwoFactorAuthentication>;

export const Default: Story = {};
