import type { Meta, StoryObj } from "@storybook/react";
import {
  IconBell,
  IconBookmark,
  IconGrok,
  IconHome,
  IconMail,
  IconMore,
  IconSearch,
  IconThunder,
  IconUser,
  IconUsers,
  IconX,
} from ".";

export default {
  title: "Icon",
  component: IconHome,
} as Meta<typeof IconHome>;

type Story = StoryObj<typeof IconHome>;

export const Home = () => <IconHome />;
export const Search = () => <IconSearch />;
export const Bell = () => <IconBell />;
export const Mail = () => <IconMail />;
export const Grock = () => <IconGrok />;
export const Bookmark = () => <IconBookmark />;
export const Users = () => <IconUsers />;
export const X = () => <IconX />;
export const Thunder = () => <IconThunder />;
export const User = () => <IconUser />;
export const More = () => <IconMore />;
