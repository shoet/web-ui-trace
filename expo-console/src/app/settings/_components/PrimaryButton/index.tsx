import clsx from "clsx";
import { ComponentProps, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "danger";

type Props = {
  variant?: ButtonVariant;
  text: string;
  icon?: ReactNode;
} & ComponentProps<"button">;

const VariantsStyle: Record<ButtonVariant, string> = {
  primary: "text-white bg-sky-800 hover:bg-sky-900 disabled:bg-sky-950",
  secondary: "border border-gray-500 bg-gray-800 text-white hover:bg-gray-700",
  danger: "border border-red-500 bg-red-950 text-red-500 hover:bg-red-900",
};

export const Button = (props: Props) => {
  const { variant = "primary", text, icon, ...rest } = props;

  return (
    <button
      className={clsx(
        "flex flex-row items-center justify-center gap-2 px-4 py-2 ",
        "rounded-md cursor-pointer disabled:cursor-default",
        VariantsStyle[variant],
      )}
      {...rest}
    >
      <div>{text}</div>
      {icon && icon}
    </button>
  );
};

export const PrimaryButton = (props: Omit<Props, "variant">) => (
  <Button variant="primary" {...props} />
);

export const SecondaryButton = (props: Omit<Props, "variant">) => (
  <Button variant="secondary" {...props} />
);

export const DangerButton = (props: Omit<Props, "variant">) => (
  <Button variant="danger" {...props} />
);
