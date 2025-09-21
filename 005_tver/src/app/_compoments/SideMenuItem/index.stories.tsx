import type { Meta, StoryObj } from "@storybook/react";
import { SideMenuItem } from ".";
import { IconHome } from "../Icons";

export default {
  title: "SideMenuItem",
  component: SideMenuItem,
} as Meta<typeof SideMenuItem>;

type Story = StoryObj<typeof SideMenuItem>;

export const Large: Story = {
  args: {
    active: false,
    type: "large",
    title: "ホーム",
    icon: <IconHome />,
  },
};
export const LargeActive: Story = {
  args: {
    active: true,
    type: "large",
    title: "ホーム",
    icon: <IconHome />,
  },
};
export const Small: Story = {
  args: {
    active: false,
    type: "small",
    title: "ホーム",
  },
};
export const SmallActive: Story = {
  args: {
    active: true,
    type: "small",
    title: "ホーム",
  },
};
