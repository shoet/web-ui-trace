import type { Meta, StoryObj } from "@storybook/react";
import { MainCarousel } from ".";

export default {
  title: "MainCarousel",
  component: MainCarousel,
} as Meta<typeof MainCarousel>;

type Story = StoryObj<typeof MainCarousel>;

export const Default: Story = {
  args: {
    items: [
      {
        title: "red",
        imageSrc: "/avatar_image.png",
        href: "/",
      },
      {
        title: "blue",
        imageSrc: "/avatar_image.png",
        href: "/",
      },
      {
        title: "yellow",
        imageSrc: "/avatar_image.png",
        href: "/",
      },
      {
        title: "green",
        imageSrc: "/avatar_image.png",
        href: "/",
      },
      {
        title: "purple",
        imageSrc: "/avatar_image.png",
        href: "/",
      },
      {
        title: "gray",
        imageSrc: "/avatar_image.png",
        href: "/",
      },
    ],
  },
};
