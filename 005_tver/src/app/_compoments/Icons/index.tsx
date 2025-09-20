import {
  Home,
  LucideProps,
  User,
  Search,
  Tv,
  LayoutGrid,
  X,
  EllipsisVertical,
  Dot,
  ChevronRight,
} from "lucide-react";

export const IconHome = (props: LucideProps) => {
  return <Home {...props} />;
};
export const IconUser = (props: LucideProps) => {
  return <User {...props} />;
};
export const IconSearch = (props: LucideProps) => {
  return <Search {...props} />;
};
export const IconTV = (props: LucideProps) => {
  return <Tv {...props} />;
};
export const IconGrid = (props: LucideProps) => {
  return <LayoutGrid {...props} />;
};
export const IconX = (props: LucideProps) => {
  return <X {...props} />;
};
export const IconMenuVertical = (props: LucideProps) => {
  return <EllipsisVertical {...props} />;
};
export const IconDot = (props: LucideProps) => {
  return <Dot {...props} />;
};
export const IconArrowRight = (props: LucideProps) => {
  return <ChevronRight {...props} />;
};
