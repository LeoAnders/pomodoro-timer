import { tv } from "tailwind-variants";

const button = tv({
  base: "font-medium rounded-full active:opacity-80 transition-colors",
  variants: {
    color: {
      primary: "bg-blue-500 text-white hover:bg-blue-600",
      secondary: "bg-purple-500 text-white hover:bg-purple-600",
    },
    size: {
      sm: "px-3 py-1 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-5 py-3 text-lg",
    },
  },
  defaultVariants: {
    size: "md",
    color: "primary",
  },
});

export type ButtonProps = React.ComponentProps<"button"> & {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
};

export default function Button({
  children,
  variant,
  size,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={button({ color: variant, size, class: className })}
      {...props}
    >
      {children}
    </button>
  );
}
