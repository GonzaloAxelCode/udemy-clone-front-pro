import { cn } from "tailwind-cn";

const P = ({
  className = "",
  children,
  bold = false,
  center = false,
  xs = false,
  sm = false,
  base = false,
  lg = false,
  md = false,
  xl = false,
  style = {},
  ...args
}: {
  className?: string;
  children: any;
  center?: boolean;
  bold?: boolean;
  xs?: boolean;
  sm?: boolean;
  base?: boolean;
  lg?: boolean;
  md?: boolean;
  xl?: boolean;
  style?: any;
}) => {
  return (
    <p
      className={cn(
        "m-0 p-0 leading-[1.4rem] tracking-tight",
        base && "text-base",
        bold && "font-bold",
        center && "text-center",
        xs && "text-xs",
        sm && "text-sm",
        md && "text-base",
        lg && "text-lg",
        xl && "text-xl",
        className
      )}
      style={style}
      {...args}
    >
      {children}
    </p>
  );
};

export default P;
