import type { Meta, StoryObj } from "@storybook/react";
import { PasswordStrength } from ".";

export default {
  title: "PasswordStrength",
  component: PasswordStrength,
} as Meta<typeof PasswordStrength>;

type Story = StoryObj<typeof PasswordStrength>;

export const None = () => <PasswordStrength passwordStrength="none" />;
export const Alert = () => <PasswordStrength passwordStrength="alert" />;
export const Warn = () => <PasswordStrength passwordStrength="warn" />;
export const OK = () => <PasswordStrength passwordStrength="ok" />;
