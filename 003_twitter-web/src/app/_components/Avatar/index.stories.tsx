import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from ".";

export default {
  title: "Avatar",
  component: Avatar,
} as Meta<typeof Avatar>;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    imageSrc: "avatar_image.png",
  },
};
