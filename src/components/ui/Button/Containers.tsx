import Link from "next/link";
import { type ComponentProps, forwardRef } from "react";
import { cn } from "~/lib/utils";

type CommonProps = {
  variant?: "filled" | "outline";
  color?: "primary" | "secondary" | "tertiary";
  size?: "md" | "lg";
};

type LinkProps = CommonProps & React.ComponentProps<typeof Link>;

const variants = ({
  size = "lg",
  variant = "filled",
  color = "primary",
}: CommonProps) =>
  cn(
    "rounded-xl px-4 text-center text-base-100 transition-colors",
    {
      "border border-base-400 bg-base-600 hover:bg-base-400":
        variant === "filled" && color === "primary",
      "bg-primary-500 hover:bg-primary-400":
        variant === "filled" && color === "secondary",
      "bg-base-500": variant === "filled" && color === "tertiary",
    },
    {
      "border border-base-200 bg-base-100 text-base-500":
        variant === "outline" && color === "primary",
      "bg-transparent border border-primary-500 text-base-200":
        variant === "outline" && color === "secondary",
      "bg-transparent border border-base-500":
        variant === "outline" && color === "tertiary",
    },
    {
      "py-2": size === "md",
      "py-3": size === "lg",
    },
  );

const LinkButton = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    { className, variant = "filled", size = "lg", color = "primary", ...rest },
    ref,
  ) => {
    return (
      <Link
        {...rest}
        ref={ref}
        className={cn(variants({ size, variant, color }), className)}
      />
    );
  },
);

LinkButton.displayName = "LinkButton";

type ButtonProps = CommonProps & ComponentProps<"button">;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...rest }, ref) => {
    return (
      <button {...rest} ref={ref} className={cn(variants(rest), className)} />
    );
  },
);

Button.displayName = "Button";

export { LinkButton, Button };
