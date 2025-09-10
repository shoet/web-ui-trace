import type { Meta, StoryObj } from "@storybook/react";
import { FeedTab } from ".";
import clsx from "clsx";

export default {
  title: "FeedTab",
  component: FeedTab,
} as Meta<typeof FeedTab>;

type Story = StoryObj<typeof FeedTab>;

export const Default: Story = {
  render: (args) => {
    return (
      <div className={clsx("h-dvh w-dvw p-4")}>
        <FeedTab {...args} />
      </div>
    );
  },
};
