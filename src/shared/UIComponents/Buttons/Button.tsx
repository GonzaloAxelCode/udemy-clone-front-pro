import Link from "next/link";
import React from "react";
import { cn } from "tailwind-cn";

type ButtonProps = {
  children: any;
  variant: "primary" | "secondary" | "purple" | "white";
  size?: "sm" | "md" | "xl";
  type?: "button" | "submit" | "reset";
  extendClass?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "sm",
  type = "button",
  extendClass = "",
  ...args
}) => {
  let smStyle = "font-sm text-sm px-2 h-[40px]";
  let mdStyle = "h-[48px] px-3  text-md";
  let xlStyle = " h-[48px] text-xl";

  return (
    <button
      type={type}
      style={{
        border:
          variant === "primary" ? "1px solid #000" : "1px solid transparent",
      }}
      className={cn(
        " font-bold text-sm",
        variant === "primary" &&
          "bg-transparent text-gray-500 border-gray-500 hover:bg-gray-100",
        variant === "secondary" &&
          "bg-gray-500 active:ring-gray-500 text-white hover:bg-gray-400",
        variant === "purple" &&
        "bg-purple-300 active:ring-purple-300 text-white hover:bg-purple-400",
        variant === "white" &&
          "bg-white active:ring-white text-dark-100 hover:bg-graywhite",
        size === "md" && mdStyle,
        size === "sm" && smStyle,
        size === "xl" && xlStyle,
        extendClass
      )}
      {...args}
    >
      <Link href="#" className="m-0">
        {children}
      </Link>
    </button>
  );
};

export default Button;
