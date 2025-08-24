import {
  UserCircle2,
  MoveRight,
  LucideIcon,
  LucideProps,
  Mail,
  Lock,
  IdCard,
  Unplug,
  ShieldCheck,
  Users,
  AtSign,
  LogOut,
  Trash2,
  Check,
  Info,
  TriangleAlert,
  CircleX,
  Eye,
  EyeOff,
} from "lucide-react";

type LucideReactIconProps = {
  size?: number;
  color?: string;
} & LucideProps;

const withLucideReactIcon = (Icon: LucideIcon) => {
  return (props: LucideReactIconProps) => {
    const { size = 30, color } = props;
    return <Icon size={size} color={color} />;
  };
};

export const IconUser = withLucideReactIcon(UserCircle2);
export const IconArrowRight = withLucideReactIcon(MoveRight);
export const IconMail = withLucideReactIcon(Mail);
export const IconLock = withLucideReactIcon(Lock);
export const IconIdCard = withLucideReactIcon(IdCard);
export const IconConnect = withLucideReactIcon(Unplug);
export const IconSecurity = withLucideReactIcon(ShieldCheck);
export const IconUsers = withLucideReactIcon(Users);
export const IconAtSign = withLucideReactIcon(AtSign);
export const IconLogOut = withLucideReactIcon(LogOut);
export const IconTrash = withLucideReactIcon(Trash2);
export const IconCheck = withLucideReactIcon(Check);
export const IconInfo = withLucideReactIcon(Info);
export const IconWarn = withLucideReactIcon(TriangleAlert);
export const IconAlert = withLucideReactIcon(CircleX);
export const IconEye = withLucideReactIcon(Eye);
export const IconEyeOff = withLucideReactIcon(EyeOff);
