import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from ".";

export default {
  title: "Badge",
  component: Badge,
} as Meta<typeof Badge>;

export const Success = () => <Badge variant="success" text="success" />;
export const Info = () => <Badge variant="info" text="info" />;
export const Warn = () => <Badge variant="warn" text="warn" />;
export const Alert = () => <Badge variant="alert" text="alert" />;
