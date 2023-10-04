import React from "react";
import { cn } from "tailwind-cn";

type ButtonProps = {
  children: any;
  variant: "primary" | "secondary" | "purple" | "white" | "invert-primary";
  size?: "xs" | "sm" | "md" | "xl";
  type?: "button" | "submit" | "reset";
  extendClass?: string;
  onClick?: any;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "sm",
  type = "button",
  extendClass = "",
  onClick,
  ...args
}) => {
  let smStyle = "font-sm text-sm px-2 h-[40px]";
  let xsStyle = "font-sm text-sm px-2 h-34px]";
  let mdStyle = "h-[48px] px-3  text-md";
  let xlStyle = " h-[48px] text-xl";
  const borderClasses = cn({
    border: true,
    "border-black": variant === "primary",
    "border-white": variant === "invert-primary",
    "border-transparent": !(
      variant === "primary" || variant === "invert-primary"
    ),
  });
  return (
    <button
      onClick={onClick}
      type={type}
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
        variant === "invert-primary" && "bg-transparent",
        size === "md" && mdStyle,
        size === "sm" && smStyle,
        size === "xl" && xlStyle,
        size === "xs" && xsStyle,
        borderClasses,
        extendClass
      )}
      {...args}
    >
      {children}
    </button>
  );
};

export default Button;
