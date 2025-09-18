import type { Meta, StoryObj } from "@storybook/react";
import { SearchBar } from ".";

export default {
  title: "SearchBar",
  component: SearchBar,
} as Meta<typeof SearchBar>;

type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {};
