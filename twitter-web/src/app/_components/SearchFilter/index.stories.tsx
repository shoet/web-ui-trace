import type { Meta, StoryObj } from "@storybook/react";
import { SearchFilterPresentor } from ".";
import clsx from "clsx";

export default {
  title: "SearchFilter",
  component: SearchFilterPresentor,
} as Meta<typeof SearchFilterPresentor>;

type Story = StoryObj<typeof SearchFilterPresentor>;

export const Default: Story = {
  render: () => {
    return (
      <div className={clsx("w-[500px]")}>
        <SearchFilterPresentor />
      </div>
    );
  },
};
