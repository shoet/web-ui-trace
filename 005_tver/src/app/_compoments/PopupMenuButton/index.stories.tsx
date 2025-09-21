import type { Meta, StoryObj } from "@storybook/react";
import { PopupMenuButton } from ".";
import clsx from "clsx";

export default {
  title: "PopupMenuButton",
  component: PopupMenuButton,
} as Meta<typeof PopupMenuButton>;

type Story = StoryObj<typeof PopupMenuButton>;

export const Default: Story = {
  args: {
    items: [
      {
        type: "link",
        label: "link_1",
        href: "link_1",
      },
      {
        type: "button",
        label: "button_1",
        onClick: () => console.log("click"),
      },
    ],
  },
  render: (args) => {
    return (
      <div className={clsx("ml-[200px]")}>
        <PopupMenuButton />
      </div>
    );
  },
};
