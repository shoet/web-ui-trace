import type { Meta, StoryObj } from "@storybook/react";
import { Profile } from ".";
import clsx from "clsx";

export default {
  title: "Profile",
  component: Profile,
} as Meta<typeof Profile>;

type Story = StoryObj<typeof Profile>;

export const Default: Story = {
  render: (args) => {
    return (
      <div className={clsx("w-[500px]")}>
        <Profile />
      </div>
    );
  },
};
