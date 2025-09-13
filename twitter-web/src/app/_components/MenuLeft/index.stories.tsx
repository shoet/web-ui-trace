import type { Meta, StoryObj } from "@storybook/react";
import { MenuLeft } from ".";
import clsx from "clsx";

export default {
  title: "MenuLeft",
  component: MenuLeft,
} as Meta<typeof MenuLeft>;

type Story = StoryObj<typeof MenuLeft>;

export const Default: Story = {
  render: (args) => {
    return (
      <div className={clsx("w-[500px]")}>
        <MenuLeft />
      </div>
    );
  },
};
