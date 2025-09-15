import type { Meta, StoryObj } from "@storybook/react";
import { TweetCard } from ".";
import clsx from "clsx";

export default {
  title: "TweetCard",
  component: TweetCard,
} as Meta<typeof TweetCard>;

type Story = StoryObj<typeof TweetCard>;

export const Default: Story = {
  args: {
    tweet: {
      username: "shoet",
      userId: "shoet",
      images: [
        "https://placehold.jp/150x150.png",
        "https://placehold.jp/250x150.png",
        "https://placehold.jp/250x150.png",
      ],
    },
  },
  render: (args) => {
    return (
      <div className={clsx("flex flex-col")}>
        <TweetCard {...args} />
        <TweetCard {...args} />
      </div>
    );
  },
};
