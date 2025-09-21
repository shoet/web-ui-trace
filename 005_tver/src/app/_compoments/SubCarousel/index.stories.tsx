import type { Meta, StoryObj } from "@storybook/react";
import { SubCarousel } from ".";
import clsx from "clsx";

export default {
  title: "SubCarousel",
  component: SubCarousel,
} as Meta<typeof SubCarousel>;

type Story = StoryObj<typeof SubCarousel>;

export const Default: Story = {
  args: {
    items: [
      {
        imageSrc: "/avatar_image.png",
      },
      {
        imageSrc: "/avatar_image.png",
      },
      {
        imageSrc: "/avatar_image.png",
      },
      {
        imageSrc: "/avatar_image.png",
      },
      {
        imageSrc: "/avatar_image.png",
      },
      {
        imageSrc: "/avatar_image.png",
      },
      {
        imageSrc: "/avatar_image.png",
      },
      {
        imageSrc: "/avatar_image.png",
      },
      {
        imageSrc: "/avatar_image.png",
      },
      {
        imageSrc: "/avatar_image.png",
      },
      {
        imageSrc: "/avatar_image.png",
      },
    ],
  },
  render: (args) => (
    <div className={clsx("w-full min-w-0 overflow-hidden")}>
      <SubCarousel {...args} />
    </div>
  ),
};
