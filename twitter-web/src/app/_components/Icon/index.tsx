import {
  Bell,
  House,
  LucideProps,
  Mail,
  Search,
  CircleArrowOutUpRight,
  Bookmark,
  Users,
  Twitter,
  Zap,
  User,
  CircleEllipsis,
  Ellipsis,
  Check,
  Image,
  LayoutList,
  Smile,
  CalendarCheck,
  Earth,
} from "lucide-react";

export const IconHome = (props: LucideProps) => <House {...props} />;
export const IconSearch = (props: LucideProps) => <Search {...props} />;
export const IconBell = (props: LucideProps) => <Bell {...props} />;
export const IconMail = (props: LucideProps) => <Mail {...props} />;
export const IconGrok = (props: LucideProps) => (
  <CircleArrowOutUpRight {...props} />
);
export const IconBookmark = (props: LucideProps) => <Bookmark {...props} />;
export const IconUsers = (props: LucideProps) => <Users {...props} />;
export const IconX = (props: LucideProps) => <Twitter {...props} />;
export const IconThunder = (props: LucideProps) => <Zap {...props} />;
export const IconUser = (props: LucideProps) => <User {...props} />;
export const IconMore = (props: LucideProps) => <CircleEllipsis {...props} />;
export const IconEllipsis = (props: LucideProps) => <Ellipsis {...props} />;
export const IconCheck = (props: LucideProps) => <Check {...props} />;
export const IconImage = (props: LucideProps) => <Image {...props} />;
export const IconTodo = (props: LucideProps) => <LayoutList {...props} />;
export const IconSmile = (props: LucideProps) => <Smile {...props} />;
export const IconCalendar = (props: LucideProps) => (
  <CalendarCheck {...props} />
);
export const IconEarth = (props: LucideProps) => <Earth {...props} />;
