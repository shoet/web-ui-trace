import clsx from "clsx";
import { PrimaryButton } from "../Button";
import { Navigation } from "../Navigation";
import { Profile } from "../Profile";
import { Logo } from "../Logo";

export const MenuLeft = () => {
  return (
    <div className={clsx("flex flex-col justify-between items-center h-full")}>
      <div className={clsx("flex flex-col items-center w-full gap-6")}>
        <Logo />
        <Navigation />
        <PrimaryButton
          text="ポストする"
          className={clsx("mt-[30px] py-4 w-full")}
        />
      </div>
      <Profile className={clsx("mt-[60px]")} />
    </div>
  );
};
