import type { Meta, StoryObj } from "@storybook/react";
import { Email } from ".";

export default {
  title: "settings/Email",
  component: Email,
} as Meta<typeof Email>;

type Story = StoryObj<typeof Email>;

export const Default: Story = {};
