import { cn } from "tailwind-cn";

const Acordeon = ({
  title,
  children,
  isOpen,
  toggle,
  classNameHeader = " ",
  headerComponent = <></>,
  ...args
}: any) => {
  return (
    <div {...args}>
      <div className={cn("", classNameHeader)} onClick={toggle}>
        {headerComponent}
      </div>

      {isOpen && <div>{children}</div>}
    </div>
  );
};

export default Acordeon;
