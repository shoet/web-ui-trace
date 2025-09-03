import type { Meta, StoryObj } from "@storybook/react";
import { Article } from ".";

export default {
  title: "Article",
  component: Article,
} as Meta<typeof Article>;

type Story = StoryObj<typeof Article>;

export const Default: Story = {};
