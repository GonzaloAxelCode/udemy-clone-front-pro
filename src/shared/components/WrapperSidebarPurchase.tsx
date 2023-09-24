import { cn } from "tailwind-cn";

const WrapperSidebarPurchase = ({ children, scrollY }: any) => {
  if (scrollY >= 300) {
    return <div className={cn("top-0 right-0 fixed z-40")}>{children}</div>;
  } else {
    return <div className={cn("top-0 right-0")}>{children}</div>;
  }
};

export default WrapperSidebarPurchase;
