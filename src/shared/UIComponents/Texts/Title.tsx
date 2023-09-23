import { cn } from "tailwind-cn";

const Title = ({
  children,
  className = "",
  size = "md",
}: {
  className?: string;
  children: string;
  size?: string;
}) => {
  return <h1 className={cn("text-4xl font-bold ", className)}>{children}</h1>;
};

export default Title;
