import type { Meta, StoryObj } from "@storybook/react";
import { AccountSettings } from ".";

export default {
  title: "settings/AccountSettings",
  component: AccountSettings,
} as Meta<typeof AccountSettings>;

type Story = StoryObj<typeof AccountSettings>;

export const Default: Story = {};
