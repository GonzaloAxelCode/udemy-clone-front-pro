import Link from "next/link";
import React from "react";
import { cn } from "tailwind-cn";

type ButtonProps = {
  children: any;
  variant: "primary" | "secondary" | "purple";
  size?: "sm" | "md" | "xl";
  type?: "button" | "submit" | "reset";
  extendClass?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  type = "button",
  extendClass = "",
  ...args
}) => {
  return (
    <button
      type={type}
      style={{
        border:
          variant === "primary" ? "1px solid #000" : "1px solid transparent",
      }}
      className={cn(
        "font-bold text-sm h-[40px] px-3 min-w-[80px]",
        variant === "primary" &&
          "bg-transparent text-gray-500 border-gray-500 hover:bg-gray-100",
        variant === "secondary" &&
          "bg-gray-500 active:ring-gray-500 text-white hover:bg-gray-400",
        variant === "purple" &&
          "bg-purple-300 active:ring-purple-300 text-white hover:bg-purple-400",
        extendClass
      )}
      {...args}
    >
      <Link href="#" className="$">
        {children}
      </Link>
    </button>
  );
};

export default Button;
