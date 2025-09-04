import type { Meta, StoryObj } from "@storybook/react";
import { PrimaryButton } from ".";

export default {
  title: "PrimaryButton",
  component: PrimaryButton,
} as Meta<typeof PrimaryButton>;

type Story = StoryObj<typeof PrimaryButton>;

export const Default: Story = {
  args: {
    text: "PrimaryButton",
  },
};
