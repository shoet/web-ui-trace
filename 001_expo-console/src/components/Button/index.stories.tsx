import type { Meta, StoryObj } from "@storybook/react";
import { Button, DangerButton, PrimaryButton, SecondaryButton } from ".";

export default {
  title: "PrimaryButton",
  component: Button,
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    text: "button",
  },
};

export const Primary = () => <PrimaryButton text="primary" />;
export const Secondary = () => <SecondaryButton text="secondary" />;
export const Danger = () => <DangerButton text="danger" />;
