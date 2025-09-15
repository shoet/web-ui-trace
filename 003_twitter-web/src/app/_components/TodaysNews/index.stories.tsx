import type { Meta, StoryObj } from "@storybook/react";
import { TodaysNews } from ".";
import clsx from "clsx";

export default {
  title: "TodaysNews",
  component: TodaysNews,
} as Meta<typeof TodaysNews>;

type Story = StoryObj<typeof TodaysNews>;

export const Default: Story = {
  render: (args) => {
    return (
      <div className={clsx("w-[400px] f-[400px]")}>
        <TodaysNews />
      </div>
    );
  },
};
