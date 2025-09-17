import type { Meta, StoryObj } from "@storybook/react";
import { AchievementsCarousel } from ".";
import clsx from "clsx";

export default {
  title: "AchievementsCarousel",
  component: AchievementsCarousel,
} as Meta<typeof AchievementsCarousel>;

type Story = StoryObj<typeof AchievementsCarousel>;

export const Default: Story = {
  render: (args) => {
    return <AchievementsCarousel />;
  },
};
