import type { Meta, StoryObj } from "@storybook/react";
import { Profile } from ".";

export default {
  title: "Profile",
  component: Profile,
} as Meta<typeof Profile>;

type Story = StoryObj<typeof Profile>;

export const Default: Story = {};
