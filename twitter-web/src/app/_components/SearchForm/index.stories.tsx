import type { Meta, StoryObj } from "@storybook/react";
import { SearchForm } from ".";

export default {
  title: "SearchForm",
  component: SearchForm,
} as Meta<typeof SearchForm>;

type Story = StoryObj<typeof SearchForm>;

export const Default: Story = {};
