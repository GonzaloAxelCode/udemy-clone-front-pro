import { cn } from "tailwind-cn";

const Title = ({
  children,
  className = "",
}: {
  className?: string;
  children: string | any;
  size?: string;
}) => {
  return <h1 className={cn("text-4xl font-bold ", className)}>{children}</h1>;
};

export default Title;
