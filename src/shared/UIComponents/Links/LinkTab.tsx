import { cn } from "tailwind-cn";

const LinkTab = ({ activeTab, text, ...args }: any) => {
  return (
    <button
      className={cn(
        "text-base font-bold px-4 text-tabdisable py-3 border-b-2 border-white",
        activeTab ? "active" : " border-dark-100 text-dark-100"
      )}
      {...args}
    >
      {text}
    </button>
  );
};

export default LinkTab;
