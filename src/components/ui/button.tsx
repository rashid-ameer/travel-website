import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full text-base xl:text-lg font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-100 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        primary: "bg-green-100 hover:bg-green-200 text-white",
        secondary: "bg-gray-700 hover:bg-dark text-white",
        accent: "bg-white hover:bg-gray-100 text-green-100",
        accentInvert: "text-white bg-gray-600 hover:bg-gray-700 border border-white",
        link: "text-dark",
      },
      size: {
        default: "h-12 px-8 py-2",
        icon: "size-12",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
