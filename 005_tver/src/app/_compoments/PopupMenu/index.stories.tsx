import type { Meta, StoryObj } from "@storybook/react";
import { PopupMenu } from ".";
import clsx from "clsx";

export default {
  title: "PopupMenu",
  component: PopupMenu,
} as Meta<typeof PopupMenu>;

type Story = StoryObj<typeof PopupMenu>;

export const Default: Story = {
  render: (args) => {
    return (
      <div className={clsx("relative ml-[300px] w-full")}>
        <PopupMenu {...args} className={clsx("absolute top-0 left-0")} />
      </div>
    );
  },
};
