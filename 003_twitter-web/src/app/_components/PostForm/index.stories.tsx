import type { Meta, StoryObj } from "@storybook/react";
import { PostForm } from ".";

export default {
  title: "PostForm",
  component: PostForm,
} as Meta<typeof PostForm>;

type Story = StoryObj<typeof PostForm>;

export const Default: Story = {};
